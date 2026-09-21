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

  // Rang-System entlang der in der App gelehrten Beamtenlaufbahn (Kapitel 2.4/2.1):
  // vom Bewerber über Widerruf/Probe/Lebenszeit bis zu den Beförderungsämtern.
  var RANKS = [
    { min: 0, icon: "📋", title: "Bewerber/in" },
    { min: 1, icon: "📝", title: "Beamter/Beamtin auf Widerruf", subtitle: "Vorbereitungsdienst" },
    { min: 20, icon: "🎓", title: "Beamter/Beamtin auf Probe" },
    { min: 40, icon: "✅", title: "Beamter/Beamtin auf Lebenszeit" },
    { min: 60, icon: "📘", title: "Studienrat/Studienrätin", subtitle: "A13" },
    { min: 75, icon: "📗", title: "Oberstudienrat/-rätin", subtitle: "A14" },
    { min: 85, icon: "📙", title: "Studiendirektor/in", subtitle: "A15" },
    { min: 95, icon: "📕", title: "Oberstudiendirektor/in", subtitle: "A16, Schulleitung" },
    { min: 100, icon: "⭐", title: "Ministerialrat/-rätin", subtitle: "Kultusministerium" }
  ];

  function getRankInfo(pct) {
    var current = RANKS[0];
    var next = null;
    for (var i = 0; i < RANKS.length; i++) {
      if (pct >= RANKS[i].min) current = RANKS[i];
      else { next = RANKS[i]; break; }
    }
    return { current: current, next: next };
  }

  function renderRank(pct) {
    var info = getRankInfo(pct);
    var iconEl = document.getElementById("dashboard-rank-icon");
    var titleEl = document.getElementById("dashboard-rank-title");
    var barEl = document.getElementById("dashboard-rank-bar");
    var nextEl = document.getElementById("dashboard-rank-next");
    if (!iconEl || !titleEl || !barEl || !nextEl) return;

    iconEl.textContent = info.current.icon;
    titleEl.textContent = info.current.title + (info.current.subtitle ? " (" + info.current.subtitle + ")" : "");

    if (info.next) {
      var span = info.next.min - info.current.min;
      var progress = span > 0 ? Math.min(100, Math.max(0, ((pct - info.current.min) / span) * 100)) : 100;
      barEl.style.width = progress + "%";
      nextEl.textContent = "Noch " + (info.next.min - pct) + " % bis " + info.next.icon + " " + info.next.title;
    } else {
      barEl.style.width = "100%";
      nextEl.textContent = "Höchster Rang erreicht! 🎉";
    }
  }

  function computeOverallPercent(chapters, statsCache) {
    var sum = 0, total = 0;
    chapters.forEach(function (c) {
      MODES.forEach(function (m) {
        var items = m.dataArray().filter(function (it) { return it.chapter === c.chapter; });
        if (items.length === 0) return; // Modus hat keine Inhalte für dieses Kapitel -> zählt nicht mit
        var result = computeMastery(items, statsCache[m.key]);
        var value = result.status === "new" ? 0 : (result.coverage * result.accuracy);
        sum += value;
        total++;
      });
    });
    return total > 0 ? Math.round((sum / total) * 100) : 0;
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

    var overallPct = computeOverallPercent(chapters, statsCache);
    var overallEl = document.getElementById("dashboard-overall-pct");
    if (overallEl) overallEl.textContent = overallPct + " %";
    renderRank(overallPct);
  }

  // ---------------------------------------------------------------------
  // Gesamte Statistik aller Modi zurücksetzen
  // ---------------------------------------------------------------------
  function resetAllStats() {
    if (!window.confirm("Wirklich die GESAMTE Statistik aus allen Modi (Quiz, Karteikarten, Fallbeispiele, Mündliche Prüfung) löschen? Das kann nicht rückgängig gemacht werden.")) {
      return;
    }
    MODES.forEach(function (m) {
      try {
        window.localStorage.setItem(m.storageKey, "{}");
      } catch (e) {
        /* ignore */
      }
    });

    // Falls die Statistik-Anzeige eines Modus bereits im Speicher gerendert wurde
    // (z.B. beim ersten Laden der Seite), muss sie explizit aktualisiert werden -
    // ein Moduswechsel über die Tab-Leiste rendert die Startscreens sonst nicht neu.
    ["refreshQuizStats", "refreshFlashcardStats", "refreshCaseStats", "refreshOralStats"].forEach(function (fnName) {
      if (typeof window[fnName] === "function") window[fnName]();
    });

    renderDashboard();
  }

  function init() {
    var btn = document.getElementById("dashboard-btn-reset-all");
    if (btn) btn.addEventListener("click", resetAllStats);
  }

  window.renderDashboard = renderDashboard;
  document.addEventListener("DOMContentLoaded", function () {
    renderDashboard();
    init();
  });
})();
