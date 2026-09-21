// SBR-Quiz – Fortschritts-Dashboard auf der Startseite
// Aggregiert die separaten localStorage-Statistiken von Quiz, Karteikarten,
// Fallbeispielen und Mündlicher Prüfung zu einem Ampel-Überblick pro Kapitel.
(function () {
  "use strict";

  var MODES = [
    { key: "quiz", icon: "📝", storageKey: "sbrQuizStats_v1",
      dataArray: function () { return window.QUESTIONS || []; } },
    { key: "flashcards", icon: "🗂️", storageKey: "sbrFlashcardStats_v1",
      dataArray: function () { return window.FLASHCARDS || []; } },
    { key: "cases", icon: "⚖️", storageKey: "sbrFallStats_v1",
      dataArray: function () { return window.FALLBEISPIELE || []; } },
    { key: "oral", icon: "🎤", storageKey: "sbrOralStats_v1",
      dataArray: function () { return window.ORAL_TOPICS || []; } }
  ];

  function loadStats(key) {
    try {
      var raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  // Bewertet, wie gut ein Kapitel in einem Modus geübt ist: Abdeckung (wie viele
  // der Items wurden schon mind. einmal versucht) x Trefferquote.
  function computeMastery(items, stats) {
    if (items.length === 0) return { status: "unavailable" };

    var attempted = 0, totalCorrect = 0, totalAttempts = 0;
    items.forEach(function (it) {
      var s = stats[it.id];
      if (!s) return;
      var a = s.correct + s.wrong;
      if (a > 0) {
        attempted++;
        totalCorrect += s.correct;
        totalAttempts += a;
      }
    });

    if (attempted === 0) return { status: "new" };

    var coverage = attempted / items.length;
    var accuracy = totalCorrect / totalAttempts;
    var mastery = coverage * accuracy;
    var status = mastery < 0.4 ? "low" : (mastery < 0.75 ? "mid" : "high");
    return { status: status, coverage: coverage, accuracy: accuracy };
  }

  function statusTitle(modeKey, result) {
    if (result.status === "unavailable") return modeKey + ": keine Inhalte für dieses Kapitel";
    if (result.status === "new") return modeKey + ": noch nicht geübt";
    return modeKey + ": " + Math.round(result.coverage * 100) + "% geübt, "
      + Math.round(result.accuracy * 100) + "% richtig";
  }

  function renderDashboard() {
    var container = document.getElementById("dashboard-chapters");
    if (!container || !window.chapterListOf || !window.QUESTIONS) return;

    var chapters = window.chapterListOf(window.QUESTIONS);
    var statsCache = {};
    MODES.forEach(function (m) { statsCache[m.key] = loadStats(m.storageKey); });

    container.innerHTML = "";
    var startedChapters = 0;

    var parts = ["Schulrecht", "Beamtenrecht"];
    parts.forEach(function (part) {
      var groupChapters = chapters.filter(function (c) { return c.part === part; });
      if (groupChapters.length === 0) return;

      var groupTitle = document.createElement("div");
      groupTitle.className = "chapter-group-title";
      groupTitle.textContent = part;
      container.appendChild(groupTitle);

      groupChapters.forEach(function (c) {
        var row = document.createElement("div");
        row.className = "dash-row";

        var label = document.createElement("span");
        label.className = "dash-chapter";
        label.textContent = c.chapter;
        row.appendChild(label);

        var badges = document.createElement("span");
        badges.className = "dash-badges";

        var chapterStarted = false;
        MODES.forEach(function (m) {
          var items = m.dataArray().filter(function (it) { return it.chapter === c.chapter; });
          var result = computeMastery(items, statsCache[m.key]);
          if (result.status !== "unavailable" && result.status !== "new") chapterStarted = true;

          var badge = document.createElement("span");
          badge.className = "dash-badge dash-badge-" + result.status;
          badge.textContent = m.icon;
          badge.title = statusTitle(m.key, result);
          badges.appendChild(badge);
        });

        if (chapterStarted) startedChapters++;
        row.appendChild(badges);
        container.appendChild(row);
      });
    });

    var summary = document.getElementById("dashboard-summary");
    if (summary) {
      summary.textContent = startedChapters === 0
        ? "Noch keine Statistik vorhanden – starte mit einem der Modi oben!"
        : "Bereits begonnen: " + startedChapters + " von " + chapters.length + " Kapiteln.";
    }
  }

  window.renderDashboard = renderDashboard;
  document.addEventListener("DOMContentLoaded", renderDashboard);
})();
