// SBR-Quiz – Modus-Logik "Mündliche Prüfung"
(function () {
  "use strict";

  var STORAGE_KEY = "sbrOralStats_v1";
  var ALL_TOPICS = window.ORAL_TOPICS || [];
  var shuffle = window.shuffle;
  var el = window.el;
  function chapterList() { return window.chapterListOf(ALL_TOPICS); }

  // ---------------------------------------------------------------------
  // localStorage helpers (eigener Namespace)
  // ---------------------------------------------------------------------
  function loadStats() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveStats(stats) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      /* ignore */
    }
  }

  var MASTERY_STREAK = 3; // so oft in Folge "Lief gut", bis ein Thema als gemeistert gilt

  function recordAnswer(topicId, wentWell) {
    var stats = loadStats();
    if (!stats[topicId]) stats[topicId] = { correct: 0, wrong: 0, streak: 0 };
    var s = stats[topicId];
    if (wentWell) {
      s.correct++;
      s.streak = (s.streak || 0) + 1;
    } else {
      s.wrong++;
      s.streak = 0;
    }
    saveStats(stats);
  }

  function getWeakTopics(limit) {
    var stats = loadStats();
    var scored = [];
    ALL_TOPICS.forEach(function (t) {
      var s = stats[t.id];
      if (!s) return;
      var attempts = s.correct + s.wrong;
      if (attempts === 0 || s.wrong === 0) return;
      if ((s.streak || 0) >= MASTERY_STREAK) return; // 3x in Folge lief gut -> gemeistert
      var wrongRatio = s.wrong / attempts;
      scored.push({ t: t, wrongRatio: wrongRatio, attempts: attempts });
    });
    scored.sort(function (a, b) {
      return b.wrongRatio - a.wrongRatio || b.attempts - a.attempts;
    });
    return scored.slice(0, limit || 20).map(function (s) { return s.t; });
  }

  // ---------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------
  var state = {
    selectedChapters: new Set(chapterList().map(function (c) { return c.chapter; })),
    topicCount: "10",
    deck: [],
    currentIndex: 0,
    knownCount: 0,
    sessionAgain: [],
    timerRunning: false,
    timerSeconds: 0,
    timerHandle: null
  };

  // ---------------------------------------------------------------------
  // Start screen rendering
  // ---------------------------------------------------------------------
  function renderChapterGroups() {
    var container = el("oral-chapter-groups");
    container.innerHTML = "";
    var chapters = chapterList();
    var parts = ["Schulrecht", "Beamtenrecht"];

    parts.forEach(function (part) {
      var groupChapters = chapters.filter(function (c) { return c.part === part; });
      if (groupChapters.length === 0) return;

      var groupTitle = document.createElement("div");
      groupTitle.className = "chapter-group-title";
      groupTitle.textContent = part;
      var groupWrap = document.createElement("div");
      groupWrap.className = "chapter-group";
      groupWrap.appendChild(groupTitle);

      groupChapters.forEach(function (c) {
        var count = ALL_TOPICS.filter(function (item) { return item.chapter === c.chapter; }).length;
        var row = document.createElement("div");
        row.className = "chapter-item";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "oral-chk-" + c.chapter;
        checkbox.checked = state.selectedChapters.has(c.chapter);
        checkbox.addEventListener("change", function () {
          if (checkbox.checked) state.selectedChapters.add(c.chapter);
          else state.selectedChapters.delete(c.chapter);
          updateAvailableCount();
        });

        var label = document.createElement("label");
        label.setAttribute("for", checkbox.id);
        label.textContent = c.chapter;

        var countSpan = document.createElement("span");
        countSpan.className = "count";
        countSpan.textContent = count + " Th.";

        row.appendChild(checkbox);
        row.appendChild(label);
        row.appendChild(countSpan);
        groupWrap.appendChild(row);
      });

      container.appendChild(groupWrap);
    });
  }

  function renderCountOptions() {
    var container = el("oral-count-options");
    container.innerHTML = "";
    var options = [
      { value: "5", label: "5" },
      { value: "10", label: "10" },
      { value: "all", label: "Alle" }
    ];
    options.forEach(function (opt) {
      var pill = document.createElement("div");
      pill.className = "pill" + (state.topicCount === opt.value ? " active" : "");
      pill.textContent = opt.label;
      pill.addEventListener("click", function () {
        state.topicCount = opt.value;
        renderCountOptions();
      });
      container.appendChild(pill);
    });
  }

  function getFilteredTopics() {
    return ALL_TOPICS.filter(function (t) { return state.selectedChapters.has(t.chapter); });
  }

  function updateAvailableCount() {
    var n = getFilteredTopics().length;
    el("oral-available-count").textContent = n;
    el("oral-btn-start").disabled = n === 0;
  }

  function renderStatsSummary() {
    var stats = loadStats();
    var totalAttempts = 0, totalKnown = 0;
    Object.keys(stats).forEach(function (id) {
      totalAttempts += stats[id].correct + stats[id].wrong;
      totalKnown += stats[id].correct;
    });

    var container = el("oral-stats-summary");
    container.innerHTML = "";

    if (totalAttempts === 0) {
      var p = document.createElement("p");
      p.className = "hint";
      p.textContent = "Noch keine Statistik vorhanden – starte eine Runde!";
      container.appendChild(p);
    } else {
      var pct = Math.round((totalKnown / totalAttempts) * 100);
      addStatsRow(container, "Bewertete Themen (gesamt)", String(totalAttempts));
      addStatsRow(container, "Davon \"Lief gut\"", totalKnown + " (" + pct + " %)");
      addStatsRow(container, "Unterschiedliche geübte Themen", String(Object.keys(stats).length));
    }

    var weak = getWeakTopics(20);
    var weakBtn = el("oral-btn-weak");
    var weakHint = el("oral-weak-hint");
    if (weak.length > 0) {
      weakBtn.disabled = false;
      weakHint.textContent = weak.length + " Thema/Themen mit häufigem \"Nochmal\" verfügbar.";
    } else {
      weakBtn.disabled = true;
      weakHint.textContent = "Bewerte erst ein paar Themen, damit diese Funktion Daten hat.";
    }
  }

  function addStatsRow(container, label, value) {
    var row = document.createElement("div");
    row.className = "stats-row";
    var l = document.createElement("span");
    l.className = "label";
    l.textContent = label;
    var v = document.createElement("span");
    v.textContent = value;
    row.appendChild(l);
    row.appendChild(v);
    container.appendChild(row);
  }

  // ---------------------------------------------------------------------
  // Screen switching
  // ---------------------------------------------------------------------
  function showOralScreen(name) {
    ["oral-start", "oral-topic", "oral-result"].forEach(function (s) {
      el("screen-" + s).classList.toggle("hidden", s !== name);
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  // ---------------------------------------------------------------------
  // Timer
  // ---------------------------------------------------------------------
  function formatTime(totalSeconds) {
    var m = Math.floor(totalSeconds / 60);
    var s = totalSeconds % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }

  function resetTimer() {
    stopTimer();
    state.timerSeconds = 0;
    el("oral-timer-display").textContent = "00:00";
    el("oral-btn-timer").textContent = "▶️ Antwortzeit starten";
  }

  function startTimer() {
    if (state.timerRunning) return;
    state.timerRunning = true;
    el("oral-btn-timer").textContent = "⏸ Antwortzeit stoppen";
    state.timerHandle = window.setInterval(function () {
      state.timerSeconds++;
      el("oral-timer-display").textContent = formatTime(state.timerSeconds);
    }, 1000);
  }

  function stopTimer() {
    if (state.timerHandle) {
      window.clearInterval(state.timerHandle);
      state.timerHandle = null;
    }
    if (state.timerRunning) {
      state.timerRunning = false;
      el("oral-btn-timer").textContent = "▶️ Antwortzeit starten";
    }
  }

  function toggleTimer() {
    if (state.timerRunning) stopTimer();
    else startTimer();
  }

  // ---------------------------------------------------------------------
  // Flow
  // ---------------------------------------------------------------------
  function startSession(topicPool) {
    var pool = shuffle(topicPool);
    if (state.topicCount !== "all") {
      var n = parseInt(state.topicCount, 10);
      pool = pool.slice(0, n);
    }
    state.deck = pool;
    state.currentIndex = 0;
    state.knownCount = 0;
    state.sessionAgain = [];
    showOralScreen("oral-topic");
    renderTopic();
  }

  function renderTopic() {
    var total = state.deck.length;
    var idx = state.currentIndex;
    var item = state.deck[idx];

    el("oral-progress-label").textContent = "Thema " + (idx + 1) + " von " + total;
    el("oral-known-label").textContent = "Lief gut: " + state.knownCount;
    el("oral-progress-bar").style.width = Math.round((idx / total) * 100) + "%";

    el("oral-chapter-tag").textContent = item.chapter;
    el("oral-frage-text").textContent = item.frage;

    resetTimer();

    el("oral-points-list").innerHTML = "";
    item.stichpunkte.forEach(function (point) {
      var li = document.createElement("li");
      li.textContent = point;
      el("oral-points-list").appendChild(li);
    });

    var followupList = el("oral-followup-list");
    followupList.innerHTML = "";
    (item.nachfragen || []).forEach(function (nf) {
      var wrap = document.createElement("div");
      wrap.className = "oral-followup-item";
      var q = document.createElement("p");
      q.className = "oral-followup-q";
      q.textContent = "❓ " + nf.frage;
      var a = document.createElement("p");
      a.className = "oral-followup-a";
      a.textContent = nf.antwort;
      wrap.appendChild(q);
      wrap.appendChild(a);
      followupList.appendChild(wrap);
    });

    el("oral-points-wrap").classList.add("hidden");
    el("oral-followup-wrap").classList.add("hidden");
    el("oral-btn-reveal-points").classList.remove("hidden");
  }

  function revealPoints() {
    stopTimer();
    el("oral-points-wrap").classList.remove("hidden");
    el("oral-btn-reveal-points").classList.add("hidden");
  }

  function revealFollowup() {
    el("oral-followup-wrap").classList.remove("hidden");
    el("oral-btn-reveal-followup").classList.add("hidden");
  }

  function rateTopic(wentWell) {
    var item = state.deck[state.currentIndex];
    recordAnswer(item.id, wentWell);
    if (wentWell) {
      state.knownCount++;
    } else {
      state.sessionAgain.push(item);
    }
    el("oral-known-label").textContent = "Lief gut: " + state.knownCount;

    if (state.currentIndex < state.deck.length - 1) {
      state.currentIndex++;
      renderTopic();
    } else {
      finishSession();
    }
  }

  function finishSession() {
    stopTimer();
    var total = state.deck.length;
    el("oral-progress-bar").style.width = "100%";

    var pct = total > 0 ? Math.round((state.knownCount / total) * 100) : 0;
    el("oral-result-score").textContent = state.knownCount + " von " + total + " Themen liefen gut (" + pct + " %)";
    el("oral-result-bar").style.width = pct + "%";

    var againList = el("oral-again-list");
    againList.innerHTML = "";
    var noAgain = el("oral-no-again");

    if (state.sessionAgain.length === 0) {
      noAgain.classList.remove("hidden");
    } else {
      noAgain.classList.add("hidden");
      state.sessionAgain.forEach(function (item) {
        var wrap = document.createElement("div");
        wrap.className = "wrong-item";

        var tag = document.createElement("p");
        tag.className = "chapter-tag";
        tag.textContent = item.chapter;

        var frage = document.createElement("p");
        frage.className = "q";
        frage.textContent = item.frage;

        wrap.appendChild(tag);
        wrap.appendChild(frage);
        againList.appendChild(wrap);
      });
    }

    el("oral-btn-retry-again").disabled = state.sessionAgain.length === 0;
    showOralScreen("oral-result");
  }

  function backToOralStart() {
    stopTimer();
    renderStatsSummary();
    updateAvailableCount();
    showOralScreen("oral-start");
  }

  // ---------------------------------------------------------------------
  // Event wiring
  // ---------------------------------------------------------------------
  function init() {
    if (ALL_TOPICS.length === 0) return;

    renderChapterGroups();
    renderCountOptions();
    updateAvailableCount();
    renderStatsSummary();

    el("oral-btn-select-all").addEventListener("click", function () {
      state.selectedChapters = new Set(chapterList().map(function (c) { return c.chapter; }));
      renderChapterGroups();
      updateAvailableCount();
    });

    el("oral-btn-select-none").addEventListener("click", function () {
      state.selectedChapters = new Set();
      renderChapterGroups();
      updateAvailableCount();
    });

    el("oral-btn-start").addEventListener("click", function () {
      var pool = getFilteredTopics();
      if (pool.length === 0) return;
      startSession(pool);
    });

    el("oral-btn-weak").addEventListener("click", function () {
      var weak = getWeakTopics(30);
      if (weak.length === 0) return;
      startSession(weak);
    });

    el("oral-btn-reset-stats").addEventListener("click", function () {
      if (window.confirm("Gespeicherte Statistik der mündlichen Prüfung wirklich löschen?")) {
        saveStats({});
        renderStatsSummary();
      }
    });

    el("oral-btn-timer").addEventListener("click", toggleTimer);
    el("oral-btn-reveal-points").addEventListener("click", revealPoints);
    el("oral-btn-reveal-followup").addEventListener("click", revealFollowup);
    el("oral-btn-again").addEventListener("click", function () { rateTopic(false); });
    el("oral-btn-known").addEventListener("click", function () { rateTopic(true); });

    el("oral-btn-quit").addEventListener("click", function () {
      if (window.confirm("Runde wirklich abbrechen? Der Fortschritt dieser Runde geht verloren.")) {
        backToOralStart();
      }
    });

    el("oral-btn-restart").addEventListener("click", backToOralStart);

    el("oral-btn-retry-again").addEventListener("click", function () {
      var pool = state.sessionAgain.slice();
      if (pool.length === 0) return;
      state.topicCount = "all";
      startSession(pool);
    });
  }

  window.refreshOralStats = renderStatsSummary;

  document.addEventListener("DOMContentLoaded", init);
})();
