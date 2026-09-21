// Gemeinsame Utilities + Tab-Navigation zwischen den drei Modi (Quiz / Karteikarten / Übersicht)
(function () {
  "use strict";

  // ---------------------------------------------------------------------
  // Shared utilities (genutzt von app.js und flashcards.js)
  // ---------------------------------------------------------------------
  window.el = function (id) { return document.getElementById(id); };

  window.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  };

  window.chapterListOf = function (sourceArray) {
    var order = [];
    var seen = {};
    sourceArray.forEach(function (item) {
      if (!seen[item.chapter]) {
        seen[item.chapter] = true;
        order.push({ chapter: item.chapter, part: item.part });
      }
    });
    return order;
  };

  // ---------------------------------------------------------------------
  // Navigation zwischen Startseite (Kacheln) und den Modus-Bereichen
  // ---------------------------------------------------------------------
  var ALL_MODES = ["home", "quiz", "flashcards", "cases", "overview"];

  function showMode(mode) {
    ALL_MODES.forEach(function (m) {
      var section = document.getElementById("mode-" + m);
      if (section) section.classList.toggle("hidden", m !== mode);
      var tab = document.querySelector('.tab-btn[data-mode="' + m + '"]');
      if (tab) tab.classList.toggle("active", m === mode);
    });
    var tabBar = document.getElementById("tab-bar");
    if (tabBar) tabBar.classList.toggle("hidden", mode === "home");
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  window.showMode = showMode;

  // ---------------------------------------------------------------------
  // Übersicht: Sprung-Index öffnet & scrollt zum passenden <details>
  // ---------------------------------------------------------------------
  function wireOverviewIndex() {
    var links = document.querySelectorAll("#overview-index a[data-target]");
    links.forEach(function (link) {
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        var targetId = link.getAttribute("data-target");
        var target = document.getElementById(targetId);
        if (!target) return;
        target.open = true;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function init() {
    var tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        showMode(tab.getAttribute("data-mode"));
      });
    });

    var tiles = document.querySelectorAll(".mode-tile");
    tiles.forEach(function (tile) {
      tile.addEventListener("click", function () {
        showMode(tile.getAttribute("data-mode"));
      });
    });

    wireOverviewIndex();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
