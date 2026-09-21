# SBR-Quiz – Schul- & Beamtenrecht (Baden-Württemberg)

Ein kleines Multiple-Choice-Quiz zur Prüfungsvorbereitung in Schul- und Beamtenrecht,
erstellt aus der Zusammenfassung „Leitfaden Repetitorium 2025".

Reines statisches HTML/CSS/JavaScript – kein Build-Step, keine Abhängigkeiten, läuft
komplett im Browser.

## Funktionen

- ~170 Multiple-Choice-Fragen aus allen Kapiteln (1.1–1.15 Schulrecht, 2.1–2.9 Beamtenrecht)
- Kapitel-Filter: Quiz auf bestimmte Themenbereiche einschränkbar
- Zufällige Reihenfolge von Fragen und Antwortoptionen bei jedem Durchlauf
- Sofortiges Feedback inkl. Erklärung nach jeder Antwort
- Lokale Statistik (im Browser gespeichert, `localStorage`): zeigt an, welche Fragen
  häufig falsch beantwortet wurden – „Schwache Fragen üben" trainiert gezielt diese
- Nach jedem Durchlauf: Liste der falsch beantworteten Fragen samt Erklärung,
  optional direkt nochmal nur die Fehler üben

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
