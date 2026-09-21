# SBR-Quiz – Schul- & Beamtenrecht (Baden-Württemberg)

Eine kleine Lern-App zur Prüfungsvorbereitung in Schul- und Beamtenrecht (mündliche
Prüfung/Kolloquium), erstellt aus der Zusammenfassung „Leitfaden Repetitorium 2025".
Fünf Modi: Quiz, Karteikarten, Fallbeispiele, Mündliche Prüfung und eine strukturierte
Übersicht.

Reines statisches HTML/CSS/JavaScript – kein Build-Step, keine Abhängigkeiten, läuft
komplett im Browser.

## Funktionen

**📝 Quiz-Modus**
- ~205 Multiple-Choice-Fragen aus allen Kapiteln (1.1–1.15 Schulrecht, 2.1–2.9 Beamtenrecht)
- Kapitel-Filter, zufällige Reihenfolge von Fragen und Antwortoptionen
- Sofortiges Feedback inkl. Erklärung, Liste der falsch beantworteten Fragen am Ende

**🗂️ Karteikarten-Modus**
- ~166 Karten (Begriff/Frage → Antwort) aus allen Kapiteln
- Umdrehen + Selbsteinschätzung „Kann ich" / „Nochmal"
- „Nochmal"-Karten werden am Ende der Runde zur Wiederholung angeboten

**⚖️ Fallbeispiele**
- 18 reale Fälle zur Aufsichtspflicht mit Gerichtsentscheidungen
- Dreistufige Falllösung wie im Prüfungsschema (Kapitel 1.1): Tatbestand → Subsumtion →
  Rechtsfolge, jeder Schritt einzeln aufdeckbar, mit optionalem Notizfeld für die eigene
  Einschätzung
- Selbsteinschätzung „Verstanden" / „Nochmal üben" pro Fall, eigene Statistik

**🎤 Mündliche Prüfung**
- 24 offene Einstiegsfragen (eine pro Kapitel), wie sie im Kolloquium gestellt werden
- Timer zum Stoppen der eigenen Antwortzeit beim freien Sprechen
- Stichpunkte zum Selbstabgleich nach der Antwort, danach typische Nachfragen mit
  Musterantwort zum Üben von Rückfragen
- Selbsteinschätzung „Lief gut" / „Nochmal üben", eigene Statistik

**📖 Übersicht**
- Ausklappbare Kapitel-Akkordeons mit den inhaltlichen Zusammenhängen (Normenpyramide,
  Schulaufsichts-Hierarchie, Konferenzen-Struktur, § 90-Maßnahmen, Beamtenlaufbahn u.a.)
  statt isolierter Frage/Antwort-Paare
- Schnellzugriff-Index zum Direktsprung in ein Kapitel

**📊 Fortschritts-Dashboard (Startseite)**
- Ampel-Überblick pro Kapitel über alle vier Übungsmodi hinweg (Abdeckung × Trefferquote)
- Gesamtfortschritt in % sowie ein thematisches Rang-System entlang der in der App
  gelehrten Beamtenlaufbahn (📋 Bewerber/in → 📝 auf Widerruf → 🎓 auf Probe →
  ✅ auf Lebenszeit → 📘 Studienrat → … → ⭐ Ministerialrat bei 100 %)
- Zeigt auf einen Blick, wo noch Lücken sind, bevor man in einen Modus wechselt
- Graue Badges markieren Kapitel, für die ein Modus noch keine Inhalte hat (z.B.
  Fallbeispiele aktuell nur zu 1.12)
- Button zum Zurücksetzen der Statistik aller vier Modi auf einmal

**Allgemein**
- Lokale Statistik je Modus (im Browser gespeichert, `localStorage`), getrennt für alle
  vier Übungsmodi: zeigt Schwachstellen an, „Schwache … üben" trainiert gezielt

## Lokal öffnen

Einfach `index.html` im Browser öffnen – kein Server nötig.

## Auf GitHub Pages hosten

1. Repository auf GitHub erstellen und dieses Verzeichnis pushen (siehe unten).
2. Im Repository: **Settings → Pages**.
3. Unter „Build and deployment" → Source: **Deploy from a branch** wählen.
4. Branch: `main`, Ordner: `/ (root)` auswählen, speichern.
5. Nach kurzer Zeit ist das Quiz unter `https://<username>.github.io/<repo-name>/` erreichbar.

### Repo lokal initialisieren und pushen

```bash
git init
git add .
git commit -m "Initial commit: SBR-Quiz"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

## Hinweis

Die Fragen wurden aus einer studentischen Zusammenfassung erstellt und dienen nur
zur Wiederholung. Für die verbindliche Prüfungsvorbereitung gelten die Originalquellen
(Schulgesetz BW, NVO, VersO, LBG, Vorlesungsunterlagen etc.).
