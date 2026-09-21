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
  // RANKS[0] ist ein Sonderfall: er gilt nur, solange wirklich noch NICHTS geübt wurde
  // (rawPct === 0). Danach gilt ab dem allerersten Fortschritt (rawPct > 0) sofort
  // mindestens RANKS[1], unabhängig davon, ob die gerundete Anzeige noch "0 %" zeigt -
  // sonst wirkt "Noch 1 %" bei 0 % Anzeige wie "fast geschafft", obwohl es wegen der
  // groben Mittelung über alle Kapitel/Modi tatsächlich noch deutlich mehr Übung braucht.
  var RANKS = [
    { min: 0, icon: "📋", title: "Bewerber/in" },
    { min: 0, icon: "📝", title: "Beamter/Beamtin auf Widerruf", subtitle: "Vorbereitungsdienst" },
    { min: 20, icon: "🎓", title: "Beamter/Beamtin auf Probe" },
    { min: 40, icon: "✅", title: "Beamter/Beamtin auf Lebenszeit" },
    { min: 60, icon: "📘", title: "Studienrat/Studienrätin", subtitle: "A13" },
    { min: 75, icon: "📗", title: "Oberstudienrat/-rätin", subtitle: "A14" },
    { min: 85, icon: "📙", title: "Studiendirektor/in", subtitle: "A15" },
    { min: 95, icon: "📕", title: "Oberstudiendirektor/in", subtitle: "A16, Schulleitung" },
    { min: 100, icon: "⭐", title: "Ministerialrat/-rätin", subtitle: "Kultusministerium" }
  ];

  function getRankInfo(rawPct) {
    if (rawPct <= 0) {
      return { current: RANKS[0], next: RANKS[1], neverPlayed: true };
    }
    var current = RANKS[1];
    var next = null;
    for (var i = 1; i < RANKS.length; i++) {
      if (rawPct >= RANKS[i].min) current = RANKS[i];
      else { next = RANKS[i]; break; }
    }
    return { current: current, next: next, neverPlayed: false };
  }

  function renderRank(rawPct) {
    var info = getRankInfo(rawPct);
    var iconEl = document.getElementById("dashboard-rank-icon");
    var titleEl = document.getElementById("dashboard-rank-title");
    var barEl = document.getElementById("dashboard-rank-bar");
    var nextEl = document.getElementById("dashboard-rank-next");
    if (!iconEl || !titleEl || !barEl || !nextEl) return;

    iconEl.textContent = info.current.icon;
    titleEl.textContent = info.current.title + (info.current.subtitle ? " (" + info.current.subtitle + ")" : "");

    if (info.neverPlayed) {
      barEl.style.width = "0%";
      nextEl.textContent = "Starte mit dem Üben, um deinen ersten Rang zu erreichen!";
    } else if (info.next) {
      var span = info.next.min - info.current.min;
      var progress = span > 0 ? Math.min(100, Math.max(0, ((rawPct - info.current.min) / span) * 100)) : 100;
      barEl.style.width = progress + "%";
      var remaining = Math.max(1, Math.ceil(info.next.min - rawPct));
      nextEl.textContent = "Noch " + remaining + " % bis " + info.next.icon + " " + info.next.title;
    } else {
      barEl.style.width = "100%";
      nextEl.textContent = "Höchster Rang erreicht! 🎉";
    }
  }

  // Liefert sowohl den ungerundeten Rohwert (für die Rang-Schwellen, damit auch
  // winzige Fortschritte sofort den Rang wechseln) als auch den gerundeten Wert
  // (für die grobe %-Anzeige).
  function computeOverallStats(chapters, statsCache) {
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
    var raw = total > 0 ? (sum / total) * 100 : 0;
    return { raw: raw, rounded: Math.round(raw) };
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

    var overall = computeOverallStats(chapters, statsCache);
    var overallEl = document.getElementById("dashboard-overall-pct");
    if (overallEl) overallEl.textContent = overall.rounded + " %";
    renderRank(overall.raw);
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
