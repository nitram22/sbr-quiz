# SBR-Quiz – Schul- & Beamtenrecht (Baden-Württemberg)

Eine kleine Lern-App zur Prüfungsvorbereitung in Schul- und Beamtenrecht, erstellt aus
der Zusammenfassung „Leitfaden Repetitorium 2025". Drei Modi: Quiz, Karteikarten und
eine strukturierte Übersicht.

Reines statisches HTML/CSS/JavaScript – kein Build-Step, keine Abhängigkeiten, läuft
komplett im Browser.

## Funktionen

**📝 Quiz-Modus**
- ~176 Multiple-Choice-Fragen aus allen Kapiteln (1.1–1.15 Schulrecht, 2.1–2.9 Beamtenrecht)
- Kapitel-Filter, zufällige Reihenfolge von Fragen und Antwortoptionen
- Sofortiges Feedback inkl. Erklärung, Liste der falsch beantworteten Fragen am Ende

**🗂️ Karteikarten-Modus**
- ~138 Karten (Begriff/Frage → Antwort) aus allen Kapiteln
- Umdrehen + Selbsteinschätzung „Kann ich" / „Nochmal"
- „Nochmal"-Karten werden am Ende der Runde zur Wiederholung angeboten

**📖 Übersicht**
- Ausklappbare Kapitel-Akkordeons mit den inhaltlichen Zusammenhängen (Normenpyramide,
  Schulaufsichts-Hierarchie, Konferenzen-Struktur, § 90-Maßnahmen, Beamtenlaufbahn u.a.)
  statt isolierter Frage/Antwort-Paare
- Schnellzugriff-Index zum Direktsprung in ein Kapitel

**Allgemein**
- Lokale Statistik je Modus (im Browser gespeichert, `localStorage`), getrennt für Quiz
  und Karteikarten: zeigt Schwachstellen an, „Schwache Fragen/Karten üben" trainiert gezielt

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
