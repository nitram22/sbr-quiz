// Themen-Datenbank für den Modus "Mündliche Prüfung"
// Format orientiert an echten Kolloquiums-Einstiegsthemen (z.B. "Auftrag der Schule –
// Schulrechtliche Aspekte im GG", "Rechte und Pflichten von Beamten – Beschwerde über Kollege").
//
// Jedes Thema: eine offene Einstiegsfrage, Stichpunkte zum Selbstabgleich nach dem freien
// Sprechen, sowie typische Nachfragen mit kurzer Musterantwort.

window.ORAL_TOPICS = [

  { id: "mp-1.1-01", part: "Schulrecht", chapter: "1.1 Pädagogik und Recht",
    frage: "Erläutern Sie den Ablauf der juristischen Fallbearbeitung sowie die Begriffe \"Ermessen\" und \"Ermessensfehler\".",
    stichpunkte: [
      "3 Schritte: Sachverhalt → Tatbestand (Subsumtion) → Rechtsfolge",
      "Bedeutung von \"kann\"/\"muss\"/\"soll\" sowie \"im Einvernehmen mit\" vs. \"im Benehmen mit\"",
      "Ermessen = Entscheidungsspielraum bei der Rechtsfolge",
      "4 Ermessensfehler: Nichtgebrauch, Missbrauch, Überschreitung, Unverhältnismäßigkeit"
    ],
    nachfragen: [
      { frage: "Geben Sie ein Beispiel für Ermessensnichtgebrauch.", antwort: "Eine Schulleitung wendet eine Regel starr an, ohne die besondere Vorgeschichte des Schülers zu berücksichtigen (keine Einzelfallprüfung)." },
      { frage: "Was unterscheidet \"im Einvernehmen mit\" von \"im Benehmen mit\"?", antwort: "Einvernehmen verlangt vorheriges Einverständnis der anderen Stelle, Benehmen nur die Gelegenheit zur Stellungnahme." }
    ] },

  { id: "mp-1.2-01", part: "Schulrecht", chapter: "1.2 Erziehungs- und Bildungsauftrag",
    frage: "Worauf stützt sich der Erziehungs- und Bildungsauftrag der Schule rechtlich, und wie verhält er sich zum elterlichen Erziehungsrecht?",
    stichpunkte: [
      "Rechtsgrundlagen: GG Art. 6, Landesverfassung BW Art. 12, SchG § 1",
      "Werte: christliche Nächstenliebe, Menschlichkeit/Friedensliebe, Achtung der Würde anderer",
      "Dualität: staatlicher und elterlicher Erziehungsauftrag nebeneinander",
      "BVerfG: Staat kann in der Schule eigene, elternunabhängige Erziehungsziele verfolgen"
    ],
    nachfragen: [
      { frage: "Kann der Staat gegen den Willen der Eltern eigene Erziehungsziele verfolgen?", antwort: "Ja, laut Bundesverfassungsgericht innerhalb der Schule unabhängig von den Eltern." },
      { frage: "Welche Werte nennt die Landesverfassung als Grundlage der schulischen Erziehung?", antwort: "U.a. \"Geist christlicher Nächstenliebe\", Menschlichkeit und Friedensliebe, Achtung der Würde und Überzeugung anderer." }
    ] },

  { id: "mp-1.3-01", part: "Schulrecht", chapter: "1.3 Rechtsquellen im Schulrecht",
    frage: "Stellen Sie die Normenpyramide im Schulrecht dar und erläutern Sie, wer welche Rechtsquelle erlässt.",
    stichpunkte: [
      "Landesverfassung/GG > Gesetz (Landtag) > Rechtsverordnung (KM) > Verwaltungsvorschrift/Erlass (KM/RP)",
      "\"Wesentliche Entscheidungen\" muss der Gesetzgeber selbst treffen",
      "KMK-Beschlüsse sind nicht automatisch geltendes Recht (Kulturhoheit der Länder, GG Art. 70)",
      "Beispiel: SchG (Gesetz) vs. NVO (Verordnung) vs. Abiturerlass (Erlass)"
    ],
    nachfragen: [
      { frage: "Warum ist die Schulpflicht im Gesetz, die Beurlaubung dagegen nur in einer Verordnung geregelt?", antwort: "Weil die Schulpflicht eine wesentliche Entscheidung ist, die der Gesetzgeber selbst regeln muss." },
      { frage: "Sind KMK-Beschlüsse für die Länder bindend?", antwort: "Nein, jedes Land muss sie eigenständig bewerten und umsetzen." }
    ] },

  { id: "mp-1.4-01", part: "Schulrecht", chapter: "1.4 Gliederung des Schulwesens in BW",
    frage: "Geben Sie einen Überblick über die Schularten in Baden-Württemberg und erläutern Sie die Grundschulempfehlung.",
    stichpunkte: [
      "12 Schularten; Pflichtschulen (GS, Berufsschule, SBBZ) vs. Wahlschulen",
      "\"2 aus 3\"-Regel: Klassenkonferenz-Empfehlung, Kompass 4, Elternwunsch",
      "GMS als einzige Schulart für alle drei Empfehlungsstufen",
      "Ersatzschule (erfüllt Schulpflicht) vs. Ergänzungsschule (nicht)"
    ],
    nachfragen: [
      { frage: "Was passiert, wenn Empfehlung und Elternwunsch nicht übereinstimmen?", antwort: "Ein Potentialtest kann als dritte Erkenntnisquelle durchgeführt werden." },
      { frage: "Ist der Elternwille bei der Schulwahl bindend?", antwort: "Ja, bei Wahlschulen entscheidet grundsätzlich der Elternwille." }
    ] },

  { id: "mp-1.5-01", part: "Schulrecht", chapter: "1.5 Schulträger, Lernmittelfreiheit",
    frage: "Erklären Sie die Aufgabenteilung zwischen Schulträger und Land sowie den Umfang der Lernmittelfreiheit.",
    stichpunkte: [
      "Schulträger (i.d.R. Gemeinde): Sachkosten, Gebäude, Sekretariat/Hausmeister",
      "Land: Personalkosten, Dienstherr der Lehrkräfte",
      "Notwendige Lernmittel: von Lehrkraft zum Pflichtgegenstand gemacht",
      "Geringfügigkeitsgrenze ca. 1 €, keine verpflichtende Kopierpauschale"
    ],
    nachfragen: [
      { frage: "Wer ist Arbeitgeber des Hausmeisters?", antwort: "Der Schulträger, nicht das Land." },
      { frage: "Darf eine Schule eine Kopierpauschale verlangen?", antwort: "Nur auf freiwilliger Basis, nicht verpflichtend." }
    ] },

  { id: "mp-1.6-01", part: "Schulrecht", chapter: "1.6 Schulaufsicht",
    frage: "Beschreiben Sie den Aufbau der Schulaufsicht in Baden-Württemberg.",
    stichpunkte: [
      "KM (oberste SB) → Regierungspräsidien (obere SB) → staatliches Schulamt (untere SB, nicht für Gymnasium)",
      "Unterscheidung Fach-, Dienst- und Trägeraufsicht",
      "Methodenfreiheit der Lehrkräfte als Grenze der Fachaufsicht",
      "ZSL (Fortbildung, Bildungspläne) vs. IBBW (Statistik, Bildungsforschung)"
    ],
    nachfragen: [
      { frage: "Wer ist für Gymnasien zuständig, wenn kein Schulamt zwischengeschaltet ist?", antwort: "Direkt das Regierungspräsidium." },
      { frage: "Darf die Schulaufsicht eine bestimmte Unterrichtsmethode vorschreiben?", antwort: "Nein, das würde die Methodenfreiheit der Lehrkräfte verletzen." }
    ] },

  { id: "mp-1.7-01", part: "Schulrecht", chapter: "1.7 Verwaltungsakte, Widerspruch",
    frage: "Unterscheiden Sie Verwaltungsakt und Verwaltungshandeln und erläutern Sie das Widerspruchsverfahren.",
    stichpunkte: [
      "Verwaltungsakt: Einzelfallregelung mit Außenwirkung, betrifft Grundverhältnis",
      "Verwaltungshandeln: geringe Tragweite, betrifft Betriebsverhältnis",
      "Widerspruchsfrist 1 Monat, ohne Rechtsmittelbelehrung 1 Jahr",
      "Ablauf: Widerspruch → Abhilfe durch Schule? → sonst RP entscheidet → Klage vor Verwaltungsgericht möglich"
    ],
    nachfragen: [
      { frage: "Hat ein Widerspruch gegen eine § 90-Maßnahme aufschiebende Wirkung?", antwort: "Nein, ausnahmsweise nicht." },
      { frage: "Nennen Sie ein Beispiel für einen Verwaltungsakt in der Schule.", antwort: "Die Nichtversetzung oder ein Schulausschluss." }
    ] },

  { id: "mp-1.8-01", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    frage: "Stellen Sie die Schulverfassung und das Zusammenspiel der schulischen Gremien dar.",
    stichpunkte: [
      "Schulkonferenz als \"gemeinsames Organ der Schule\" (§ 47 SchG)",
      "Zusammensetzung: SL Vorsitz, Elternbeiratsvorsitz stv., je 3 Lehrkräfte/Eltern/Schüler",
      "GLK, Elternbeirat und Schülerrat speisen die Schulkonferenz",
      "Beteiligungsarten: Anhörung, Einverständnis (Mitbestimmung), keine Beteiligung"
    ],
    nachfragen: [
      { frage: "Dürfen Referendare in der Schulkonferenz stimmberechtigt mitwirken?", antwort: "Nein, nur beratende Stimme in GLK, Fach- und Klassenkonferenz." },
      { frage: "Was passiert mit einem rechtswidrigen Konferenzbeschluss?", antwort: "Die Schulleitung muss ihn nicht umsetzen und kann die Schulaufsicht einschalten." }
    ] },

  { id: "mp-1.9-01", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    frage: "Erläutern Sie Inhalt und Durchsetzung der Schulpflicht sowie zentrale Rechte der Schüler.",
    stichpunkte: [
      "Schulpflicht = Verhaltenspflicht + Schulbesuchspflicht, bis 18. Lebensjahr",
      "Entschuldigung: 1./2. Tag formlos, ab 3. Tag schriftlich/elektronisch",
      "Religionsmündigkeit ab 14 Jahren, ab 12 keine Abmeldung gegen den Willen des Kindes",
      "Grundrechte gelten auch an der Schule (Art. 2, 3, 4, 5 GG) – Schule ist kein rechtsfreier Raum"
    ],
    nachfragen: [
      { frage: "Was passiert bei Nichterfüllung der Schulpflicht?", antwort: "Schulzwang gegenüber dem Schüler; Bußgeld/Zwangsgeld gegenüber den Eltern." },
      { frage: "Darf die Schulleitung eine Schülerzeitschrift inhaltlich zensieren?", antwort: "Nein, nur den Vertrieb bei Gesetzesverstößen verbieten." }
    ] },

  { id: "mp-1.10-01", part: "Schulrecht", chapter: "1.10 Mitwirkung der Eltern",
    frage: "Erklären Sie die Dualität des Erziehungsauftrags und die Mitwirkungsrechte der Eltern.",
    stichpunkte: [
      "Dualität: Eltern und Schule bei der Erziehung gleichgestellt",
      "Individualrechte, kollektive Rechte, repräsentative Rechte",
      "Klassenpflegschaft vs. Elternbeirat (nur Informations- und Anhörungsrecht)",
      "Elternrechte bei Volljährigkeit: Individualrechte erlöschen grundsätzlich"
    ],
    nachfragen: [
      { frage: "Kann der Elternbeirat eine schulische Entscheidung erzwingen?", antwort: "Nein, er hat nur Informations- und Anhörungsrecht, keine Entscheidungsrechte." },
      { frage: "Ist eine religiös begründete Befreiung vom Schwimmunterricht automatisch möglich?", antwort: "Nein, religiöse Bedenken sind eine Grenze der Elternrechte, aber keine automatische Befreiung." }
    ] },

  { id: "mp-1.11-01", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    frage: "Stellen Sie das Verfahren und die materiellen Voraussetzungen von Erziehungs- und Ordnungsmaßnahmen nach § 90 SchG dar.",
    stichpunkte: [
      "§ 23 SchG (pädagogisch) vs. § 90 SchG (EOM) abgrenzen",
      "Voraussetzung: schweres/wiederholtes Fehlverhalten, mildestes Mittel, Verhältnismäßigkeit",
      "Zuständigkeit gestaffelt: Klassenlehrer bis 2 Std. Nachsitzen, sonst Schulleiter*in",
      "Anhörung: Schüler immer, Eltern ab Überweisung Parallelklasse, Konferenz ab bestimmter Schwere",
      "Schulausschluss ist ultima ratio, zwei gesetzliche Alternativen (§ 90 Abs. 6)"
    ],
    nachfragen: [
      { frage: "Muss die Schulkonferenz beim Unterrichtsausschluss beteiligt werden?", antwort: "Nein, nur beim Schulausschluss und nur auf Antrag von Schüler bzw. Eltern." },
      { frage: "Hat ein Widerspruch gegen eine § 90-Maßnahme aufschiebende Wirkung?", antwort: "Nein, ausnahmsweise nicht." }
    ] },

  { id: "mp-1.12-01", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    frage: "Worauf gründet sich die schulische Aufsichtspflicht, und nach welchen Grundsätzen richtet sich ihre Intensität?",
    stichpunkte: [
      "Keine eigene gesetzliche Regelung – logische Folge der Schulpflicht/Übernahme aus elterlicher Fürsorge",
      "3 Prinzipien: vorausschauende Umsicht, ununterbrochene Beständigkeit, kontrollierende Nachdrücklichkeit",
      "Aufsichtsintensität ist situationsabhängig, bewusst keine allgemeine KM-Regelung",
      "Beispiele: Schulweg nein, Unterrichtsweg ja, Mittagspause differenziert je nach Umständen"
    ],
    nachfragen: [
      { frage: "Haftet die Lehrkraft persönlich bei fahrlässiger Aufsichtspflichtverletzung?", antwort: "Nein, der Dienstherr haftet nach Art. 34 GG; Regress nur bei Vorsatz oder grober Fahrlässigkeit." },
      { frage: "Besteht Aufsichtspflicht für volljährige Schüler?", antwort: "Nein, nur noch eine reduzierte allgemeine Fürsorgepflicht." }
    ] },

  { id: "mp-1.13-01", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    frage: "Welche rechtlichen Anforderungen gelten bei außerunterrichtlichen Veranstaltungen, insbesondere am Wasser?",
    stichpunkte: [
      "Genehmigung durch die Schulleitung; AUV zählen zu den Dienstaufgaben jeder Lehrkraft",
      "Aufsicht \"rund um die Uhr\" = Verhaltensregeln + Stichproben, keine lückenlose Beobachtung",
      "Rettungsfähigkeit und persönlicher Augenschein statt bloßer Elternbestätigung bei Wasseraufenthalten",
      "Reisevertrag: Lehrkraft handelt in Stellvertretung; Absage nur bei amtlicher Reisewarnung unproblematisch"
    ],
    nachfragen: [
      { frage: "Reicht eine Elternbestätigung zur Schwimmfähigkeit aus?", antwort: "Nein, die Lehrkraft muss sich durch eigenen Augenschein überzeugen." },
      { frage: "Wer trägt die Stornokosten bei unbegründeter Absage durch Eltern?", antwort: "Die Eltern bzw. volljährigen Schüler selbst." }
    ] },

  { id: "mp-1.14-01", part: "Schulrecht", chapter: "1.14 Schulbezogenes Jugendrecht",
    frage: "Unterscheiden Sie die Begriffe \"personensorgeberechtigt\" und \"erziehungsbeauftragt\" im Jugendrecht.",
    stichpunkte: [
      "Personensorgeberechtigt: Eltern bzw. vom Familiengericht mit dem Sorgerecht Beauftragte",
      "Erziehungsbeauftragt: jede Person über 18 Jahre, die im Rahmen der Ausbildung betreut (auch Lehrkräfte)",
      "Jugendschutzgesetz ergänzt das Strafrecht bei schulischen Veranstaltungen"
    ],
    nachfragen: [
      { frage: "Ist eine Lehrkraft bei einer Klassenfahrt erziehungsbeauftragt?", antwort: "Ja, im Rahmen der Betreuung während der Ausbildung/Veranstaltung." }
    ] },

  { id: "mp-1.15-01", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    frage: "Erläutern Sie die Grundzüge der Leistungsfeststellung und die Versetzungsvoraussetzungen.",
    stichpunkte: [
      "NVO als Minimalregelung; mind. 4 Klassenarbeiten/Jahr in Kernfächern, max. 3/Woche",
      "Zeugnis ist Verwaltungsakt (ändert Grundverhältnis), Halbjahresinformation nicht",
      "Versetzungsvoraussetzungen: Notendurchschnitte + KuMuTu-Regel bei Sport/Musik/Kunst",
      "Härtefallklauseln: vorübergehender Leistungsabfall, Versetzung auf Probe (Vetorecht SL)"
    ],
    nachfragen: [
      { frage: "Welche Note erhält ein Schüler bei unentschuldigtem Fehlen in einer Klassenarbeit?", antwort: "Note 6, ohne Ermessensspielraum." },
      { frage: "Was besagt die KuMuTu-Regel?", antwort: "Bei Versetzungsgefährdung nur wegen Sport/Musik/Kunst zählt nur die beste der drei Noten." }
    ] },

  { id: "mp-2.1-01", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    frage: "Warum ist eine Lehrkraft in Baden-Württemberg in der Regel Beamter bzw. Beamtin, und was unterscheidet das Beamten- vom Angestelltenverhältnis?",
    stichpunkte: [
      "Funktionsvorbehalt: hoheitsrechtliche Befugnisse (Zeugnisse, Verwaltungsakte) sind Beamten vorbehalten",
      "Hergebrachte Grundsätze des Berufsbeamtentums, GG Art. 33 (Unbestechlichkeit, Unabhängigkeit u.a.)",
      "Ernennung statt Arbeitsvertrag, Pension statt Rente, Disziplinarverfahren statt Kündigung",
      "Öffentlich-rechtliches Dienst- und Treueverhältnis"
    ],
    nachfragen: [
      { frage: "Was passiert bei Fehlverhalten eines Beamten im Vergleich zu einem Angestellten?", antwort: "Ein Disziplinarverfahren statt Abmahnung/Kündigung." },
      { frage: "Was bedeutet der Funktionsvorbehalt?", antwort: "Hoheitsrechtliche Befugnisse sind im Regelfall Beamten übertragen." }
    ] },

  { id: "mp-2.2-01", part: "Beamtenrecht", chapter: "2.2 Arbeitszeit der Lehrkräfte",
    frage: "Wie ist die Arbeitszeit von Lehrkräften geregelt?",
    stichpunkte: [
      "Deputatsstunden statt Zeitstunden, 25 Deputatsstunden bei Vollzeit",
      "Umrechnungsfaktor 1,8 → rechnerisch ca. 45-Stunden-Woche",
      "Gewichtung je nach Vor-/Nachbereitungsaufwand: 1 / 0,67 / 0,5 Deputatsstunden"
    ],
    nachfragen: [
      { frage: "Warum wird die Lehrerarbeitszeit nicht in Zeitstunden erfasst?", antwort: "Weil Vor- und Nachbereitungszeit schwer messbar sind, daher das Deputatsstunden-Modell." }
    ] },

  { id: "mp-2.3-01", part: "Beamtenrecht", chapter: "2.3 Vorgesetzte",
    frage: "Stellen Sie die Vorgesetztenkette einer Lehrkraft dar.",
    stichpunkte: [
      "Dienstherr: Land Baden-Württemberg",
      "Oberste Dienstbehörde: Kultusministerium",
      "Dienstvorgesetzter (persönliche Angelegenheiten): Regierungspräsidium",
      "Vorgesetzte (dienstliche Tätigkeit): Schulleiter*in, stv. SL, Abteilungsleiter*in"
    ],
    nachfragen: [
      { frage: "An wen richtet sich eine Beschwerde über persönliche Angelegenheiten?", antwort: "Über den Dienstweg an den Dienstvorgesetzten, das Regierungspräsidium." }
    ] },

  { id: "mp-2.4-01", part: "Beamtenrecht", chapter: "2.4 Laufbahnrecht",
    frage: "Beschreiben Sie den Laufbahnweg einer Lehrkraft vom Referendariat bis zur Verbeamtung auf Lebenszeit.",
    stichpunkte: [
      "Vorbereitungsdienst: Beamter auf Widerruf, 18 Monate",
      "Probezeit: Beamter auf Probe, in der Regel 3 Jahre",
      "Dienstliche Beurteilung: 9 Monate nach Einstellung und 3 Monate vor Probezeitende",
      "Laufbahngruppen: einfacher/mittlerer/gehobener/höherer Dienst (ab Studienrat, A13)"
    ],
    nachfragen: [
      { frage: "Kann die Probezeit verkürzt werden?", antwort: "Ja, um 1–2 Jahre, z.B. bei hervorragender Laufbahnprüfung." }
    ] },

  { id: "mp-2.5-01", part: "Beamtenrecht", chapter: "2.5 Einstellung und Entlassung",
    frage: "Welche Voraussetzungen müssen für die Ernennung zum Beamten vorliegen, und wann endet das Beamtenverhältnis?",
    stichpunkte: [
      "Deutsche/EU-Staatsangehörigkeit, Höchstalter i.d.R. 42 Jahre",
      "Eignung, Befähigung, fachliche Leistung",
      "Beendigung: Rücknahme der Ernennung, Entlassung, Verlust der Beamtenrechte, Ruhestand/Tod",
      "Ab 1 Jahr Freiheitsstrafe endet das Beamtenverhältnis kraft Gesetz"
    ],
    nachfragen: [
      { frage: "Was passiert bei Täuschung im Ernennungsverfahren?", antwort: "Rücknahme der Ernennung." }
    ] },

  { id: "mp-2.6-01", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    frage: "Erläutern Sie zentrale Pflichten von Lehrkräften als Beamte, insbesondere zur politischen Neutralität und zur Geschenkannahme.",
    stichpunkte: [
      "3 Pflichtkategorien: Dienstleistungs-, Treue- und Verhaltenspflichten",
      "Beutelsbacher Konsens: Überwältigungsverbot, Kontroversitätsgebot",
      "Geschenke: strenge Wertgrenze bei Einzelpersonen (~5 €), Zuwendungen von Schulfotografen unzulässig",
      "Remonstrationspflicht, Streikverbot, Amtsverschwiegenheit (u.a. Konferenzgeheimnis)"
    ],
    nachfragen: [
      { frage: "Dürfen Lehrkräfte Mitglied einer Partei sein?", antwort: "Ja, solange die Partei nicht verfassungswidrig ist." },
      { frage: "Welche strafrechtliche Folge droht bei Vorteilsannahme?", antwort: "Freiheitsstrafe bis zu drei Jahren oder Geldstrafe." }
    ] },

  { id: "mp-2.7-01", part: "Beamtenrecht", chapter: "2.7 Personalvertretung",
    frage: "Wie ist die Personalvertretung aufgebaut, und welche Beteiligungsstufen gibt es?",
    stichpunkte: [
      "HPR (Kultusministerium), BPR (Regierungspräsidium), ÖPR (Schule/Schulamt)",
      "Beteiligungsstufen: Anhörung < Mitwirkung < Mitbestimmung",
      "Begrenzung durch den Amtsauftrag der Behörde und das Demokratieprinzip"
    ],
    nachfragen: [
      { frage: "Was passiert bei Mitbestimmung, wenn keine Einigung erzielt wird?", antwort: "Die Einigungsstelle entscheidet, bzw. das KM kann sein Evokationsrecht nutzen." }
    ] },

  { id: "mp-2.8-01", part: "Beamtenrecht", chapter: "2.8 Pflichtverletzung: Dienstvergehen von Beamten",
    frage: "Was ist ein Dienstvergehen, und welche Folgen kann es haben?",
    stichpunkte: [
      "Schuldhafte (vorsätzliche/fahrlässige) Pflichtverletzung, auch außerdienstlich möglich",
      "Landesdisziplinargesetz, Schulaufsicht als zuständige Behörde",
      "Eskalationsleiter: Missbilligung → förmliche Disziplinarmaßnahme → Entfernung aus dem Dienst",
      "Mögliche \"Doppelbestrafung\": disziplinar- UND strafrechtlich"
    ],
    nachfragen: [
      { frage: "Wer haftet finanziell bei einer fahrlässigen Amtspflichtverletzung?", antwort: "Der Dienstherr nach Art. 34 GG; Regress beim Beamten nur bei Vorsatz oder grober Fahrlässigkeit." }
    ] },

  { id: "mp-2.9-01", part: "Beamtenrecht", chapter: "2.9 Rechtsstellung der Referendare",
    frage: "Welchen beamtenrechtlichen Status haben Referendare, und welche Besonderheiten gelten für sie?",
    stichpunkte: [
      "Status: Beamte auf Widerruf",
      "Ende kraft Gesetz mit Mitteilung des Prüfungsergebnisses",
      "Einschränkungen: keine längerfristige Beurlaubung, eingeschränkte Nebentätigkeiten",
      "Vergütung für Zusatzunterricht bei Bedarf bis zu 24 Std./Monat"
    ],
    nachfragen: [
      { frage: "Wann droht eine vorzeitige Entlassung eines Referendars?", antwort: "Z.B. wenn eine Verlängerung um mehr als 2 Unterrichtshalbjahre erforderlich wäre." }
    ] }

];
