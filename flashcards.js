// SBR-Quiz – Karteikarten-Lernmodus-Logik
(function () {
  "use strict";

  var STORAGE_KEY = "sbrFlashcardStats_v1";
  var ALL_CARDS = window.FLASHCARDS || [];
  var shuffle = window.shuffle;
  var el = window.el;
  function chapterList() { return window.chapterListOf(ALL_CARDS); }

  // ---------------------------------------------------------------------
  // localStorage helpers (eigener Namespace, unabhängig vom Quiz)
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

  function recordAnswer(cardId, knewIt) {
    var stats = loadStats();
    if (!stats[cardId]) stats[cardId] = { correct: 0, wrong: 0 };
    if (knewIt) stats[cardId].correct++;
    else stats[cardId].wrong++;
    saveStats(stats);
  }

  function getWeakCards(limit) {
    var stats = loadStats();
    var scored = [];
    ALL_CARDS.forEach(function (c) {
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
    cardCount: "20",
    deck: [],
    currentIndex: 0,
    knownCount: 0,
    revealed: false,
    sessionAgain: [] // Karten, die als "Nochmal" markiert wurden
  };

  // ---------------------------------------------------------------------
  // Start screen rendering
  // ---------------------------------------------------------------------
  function renderChapterGroups() {
    var container = el("fc-chapter-groups");
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
        var count = ALL_CARDS.filter(function (card) { return card.chapter === c.chapter; }).length;
        var row = document.createElement("div");
        row.className = "chapter-item";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "fc-chk-" + c.chapter;
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
        countSpan.textContent = count + " Ka.";

        row.appendChild(checkbox);
        row.appendChild(label);
        row.appendChild(countSpan);
        groupWrap.appendChild(row);
      });

      container.appendChild(groupWrap);
    });
  }

  function renderCountOptions() {
    var container = el("fc-count-options");
    container.innerHTML = "";
    var options = [
      { value: "10", label: "10" },
      { value: "20", label: "20" },
      { value: "50", label: "50" },
      { value: "all", label: "Alle" }
    ];
    options.forEach(function (opt) {
      var pill = document.createElement("div");
      pill.className = "pill" + (state.cardCount === opt.value ? " active" : "");
      pill.textContent = opt.label;
      pill.addEventListener("click", function () {
        state.cardCount = opt.value;
        renderCountOptions();
      });
      container.appendChild(pill);
    });
  }

  function getFilteredCards() {
    return ALL_CARDS.filter(function (c) { return state.selectedChapters.has(c.chapter); });
  }

  function updateAvailableCount() {
    var n = getFilteredCards().length;
    el("fc-available-count").textContent = n;
    el("fc-btn-start").disabled = n === 0;
  }

  function renderStatsSummary() {
    var stats = loadStats();
    var totalAttempts = 0, totalKnown = 0;
    Object.keys(stats).forEach(function (id) {
      totalAttempts += stats[id].correct + stats[id].wrong;
      totalKnown += stats[id].correct;
    });

    var container = el("fc-stats-summary");
    container.innerHTML = "";

    if (totalAttempts === 0) {
      var p = document.createElement("p");
      p.className = "hint";
      p.textContent = "Noch keine Statistik vorhanden – starte eine Karteikarten-Runde!";
      container.appendChild(p);
    } else {
      var pct = Math.round((totalKnown / totalAttempts) * 100);
      addStatsRow(container, "Bewertete Karten (gesamt)", String(totalAttempts));
      addStatsRow(container, "Davon \"Kann ich\"", totalKnown + " (" + pct + " %)");
      addStatsRow(container, "Unterschiedliche geübte Karten", String(Object.keys(stats).length));
    }

    var weak = getWeakCards(20);
    var weakBtn = el("fc-btn-weak");
    var weakHint = el("fc-weak-hint");
    if (weak.length > 0) {
      weakBtn.disabled = false;
      weakHint.textContent = weak.length + " Karte(n) mit häufigem \"Nochmal\" verfügbar.";
    } else {
      weakBtn.disabled = true;
      weakHint.textContent = "Bewerte erst ein paar Karten, damit diese Funktion Daten hat.";
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
  // Screen switching (innerhalb des Karteikarten-Modus)
  // ---------------------------------------------------------------------
  function showFcScreen(name) {
    ["fc-start", "fc-card", "fc-result"].forEach(function (s) {
      el("screen-" + s).classList.toggle("hidden", s !== name);
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  // ---------------------------------------------------------------------
  // Flow
  // ---------------------------------------------------------------------
  function startSession(cardPool) {
    var pool = shuffle(cardPool);
    if (state.cardCount !== "all") {
      var n = parseInt(state.cardCount, 10);
      pool = pool.slice(0, n);
    }
    state.deck = pool;
    state.currentIndex = 0;
    state.knownCount = 0;
    state.sessionAgain = [];
    showFcScreen("fc-card");
    renderCard();
  }

  function renderCard() {
    var total = state.deck.length;
    var idx = state.currentIndex;
    var card = state.deck[idx];

    el("fc-progress-label").textContent = "Karte " + (idx + 1) + " von " + total;
    el("fc-known-label").textContent = "Kann ich: " + state.knownCount;
    el("fc-progress-bar").style.width = Math.round((idx / total) * 100) + "%";

    el("fc-chapter-tag").textContent = card.chapter;
    el("fc-front-text").textContent = card.front;
    el("fc-back-text").textContent = card.back;

    state.revealed = false;
    el("fc-back-wrap").classList.add("hidden");
    el("fc-btn-reveal").classList.remove("hidden");
    el("fc-rate-buttons").classList.add("hidden");
  }

  function revealCard() {
    state.revealed = true;
    el("fc-back-wrap").classList.remove("hidden");
    el("fc-btn-reveal").classList.add("hidden");
    el("fc-rate-buttons").classList.remove("hidden");
  }

  function rateCard(knewIt) {
    var card = state.deck[state.currentIndex];
    recordAnswer(card.id, knewIt);
    if (knewIt) {
      state.knownCount++;
    } else {
      state.sessionAgain.push(card);
    }
    el("fc-known-label").textContent = "Kann ich: " + state.knownCount;

    if (state.currentIndex < state.deck.length - 1) {
      state.currentIndex++;
      renderCard();
    } else {
      finishSession();
    }
  }

  function finishSession() {
    var total = state.deck.length;
    el("fc-progress-bar").style.width = "100%";

    var pct = total > 0 ? Math.round((state.knownCount / total) * 100) : 0;
    el("fc-result-score").textContent = state.knownCount + " von " + total + " als \"Kann ich\" markiert (" + pct + " %)";
    el("fc-result-bar").style.width = pct + "%";

    var againList = el("fc-again-list");
    againList.innerHTML = "";
    var noAgain = el("fc-no-again");

    if (state.sessionAgain.length === 0) {
      noAgain.classList.remove("hidden");
    } else {
      noAgain.classList.add("hidden");
      state.sessionAgain.forEach(function (card) {
        var item = document.createElement("div");
        item.className = "wrong-item";

        var tag = document.createElement("p");
        tag.className = "chapter-tag";
        tag.textContent = card.chapter;

        var front = document.createElement("p");
        front.className = "q";
        front.textContent = card.front;

        var back = document.createElement("p");
        back.className = "a-correct";
        back.textContent = "→ " + card.back;

        item.appendChild(tag);
        item.appendChild(front);
        item.appendChild(back);
        againList.appendChild(item);
      });
    }

    el("fc-btn-retry-again").disabled = state.sessionAgain.length === 0;
    showFcScreen("fc-result");
  }

  function backToFcStart() {
    renderStatsSummary();
    updateAvailableCount();
    showFcScreen("fc-start");
  }

  // ---------------------------------------------------------------------
  // Event wiring
  // ---------------------------------------------------------------------
  function init() {
    if (ALL_CARDS.length === 0) return;

    renderChapterGroups();
    renderCountOptions();
    updateAvailableCount();
    renderStatsSummary();

    el("fc-btn-select-all").addEventListener("click", function () {
      state.selectedChapters = new Set(chapterList().map(function (c) { return c.chapter; }));
      renderChapterGroups();
      updateAvailableCount();
    });

    el("fc-btn-select-none").addEventListener("click", function () {
      state.selectedChapters = new Set();
      renderChapterGroups();
      updateAvailableCount();
    });

    el("fc-btn-start").addEventListener("click", function () {
      var pool = getFilteredCards();
      if (pool.length === 0) return;
      startSession(pool);
    });

    el("fc-btn-weak").addEventListener("click", function () {
      var weak = getWeakCards(30);
      if (weak.length === 0) return;
      startSession(weak);
    });

    el("fc-btn-reset-stats").addEventListener("click", function () {
      if (window.confirm("Gespeicherte Karteikarten-Statistik wirklich löschen?")) {
        saveStats({});
        renderStatsSummary();
      }
    });

    el("fc-btn-reveal").addEventListener("click", revealCard);
    el("fc-btn-again").addEventListener("click", function () { rateCard(false); });
    el("fc-btn-known").addEventListener("click", function () { rateCard(true); });

    el("fc-btn-quit").addEventListener("click", function () {
      if (window.confirm("Karteikarten-Runde wirklich abbrechen? Der Fortschritt dieser Runde geht verloren.")) {
        backToFcStart();
      }
    });

    el("fc-btn-restart").addEventListener("click", backToFcStart);

    el("fc-btn-retry-again").addEventListener("click", function () {
      var pool = state.sessionAgain.slice();
      if (pool.length === 0) return;
      state.cardCount = "all";
      startSession(pool);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
