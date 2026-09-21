// SBR-Quiz – App-Logik
(function () {
  "use strict";

  var STORAGE_KEY = "sbrQuizStats_v1";
  var ALL_QUESTIONS = window.QUESTIONS || [];

  // ---------------------------------------------------------------------
  // localStorage helpers (robust gegen fehlenden/blockierten localStorage)
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
      /* ignore – z.B. privater Modus ohne Speicherzugriff */
    }
  }

  function recordAnswer(questionId, isCorrect) {
    var stats = loadStats();
    if (!stats[questionId]) stats[questionId] = { correct: 0, wrong: 0 };
    if (isCorrect) stats[questionId].correct++;
    else stats[questionId].wrong++;
    saveStats(stats);
  }

  function getWeakQuestions(limit) {
    var stats = loadStats();
    var scored = [];
    ALL_QUESTIONS.forEach(function (q) {
      var s = stats[q.id];
      if (!s) return;
      var attempts = s.correct + s.wrong;
      if (attempts === 0) return;
      var wrongRatio = s.wrong / attempts;
      if (wrongRatio > 0) {
        scored.push({ q: q, wrongRatio: wrongRatio, attempts: attempts });
      }
    });
    scored.sort(function (a, b) {
      return b.wrongRatio - a.wrongRatio || b.attempts - a.attempts;
    });
    return scored.slice(0, limit || 20).map(function (s) { return s.q; });
  }

  function getTotalAttempts() {
    var stats = loadStats();
    var total = 0;
    Object.keys(stats).forEach(function (id) {
      total += stats[id].correct + stats[id].wrong;
    });
    return total;
  }

  // ---------------------------------------------------------------------
  // Utility
  // ---------------------------------------------------------------------
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function el(id) { return document.getElementById(id); }

  function chapterList() {
    var order = [];
    var seen = {};
    ALL_QUESTIONS.forEach(function (q) {
      if (!seen[q.chapter]) {
        seen[q.chapter] = true;
        order.push({ chapter: q.chapter, part: q.part });
      }
    });
    return order;
  }

  // ---------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------
  var state = {
    selectedChapters: new Set(chapterList().map(function (c) { return c.chapter; })),
    questionCount: "20",
    quizQuestions: [],
    currentIndex: 0,
    score: 0,
    answeredCurrent: false,
    sessionWrong: [] // { question, userAnswerText, correctText }
  };

  // ---------------------------------------------------------------------
  // Start screen rendering
  // ---------------------------------------------------------------------
  function renderChapterGroups() {
    var container = el("chapter-groups");
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
        var count = ALL_QUESTIONS.filter(function (q) { return q.chapter === c.chapter; }).length;
        var row = document.createElement("div");
        row.className = "chapter-item";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "chk-" + c.chapter;
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
        countSpan.textContent = count + " Fr.";

        row.appendChild(checkbox);
        row.appendChild(label);
        row.appendChild(countSpan);
        groupWrap.appendChild(row);
      });

      container.appendChild(groupWrap);
    });
  }

  function renderCountOptions() {
    var container = el("count-options");
    container.innerHTML = "";
    var options = [
      { value: "10", label: "10" },
      { value: "20", label: "20" },
      { value: "50", label: "50" },
      { value: "all", label: "Alle" }
    ];
    options.forEach(function (opt) {
      var pill = document.createElement("div");
      pill.className = "pill" + (state.questionCount === opt.value ? " active" : "");
      pill.textContent = opt.label;
      pill.addEventListener("click", function () {
        state.questionCount = opt.value;
        renderCountOptions();
      });
      container.appendChild(pill);
    });
  }

  function getFilteredQuestions() {
    return ALL_QUESTIONS.filter(function (q) { return state.selectedChapters.has(q.chapter); });
  }

  function updateAvailableCount() {
    var n = getFilteredQuestions().length;
    el("available-count").textContent = n;
    el("btn-start").disabled = n === 0;
  }

  function renderStatsSummary() {
    var stats = loadStats();
    var totalAttempts = 0, totalCorrect = 0;
    Object.keys(stats).forEach(function (id) {
      totalAttempts += stats[id].correct + stats[id].wrong;
      totalCorrect += stats[id].correct;
    });

    var container = el("stats-summary");
    container.innerHTML = "";

    if (totalAttempts === 0) {
      var p = document.createElement("p");
      p.className = "hint";
      p.textContent = "Noch keine Statistik vorhanden – starte ein Quiz!";
      container.appendChild(p);
    } else {
      var pct = Math.round((totalCorrect / totalAttempts) * 100);
      addStatsRow(container, "Beantwortete Fragen (gesamt)", String(totalAttempts));
      addStatsRow(container, "Davon richtig", totalCorrect + " (" + pct + " %)");
      addStatsRow(container, "Unterschiedliche geübte Fragen", String(Object.keys(stats).length));
    }

    var weak = getWeakQuestions(20);
    var weakBtn = el("btn-weak");
    var weakHint = el("weak-hint");
    if (weak.length > 0) {
      weakBtn.disabled = false;
      weakHint.textContent = weak.length + " Frage(n) mit häufigen Fehlern verfügbar.";
    } else {
      weakBtn.disabled = true;
      weakHint.textContent = "Beantworte erst ein paar Fragen, damit diese Funktion Daten hat.";
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
  function showScreen(name) {
    ["start", "quiz", "result"].forEach(function (s) {
      el("screen-" + s).classList.toggle("hidden", s !== name);
    });
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  // ---------------------------------------------------------------------
  // Quiz flow
  // ---------------------------------------------------------------------
  function startQuiz(questionPool) {
    var pool = shuffle(questionPool);
    if (state.questionCount !== "all") {
      var n = parseInt(state.questionCount, 10);
      pool = pool.slice(0, n);
    }
    state.quizQuestions = pool.map(function (q) {
      var options = q.options.map(function (text, idx) {
        return { text: text, correct: idx === 0 };
      });
      return {
        source: q,
        options: shuffle(options)
      };
    });
    state.currentIndex = 0;
    state.score = 0;
    state.sessionWrong = [];
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    var total = state.quizQuestions.length;
    var idx = state.currentIndex;
    var current = state.quizQuestions[idx];

    el("progress-label").textContent = "Frage " + (idx + 1) + " von " + total;
    el("score-label").textContent = "Richtig: " + state.score;
    el("progress-bar").style.width = Math.round((idx / total) * 100) + "%";

    el("question-chapter").textContent = current.source.chapter;
    el("question-text").textContent = current.source.question;

    var list = el("options-list");
    list.innerHTML = "";
    state.answeredCurrent = false;
    el("btn-next").disabled = true;
    el("explanation-box").classList.add("hidden");
    el("explanation-box").textContent = "";

    current.options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.textContent = opt.text;
      btn.addEventListener("click", function () { handleAnswer(opt, btn); });
      list.appendChild(btn);
    });
  }

  function handleAnswer(chosenOpt, chosenBtn) {
    if (state.answeredCurrent) return;
    state.answeredCurrent = true;

    var current = state.quizQuestions[state.currentIndex];
    var isCorrect = !!chosenOpt.correct;

    Array.prototype.forEach.call(el("options-list").children, function (btn, i) {
      btn.disabled = true;
      var opt = current.options[i];
      if (opt.correct) btn.classList.add("correct");
      else if (opt === chosenOpt) btn.classList.add("wrong");
    });

    if (isCorrect) {
      state.score++;
    } else {
      var correctOpt = current.options.filter(function (o) { return o.correct; })[0];
      state.sessionWrong.push({
        source: current.source,
        userAnswerText: chosenOpt.text,
        correctText: correctOpt.text
      });
    }

    recordAnswer(current.source.id, isCorrect);

    var expBox = el("explanation-box");
    expBox.classList.remove("hidden");
    expBox.textContent = current.source.explanation || "";

    el("score-label").textContent = "Richtig: " + state.score;
    el("btn-next").disabled = false;
  }

  function nextQuestion() {
    if (state.currentIndex < state.quizQuestions.length - 1) {
      state.currentIndex++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    var total = state.quizQuestions.length;
    el("progress-bar").style.width = "100%";

    var pct = total > 0 ? Math.round((state.score / total) * 100) : 0;
    el("result-score").textContent = state.score + " von " + total + " richtig (" + pct + " %)";
    el("result-bar").style.width = pct + "%";

    var wrongList = el("wrong-list");
    wrongList.innerHTML = "";
    var noWrong = el("no-wrong");

    if (state.sessionWrong.length === 0) {
      noWrong.classList.remove("hidden");
    } else {
      noWrong.classList.add("hidden");
      state.sessionWrong.forEach(function (w) {
        var item = document.createElement("div");
        item.className = "wrong-item";

        var tag = document.createElement("p");
        tag.className = "chapter-tag";
        tag.textContent = w.source.chapter;

        var q = document.createElement("p");
        q.className = "q";
        q.textContent = w.source.question;

        var aCorrect = document.createElement("p");
        aCorrect.className = "a-correct";
        aCorrect.textContent = "✓ Richtig: " + w.correctText;

        var aUser = document.createElement("p");
        aUser.className = "a-user";
        aUser.textContent = "✗ Deine Antwort: " + w.userAnswerText;

        var exp = document.createElement("p");
        exp.className = "exp";
        exp.textContent = w.source.explanation || "";

        item.appendChild(tag);
        item.appendChild(q);
        item.appendChild(aCorrect);
        item.appendChild(aUser);
        item.appendChild(exp);
        wrongList.appendChild(item);
      });
    }

    el("btn-retry-wrong").disabled = state.sessionWrong.length === 0;
    showScreen("result");
  }

  function backToStart() {
    renderStatsSummary();
    updateAvailableCount();
    showScreen("start");
  }

  // ---------------------------------------------------------------------
  // Event wiring
  // ---------------------------------------------------------------------
  function init() {
    renderChapterGroups();
    renderCountOptions();
    updateAvailableCount();
    renderStatsSummary();

    el("btn-select-all").addEventListener("click", function () {
      state.selectedChapters = new Set(chapterList().map(function (c) { return c.chapter; }));
      renderChapterGroups();
      updateAvailableCount();
    });

    el("btn-select-none").addEventListener("click", function () {
      state.selectedChapters = new Set();
      renderChapterGroups();
      updateAvailableCount();
    });

    el("btn-start").addEventListener("click", function () {
      var pool = getFilteredQuestions();
      if (pool.length === 0) return;
      startQuiz(pool);
    });

    el("btn-weak").addEventListener("click", function () {
      var weak = getWeakQuestions(30);
      if (weak.length === 0) return;
      startQuiz(weak);
    });

    el("btn-reset-stats").addEventListener("click", function () {
      if (window.confirm("Gespeicherte Statistik wirklich löschen?")) {
        saveStats({});
        renderStatsSummary();
      }
    });

    el("btn-next").addEventListener("click", nextQuestion);

    el("btn-quit").addEventListener("click", function () {
      if (window.confirm("Quiz wirklich abbrechen? Der Fortschritt dieser Runde geht verloren.")) {
        backToStart();
      }
    });

    el("btn-restart").addEventListener("click", backToStart);

    el("btn-retry-wrong").addEventListener("click", function () {
      var pool = state.sessionWrong.map(function (w) { return w.source; });
      if (pool.length === 0) return;
      state.questionCount = "all";
      startQuiz(pool);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
