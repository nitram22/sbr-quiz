// SBR-Quiz – Fallbeispiel-Modus-Logik (3-Schritte-Falllösung)
(function () {
  "use strict";

  var STORAGE_KEY = "sbrFallStats_v1";
  var ALL_CASES = window.FALLBEISPIELE || [];
  var shuffle = window.shuffle;
  var el = window.el;
  function chapterList() { return window.chapterListOf(ALL_CASES); }

  // ---------------------------------------------------------------------
  // localStorage helpers (eigener Namespace, unabhängig von Quiz/Karteikarten)
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

  function recordAnswer(caseId, understood) {
    var stats = loadStats();
    if (!stats[caseId]) stats[caseId] = { correct: 0, wrong: 0 };
    if (understood) stats[caseId].correct++;
    else stats[caseId].wrong++;
    saveStats(stats);
  }

  function getWeakCases(limit) {
    var stats = loadStats();
    var scored = [];
    ALL_CASES.forEach(function (c) {
      var s = stats[c.id];
      if (!s) return;
      var attempts = s.correct + s.wrong;
      if (attempts === 0) return;
      var wrongRatio = s.wrong / attempts;
      if (wrongRatio > 0) {
        scored.push({ c: c, wrongRatio: wrongRatio, attempts: attempts });
      }
    });
    scored.sort(function (a, b) {
      return b.wrongRatio - a.wrongRatio || b.attempts - a.attempts;
    });
    return scored.slice(0, limit || 20).map(function (s) { return s.c; });
  }

  // ---------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------
  var state = {
    selectedChapters: new Set(chapterList().map(function (c) { return c.chapter; })),
    caseCount: "all",
    deck: [],
    currentIndex: 0,
    currentStep: 0,
    revealed: false,
    knownCount: 0,
    sessionAgain: [] // Fälle, die als "Nochmal" markiert wurden
  };

  // ---------------------------------------------------------------------
  // Start screen rendering
  // ---------------------------------------------------------------------
  function renderChapterGroups() {
    var container = el("fall-chapter-groups");
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
        var count = ALL_CASES.filter(function (item) { return item.chapter === c.chapter; }).length;
        var row = document.createElement("div");
        row.className = "chapter-item";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "fall-chk-" + c.chapter;
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
        countSpan.textContent = count + " Fa.";

        row.appendChild(checkbox);
        row.appendChild(label);
        row.appendChild(countSpan);
        groupWrap.appendChild(row);
      });

      container.appendChild(groupWrap);
    });
  }

  function renderCountOptions() {
    var container = el("fall-count-options");
    container.innerHTML = "";
    var options = [
      { value: "5", label: "5" },
      { value: "10", label: "10" },
      { value: "all", label: "Alle" }
    ];
    options.forEach(function (opt) {
      var pill = document.createElement("div");
      pill.className = "pill" + (state.caseCount === opt.value ? " active" : "");
      pill.textContent = opt.label;
      pill.addEventListener("click", function () {
        state.caseCount = opt.value;
        renderCountOptions();
      });
      container.appendChild(pill);
    });
  }

  function getFilteredCases() {
    return ALL_CASES.filter(function (c) { return state.selectedChapters.has(c.chapter); });
  }

  function updateAvailableCount() {
    var n = getFilteredCases().length;
    el("fall-available-count").textContent = n;
    el("fall-btn-start").disabled = n === 0;
  }

  function renderStatsSummary() {
    var stats = loadStats();
    var totalAttempts = 0, totalKnown = 0;
    Object.keys(stats).forEach(function (id) {
      totalAttempts += stats[id].correct + stats[id].wrong;
      totalKnown += stats[id].correct;
    });

    var container = el("fall-stats-summary");
    container.innerHTML = "";

    if (totalAttempts === 0) {
      var p = document.createElement("p");
      p.className = "hint";
      p.textContent = "Noch keine Statistik vorhanden – starte eine Fallbeispiel-Runde!";
      container.appendChild(p);
    } else {
      var pct = Math.round((totalKnown / totalAttempts) * 100);
      addStatsRow(container, "Bewertete Fälle (gesamt)", String(totalAttempts));
      addStatsRow(container, "Davon \"Verstanden\"", totalKnown + " (" + pct + " %)");
      addStatsRow(container, "Unterschiedliche geübte Fälle", String(Object.keys(stats).length));
    }

    var weak = getWeakCases(20);
    var weakBtn = el("fall-btn-weak");
    var weakHint = el("fall-weak-hint");
    if (weak.length > 0) {
      weakBtn.disabled = false;
      weakHint.textContent = weak.length + " Fall/Fälle mit häufigem \"Nochmal\" verfügbar.";
    } else {
      weakBtn.disabled = true;
      weakHint.textContent = "Bewerte erst ein paar Fälle, damit diese Funktion Daten hat.";
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
  // Screen switching (innerhalb des Fallbeispiel-Modus)
  // ---------------------------------------------------------------------
  function showFallScreen(name) {
    ["fall-start", "fall-case", "fall-result"].forEach(function (s) {
      el("screen-" + s).classList.toggle("hidden", s !== name);
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  // ---------------------------------------------------------------------
  // Flow
  // ---------------------------------------------------------------------
  function startSession(casePool) {
    var pool = shuffle(casePool);
    if (state.caseCount !== "all") {
      var n = parseInt(state.caseCount, 10);
      pool = pool.slice(0, n);
    }
    state.deck = pool;
    state.currentIndex = 0;
    state.knownCount = 0;
    state.sessionAgain = [];
    showFallScreen("fall-case");
    renderCase();
  }

  function renderCase() {
    var total = state.deck.length;
    var idx = state.currentIndex;
    var item = state.deck[idx];

    el("fall-progress-label").textContent = "Fall " + (idx + 1) + " von " + total;
    el("fall-known-label").textContent = "Verstanden: " + state.knownCount;
    el("fall-progress-bar").style.width = Math.round((idx / total) * 100) + "%";

    el("fall-chapter-tag").textContent = item.chapter;
    el("fall-title-text").textContent = item.title;
    el("fall-sachverhalt-text").textContent = item.sachverhalt;

    state.currentStep = 0;
    renderStep();
  }

  function renderStep() {
    var item = state.deck[state.currentIndex];
    var step = item.schritte[state.currentStep];
    var totalSteps = item.schritte.length;

    el("fall-step-progress").textContent = "Schritt " + (state.currentStep + 1) + " von " + totalSteps;
    el("fall-step-label").textContent = step.label;
    el("fall-step-frage").textContent = step.frage;
    el("fall-step-loesung-text").textContent = step.loesung;

    var quelleEl = el("fall-quelle-text");
    if (state.currentStep === totalSteps - 1 && item.quelle) {
      quelleEl.textContent = "Quelle: " + item.quelle;
      quelleEl.classList.remove("hidden");
    } else {
      quelleEl.classList.add("hidden");
    }

    state.revealed = false;
    el("fall-notes").value = "";
    el("fall-notes").classList.remove("hidden");
    el("fall-step-loesung-wrap").classList.add("hidden");
    el("fall-btn-reveal").classList.remove("hidden");
    el("fall-btn-continue").classList.add("hidden");
    el("fall-rate-buttons").classList.add("hidden");
  }

  function revealStep() {
    state.revealed = true;
    el("fall-notes").classList.add("hidden");
    el("fall-step-loesung-wrap").classList.remove("hidden");
    el("fall-btn-reveal").classList.add("hidden");

    var item = state.deck[state.currentIndex];
    var isLastStep = state.currentStep === item.schritte.length - 1;
    if (isLastStep) {
      el("fall-rate-buttons").classList.remove("hidden");
    } else {
      el("fall-btn-continue").classList.remove("hidden");
    }
  }

  function continueToNextStep() {
    state.currentStep++;
    renderStep();
  }

  function rateCase(understood) {
    var item = state.deck[state.currentIndex];
    recordAnswer(item.id, understood);
    if (understood) {
      state.knownCount++;
    } else {
      state.sessionAgain.push(item);
    }
    el("fall-known-label").textContent = "Verstanden: " + state.knownCount;

    if (state.currentIndex < state.deck.length - 1) {
      state.currentIndex++;
      renderCase();
    } else {
      finishSession();
    }
  }

  function finishSession() {
    var total = state.deck.length;
    el("fall-progress-bar").style.width = "100%";

    var pct = total > 0 ? Math.round((state.knownCount / total) * 100) : 0;
    el("fall-result-score").textContent = state.knownCount + " von " + total + " Fällen verstanden (" + pct + " %)";
    el("fall-result-bar").style.width = pct + "%";

    var againList = el("fall-again-list");
    againList.innerHTML = "";
    var noAgain = el("fall-no-again");

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

        var title = document.createElement("p");
        title.className = "q";
        title.textContent = item.title;

        var sachverhalt = document.createElement("p");
        sachverhalt.className = "exp";
        sachverhalt.textContent = item.sachverhalt;

        wrap.appendChild(tag);
        wrap.appendChild(title);
        wrap.appendChild(sachverhalt);
        againList.appendChild(wrap);
      });
    }

    el("fall-btn-retry-again").disabled = state.sessionAgain.length === 0;
    showFallScreen("fall-result");
  }

  function backToFallStart() {
    renderStatsSummary();
    updateAvailableCount();
    showFallScreen("fall-start");
  }

  // ---------------------------------------------------------------------
  // Event wiring
  // ---------------------------------------------------------------------
  function init() {
    if (ALL_CASES.length === 0) return;

    renderChapterGroups();
    renderCountOptions();
    updateAvailableCount();
    renderStatsSummary();

    el("fall-btn-select-all").addEventListener("click", function () {
      state.selectedChapters = new Set(chapterList().map(function (c) { return c.chapter; }));
      renderChapterGroups();
      updateAvailableCount();
    });

    el("fall-btn-select-none").addEventListener("click", function () {
      state.selectedChapters = new Set();
      renderChapterGroups();
      updateAvailableCount();
    });

    el("fall-btn-start").addEventListener("click", function () {
      var pool = getFilteredCases();
      if (pool.length === 0) return;
      startSession(pool);
    });

    el("fall-btn-weak").addEventListener("click", function () {
      var weak = getWeakCases(30);
      if (weak.length === 0) return;
      startSession(weak);
    });

    el("fall-btn-reset-stats").addEventListener("click", function () {
      if (window.confirm("Gespeicherte Fallbeispiel-Statistik wirklich löschen?")) {
        saveStats({});
        renderStatsSummary();
      }
    });

    el("fall-btn-reveal").addEventListener("click", revealStep);
    el("fall-btn-continue").addEventListener("click", continueToNextStep);
    el("fall-btn-again").addEventListener("click", function () { rateCase(false); });
    el("fall-btn-known").addEventListener("click", function () { rateCase(true); });

    el("fall-btn-quit").addEventListener("click", function () {
      if (window.confirm("Fallbeispiel-Runde wirklich abbrechen? Der Fortschritt dieser Runde geht verloren.")) {
        backToFallStart();
      }
    });

    el("fall-btn-restart").addEventListener("click", backToFallStart);

    el("fall-btn-retry-again").addEventListener("click", function () {
      var pool = state.sessionAgain.slice();
      if (pool.length === 0) return;
      state.caseCount = "all";
      startSession(pool);
    });
  }

  window.refreshCaseStats = renderStatsSummary;

  document.addEventListener("DOMContentLoaded", init);
})();
