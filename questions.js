// Fragen-Datenbank für das SBR-Quiz
// Erstellt aus "Zusammenfassung SBR anhand Leitfaden Repetitorium 2025"
//
// Hinweis: options[0] ist IMMER die korrekte Antwort. app.js mischt die
// Reihenfolge der Optionen (und merkt sich dabei, welche korrekt ist) beim Rendern.

window.QUESTIONS = [

  // ===================== 1.1 Pädagogik und Recht =====================
  {
    id: "sr-1.1-01", part: "Schulrecht", chapter: "1.1 Pädagogik und Recht",
    question: "Was ist der erste Schritt im Schema der juristischen Fallbearbeitung?",
    options: ["Feststellung des Sachverhalts", "Auswahl der Rechtsfolge", "Zuordnung zu einem gesetzlichen Tatbestand (Subsumtion)", "Einlegen eines Widerspruchs"],
    explanation: "Ablauf: 1. Sachverhalt feststellen, 2. Subsumtion unter den Tatbestand, 3. Rechtsfolge auswählen (gebunden oder Ermessen)."
  },
  {
    id: "sr-1.1-02", part: "Schulrecht", chapter: "1.1 Pädagogik und Recht",
    question: "Was bedeuten die Formulierungen \"kann\" bzw. \"braucht nicht\" in einem Gesetzestext?",
    options: ["Ermessen der Behörde", "Kein Ermessensspielraum, zwingende Regel", "Im Regelfall verpflichtend, Ausnahmen möglich", "Zustimmung einer anderen Stelle ist erforderlich"],
    explanation: "\"kann\"/\"braucht nicht\" räumt der Behörde Ermessen ein."
  },
  {
    id: "sr-1.1-03", part: "Schulrecht", chapter: "1.1 Pädagogik und Recht",
    question: "Was bedeuten Formulierungen wie \"muss\", \"hat zu\", \"ist\", \"darf nicht\"?",
    options: ["Es besteht kein Ermessensspielraum, Abweichungen sind nicht möglich", "Es besteht volles Ermessen", "Im Regelfall gilt die Vorgabe, Ausnahmen sind möglich", "Vor dem Rechtsakt ist die Stellungnahme einer anderen Stelle einzuholen"],
    explanation: "Diese Formulierungen sind gebundene Entscheidungen ohne Ermessensspielraum."
  },
  {
    id: "sr-1.1-04", part: "Schulrecht", chapter: "1.1 Pädagogik und Recht",
    question: "Was bedeutet die Formulierung \"im Einvernehmen mit\"?",
    options: ["Vor dem Rechtsakt muss das Einverständnis einer anderen Stelle vorliegen", "Der anderen Stelle ist nur Gelegenheit zur Stellungnahme zu geben", "Die Behörde entscheidet nach freiem Ermessen", "Im Regelfall gilt die Vorgabe, Abweichung in Ausnahmefällen möglich"],
    explanation: "\"Im Einvernehmen mit\" verlangt vorheriges Einverständnis; \"im Benehmen mit\" verlangt dagegen nur Gelegenheit zur Stellungnahme."
  },
  {
    id: "sr-1.1-05", part: "Schulrecht", chapter: "1.1 Pädagogik und Recht",
    question: "Wie nennt man es, wenn bei einer Ermessensentscheidung keine Einzelfallprüfung vorgenommen wird (z.B. Vorgeschichte nicht beachtet)?",
    options: ["Ermessensnichtgebrauch", "Ermessensmissbrauch", "Ermessensüberschreitung", "Unverhältnismäßigkeit"],
    explanation: "Ermessensnichtgebrauch = keine Einzelfallprüfung. Ermessensmissbrauch = sachfremde Erwägungen. Ermessensüberschreitung = Rechtsfolge außerhalb des gesetzlichen Rahmens."
  },
  {
    id: "sr-1.1-06", part: "Schulrecht", chapter: "1.1 Pädagogik und Recht",
    question: "Warum sind Rechtsnormen in der Regel generell und abstrakt formuliert?",
    options: ["Weil die Komplexität der Realität es unmöglich macht, jeden Fall vorab juristisch zu regeln", "Weil der Gesetzgeber Detailregelungen an die Verwaltung delegieren will", "Weil abstrakte Normen leichter zu ändern sind", "Weil sie sonst nicht verfassungsgemäß wären"],
    explanation: "Rechtsnormen erfassen allgemeine Situationen und bedürfen daher der (im Schulbereich oft pädagogischen) Auslegung."
  },

  // ===================== 1.2 Erziehungs- und Bildungsauftrag =====================
  {
    id: "sr-1.2-01", part: "Schulrecht", chapter: "1.2 Erziehungs- und Bildungsauftrag",
    question: "Wo ist der Erziehungs- und Bildungsauftrag der Schule neben dem Schulgesetz verfassungsrechtlich verankert?",
    options: ["Grundgesetz Art. 6 und Landesverfassung BW Art. 12", "Grundgesetz Art. 7 und BGB", "Nur in der Landesverfassung", "Nur im Beamtenstatusgesetz"],
    explanation: "Grundgesetz (Art. 6), Landesverfassung BW (Art. 12) und SchG § 1 definieren gemeinsam die Wertegrundlagen der schulischen Erziehung."
  },
  {
    id: "sr-1.2-02", part: "Schulrecht", chapter: "1.2 Erziehungs- und Bildungsauftrag",
    question: "Welche Werte werden in der Landesverfassung BW als Grundlage der schulischen Erziehung genannt?",
    options: ["U.a. \"Geist christlicher Nächstenliebe\" und \"Achtung der Würde und Überzeugung anderer\"", "Ausschließlich staatsbürgerliche Neutralität", "Nur wirtschaftliche Bildungsziele", "Ausschließlich Leistungsorientierung"],
    explanation: "Weitere Werte: Menschlichkeit und Friedensliebe, Brüderlichkeit, freiheitlich-demokratische Gesinnung."
  },
  {
    id: "sr-1.2-03", part: "Schulrecht", chapter: "1.2 Erziehungs- und Bildungsauftrag",
    question: "In welchem Verhältnis steht der schulische zum elterlichen Erziehungsauftrag laut Zusammenfassung?",
    options: ["Sie sind im Zusammenwirken zu sehen (Dualität)", "Der elterliche Auftrag hat immer Vorrang", "Der schulische Auftrag hat immer Vorrang", "Sie sind rechtlich unabhängig voneinander"],
    explanation: "Der Staat kann laut Bundesverfassungsgericht in der Schule unabhängig von den Eltern eigene Erziehungsziele verfolgen, dennoch besteht eine Dualität (vgl. 1.10)."
  },
  {
    id: "sr-1.2-04", part: "Schulrecht", chapter: "1.2 Erziehungs- und Bildungsauftrag",
    question: "Wer beaufsichtigt laut den rechtlichen Grundlagen das Schulwesen?",
    options: ["Der Staat", "Ausschließlich der jeweilige Schulträger", "Die Kultusministerkonferenz", "Ausschließlich die Eltern"],
    explanation: "Der Staat erteilt der Schule einen Erziehungs- und Bildungsauftrag und beaufsichtigt das Schulwesen (vgl. GG Art. 7)."
  },

  // ===================== 1.3 Rechtsquellen im Schulrecht =====================
  {
    id: "sr-1.3-01", part: "Schulrecht", chapter: "1.3 Rechtsquellen im Schulrecht",
    question: "Wer erlässt das Schulgesetz (SchG) für Baden-Württemberg?",
    options: ["Der Landtag BW (Legislative)", "Das Kultusministerium", "Die Regierungspräsidien", "Die Schulkonferenz"],
    explanation: "Das SchG wird als Gesetz vom Landtag BW erlassen."
  },
  {
    id: "sr-1.3-02", part: "Schulrecht", chapter: "1.3 Rechtsquellen im Schulrecht",
    question: "Wer erlässt Rechtsverordnungen wie die Notenbildungsverordnung (NVO) oder die Abiturverordnung?",
    options: ["Das Kultusministerium aufgrund einer gesetzlichen Ermächtigung", "Der Landtag BW", "Die einzelnen Schulen", "Die Regierungspräsidien"],
    explanation: "Rechtsverordnungen werden vom Ministerium aufgrund gesetzlicher Ermächtigung erlassen."
  },
  {
    id: "sr-1.3-03", part: "Schulrecht", chapter: "1.3 Rechtsquellen im Schulrecht",
    question: "Wer erlässt Erlasse, z.B. den jeweiligen Abiturerlass?",
    options: ["Die Regierungspräsidien", "Der Landtag BW", "Das Bundesbildungsministerium", "Die Schulkonferenz"],
    explanation: "Erlasse werden von KM bzw. den Regierungspräsidien im Rahmen von Gesetzen erlassen, sind aber weniger eng bestimmt."
  },
  {
    id: "sr-1.3-04", part: "Schulrecht", chapter: "1.3 Rechtsquellen im Schulrecht",
    question: "Welchen rechtlichen Status haben Beschlüsse der Kultusministerkonferenz (KMK)?",
    options: ["Sie sind nicht unmittelbar geltendes Recht und müssen von den Ländern einzeln umgesetzt werden", "Sie gelten unmittelbar und einheitlich in allen Bundesländern", "Sie ersetzen das jeweilige Landesschulgesetz", "Sie sind nur für Gymnasien verbindlich"],
    explanation: "Bildung ist Ländersache (Kulturhoheit, GG Art. 70); KMK-Beschlüsse können von den Ländern unterschiedlich umgesetzt werden."
  },
  {
    id: "sr-1.3-05", part: "Schulrecht", chapter: "1.3 Rechtsquellen im Schulrecht",
    question: "Welches Abkommen von 1964 schuf bundesweit einheitliche Rahmenbedingungen im Schulwesen (u.a. Notenstufen)?",
    options: ["Das Hamburger Abkommen", "Das Bologna-Abkommen", "Der Beutelsbacher Konsens", "Das Königsteiner Abkommen"],
    explanation: "Das Hamburger Abkommen wurde 2020 durch ein Folgeabkommen abgelöst."
  },
  {
    id: "sr-1.3-06", part: "Schulrecht", chapter: "1.3 Rechtsquellen im Schulrecht",
    question: "Wer muss \"wesentliche Entscheidungen\" (z.B. Bildungspläne, Erziehungs-/Ordnungsmaßnahmen) treffen?",
    options: ["Der Gesetzgeber selbst", "Die Verwaltung (z.B. Regierungspräsidium)", "Die einzelne Schulleitung", "Die Kultusministerkonferenz"],
    explanation: "Wesentliche Entscheidungen sind wesentlich für die Verwirklichung von Grundrechten und müssen deshalb per Gesetz geregelt werden."
  },
  {
    id: "sr-1.3-07", part: "Schulrecht", chapter: "1.3 Rechtsquellen im Schulrecht",
    question: "Warum ist die Schulpflicht im Schulgesetz geregelt, die Beurlaubung dagegen nur in einer Verordnung (SchulbesuchsVO)?",
    options: ["Weil ein Gesetz ranghöher ist als eine Verordnung und die Schulpflicht eine wesentliche Entscheidung darstellt", "Weil Verordnungen grundsätzlich wichtiger sind als Gesetze", "Weil Verordnungen vom Landtag erlassen werden", "Es gibt keinen rechtlich relevanten Unterschied"],
    explanation: "Gesetz steht über Verordnung in der Normenpyramide; wesentliche Entscheidungen bleiben dem Gesetzgeber vorbehalten."
  },

  // ===================== 1.4 Gliederung des Schulwesens in BW =====================
  {
    id: "sr-1.4-01", part: "Schulrecht", chapter: "1.4 Gliederung des Schulwesens in BW",
    question: "Wie viele Schularten gibt es insgesamt in Baden-Württemberg?",
    options: ["12", "5", "8", "16"],
    explanation: "Für die Prüfung sind mindestens 5 zu nennen: GS, HS/WRS, RS, Gymnasium, GMS, SBBZ."
  },
  {
    id: "sr-1.4-02", part: "Schulrecht", chapter: "1.4 Gliederung des Schulwesens in BW",
    question: "Welche Schulen zählen zu den Pflichtschulen mit festem Schulbezirk (keine freie Schulwahl)?",
    options: ["Grundschule, Berufsschule, SBBZ", "Gymnasium, Realschule, GMS", "Nur die Grundschule", "Alle allgemeinbildenden Schulen"],
    explanation: "Wahlschulen (ohne festen Schulbezirk) sind dagegen z.B. HS, WRS, RS, GMS, Gymnasium, Berufsfachschule, Berufskolleg."
  },
  {
    id: "sr-1.4-03", part: "Schulrecht", chapter: "1.4 Gliederung des Schulwesens in BW",
    question: "Nach welcher Regel wird die Grundschulempfehlung gebildet?",
    options: ["\"2 aus 3\": Empfehlung der Klassenkonferenz, Kompass 4, Elternwunsch", "Allein nach dem Notenschnitt in Deutsch und Mathematik", "Allein nach dem Elternwunsch", "Allein nach einem zentralen Potentialtest"],
    explanation: "Stimmen weder Klassenkonferenz-Empfehlung noch Kompass 4 mit dem Elternwunsch überein, ist ein Potentialtest möglich."
  },
  {
    id: "sr-1.4-04", part: "Schulrecht", chapter: "1.4 Gliederung des Schulwesens in BW",
    question: "Welche weiterführende Schulart unterrichtet neben dem Gymnasium auch Kinder mit Gymnasialempfehlung?",
    options: ["Die Gemeinschaftsschule (GMS)", "Die Realschule", "Die Werkrealschule", "Das SBBZ"],
    explanation: "Realschule und GMS unterrichten Kinder mit WRS- und RS-Empfehlung; GMS zusätzlich auch mit Gymnasialempfehlung."
  },
  {
    id: "sr-1.4-05", part: "Schulrecht", chapter: "1.4 Gliederung des Schulwesens in BW",
    question: "Wie heißt die Ordnung, die alle Regularien für den Wechsel der Schulart (z.B. Gymnasium auf Realschule) enthält?",
    options: ["Multilaterale Versetzungsordnung", "Notenbildungsverordnung", "Versetzungsordnung", "Schulbesuchsverordnung"],
    explanation: "Ziel/Zweck der multilateralen Versetzungsordnung ist die Bildungsgerechtigkeit im durchlässigen Bildungssystem."
  },
  {
    id: "sr-1.4-06", part: "Schulrecht", chapter: "1.4 Gliederung des Schulwesens in BW",
    question: "Was unterscheidet eine Ersatzschule von einer Ergänzungsschule?",
    options: ["Die Ersatzschule ersetzt eine öffentliche Schule und erfüllt die Schulpflicht, die Ergänzungsschule nicht", "Die Ergänzungsschule erfüllt die Schulpflicht, die Ersatzschule nicht", "Beide erfüllen die Schulpflicht gleichermaßen", "Nur staatliche Schulen können Ersatzschulen sein"],
    explanation: "Beispiel Ersatzschule: Waldorfschule, Schulen in kirchlicher Trägerschaft (z.B. ELGS). Beispiel Ergänzungsschule: Sprachschule."
  },
  {
    id: "sr-1.4-07", part: "Schulrecht", chapter: "1.4 Gliederung des Schulwesens in BW",
    question: "Bis zu welchem Lebensjahr besteht in BW grundsätzlich Schulpflicht?",
    options: ["Bis zum 18. Lebensjahr", "Bis zum 16. Lebensjahr", "Bis zum Ende der Sekundarstufe I", "Bis zum 21. Lebensjahr"],
    explanation: "Endet eine weiterführende Schule (z.B. RS/WRS) vorher, besteht bis zum 18. Lebensjahr Pflicht, z.B. eine Berufsschule zu besuchen."
  },

  // ===================== 1.5 Schulträger, Lernmittelfreiheit =====================
  {
    id: "sr-1.5-01", part: "Schulrecht", chapter: "1.5 Schulträger, Lernmittelfreiheit",
    question: "Wer ist in der Regel Schulträger (Sachkostenträger) einer öffentlichen Schule?",
    options: ["Die Gemeinde", "Das Land BW", "Der Bund", "Das Kultusministerium"],
    explanation: "Bei Schulen in freier Trägerschaft (z.B. ELGS) ist der Schulträger die jeweilige Schulstiftung."
  },
  {
    id: "sr-1.5-02", part: "Schulrecht", chapter: "1.5 Schulträger, Lernmittelfreiheit",
    question: "Wer ist Dienstherr und trägt die Personalkosten der Lehrkräfte?",
    options: ["Das Land BW", "Der jeweilige Schulträger (z.B. Gemeinde)", "Der Bund", "Die Schulleitung"],
    explanation: "Sachkosten trägt der Schulträger, Personalkosten der Lehrkräfte trägt das Land als Dienstherr."
  },
  {
    id: "sr-1.5-03", part: "Schulrecht", chapter: "1.5 Schulträger, Lernmittelfreiheit",
    question: "Haben Lehrkräfte gegenüber Sekretärin oder Hausmeister eine generelle Weisungsbefugnis?",
    options: ["Nein, Lehrkräfte haben keine generelle Weisungsbefugnis", "Ja, jede Lehrkraft ist weisungsbefugt", "Nur der/die dienstälteste Lehrkraft ist weisungsbefugt", "Nur bei Gefahr im Verzug"],
    explanation: "Der/die Schulleiter*in ist dagegen gegenüber allen an der Schule Tätigen weisungsbefugt, soweit es um Schulbetrieb und Ordnung geht."
  },
  {
    id: "sr-1.5-04", part: "Schulrecht", chapter: "1.5 Schulträger, Lernmittelfreiheit",
    question: "Wann wird ein Lernmittel zum \"notwendigen Lernmittel\" und unterliegt damit der Lernmittelfreiheit?",
    options: ["Wenn eine Fachlehrkraft es zum verpflichtenden Gegenstand ihres Unterrichts macht", "Nur wenn es im Bildungsplan ausdrücklich genannt wird", "Erst wenn der Schulträger es genehmigt", "Nie – Lernmittel sind grundsätzlich kostenpflichtig"],
    explanation: "Beispiele notwendiger Lernmittel: Taschenrechner, Ganzschriften, Workbooks."
  },
  {
    id: "sr-1.5-05", part: "Schulrecht", chapter: "1.5 Schulträger, Lernmittelfreiheit",
    question: "Wie hoch ist die aktuelle Geringfügigkeitsgrenze, bis zu der Eltern für Lernmittel selbst zahlen dürfen?",
    options: ["Ca. 1 Euro", "Ca. 10 Euro", "Ca. 50 Cent", "Es gibt keine Geringfügigkeitsgrenze"],
    explanation: "Ausnahme: An Privatschulen darf die Schule selbst entscheiden, wieviel gezahlt werden muss."
  },
  {
    id: "sr-1.5-06", part: "Schulrecht", chapter: "1.5 Schulträger, Lernmittelfreiheit",
    question: "Ist eine verpflichtende \"Kopierpauschale\" zulässig?",
    options: ["Nein, sie verstößt gegen die Schulgeldfreiheit und darf höchstens freiwillig erhoben werden", "Ja, bis zur Geringfügigkeitsgrenze", "Ja, wenn die Schulkonferenz zustimmt", "Ja, aber nur an Gymnasien"],
    explanation: "Eine Kaution oder Leihgebühr ist bei Lernmitteln ebenfalls nicht zulässig."
  },
  {
    id: "sr-1.5-07", part: "Schulrecht", chapter: "1.5 Schulträger, Lernmittelfreiheit",
    question: "Zählen Schulranzen, Hefte oder Sportbekleidung zu den \"Lernmitteln\" im Sinne der Lernmittelfreiheit?",
    options: ["Nein, das sind \"Ausstattungsgegenstände\" der Schüler und fallen nicht unter die Lernmittelfreiheit", "Ja, sie sind vollständig kostenfrei zu stellen", "Nur Hefte fallen unter die Lernmittelfreiheit", "Das hängt allein vom Schulträger ab"],
    explanation: "Ausstattungsgegenstände wie Schulranzen, Mäppchen, Hefte, Zirkel, Sport- und Schwimmbekleidung sind von den Eltern zu tragen."
  },

  // ===================== 1.6 Schulaufsicht =====================
  {
    id: "sr-1.6-01", part: "Schulrecht", chapter: "1.6 Schulaufsicht",
    question: "Wo ist die staatliche Schulaufsicht grundgesetzlich verankert?",
    options: ["GG Art. 7 (\"Das gesamte Schulwesen steht unter der Aufsicht des Staates\")", "GG Art. 6", "GG Art. 33", "Nur im Schulgesetz BW"],
    explanation: "Schulaufsicht ist demnach eine staatliche Aufgabe."
  },
  {
    id: "sr-1.6-02", part: "Schulrecht", chapter: "1.6 Schulaufsicht",
    question: "Wer übt bei Schulen in freier Trägerschaft (z.B. ELGS) die Dienstaufsicht über Schulleiter und Lehrkräfte aus?",
    options: ["Der Träger (z.B. die Schulstiftung)", "Das Kultusministerium", "Das Regierungspräsidium", "Das staatliche Schulamt"],
    explanation: "Der Staat hat bei Schulen in freier Trägerschaft keine Dienstaufsicht, wohl aber die allgemeine Schulaufsicht."
  },
  {
    id: "sr-1.6-03", part: "Schulrecht", chapter: "1.6 Schulaufsicht",
    question: "Welche Behörde ist oberste Schulaufsichtsbehörde und für Gymnasien zuständig (Rechtsverordnungen, Bildungspläne)?",
    options: ["Das Kultusministerium (KM)", "Die Regierungspräsidien", "Die staatlichen Schulämter", "Der Schulträger"],
    explanation: "Aufgaben des KM: Rechtsverordnungen, Verwaltungsvorschriften, Bildungspläne, Versetzungs- und Prüfungsordnungen."
  },
  {
    id: "sr-1.6-04", part: "Schulrecht", chapter: "1.6 Schulaufsicht",
    question: "Welche Behörde übt als obere Schulaufsichtsbehörde die Fach- und Dienstaufsicht über Gymnasien aus?",
    options: ["Die (4) Regierungspräsidien", "Die staatlichen Schulämter", "Das Kultusministerium", "Der Landtag BW"],
    explanation: "Die 4 Regierungspräsidien in BW üben Fachaufsicht über die Schulen und Dienstaufsicht über Lehrkräfte und Schulleiter aus."
  },
  {
    id: "sr-1.6-05", part: "Schulrecht", chapter: "1.6 Schulaufsicht",
    question: "Für welche Schularten ist die untere Schulaufsichtsbehörde (staatliches Schulamt) NICHT zuständig?",
    options: ["Für Gymnasien und berufliche Schulen (dort ist das RP zuständig)", "Für Grundschulen", "Für Hauptschulen/Werkrealschulen", "Für Realschulen"],
    explanation: "Die untere Schulaufsichtsbehörde ist zuständig für Grund-, Haupt-, Werkreal- und Realschulen, nicht aber für Gymnasium und berufliche Schulen."
  },
  {
    id: "sr-1.6-06", part: "Schulrecht", chapter: "1.6 Schulaufsicht",
    question: "Was zählt zur Fachaufsicht im engeren Sinne der Schulaufsicht?",
    options: ["Einhaltung der Bildungspläne und Unterrichtsqualität", "Wahrnehmung der Pflichten des Schulträgers", "Erfüllung der Dienstpflichten von Lehrkräften", "Namensgebung der Schule"],
    explanation: "Die Fachaufsicht steuert v.a. die Einhaltung der Bildungspläne und die Unterrichtsqualität."
  },
  {
    id: "sr-1.6-07", part: "Schulrecht", chapter: "1.6 Schulaufsicht",
    question: "Wo liegt eine Grenze der Schulaufsicht bezüglich der Unterrichtsgestaltung?",
    options: ["Die Methodenfreiheit der Lehrkräfte – die Schulaufsicht darf keine konkrete Unterrichtsmethode vorschreiben", "Es gibt keine Grenzen, die Schulaufsicht darf jede Methode vorschreiben", "Nur die Schulleitung darf Methoden vorschreiben", "Die Grenze liegt bei der Notengebung"],
    explanation: "Innerhalb der Bildungspläne können Lehrkräfte ihre Methoden frei wählen."
  },
  {
    id: "sr-1.6-08", part: "Schulrecht", chapter: "1.6 Schulaufsicht",
    question: "Welche Institution ist u.a. für Statistik, Kompetenzmessung (z.B. VERA 8) und empirische Bildungsforschung zuständig?",
    options: ["IBBW (Institut für Bildungsanalysen Baden-Württemberg)", "ZSL (Zentrum für Schulqualität und Lehrerbildung)", "Der Elternbeirat", "Die Schulkonferenz"],
    explanation: "Das ZSL ist dagegen zuständig für Aus-/Fortbildung, Fachberater, Bildungspläne, Personalentwicklung."
  },

  // ===================== 1.7 Verwaltungsakte, Widerspruch =====================
  {
    id: "sr-1.7-01", part: "Schulrecht", chapter: "1.7 Verwaltungsakte, Widerspruch",
    question: "Was unterscheidet einen Verwaltungsakt vom einfachen Verwaltungshandeln?",
    options: ["Der Verwaltungsakt regelt einen Einzelfall mit unmittelbarer Rechtswirkung nach außen (Grundverhältnis), das Verwaltungshandeln betrifft nur das Betriebsverhältnis", "Ein Verwaltungsakt ist immer mündlich, Verwaltungshandeln immer schriftlich", "Verwaltungshandeln kann nur von der Schulaufsicht vorgenommen werden", "Es gibt keinen rechtlichen Unterschied"],
    explanation: "Beispiel Verwaltungshandeln: Schüler im Klassenzimmer umsetzen. Beispiel Verwaltungsakt: Nichtversetzung, Schulausschluss."
  },
  {
    id: "sr-1.7-02", part: "Schulrecht", chapter: "1.7 Verwaltungsakte, Widerspruch",
    question: "Welches Rechtsmittel steht gegen ein einfaches Verwaltungshandeln (z.B. Umsetzen im Klassenzimmer) zur Verfügung?",
    options: ["Eine formlose Beschwerde", "Ein förmlicher Widerspruch mit aufschiebender Wirkung", "Eine Klage beim Verwaltungsgericht", "Kein Rechtsmittel möglich"],
    explanation: "Gegen einen Verwaltungsakt steht dagegen der förmliche Widerspruch zur Verfügung."
  },
  {
    id: "sr-1.7-03", part: "Schulrecht", chapter: "1.7 Verwaltungsakte, Widerspruch",
    question: "Wie lange beträgt die Widerspruchsfrist gegen einen Verwaltungsakt in der Regel?",
    options: ["1 Monat", "2 Wochen", "3 Monate", "1 Jahr"],
    explanation: "Bei fehlender Rechtsmittelbelehrung verlängert sich die Frist auf 1 Jahr."
  },
  {
    id: "sr-1.7-04", part: "Schulrecht", chapter: "1.7 Verwaltungsakte, Widerspruch",
    question: "Was passiert mit der Widerspruchsfrist, wenn ein Verwaltungsakt (z.B. ein Zeugnis) ohne Rechtsmittelbelehrung ergeht?",
    options: ["Sie verlängert sich auf 1 Jahr", "Sie bleibt unverändert bei 1 Monat", "Der Widerspruch wird unzulässig", "Sie verkürzt sich auf 2 Wochen"],
    explanation: "Zeugnisse/Abitur ergehen typischerweise ohne Rechtsmittelbelehrung."
  },
  {
    id: "sr-1.7-05", part: "Schulrecht", chapter: "1.7 Verwaltungsakte, Widerspruch",
    question: "Hat ein Widerspruch gegen eine Erziehungs- und Ordnungsmaßnahme nach § 90 SchG aufschiebende Wirkung?",
    options: ["Nein, ausnahmsweise nicht", "Ja, immer", "Nur bei Schulausschluss", "Nur wenn die Eltern zustimmen"],
    explanation: "Mit Ausnahmen wie § 90 SchG hat ein Widerspruch grundsätzlich aufschiebende Wirkung."
  },
  {
    id: "sr-1.7-06", part: "Schulrecht", chapter: "1.7 Verwaltungsakte, Widerspruch",
    question: "Bei welchen Stellen kann ein Widerspruch gegen einen schulischen Verwaltungsakt eingelegt werden?",
    options: ["Bei der Schule oder beim Regierungspräsidium", "Ausschließlich beim Verwaltungsgericht", "Ausschließlich beim Kultusministerium", "Beim Elternbeirat"],
    explanation: "Hilft die Schule dem Widerspruch nicht ab, entscheidet das RP als Widerspruchsbehörde; danach ist Klage beim Verwaltungsgericht möglich."
  },

  // ===================== 1.8 Schulverfassung, Konferenzen =====================
  {
    id: "sr-1.8-01", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Was regelt die \"Schulverfassung\"?",
    options: ["Welche Personen/Gremien an der Schule für welche Aufgaben und Entscheidungen zuständig sind", "Nur die Zusammensetzung der Schulkonferenz", "Ausschließlich die Rechte der Schülermitverantwortung", "Die Bildungsziele der jeweiligen Schulart"],
    explanation: "Die Schulverfassung fußt auf §§ 41–47 SchG."
  },
  {
    id: "sr-1.8-02", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Warum gibt es in BW keine Dienstordnung für Schulleiter, obwohl § 41 SchG dies vorsieht?",
    options: ["Damit ein Ermessensspielraum für eigenverantwortliche Entscheidungen des Schulleiters bleibt", "Weil das Kultusministerium dafür nicht zuständig ist", "Weil eine solche Dienstordnung verfassungswidrig wäre", "Weil Schulleiter keine Beamten sind"],
    explanation: "Eine Dienstordnung wäre eine vom Kultusministerium zu erlassende Rechtsverordnung, die die Aufgaben der Schulleitung eng regeln würde."
  },
  {
    id: "sr-1.8-03", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Welches Gremium gilt laut Schulgesetz als \"gemeinsames Organ der Schule\"?",
    options: ["Die Schulkonferenz", "Die Gesamtlehrerkonferenz (GLK)", "Der Elternbeirat", "Der Schülerrat"],
    explanation: "Die Schulkonferenz (§ 47 SchG) soll das Zusammenwirken von Eltern, Schüler*innen, Lehrkräften und Schulleitung fördern."
  },
  {
    id: "sr-1.8-04", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Wie ist der Vorsitz der Schulkonferenz gemäß SchG § 47 geregelt?",
    options: ["Schulleiter*in als Vorsitzende*r, Elternbeiratsvorsitzende*r als stv. Vorsitzende*r", "Der Elternbeirat wählt frei einen Vorsitzenden aus seiner Mitte", "Der Schülersprecher hat immer den Vorsitz", "Der Vorsitz rotiert jährlich zwischen den Gruppen"],
    explanation: "Zusammensetzung zusätzlich: je 3 gewählte Lehrkräfte, Elternvertreter*innen und Schülervertreter*innen, plus 1 Schülersprecher."
  },
  {
    id: "sr-1.8-05", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Wie oft muss die Schulkonferenz mindestens tagen?",
    options: ["Mindestens einmal pro Halbjahr", "Mindestens einmal pro Monat", "Mindestens einmal pro Schuljahr", "Nur bei Bedarf, keine Mindestfrequenz"],
    explanation: "Beschlussfähig ist die Schulkonferenz bei Anwesenheit von mehr als der Hälfte der Mitglieder."
  },
  {
    id: "sr-1.8-06", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Welche Art der Beteiligung der Schulkonferenz ist beim Erlass der Haus- und Pausenordnung durch die GLK erforderlich?",
    options: ["Einverständnis (Mitbestimmung) – GLK und Schulkonferenz müssen zustimmen", "Nur Anhörung, die Entscheidung kann trotzdem gegen die Schulkonferenz fallen", "Keine Beteiligung erforderlich", "Alleinentscheidung der Schulkonferenz ohne GLK"],
    explanation: "Bei Dissens ist eine nochmalige Beratung in der GLK erforderlich; hält die GLK an ihrer Position fest, entscheidet auf Wunsch der SL das RP."
  },
  {
    id: "sr-1.8-07", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Dürfen Referendar*innen in der Schulkonferenz stimmberechtigt mitwirken?",
    options: ["Nein, sie gehören nicht in die Schulkonferenz (außer ggf. als Gast ohne Stimmrecht)", "Ja, mit vollem Stimmrecht", "Ja, aber nur mit beratender Stimme", "Nur im 2. Ausbildungsabschnitt"],
    explanation: "In GLK, Fach- und Klassenkonferenzen nehmen Referendar*innen dagegen mit beratender Stimme teil."
  },
  {
    id: "sr-1.8-08", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Was gilt für rechtswidrige Konferenzbeschlüsse?",
    options: ["Sie sind nicht bindend; die Schulleitung darf sie nicht umsetzen und kann die Schulaufsicht einschalten", "Sie werden nach 4 Wochen automatisch rechtskräftig", "Sie müssen trotzdem umgesetzt werden, solange kein Widerspruch erfolgt", "Nur die Schulaufsicht kann sie aufheben, die Schulleitung nicht"],
    explanation: "Die Schulleitung ist nicht verpflichtet, rechtswidrige Beschlüsse umzusetzen."
  },
  {
    id: "sr-1.8-09", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Sind digitale bzw. hybride Konferenzformate grundsätzlich zulässig?",
    options: ["Nein, Konferenzen sind grundsätzlich Präsenzveranstaltungen; Ausnahmen nur mit Zustimmung der Schulleitung", "Ja, uneingeschränkt", "Ja, aber nur für die Schulkonferenz", "Nein, digitale Formate sind generell unzulässig, auch nicht ausnahmsweise"],
    explanation: "Digitale/hybride Formate sind nur in Ausnahmefällen mit Zustimmung der Schulleitung zulässig."
  },
  {
    id: "sr-1.8-10", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Wofür steht die Abkürzung SMV?",
    options: ["Schüler mit Verantwortung", "Schulmitwirkungsverordnung", "Schülermitverwaltungsvorsitz", "Schulische Mitbestimmungsversammlung"],
    explanation: "Die SMV stellt sich ihre Aufgaben im gesetzlich festgelegten Rahmen selbst (SchG §§ 62-70, SMVVO)."
  },
  {
    id: "sr-1.8-11", part: "Schulrecht", chapter: "1.8 Schulverfassung, Konferenzen",
    question: "Wer nimmt an der Zeugniskonferenz zwingend teil und was ist zwingend erforderlich?",
    options: ["Alle unterrichtenden Lehrkräfte; Beschlussfähigkeit und Protokollführung sind zwingend", "Nur die Klassenlehrkraft entscheidet allein", "Nur die Fachlehrkräfte der Kernfächer", "Die Entscheidung trifft allein die Schulleitung"],
    explanation: "In der Zeugniskonferenz werden Noten, Versetzungen und Prüfungszulassungen beschlossen."
  },

  // ===================== 1.9 Rechtsstellung von Schüler*innen, Schulpflicht =====================
  {
    id: "sr-1.9-01", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Was umfasst die Schulpflicht neben der Schulbesuchspflicht noch?",
    options: ["Die Verhaltenspflicht (Einhaltung der Schulordnung)", "Nur die Teilnahme an kostenpflichtigen außerunterrichtlichen Veranstaltungen", "Die Pflicht zur Mitgliedschaft in der SMV", "Es gibt keine weitere Pflicht"],
    explanation: "Zur Schulbesuchspflicht zählen u.a. regelmäßige Teilnahme am Unterricht und Nachsitzen nach § 90."
  },
  {
    id: "sr-1.9-02", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Wer ist für die Erfüllung der Schulpflicht eines minderjährigen Kindes verantwortlich?",
    options: ["Die Erziehungsberechtigten", "Ausschließlich das Kind selbst", "Der Schulträger", "Die Schulaufsicht"],
    explanation: "Bei Nichterfüllung droht den Erziehungsberechtigten ein Ordnungswidrigkeitsverfahren (Bußgeld) bzw. Zwangsgeld."
  },
  {
    id: "sr-1.9-03", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Welche Maßnahme kann gegenüber einem schulpflichtigen Schüler bei Nichterfüllung der Schulpflicht durch die Polizeibehörde ergriffen werden?",
    options: ["Schulzwang", "Sofortiger Schulausschluss", "Ein Bußgeld gegen den Schüler selbst", "Zwangsgeld gegen den Schüler"],
    explanation: "Gegenüber den Erziehungsberechtigten sind dagegen Ordnungswidrigkeitsverfahren/Zwangsgeld vorgesehen."
  },
  {
    id: "sr-1.9-04", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Bis wann muss eine Verhinderung im Regelfall spätestens entschuldigt werden?",
    options: ["Spätestens am 3. Tag nach der Verhinderung", "Am selben Tag zwingend telefonisch", "Innerhalb einer Woche", "Es gibt keine feste Frist"],
    explanation: "Am 1. oder 2. Tag reicht meist eine formlose (auch telefonische) Mitteilung; ab dem 3. Tag ist eine schriftliche/elektronische Entschuldigung erforderlich."
  },
  {
    id: "sr-1.9-05", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Ab wann haben Schüler*innen ein Selbstentschuldigungsrecht?",
    options: ["Ab Eintritt der Volljährigkeit (18 Jahre)", "Ab dem 14. Lebensjahr", "Ab dem 16. Lebensjahr", "Bereits ab der Sekundarstufe I"],
    explanation: "Vor der Volljährigkeit entschuldigen die Erziehungsberechtigten."
  },
  {
    id: "sr-1.9-06", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Wer entscheidet über eine Beurlaubung von mehr als 2 aufeinanderfolgenden Unterrichtstagen?",
    options: ["Der/die Schulleiter*in", "Die Klassenlehrkraft", "Der Fachlehrer", "Der Elternbeirat"],
    explanation: "Bis zu 2 aufeinanderfolgende Unterrichtstage entscheidet die Klassenlehrkraft; Ferienverlängerungen sind i.d.R. nicht zulässig."
  },
  {
    id: "sr-1.9-07", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Ab welchem Alter können sich Schüler*innen nicht mehr gegen ihren eigenen Willen vom Religionsunterricht abmelden?",
    options: ["Ab dem 12. Lebensjahr", "Ab dem 16. Lebensjahr", "Ab dem 10. Lebensjahr", "Ab dem 18. Lebensjahr"],
    explanation: "Bis zur Religionsmündigkeit (14 Jahre) entscheiden grundsätzlich die Erziehungsberechtigten, ab 12 Jahren aber nicht mehr gegen den Willen des Kindes."
  },
  {
    id: "sr-1.9-08", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Welches Fach müssen Schüler*innen besuchen, wenn sie vom Religionsunterricht abgemeldet sind (ab Kl. 5/6)?",
    options: ["Ethik", "Gemeinschaftskunde", "Es besteht keine Pflicht zu einem Ersatzfach", "Philosophie"],
    explanation: "Ethik ist das gesetzlich vorgesehene Auffangfach."
  },
  {
    id: "sr-1.9-09", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Darf die Schulleitung den Inhalt einer Schülerzeitschrift zensieren?",
    options: ["Nein, sie kann nur den Vertrieb auf dem Schulgelände verbieten, wenn Inhalt oder Vertriebsart gegen ein Gesetz verstoßen", "Ja, die Schulleitung darf jederzeit Inhalte streichen", "Ja, aber nur mit Zustimmung des Elternbeirats", "Nein, die Schulleitung hat keinerlei Einflussmöglichkeit"],
    explanation: "Schülerzeitschriften sind durch Meinungsfreiheit, Pressefreiheit und Zensurverbot geschützt."
  },
  {
    id: "sr-1.9-10", part: "Schulrecht", chapter: "1.9 Rechtsstellung SuS, Schulpflicht",
    question: "Gilt das Grundgesetz uneingeschränkt auch innerhalb der Schule?",
    options: ["Ja, die Schule ist kein rechtsfreier Raum – das GG gilt in vollem Maße, Grundrechte können aber durch Gesetze eingeschränkt werden", "Nein, an der Schule gelten Grundrechte nicht", "Nur die Meinungsfreiheit gilt an der Schule nicht", "Grundrechte gelten nur für volljährige Schüler*innen"],
    explanation: "Grundrechte sind nicht grenzenlos, aber ihr Wesensgehalt darf nicht angetastet werden (z.B. Art. 2, 3, 4, 5, 12 GG)."
  },

  // ===================== 1.10 Mitwirkung der Eltern =====================
  {
    id: "sr-1.10-01", part: "Schulrecht", chapter: "1.10 Mitwirkung der Eltern",
    question: "Was bedeutet \"Dualität des Erziehungsauftrags\"?",
    options: ["Eltern und Schule sind bei der Erziehung gleichgestellt", "Der schulische Erziehungsauftrag geht dem elterlichen immer vor", "Nur die Eltern tragen die Verantwortung für die Erziehung", "Die Dualität betrifft nur volljährige Schüler*innen"],
    explanation: "Grundlage: Grundgesetz (Art. 6) und Landesverfassung BW (Art. 12)."
  },
  {
    id: "sr-1.10-02", part: "Schulrecht", chapter: "1.10 Mitwirkung der Eltern",
    question: "Ist die Schule bei gemeinsamem Sorgerecht verpflichtet, den getrennt lebenden Elternteil bei Meinungsverschiedenheiten separat schriftlich zu informieren?",
    options: ["Nein, dazu ist die Schule nicht verpflichtet", "Ja, immer verpflichtend", "Nur wenn der andere Elternteil dies schriftlich beantragt", "Nur bei minderjährigen Schülern über 14 Jahren"],
    explanation: "Lebenspartner etc. haben keine Elternrechte im Sinne des Schulrechts."
  },
  {
    id: "sr-1.10-03", part: "Schulrecht", chapter: "1.10 Mitwirkung der Eltern",
    question: "Was gilt für die Elternrechte, sobald ein Schüler volljährig wird?",
    options: ["Kollektive Elternrechte bleiben bestehen, Individualrechte (Entscheidungs-/Informationsrecht) erlöschen grundsätzlich", "Alle Elternrechte erlöschen vollständig", "Nichts ändert sich, alle Rechte bleiben bestehen", "Nur das Informationsrecht bleibt automatisch bestehen"],
    explanation: "Trotz Volljährigkeit können Auskünfte an Eltern erfolgen, wenn der/die Schüler*in nicht widerspricht."
  },
  {
    id: "sr-1.10-04", part: "Schulrecht", chapter: "1.10 Mitwirkung der Eltern",
    question: "Was ist die Klassenpflegschaft?",
    options: ["Die Zusammenwirkung von Eltern und Lehrern einer Klasse (Elternabend)", "Ein Gremium ausschließlich aus Elternvertretern aller Klassen einer Schule", "Ein Unterausschuss der Schulkonferenz", "Ein rein schulinternes Gremium ohne Elternbeteiligung"],
    explanation: "Vorsitz: der/die gewählte Klassenelternvertreter*in."
  },
  {
    id: "sr-1.10-05", part: "Schulrecht", chapter: "1.10 Mitwirkung der Eltern",
    question: "Wer darf NICHT zum Klassenelternvertreter gewählt werden?",
    options: ["Nicht-Erziehungsberechtigte, Lehrer, Schulleiter, Schüler*innen", "Nur Väter dürfen nicht gewählt werden", "Nur alleinerziehende Elternteile dürfen nicht gewählt werden", "Es gibt keine Einschränkung bei der Wahl"],
    explanation: "Wählbar sind grundsätzlich alle Erziehungsberechtigten der Klasse."
  },
  {
    id: "sr-1.10-06", part: "Schulrecht", chapter: "1.10 Mitwirkung der Eltern",
    question: "Welche formalisierten Rechte hat der Elternbeirat (Vertretung aller Eltern einer Schule)?",
    options: ["Nur Informations- und Anhörungsrecht, keine eigenen Entscheidungs- oder Mitbestimmungsrechte", "Volles Mitbestimmungsrecht bei allen schulischen Entscheidungen", "Ein Vetorecht gegenüber der Schulkonferenz", "Entscheidungsrecht über die Hausordnung"],
    explanation: "Die vom Elternbeirat gewählten Elternvertreter*innen können aber Themen in der Schulkonferenz aufgreifen."
  },
  {
    id: "sr-1.10-07", part: "Schulrecht", chapter: "1.10 Mitwirkung der Eltern",
    question: "Ist eine religiös begründete pauschale Befreiung vom Schwimmunterricht ohne Weiteres möglich?",
    options: ["Nein, religiöse Bedenken sind eine anerkannte Grenze der Elternrechte, aber keine automatische Befreiung", "Ja, ein formloser Hinweis der Eltern genügt immer", "Ja, das entscheidet allein der Elternbeirat", "Nein, religiöse Gründe werden nie berücksichtigt"],
    explanation: "Weitere Grenzen der Elternrechte: Nichtanerkennung wissenschaftlicher Ergebnisse, Ablehnung von Ethik bei Religionsabmeldung."
  },

  // ===================== 1.11 Erziehungs- und Ordnungsmaßnahmen =====================
  {
    id: "sr-1.11-01", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Welcher Paragraph ist Rechtsgrundlage für präventive Maßnahmen und pädagogische Erziehungsmaßnahmen?",
    options: ["§ 23 SchG", "§ 90 SchG", "§ 38 SchG", "§ 47 SchG"],
    explanation: "§ 23 SchG ermöglicht den Erlass allgemeiner sowie einzelfallbezogener Anordnungen (z.B. Klassenregeln, Ermahnung)."
  },
  {
    id: "sr-1.11-02", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Welcher Paragraph ist Rechtsgrundlage für die (schwerwiegenderen) Erziehungs- und Ordnungsmaßnahmen (EOM)?",
    options: ["§ 90 SchG", "§ 23 SchG", "§ 41 SchG", "§ 8 NVO"],
    explanation: "§ 90 SchG regelt den schwerwiegenden Rechtseingriff der EOM (z.B. Nachsitzen, Unterrichtsausschluss, Schulausschluss)."
  },
  {
    id: "sr-1.11-03", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Was ist Voraussetzung für die Anwendung von § 90 SchG?",
    options: ["Ein schweres oder wiederholtes Fehlverhalten, wenn pädagogische Erziehungsmaßnahmen nicht (mehr) ausreichen", "Jedes einmalige geringfügige Fehlverhalten", "Nur eine Anzeige durch die Eltern eines anderen Schülers", "Ein Beschluss der Schulkonferenz"],
    explanation: "Pädagogische Erziehungsmaßnahmen sollen § 90-Maßnahmen möglichst vermeiden helfen."
  },
  {
    id: "sr-1.11-04", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Wie lange kann ein Ausschluss vom Unterricht nach § 90 SchG höchstens dauern?",
    options: ["Bis zu 4 Wochen", "Bis zu 1 Woche", "Bis zu 6 Monaten", "Unbegrenzt, bis zur nächsten Zeugniskonferenz"],
    explanation: "Der Unterrichtsausschluss ist vom endgültigen Schulausschluss zu unterscheiden."
  },
  {
    id: "sr-1.11-05", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Wer entscheidet über einen Schulausschluss nach § 90 SchG?",
    options: ["Der/die Schulleiter*in", "Die Klassenlehrkraft", "Die unterrichtende Lehrkraft", "Das Jugendamt"],
    explanation: "Klassenlehrer*in bzw. unterrichtende Lehrkraft können nur Nachsitzen bzw. Überweisung in die Parallelklasse anordnen."
  },
  {
    id: "sr-1.11-06", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Muss ein Schüler vor einer Erziehungs- und Ordnungsmaßnahme nach § 90 SchG immer angehört werden?",
    options: ["Ja, das Anhörungs- und Beteiligungsrecht gilt immer", "Nein, nur bei einem Schulausschluss", "Nein, eine Anhörung ist optional", "Nur wenn der Schüler volljährig ist"],
    explanation: "Weitere Grundsätze des § 90: Einzelfallprüfung, Schulbezug, keine Mehrfachbestrafung, keine Kollektivstrafen."
  },
  {
    id: "sr-1.11-07", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Was bedeutet \"mittelbarer Schulbezug\" eines Fehlverhaltens?",
    options: ["Ein Verhalten außerhalb der Schule (z.B. Beleidigungen in einer WhatsApp-Gruppe), das geeignet ist, den schulischen Frieden zu stören", "Ein Verhalten, das ausschließlich im Klassenzimmer stattfindet", "Ein Verhalten während einer AUV", "Ein Verhalten auf dem direkten Schulweg"],
    explanation: "Auch außerschulisches Verhalten kann erfasst werden, wenn es Ordnung, Sicherheit oder Rechte anderer in der Schule konkret berührt."
  },
  {
    id: "sr-1.11-08", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Sind Kollektivstrafen nach § 90 SchG zulässig?",
    options: ["Nein, es gilt der Grundsatz \"keine Kollektivstrafen\"", "Ja, wenn die ganze Klasse beteiligt war", "Ja, aber nur bei Sachbeschädigung", "Ja, mit Zustimmung der Klassenkonferenz"],
    explanation: "Weiterer Grundsatz: keine Mehrfachbestrafung (mit einzelnen benannten Ausnahmen)."
  },
  {
    id: "sr-1.11-09", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Ist Nachsitzen eine unzulässige Freiheitsberaubung nach Art. 2 GG?",
    options: ["Nein, es gilt als eine Art Verlängerung der Schulpflicht", "Ja, Nachsitzen ist grundsätzlich verboten", "Nur bei Schülern unter 14 Jahren zulässig", "Nur mit ausdrücklicher Zustimmung der Eltern zulässig"],
    explanation: "Nachsitzen ist eine zulässige EOM-Maßnahme, insbesondere durch Klassenlehrkraft/unterrichtende Lehrkraft."
  },
  {
    id: "sr-1.11-10", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Ist körperliche Züchtigung durch Lehrkräfte erlaubt?",
    options: ["Nein, körperliche Einwirkung ist nur ausnahmsweise zur Gefahrenabwehr oder Notwehr zulässig", "Ja, im Rahmen des pädagogischen Ermessens generell erlaubt", "Ja, wenn die Eltern schriftlich zustimmen", "Ja, aber nur bei wiederholtem Fehlverhalten"],
    explanation: "Körperliche Züchtigung ist grundsätzlich verboten."
  },
  {
    id: "sr-1.11-11", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Ab welchem Umfang des Nachsitzens ist nicht mehr die Klassenlehrkraft, sondern der/die Schulleiter*in zuständig?",
    options: ["Ab Nachsitzen von 3 Unterrichtsstunden", "Ab Nachsitzen von 1 Unterrichtsstunde", "Ab Nachsitzen von 5 Unterrichtsstunden", "Die Klassenlehrkraft bleibt bei jeder Dauer zuständig"],
    explanation: "Klassenlehrer*in, unterrichtende Lehrkraft und Schulleiter*in dürfen Nachsitzen bis zu 2 Unterrichtsstunden anordnen; ab 3 Stunden sowie für alle weiteren Maßnahmen ist ausschließlich der/die Schulleiter*in zuständig."
  },
  {
    id: "sr-1.11-12", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Müssen beim Nachsitzen auch die Erziehungsberechtigten angehört werden?",
    options: ["Nein, beim Nachsitzen ist nur die Anhörung des Schülers vorgeschrieben", "Ja, immer zusätzlich zum Schüler", "Nein, beim Nachsitzen entfällt jede Anhörungspflicht", "Nur wenn der Schüler unter 10 Jahre alt ist"],
    explanation: "Die Erziehungsberechtigten sind erst ab einer Überweisung in die Parallelklasse oder schwerwiegenderen Maßnahmen anzuhören; der Schüler selbst muss dagegen immer angehört werden."
  },
  {
    id: "sr-1.11-13", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Wann ist die Klassen- oder Jahrgangsstufenkonferenz vor einer § 90-Maßnahme anzuhören?",
    options: ["Bei Unterrichtsausschluss von mehr als 5 Tagen, Androhung des Schulausschlusses und beim Schulausschluss", "Bei jeder Erziehungs- und Ordnungsmaßnahme, auch beim Nachsitzen", "Niemals, das ist allein Sache des Schulleiters", "Nur wenn die Eltern dies ausdrücklich beantragen"],
    explanation: "Auch nach Anhörung der Konferenz bleibt allein der/die Schulleiter*in zuständig und muss selbst entscheiden – das muss im Bescheid deutlich werden."
  },
  {
    id: "sr-1.11-14", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Wann muss die Schulkonferenz vor einem Schulausschluss beteiligt werden?",
    options: ["Nur auf Wunsch des Schülers bzw. (bei Minderjährigen) der Erziehungsberechtigten – auf dieses Antragsrecht ist hinzuweisen", "Immer verpflichtend bei jedem Schulausschluss", "Nie, die Schulkonferenz ist bei § 90-Maßnahmen nicht vorgesehen", "Nur beim zeitweiligen Unterrichtsausschluss"],
    explanation: "Anders als bei der Klassen-/Jahrgangsstufenkonferenz ist die Beteiligung der Schulkonferenz beim Schulausschluss vom Antrag des Schülers bzw. der Erziehungsberechtigten abhängig."
  },
  {
    id: "sr-1.11-15", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Was muss die Begründung eines § 90-Bescheids inhaltlich leisten?",
    options: ["Eine genaue Sachverhaltsdarstellung mit zeitlicher/örtlicher Eingrenzung sowie die pädagogische Ermessensausübung erkennen lassen", "Nur die Rechtsgrundlage § 90 SchG nennen", "Lediglich die Unterschrift des Schulleiters enthalten", "Keine besonderen Anforderungen, eine mündliche Mitteilung genügt immer"],
    explanation: "Der Bescheid muss u.a. die unmittelbar Beteiligten benennen und begründen, warum gerade diese Maßnahme (und keine mildere) gewählt wurde."
  },
  {
    id: "sr-1.11-16", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Wann ist ein Schulausschluss nach § 90 Abs. 6 SchG möglich, auch ohne dass eine Gefahr für die Mitschüler droht?",
    options: ["Wenn Mitschülern der weitere gemeinsame Schulbesuch oder der Lehrkraft das Unterrichten wegen der Schwere der Beeinträchtigung nicht mehr zumutbar ist", "Bei jedem einmaligen Fehlverhalten", "Nur nach vorheriger Zustimmung aller Eltern der Klasse", "Nur bei strafrechtlicher Verurteilung des Schülers"],
    explanation: "Das ist die erste der zwei gesetzlichen Alternativen für den Schulausschluss (§ 90 Abs. 6 Satz 2 SchG); die zweite verlangt zusätzlich eine Gefahr für Erziehung, Unterrichtung, sittliche Entwicklung, Gesundheit oder Sicherheit der Mitschüler."
  },
  {
    id: "sr-1.11-17", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Muss die Schule einen zeitweiligen Unterrichtsausschluss dem Jugendamt melden?",
    options: ["Nein, das kann gemeldet werden (\"kann\"); ein Schulausschluss dagegen muss gemeldet werden (\"muss\")", "Ja, jeder Unterrichtsausschluss muss zwingend gemeldet werden", "Nein, eine Meldung an das Jugendamt ist bei § 90-Maßnahmen generell ausgeschlossen", "Nur bei volljährigen Schülern"],
    explanation: "Abstufung: zeitweiliger Unterrichtsausschluss \"kann\" gemeldet werden, mehrfacher zeitweiliger Unterrichtsausschluss \"soll\" gemeldet werden, ein Schulausschluss \"muss\" dem Jugendamt mitgeteilt werden."
  },
  {
    id: "sr-1.11-18", part: "Schulrecht", chapter: "1.11 Erziehungs- und Ordnungsmaßnahmen",
    question: "Darf die aufnehmende Schule nach einem Schulausschluss Bedingungen an die Aufnahme knüpfen?",
    options: ["Ja, sie kann die Aufnahme von einer Vereinbarung über eine Verhaltensänderung abhängig machen und eine Probezeit bis zu 6 Monaten festlegen", "Nein, die Aufnahme muss immer bedingungslos erfolgen", "Ja, aber nur eine Probezeit von maximal 4 Wochen ist zulässig", "Nein, ein Schüler nach Schulausschluss darf an keiner anderen Schule mehr aufgenommen werden"],
    explanation: "Rechtsgrundlage: § 90 Abs. 4 Satz 2 SchG."
  },

  // ===================== 1.12 Aufsichtspflicht =====================
  {
    id: "sr-1.12-01", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Worauf stützt sich die Aufsichtspflicht in BW rechtlich, da es keine direkte gesetzliche Regelung gibt?",
    options: ["Sie ist eine logische Folge der Schulpflicht", "Sie ergibt sich direkt aus GG Art. 7", "Sie ist im BGB abschließend geregelt", "Sie besteht nur kraft Gewohnheitsrecht ohne rechtliche Grundlage"],
    explanation: "Da eine direkte gesetzliche Regelung fehlt, gelten nur allgemeine Grundsätze und Prinzipien für die Aufsichtsführung."
  },
  {
    id: "sr-1.12-02", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Besteht auf dem Schulweg (Wohnung–Schule) eine Aufsichtspflicht der Lehrkräfte?",
    options: ["Nein, auf dem Schulweg besteht keine Aufsichtspflicht", "Ja, uneingeschränkt", "Nur wenn Grundschulkinder betroffen sind", "Nur bei Schulbussen"],
    explanation: "Auf Unterrichtswegen (z.B. Schule–Schwimmbad) besteht dagegen Aufsichtspflicht."
  },
  {
    id: "sr-1.12-03", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Gilt die Aufsichtspflicht der Lehrkräfte auch für volljährige Schüler*innen?",
    options: ["Nein, aber es bleibt eine allgemeine Fürsorgepflicht und Pflicht zur Einhaltung schulischer Bestimmungen bestehen", "Ja, uneingeschränkt wie bei Minderjährigen", "Nein, es besteht überhaupt keine Verantwortung mehr", "Nur bei AUV besteht noch Aufsichtspflicht"],
    explanation: "Für Minderjährige gilt die volle Aufsichtspflicht."
  },
  {
    id: "sr-1.12-04", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Wie lange besteht typischerweise noch Aufsichtspflicht vor/nach dem Unterricht auf dem Schulgelände?",
    options: ["Ca. 10–15 Minuten", "Ca. 1 Stunde", "Nur bis zum Verlassen des Klassenzimmers", "Es gibt keine erweiterten Zeiträume"],
    explanation: "Wer auf dem Gelände bleibt, muss in diesem Zeitraum beaufsichtigt werden."
  },
  {
    id: "sr-1.12-05", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Welche drei Grundsätze/Prinzipien gelten für die Aufsichtsführung?",
    options: ["Vorausschauende Umsicht, ununterbrochene Beständigkeit, kontrollierende Nachdrücklichkeit", "Strenge, Konsequenz, Bestrafung", "Toleranz, Zurückhaltung, Nichteinmischung", "Dokumentation, Meldung, Eskalation"],
    explanation: "Diese Prinzipien sollen der Vielschichtigkeit möglicher Aufsichtssituationen gerecht werden."
  },
  {
    id: "sr-1.12-06", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Muss eine Lehrkraft eingreifen, wenn sie zufällig außerhalb ihrer geplanten Aufsicht Schüler in einer Gefahrensituation antrifft (z.B. Rauchen am Bahnhof)?",
    options: ["Ja, die Aufsichtspflicht gilt für Lehrkräfte, denen Schüler in der Situation anvertraut sind bzw. die eine Gefahrensituation antreffen", "Nein, da keine planmäßige Aufsicht vorlag", "Nur wenn die Lehrkraft Klassenlehrer der betroffenen Schüler ist", "Nein, das ist Aufgabe der Polizei"],
    explanation: "Unterstützung durch Eltern oder ältere Schüler ist möglich, verantwortlich bleibt aber immer die Lehrkraft."
  },
  {
    id: "sr-1.12-07", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Wer haftet zivilrechtlich, wenn eine Lehrkraft bei einer Aufsichtspflichtverletzung fahrlässig einen Schaden verursacht?",
    options: ["Der Dienstherr haftet gem. Art. 34 GG", "Die Lehrkraft haftet immer sofort persönlich in voller Höhe", "Der Schulträger haftet immer allein", "Die Schülerunfallversicherung haftet ausschließlich"],
    explanation: "Der Dienstherr kann die Lehrkraft bei Vorsatz oder grober Fahrlässigkeit regresspflichtig machen."
  },
  {
    id: "sr-1.12-08", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Besteht in der Mittagspause generell Aufsichtspflicht?",
    options: ["Nein, generell keine Aufsichtspflicht, außer bei schulischen Ganztagsangeboten", "Ja, immer uneingeschränkt", "Nur an Grundschulen", "Nur wenn Eltern dies schriftlich beantragen"],
    explanation: "Liegen z.B. Mensa oder andere Ganztagsangebote vor, besteht auch in der Mittagspause Aufsichtspflicht."
  },
  {
    id: "sr-1.12-09", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Warum besteht überhaupt eine Aufsichtspflicht der Schule?",
    options: ["Die Schule nimmt die Kinder mit ihrem eigenständigen Erziehungsauftrag aus dem Schutz- und Fürsorgebereich der Eltern und tritt in deren Fürsorgepflicht ein", "Weil das BGB dies ausdrücklich für Schulen anordnet", "Weil sonst die Schülerunfallversicherung nicht greifen würde", "Weil die Eltern während der Schulzeit rechtlich nicht aufsichtsfähig sind"],
    explanation: "Der elternunabhängige Erziehungs- und Bildungsauftrag macht es den Eltern während der Schulzeit faktisch unmöglich, ihre Kinder selbst zu beaufsichtigen – die Schule tritt an ihre Stelle."
  },
  {
    id: "sr-1.12-10", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Muss die Aufsicht immer als Präsenzaufsicht ausgeübt werden?",
    options: ["Nein, es kann je nach Umständen genügen, dass eine Lehrkraft erreichbar ist und sich auf Stichproben beschränkt", "Ja, eine Lehrkraft muss die Schüler immer ununterbrochen persönlich im Blick behalten", "Nein, Aufsicht kann komplett auf die Schüler selbst übertragen werden", "Ja, das schreibt eine allgemeine Verwaltungsvorschrift des Kultusministeriums zwingend vor"],
    explanation: "Das Kultusministerium hat bewusst auf eine allgemeine Regelung zur Aufsichtsintensität verzichtet – die vor Ort Verantwortlichen (i.d.R. die Schulleitung) legen sie je nach Umständen fest."
  },
  {
    id: "sr-1.12-11", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Wer ist für die Aufstellung der Aufsichtspläne zuständig?",
    options: ["Der/die Schulleiter*in (§ 41 SchG)", "Der Elternbeirat", "Jede Lehrkraft für ihre eigenen Stunden selbst", "Das staatliche Schulamt"],
    explanation: "In der Praxis gibt es dafür eingespielte Regelungen, z.B. wer an welchem Tag in welcher großen Pause Aufsicht führt."
  },
  {
    id: "sr-1.12-12", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Kann eine Schulbushaltestelle unter die Aufsichtspflicht der Schule fallen, obwohl der Schulweg selbst nicht aufsichtspflichtig ist?",
    options: ["Ja, wenn die Haltestelle gezielt für den von der Schule ausgelösten Ziel- und Quellverkehr eingerichtet ist, gehört sie zum Schulbetrieb", "Nein, jede Haltestelle zählt ausnahmslos zum privaten Schulweg", "Nur wenn sich die Haltestelle direkt auf dem Schulgelände befindet", "Nein, für Haltestellen gilt eine gesonderte gesetzliche Ausnahme"],
    explanation: "Entscheidend ist laut Rechtsprechung, ob die Haltestelle gezielt dem Schulbetrieb dient – nicht, ob dazwischen noch ein Grundstück liegt oder auch Nichtschüler mitfahren."
  },
  {
    id: "sr-1.12-13", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Kann ein Schüler auf dem Schulweg trotz fehlender Aufsichtspflicht dort Ziel von Erziehungs- und Ordnungsmaßnahmen wegen des Verhaltens anderer werden?",
    options: ["Ja, bei \"schulbezogenem\" Fehlverhalten, das konkret feststellbar störend in den Schulbetrieb hineinwirkt (z.B. wenn ein Mitschüler den Schulweg nicht mehr angstfrei gehen kann)", "Nein, außerhalb des Schulgeländes ist die Schule rechtlich nie zuständig", "Nein, dafür ist ausschließlich die Polizei zuständig", "Ja, aber nur wenn die Tat auf dem direkten Schulgelände begangen wurde"],
    explanation: "Der Begriff \"schulbezogenes Fehlverhalten\" stammt aus der Rechtsprechung des VGH Mannheim und ist nicht nur räumlich-zeitlich, sondern auch inhaltlich bestimmt."
  },
  {
    id: "sr-1.12-14", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Was passiert mit der Aufsichtspflicht und dem Unfallversicherungsschutz, wenn Schüler in einer Hohlstunde erlaubt das Schulgelände verlassen?",
    options: ["Die Aufsichtspflicht ruht und auch der gesetzliche Unfallversicherungsschutz entfällt in dieser Zeit", "Beide bleiben unverändert vollständig bestehen", "Die Aufsichtspflicht bleibt bestehen, nur der Versicherungsschutz entfällt", "Der Versicherungsschutz bleibt bestehen, nur die Aufsichtspflicht entfällt"],
    explanation: "Solange sich die Schüler in der näheren Umgebung des Schulbereichs aufhalten, bleibt der Unfallversicherungsschutz aber auch bei (unerlaubtem) Verlassen des Geländes bestehen – Ausnahme: private Einkäufe ohne Bezug zum Unterricht."
  },
  {
    id: "sr-1.12-15", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Dürfen Hilfspersonen wie Hausmeister oder ältere Schüler zur Unterstützung der Aufsicht eingesetzt werden?",
    options: ["Ja, aber die Aufsicht ist damit nicht vollständig delegiert – ein verantwortlicher, erreichbarer Lehrer muss die Aufsichtsführung weiterhin kontrollieren können", "Nein, Aufsicht darf ausschließlich von Lehrkräften ausgeübt werden", "Ja, damit ist die Lehrkraft vollständig von der Aufsichtspflicht befreit", "Nein, das widerspricht grundsätzlich dem Schulgesetz"],
    explanation: "Die Schule trägt die Verantwortung für die Auswahl geeigneter Hilfspersonen; Schüler können bei den verantwortlichen Lehrkräften jederzeit remonstrieren."
  },
  {
    id: "sr-1.12-16", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Wie hat der Verwaltungsgerichtshof BW die Aufsichtspflicht in der Mittagspause bei Fahrschülern beurteilt, die wegen fehlender Busverbindung nicht nach Hause können?",
    options: ["Die Mittagspause ist in diesem Fall dem Verantwortungsbereich der Schule zuzurechnen, sodass Aufsichtspflicht besteht", "Es besteht generell keinerlei Aufsichtspflicht in der Mittagspause", "Nur der Schulträger, nicht die Lehrkräfte, ist in der Mittagspause zuständig", "Fahrschüler sind während der Mittagspause grundsätzlich nicht schutzbedürftig"],
    explanation: "Grundsatzentscheidung des VGH BW (1984): Die durch den Stundenplan veranlasste Mittagspause ist bei Schülern, die das Schulgelände nicht verlassen dürfen, eine aufsichtspflichtige Unterrichtspause."
  },
  {
    id: "sr-1.12-17", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Ist die \"Mitbeaufsichtigung\" einer Klasse durch eine im Nachbarraum unterrichtende Lehrkraft unproblematisch?",
    options: ["Nein, solche Notlösungen bergen Risiken und sollten nach Möglichkeit vermieden werden – Stichproben sind notwendig", "Ja, das ist rechtlich völlig unbedenklich und beliebig einsetzbar", "Nein, eine Mitbeaufsichtigung ist immer strikt verboten", "Ja, solange der Klassensprecher informiert ist"],
    explanation: "Ein älteres BGH-Urteil sah in einem solchen Fall eine Aufsichtspflichtverletzung; nach heutiger Auffassung ist es eine Frage der im Einzelfall vertretbaren Aufsichtsintensität."
  },
  {
    id: "sr-1.12-18", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Wie viele Kinder soll eine Gruppe bei der schulischen Radfahrausbildung im öffentlichen Verkehrsraum höchstens umfassen, und wie viele Erwachsene sind mindestens nötig?",
    options: ["Höchstens 10 Kinder, mindestens 2 Erwachsene (davon 1 Lehrer oder Polizeibeamter)", "Höchstens 30 Kinder, 1 Erwachsener genügt", "Höchstens 5 Kinder, mindestens 3 Erwachsene", "Es gibt keine Vorgabe zur Gruppengröße"],
    explanation: "Vorgabe der Gemeinsamen Verwaltungsvorschrift von Innen- und Kultusministerium zur Radfahrausbildung."
  },
  {
    id: "sr-1.12-19", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Können SMV-Veranstaltungen auch ohne Präsenzaufsicht durch eine Lehrkraft stattfinden?",
    options: ["Ja, der Schulleiter kann geeignete, mindestens 16 Jahre alte Schüler mit der Aufsicht betrauen, wenn deren Erziehungsberechtigte einverstanden sind", "Nein, bei SMV-Veranstaltungen ist immer eine Lehrkraft persönlich anwesend zu halten", "Ja, das entscheidet die SMV vollständig autonom ohne jede Beteiligung der Schulleitung", "Nein, SMV-Veranstaltungen benötigen immer mindestens zwei Lehrkräfte"],
    explanation: "Ist die Art der Veranstaltung jedoch mit erhöhten Gefahren verbunden (z.B. Mittelstufenparty mit Alkoholrisiko), ist die Aufsichtsführung durch eine Lehrkraft erforderlich (§ 14 SMV-VO)."
  },
  {
    id: "sr-1.12-20", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    question: "Wie wird die Aufsicht bei Berufspraktika der Schüler sichergestellt, obwohl keine Präsenzaufsicht möglich ist?",
    options: ["Durch Auswahl seriöser Praktikumsstellen, Erreichbarkeit einer Lehrkraft, Betriebsbesuche/Stichproben und Einbindung des Praktikumspersonals als Hilfspersonen", "Die Aufsichtspflicht der Schule entfällt während Praktika vollständig", "Nur durch tägliche persönliche Anwesenheit einer Lehrkraft im Betrieb", "Die Eltern müssen während des gesamten Praktikums selbst anwesend sein"],
    explanation: "Diese Lösung ist mit der Unfallkasse abgestimmt, sodass der gesetzliche Schülerunfallversicherungsschutz sichergestellt bleibt."
  },

  // ===================== 1.13 Außerunterrichtliche Veranstaltungen (AUV) =====================
  {
    id: "sr-1.13-01", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Wer erteilt die Genehmigung für eine außerunterrichtliche Veranstaltung (AUV)?",
    options: ["Die Schulleitung", "Das Regierungspräsidium", "Der Elternbeirat", "Die Gesamtlehrerkonferenz"],
    explanation: "Beispiele für AUV: Schullandheime, Studienfahrten, Wandertage, Museums-/Theaterbesuche, Projekttage."
  },
  {
    id: "sr-1.13-02", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Können AUV durch einen GLK-Beschluss generell abgeschafft werden?",
    options: ["Nein, AUV gehören zu den Dienstaufgaben jeder Lehrkraft", "Ja, mit einfacher Mehrheit der GLK", "Ja, mit Zweidrittelmehrheit der GLK", "Ja, wenn die Schulkonferenz zustimmt"],
    explanation: "AUV zählen zu den herkömmlichen Berufsaufgaben des Lehrers, jede Lehrkraft ist im Prinzip dazu verpflichtet."
  },
  {
    id: "sr-1.13-03", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Was bedeutet \"Aufsichtspflicht rund um die Uhr\" bei mehrtägigen AUV konkret?",
    options: ["Entsprechende Verhaltensregeln und ggf. Stichproben, keine schlaflosen Nächte", "Die Lehrkraft muss die Schüler permanent lückenlos persönlich beobachten", "Aufsichtspflicht besteht nur tagsüber, nachts entfällt sie vollständig", "Die Eltern übernehmen nachts automatisch die Aufsicht"],
    explanation: "Empfohlen: Verhaltensregeln mit Eltern besprechen, Freizeit nur in Gruppen mit mind. 3 Personen."
  },
  {
    id: "sr-1.13-04", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Welche besondere Voraussetzung muss die verantwortliche Lehrkraft bei Aufenthalten am/im Wasser erfüllen?",
    options: ["Rettungsfähigkeit", "Erste-Hilfe-Zertifikat nicht älter als 1 Jahr", "Mindestens 5 Jahre Berufserfahrung", "Eine gesonderte schriftliche Genehmigung der Eltern jedes Schülers"],
    explanation: "Die Aufsicht über die Schüler obliegt bei Wasseraufenthalten alleine den Lehrkräften."
  },
  {
    id: "sr-1.13-05", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Wer schuldet bei einer Klassenfahrt den Reisepreis gegenüber dem Reiseveranstalter?",
    options: ["Die Schüler bzw. deren Eltern – die Lehrkraft handelt nur in Stellvertretung", "Die Lehrkraft persönlich", "Der Schulträger", "Das Land BW als Dienstherr"],
    explanation: "Die Lehrkraft schließt den Reisevertrag in Stellvertretung ab und wird selbst nicht verpflichtet."
  },
  {
    id: "sr-1.13-06", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Dürfen Referendar*innen als Begleitpersonen bei AUV eingesetzt werden?",
    options: ["Ja, in jedem Ausbildungsstadium; als verantwortliche Lehrkraft ist dies aber umstritten", "Nein, niemals", "Nur im 2. Ausbildungsabschnitt", "Nur mit gesonderter Genehmigung des Kultusministeriums"],
    explanation: "Als verantwortliche Lehrkraft frühestens ab Übernahme eines selbständigen Lehrauftrags."
  },
  {
    id: "sr-1.13-07", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Sind Schüler*innen bei AUV wie z.B. Klassenfahrten gesetzlich unfallversichert?",
    options: ["Ja, immer", "Nur bei kostenpflichtigen AUV", "Nein, dafür ist eine private Zusatzversicherung nötig", "Nur bei Auslandsfahrten"],
    explanation: "Auch bei selbstorganisierten Aufgaben außerhalb der Schule (z.B. Projektarbeit) haftet die gesetzliche Unfallkasse."
  },
  {
    id: "sr-1.13-08", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Reicht eine schriftliche Elternbestätigung der Schwimmfähigkeit aus, um einen Schüler am Schwimmunterricht teilnehmen zu lassen?",
    options: ["Nein, die Lehrkraft muss sich zusätzlich durch persönlichen Augenschein von der Schwimmfähigkeit überzeugen", "Ja, eine Elternbestätigung allein genügt immer", "Nein, dafür ist ausschließlich ein ärztliches Attest ausreichend", "Ja, sofern der Schüler älter als 10 Jahre ist"],
    explanation: "Grundlage der Verantwortung ist die Obhutspflicht und Garantenstellung der leitenden Lehrkraft, die auch für Aufenthalte am/im Wasser bei AUV gilt."
  },
  {
    id: "sr-1.13-09", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Wann besteht laut Regierungspräsidium Stuttgart ein reiserechtlich triftiger Grund, eine AUV wegen einer Gefahrenlage abzusagen?",
    options: ["Grundsätzlich erst, wenn das Auswärtige Amt eine amtliche Reisewarnung für das Zielgebiet ausgesprochen hat", "Bereits bei jeder Medienberichterstattung über Unruhen im Zielgebiet", "Sobald ein einzelnes Elternteil Bedenken äußert", "Nie, eine AUV darf grundsätzlich nicht abgesagt werden"],
    explanation: "Ohne amtliche Reisewarnung tragen Eltern bzw. volljährige Schüler, die dennoch selbst absagen, die entstehenden Stornierungskosten grundsätzlich selbst."
  },
  {
    id: "sr-1.13-10", part: "Schulrecht", chapter: "1.13 Außerunterrichtliche Veranstaltungen (AUV)",
    question: "Darf die Schule die gesamte AUV eigenständig absagen, wenn sie eine Gefahrenlage befürchtet, ohne dass eine amtliche Reisewarnung vorliegt?",
    options: ["Nur in besonders begründeten Ausnahmefällen und nur nach vorheriger Abstimmung mit dem Regierungspräsidium", "Ja, das liegt im freien Ermessen jeder einzelnen Schule", "Nein, eine Absage durch die Schule ist unter keinen Umständen möglich", "Ja, das entscheidet allein die Klassenkonferenz"],
    explanation: "Regelung des Regierungspräsidiums Stuttgart zur Absage außerunterrichtlicher Veranstaltungen wegen Gefahrenlagen (Stand 2017)."
  },

  // ===================== 1.14 Schulbezogenes Jugendrecht =====================
  {
    id: "sr-1.14-01", part: "Schulrecht", chapter: "1.14 Schulbezogenes Jugendrecht",
    question: "Wer ist \"personensorgeberechtigt\" im Sinne des Jugendrechts?",
    options: ["Die Eltern oder vom Familiengericht mit dem Sorgerecht beauftragte Personen", "Jede volljährige Person, die ein Kind betreut", "Ausschließlich die leibliche Mutter", "Der Schulträger"],
    explanation: "Davon zu unterscheiden ist die \"Erziehungsbeauftragung\"."
  },
  {
    id: "sr-1.14-02", part: "Schulrecht", chapter: "1.14 Schulbezogenes Jugendrecht",
    question: "Wer gilt als \"erziehungsbeauftragt\", wenn ein Kind/Jugendlicher im Rahmen der Ausbildung betreut wird?",
    options: ["Jede Person über 18 Jahre, insbesondere auch Lehrkräfte", "Nur die Erziehungsberechtigten", "Nur volljährige Verwandte ersten Grades", "Nur der/die Schulleiter*in"],
    explanation: "Erziehungsbeauftragung betrifft z.B. Lehrkräfte während des Unterrichts oder bei AUV."
  },
  {
    id: "sr-1.14-03", part: "Schulrecht", chapter: "1.14 Schulbezogenes Jugendrecht",
    question: "Welches Gesetz schützt Schüler*innen zusätzlich zum Strafrecht bei schulischen Aktivitäten/Veranstaltungen?",
    options: ["Das Jugendschutzgesetz", "Das Bürgerliche Gesetzbuch", "Das Landesbeamtengesetz", "Die Schulbesuchsverordnung"],
    explanation: "Das Strafrecht schützt SuS besonders als \"Schutzbefohlene\"."
  },

  // ===================== 1.15 Leistungsfeststellung, Zeugnisse, Versetzung =====================
  {
    id: "sr-1.15-01", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Welche Verordnung regelt die Leistungsfeststellung an Schulen in BW?",
    options: ["Die Notenbildungsverordnung (NVO)", "Die Versetzungsordnung (VersO)", "Die Schulbesuchsverordnung", "Die Abiturverordnung"],
    explanation: "Die NVO legt als Minimalregelung nur das Notwendigste einheitlich fest und lässt pädagogische Freiheit."
  },
  {
    id: "sr-1.15-02", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Wie viele Klassenarbeiten müssen in Kernfächern mindestens pro Jahr geschrieben werden?",
    options: ["Mindestens 4", "Mindestens 2", "Mindestens 6", "Es gibt keine gesetzliche Mindestzahl"],
    explanation: "Die GLK kann zusätzlich eine Höchstzahl beschließen, an die dann alle gebunden sind."
  },
  {
    id: "sr-1.15-03", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Wie viele schriftliche Arbeiten (Klassenarbeiten plus schriftliche Wiederholungsarbeiten) dürfen in Nichtkernfächern höchstens geschrieben werden?",
    options: ["Höchstens 4", "Höchstens 2", "Höchstens 8", "Unbegrenzt"],
    explanation: "Für Nichtkernfächer gibt es dagegen keine Mindestzahl."
  },
  {
    id: "sr-1.15-04", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Wie viele Klassenarbeiten dürfen in einer Schulwoche höchstens geschrieben werden?",
    options: ["Höchstens 3", "Höchstens 1", "Höchstens 5", "Unbegrenzt viele"],
    explanation: "Zusätzlich soll an einem Tag nicht mehr als 1 Klassenarbeit geschrieben werden (Ausnahme: Nachschreiber)."
  },
  {
    id: "sr-1.15-05", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Müssen schriftliche Wiederholungsarbeiten (im Gegensatz zu Klassenarbeiten) angekündigt werden?",
    options: ["Nein, sie müssen nicht angekündigt werden", "Ja, mindestens eine Woche vorher", "Ja, mindestens 3 Tage vorher", "Ja, wie Klassenarbeiten auch"],
    explanation: "Schriftliche Wiederholungsarbeiten prüfen den Stoff der unmittelbar vorangegangenen Stunden, Dauer i.d.R. bis 20 Minuten."
  },
  {
    id: "sr-1.15-06", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Was gilt für GFS (gleichwertige Feststellung von Schülerleistungen)?",
    options: ["Sie zählen als zusätzliche Klassenarbeit (kein Ersatz für eine KA) und müssen mit einem Kolloquium verbunden werden", "Sie ersetzen jeweils eine reguläre Klassenarbeit", "Sie sind freiwillig und werden nicht benotet", "Sie dürfen nicht in der Kursstufe erbracht werden"],
    explanation: "Ab Klasse 7 am Gymnasium: 1 GFS pro Schuljahr; in der Kursstufe insgesamt mindestens 3 (max. 4)."
  },
  {
    id: "sr-1.15-07", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Darf die Nichtanfertigung von Hausaufgaben zur Note \"ungenügend\" führen?",
    options: ["Nein, Hausaufgaben dienen nicht der Leistungsmessung, können aber die Mitarbeitsnote beeinflussen", "Ja, grundsätzlich immer", "Ja, aber nur ab der 3. nicht angefertigten Hausaufgabe", "Nein, Hausaufgaben dürfen die Note überhaupt nicht beeinflussen"],
    explanation: "Hausaufgaben dienen der Festigung der im Unterricht vermittelten Kenntnisse."
  },
  {
    id: "sr-1.15-08", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Ist eine \"Einheitsnote\" bei Gruppenleistungen zulässig?",
    options: ["Nein, Einzelleistungen müssen deutlich abgrenzbar bewertet werden", "Ja, das ist der Regelfall bei Gruppenarbeiten", "Ja, wenn die Gruppe vorher zustimmt", "Ja, aber nur bei GFS"],
    explanation: "Jedes Gruppenmitglied muss individuell anhand seines abgrenzbaren Beitrags bewertet werden."
  },
  {
    id: "sr-1.15-09", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Darf ein sehr passiver Schüler, dessen mündliche Fähigkeiten unbekannt sind, allein wegen fehlender Mitarbeit mit \"mangelhaft\" mündlich benotet werden?",
    options: ["Nein (außer bei bewusster Leistungsverweigerung) – er muss zur aktiven Teilnahme aufgefordert werden", "Ja, Passivität rechtfertigt automatisch eine schlechte Note", "Ja, sobald 3 Wochen keine Meldung erfolgt", "Nein, mündliche Noten dürfen generell nicht schlechter als \"ausreichend\" sein"],
    explanation: "Das dient der Gewährleistung der Chancengleichheit."
  },
  {
    id: "sr-1.15-10", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Welche Note erhält ein Schüler bei unentschuldigtem Fehlen bei einer angekündigten Leistungsmessung?",
    options: ["Note 6 (ungenügend), ohne Ermessensspielraum", "Note 5, mit Ermessensspielraum der Lehrkraft", "Keine Note, die Arbeit entfällt ersatzlos", "Note 4, als milde Sanktion"],
    explanation: "Dies dient nicht der Sanktion eines Fehlverhaltens, sondern der Chancengleichheit gegenüber Teilnehmenden."
  },
  {
    id: "sr-1.15-11", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Warum ist ein Zeugnis ein Verwaltungsakt, eine Halbjahresinformation dagegen nicht?",
    options: ["Weil das Zeugnis das Grundverhältnis des Schülers zur Schule ändert (z.B. Versetzung), die Halbjahresinformation nicht", "Weil nur das Zeugnis ein Schulsiegel trägt", "Weil die Halbjahresinformation freiwillig ist", "Es gibt keinen rechtlichen Unterschied zwischen beiden"],
    explanation: "Das Zeugnis enthält nur ganze Noten und benötigt Schulsiegel sowie Unterschriften von Klassenlehrkraft, SL und Erziehungsberechtigtem."
  },
  {
    id: "sr-1.15-12", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Was besagt die \"KuMuTu\"-Regel bei der Versetzung?",
    options: ["Ist eine Versetzung nur wegen Kunst, Musik oder Turnen/Sport gefährdet, zählt nur die beste Note dieser drei Fächer", "Kunst, Musik und Turnen zählen für die Versetzung generell nicht", "Kunst, Musik und Turnen müssen immer mindestens \"ausreichend\" sein", "Die Regel betrifft nur die Grundschule"],
    explanation: "Beispiel: Note 5 in Kunst und Sport, Note 2 in Musik → für die Versetzung zählt nur die 2."
  },
  {
    id: "sr-1.15-13", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Wie lange dauert die Nachlernzeit bei einer \"Versetzung auf Probe\" nach den Sommerferien in der Regel?",
    options: ["Ca. 4 Wochen", "Ca. 1 Woche", "Ca. 8 Wochen", "Bis zum Halbjahreszeugnis"],
    explanation: "Danach folgt eine schriftliche und mündliche Prüfung in den maßgebenden Fächern mit Note unter 4."
  },
  {
    id: "sr-1.15-14", part: "Schulrecht", chapter: "1.15 Leistungsfeststellung, Zeugnisse, Versetzung",
    question: "Muss eine versäumte Klassenarbeit bei entschuldigtem Fehlen nachgeschrieben werden?",
    options: ["Nein, das kann von der Lehrkraft verlangt werden, ist aber keine Pflicht", "Ja, immer verpflichtend", "Nein, ein Nachschreiben ist grundsätzlich unzulässig", "Nur wenn die Eltern das schriftlich beantragen"],
    explanation: "Bei unentschuldigtem Fehlen gilt dagegen zwingend die Note 6."
  },

  // ===================== 2.1 Grundlagen des Beamtenrechts =====================
  {
    id: "br-2.1-01", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "Welches Gesetz regelt insbesondere Laufbahn, Einstellung, Beendigung und Rechtsstellung der Landesbeamten in BW?",
    options: ["Das Landesbeamtengesetz (LBG)", "Das Beamtenstatusgesetz", "Das Schulgesetz", "Das Landesdisziplinargesetz"],
    explanation: "Das Beamtenstatusgesetz regelt dagegen bundeseinheitlich die Statusrechte und Pflichten der Beamten."
  },
  {
    id: "br-2.1-02", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "Was sind \"hoheitsrechtliche Befugnisse\"?",
    options: ["Das Recht und die Pflicht, im Namen des Staates verbindlich zu entscheiden und durchzusetzen", "Ausschließlich das Recht auf Besoldung", "Das Recht, Fortbildungen zu besuchen", "Das Recht auf Erholungsurlaub"],
    explanation: "Beispiele in der Schule: Zeugnisse, Verwaltungsakte, Erziehungs- und Ordnungsmaßnahmen."
  },
  {
    id: "br-2.1-03", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "In welchem Artikel des Grundgesetzes sind die hergebrachten Grundsätze des Berufsbeamtentums verankert?",
    options: ["GG Art. 33", "GG Art. 7", "GG Art. 6", "GG Art. 5"],
    explanation: "Beispiele solcher Grundsätze: Amtsverschwiegenheit, politische Neutralität im Dienst, Laufbahn- und Leistungsprinzip."
  },
  {
    id: "br-2.1-04", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "Was versteht man unter dem \"Funktionsvorbehalt\" (Garantie des Berufsbeamtentums)?",
    options: ["Die Ausübung hoheitsrechtlicher Befugnisse ist im Regelfall Beamten übertragen", "Nur der Bund darf Beamte einstellen", "Beamte dürfen keine hoheitsrechtlichen Aufgaben übernehmen", "Nur Angestellte dürfen hoheitsrechtliche Aufgaben übernehmen"],
    explanation: "Dies begründet, warum bestimmte staatliche Aufgaben (z.B. Polizei, Gericht, Schule) an Beamte gebunden sind."
  },
  {
    id: "br-2.1-05", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "Welche vier Eigenschaften prägen laut Zusammenfassung das Leitbild von Beamten?",
    options: ["Unbestechlichkeit, Fachkundigkeit, Unabhängigkeit, Funktionsfähigkeit", "Flexibilität, Kreativität, Teamfähigkeit, Belastbarkeit", "Loyalität, Pünktlichkeit, Disziplin, Effizienz", "Neutralität, Transparenz, Digitalisierung, Bürgernähe"],
    explanation: "Unbestechlichkeit durch ausreichende Bezüge/Pension, Unabhängigkeit z.B. durch das Lebenszeitprinzip, Funktionsfähigkeit durch das Streikverbot."
  },
  {
    id: "br-2.1-06", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "Wie wird das Beamtenverhältnis rechtlich charakterisiert?",
    options: ["Als öffentlich-rechtliches Dienst- und Treueverhältnis", "Als privatrechtlicher Arbeitsvertrag", "Als rein zivilrechtliches Auftragsverhältnis", "Als Genossenschaftsverhältnis"],
    explanation: "Es besteht ein gegenseitiges Treueverhältnis zwischen Dienstherr und Beamten."
  },
  {
    id: "br-2.1-07", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "Wodurch wird das Rechtsverhältnis bei Beamten begründet – im Gegensatz zu Angestellten?",
    options: ["Durch Ernennung (statt Arbeitsvertrag)", "Durch einen Tarifvertrag", "Durch einfache mündliche Zusage", "Durch Wahl der Kollegen"],
    explanation: "Angestellte (Tarifbeschäftigte) werden dagegen über einen Arbeitsvertrag eingestellt."
  },
  {
    id: "br-2.1-08", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "Wie unterscheidet sich die Altersversorgung von Beamten und Angestellten?",
    options: ["Beamte erhalten eine Pension, Angestellte eine Rente", "Beide erhalten identisch eine Rente", "Beamte erhalten keinerlei Altersversorgung", "Beide erhalten eine Pension"],
    explanation: "Auch die Vergütung unterscheidet sich: Besoldungsgesetz bei Beamten, Tarifvertrag bei Angestellten."
  },
  {
    id: "br-2.1-09", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "Was ist bei Fehlverhalten von Beamten die typische dienstrechtliche Konsequenz – im Gegensatz zu Angestellten?",
    options: ["Missbilligung bzw. Disziplinarverfahren (statt Abmahnung/Kündigung)", "Sofortige fristlose Entlassung ohne Verfahren", "Kürzung des Jahresurlaubs", "Es gibt keinerlei Konsequenzen für Beamte"],
    explanation: "Bei Angestellten sind dagegen Abmahnung und Kündigung die typischen arbeitsrechtlichen Reaktionen."
  },
  {
    id: "br-2.1-10", part: "Beamtenrecht", chapter: "2.1 Grundlagen des Beamtenrechts",
    question: "Was gehört zum Leistungsprinzip als hergebrachtem Grundsatz des Berufsbeamtentums?",
    options: ["Begründung des Beamtenverhältnisses und Beförderungen ausschließlich nach Eignung, Befähigung und fachlicher Leistung", "Beförderungen ausschließlich nach Dienstalter", "Beförderungen nach freiem Ermessen ohne Kriterien", "Beförderungen nach Losverfahren"],
    explanation: "Das Leistungsprinzip steht in engem Bezug zum Laufbahnprinzip."
  },

  // ===================== 2.2 Arbeitszeit der Lehrkräfte =====================
  {
    id: "br-2.2-01", part: "Beamtenrecht", chapter: "2.2 Arbeitszeit der Lehrkräfte",
    question: "Wie viele Deputatsstunden umfasst eine volle Lehrerstelle am Gymnasium pro Woche?",
    options: ["25 Deputatsstunden", "20 Deputatsstunden", "30 Deputatsstunden", "40 Deputatsstunden"],
    explanation: "Deputatsstunden sind die Wochenstunden der Unterrichtsverpflichtung."
  },
  {
    id: "br-2.2-02", part: "Beamtenrecht", chapter: "2.2 Arbeitszeit der Lehrkräfte",
    question: "Mit welchem Umrechnungsfaktor wird eine Deputatsstunde in Zeitstunden umgerechnet?",
    options: ["1,8 (25 x 1,8 = 45 Stunden-Woche)", "1,0 (1:1 Umrechnung)", "2,5", "1,5"],
    explanation: "Damit ergibt sich rechnerisch eine ca. 45-Stunden-Woche für Lehrkräfte."
  },
  {
    id: "br-2.2-03", part: "Beamtenrecht", chapter: "2.2 Arbeitszeit der Lehrkräfte",
    question: "Wie viele Deputatsstunden werden für Unterricht mit voller Vor-/Nachbereitung angerechnet?",
    options: ["1 Deputatsstunde", "0,5 Deputatsstunden", "0,67 Deputatsstunden", "2 Deputatsstunden"],
    explanation: "Bei eingeschränkter Vor-/Nachbereitung werden 0,67 Deputatsstunden angerechnet."
  },
  {
    id: "br-2.2-04", part: "Beamtenrecht", chapter: "2.2 Arbeitszeit der Lehrkräfte",
    question: "Wie viele Deputatsstunden werden für Tätigkeiten ohne oder mit nur geringfügiger Vor-/Nachbereitung angerechnet?",
    options: ["0,5 Deputatsstunden", "1 Deputatsstunde", "0,67 Deputatsstunden", "0 Deputatsstunden"],
    explanation: "Die Gewichtung erfolgt gestaffelt: 1 / 0,67 / 0,5 Deputatsstunden je nach Vor-/Nachbereitungsaufwand."
  },

  // ===================== 2.3 Vorgesetzte =====================
  {
    id: "br-2.3-01", part: "Beamtenrecht", chapter: "2.3 Vorgesetzte",
    question: "Wer ist der Dienstherr der Lehrkräfte in Baden-Württemberg?",
    options: ["Das Land Baden-Württemberg", "Der jeweilige Schulträger", "Die jeweilige Gemeinde", "Der Bund"],
    explanation: "Statt \"Arbeitgeber\" spricht man bei Beamten vom \"Dienstherrn\"."
  },
  {
    id: "br-2.3-02", part: "Beamtenrecht", chapter: "2.3 Vorgesetzte",
    question: "Welche Behörde ist die oberste Dienstbehörde für Lehrkräfte in BW?",
    options: ["Das Kultusministerium", "Das Regierungspräsidium", "Das staatliche Schulamt", "Die Schulleitung"],
    explanation: "Das Kultusministerium ist die oberste Behörde des Dienstherrn im schulischen Bereich."
  },
  {
    id: "br-2.3-03", part: "Beamtenrecht", chapter: "2.3 Vorgesetzte",
    question: "Wer ist Dienstvorgesetzter und für die \"persönlichen Angelegenheiten\" der Beamten zuständig?",
    options: ["Das Regierungspräsidium (Regierungspräsident*in)", "Der/die Schulleiter*in", "Das Kultusministerium", "Der Schulträger"],
    explanation: "Vorgesetzte für die dienstliche Tätigkeit sind dagegen Schulleiter*in, stv. SL und Abteilungsleiter*in."
  },
  {
    id: "br-2.3-04", part: "Beamtenrecht", chapter: "2.3 Vorgesetzte",
    question: "Wer ist \"Vorgesetzter\" im Sinne der Weisungsbefugnis für die konkrete dienstliche Tätigkeit an der Schule?",
    options: ["Der/die Schulleiter*in (sowie stv. SL, Abteilungsleiter*in)", "Ausschließlich das Kultusministerium", "Ausschließlich das Regierungspräsidium", "Der Elternbeirat"],
    explanation: "Der Dienstvorgesetzte (RP) ist dagegen für persönliche Angelegenheiten der Beamten zuständig."
  },
  {
    id: "br-2.3-05", part: "Beamtenrecht", chapter: "2.3 Vorgesetzte",
    question: "Wo sind die Vorgesetzten der Referendar*innen geregelt?",
    options: ["In den Prüfungsordnungen (z.B. Seminarleitung, Fachbereichsleitung, Schulleitung, Mentor*innen)", "Ausschließlich im Schulgesetz", "Ausschließlich in der NVO", "Sie werden von den Referendaren selbst frei gewählt"],
    explanation: "Genannt werden u.a. Seminarleiterin, Fachbereichsleiter, Lehrbeauftragte, SL, Mentorinnen."
  },

  // ===================== 2.4 Laufbahnrecht =====================
  {
    id: "br-2.4-01", part: "Beamtenrecht", chapter: "2.4 Laufbahnrecht",
    question: "Was besagt das Laufbahnprinzip?",
    options: ["Alle statusrechtlichen Ämter werden in Laufbahnen zusammengefasst, für die Beamte vor- und ausgebildet werden", "Jeder Beamte kann frei zwischen allen Ämtern wechseln", "Laufbahnen gelten nur für den höheren Dienst", "Es gibt in BW keine festgelegten Laufbahnen"],
    explanation: "Ziel: bestmögliche Auslese, wirkungsvolle Steuerung des Personaleinsatzes, hoher Leistungsstand der Verwaltung."
  },
  {
    id: "br-2.4-02", part: "Beamtenrecht", chapter: "2.4 Laufbahnrecht",
    question: "Ab welchem Amt beginnt bei Lehrkräften der höhere Dienst?",
    options: ["Ab Studienrat (StR), Eingangsamt A13", "Ab Oberstudienrat (OStR)", "Ab Studiendirektor (StD)", "Ab Referendariat"],
    explanation: "Die Laufbahngruppen sind: einfacher, mittlerer, gehobener und höherer Dienst."
  },
  {
    id: "br-2.4-03", part: "Beamtenrecht", chapter: "2.4 Laufbahnrecht",
    question: "Wie lange dauert der Vorbereitungsdienst (Referendariat) in der Regel?",
    options: ["18 Monate", "12 Monate", "24 Monate", "6 Monate"],
    explanation: "Referendar*innen sind währenddessen Beamte auf Widerruf."
  },
  {
    id: "br-2.4-04", part: "Beamtenrecht", chapter: "2.4 Laufbahnrecht",
    question: "Wie lange dauert die reguläre Probezeit als \"Beamter auf Probe\"?",
    options: ["In der Regel 3 Jahre", "In der Regel 1 Jahr", "In der Regel 5 Jahre", "Es gibt keine feste Regeldauer"],
    explanation: "Eine Verlängerung um max. 2 Jahre und eine Verkürzung um 1–2 Jahre (z.B. bei hervorragender Laufbahnprüfung) sind möglich."
  },
  {
    id: "br-2.4-05", part: "Beamtenrecht", chapter: "2.4 Laufbahnrecht",
    question: "Worauf wird während der Probezeit überprüft?",
    options: ["Eignung, Befähigung und fachliche Leistung", "Nur die Fachkenntnisse im Unterrichtsfach", "Nur die Beliebtheit bei den Schülern", "Nur die Anwesenheitsquote"],
    explanation: "Grundlage der Feststellung der Bewährung ist die dienstliche Beurteilung."
  },
  {
    id: "br-2.4-06", part: "Beamtenrecht", chapter: "2.4 Laufbahnrecht",
    question: "Wann muss laut Zusammenfassung eine dienstliche Beurteilung während der Probezeit erstellt werden?",
    options: ["9 Monate nach Einstellung und 3 Monate vor Ende der Probezeit", "Nur einmalig am Ende der Probezeit", "Jeden Monat", "Nur auf Antrag des Beamten"],
    explanation: "Die Beurteilung wird durch den/die Schulleiter*in erstellt."
  },

  // ===================== 2.5 Einstellung und Entlassung =====================
  {
    id: "br-2.5-01", part: "Beamtenrecht", chapter: "2.5 Einstellung und Entlassung",
    question: "Welche Staatsangehörigkeit ist grundsätzlich Voraussetzung für die Ernennung zum Beamten?",
    options: ["Deutsche Staatsangehörigkeit (Art. 116 GG), mit Ausnahmen für EU-/Vertrags-/Drittstaatsangehörige", "Zwingend nur eine EU-Staatsangehörigkeit", "Es gibt keinerlei Voraussetzung zur Staatsangehörigkeit", "Zwingend die baden-württembergische Landeszugehörigkeit"],
    explanation: "Weitere Kriterien der Ernennung: Eintreten für die freiheitlich-demokratische Grundordnung, Höchstalter, Eignung, Befähigung, fachliche Leistung."
  },
  {
    id: "br-2.5-02", part: "Beamtenrecht", chapter: "2.5 Einstellung und Entlassung",
    question: "Gibt es ein Höchstalter für die Einstellung ins Beamtenverhältnis (mit Ausnahmen)?",
    options: ["Ja, in der Regel 42 Jahre", "Nein, es gibt kein Höchstalter", "Ja, in der Regel 30 Jahre", "Ja, in der Regel 55 Jahre"],
    explanation: "Ausnahmen vom Höchstalter sind unter bestimmten Voraussetzungen möglich."
  },
  {
    id: "br-2.5-03", part: "Beamtenrecht", chapter: "2.5 Einstellung und Entlassung",
    question: "Was passiert bei falschen Voraussetzungen, Täuschung oder Bestechung im Rahmen der Ernennung?",
    options: ["Rücknahme der Ernennung", "Nur eine Verwarnung", "Automatische Beförderung wird ausgesetzt", "Keine rechtliche Konsequenz möglich"],
    explanation: "Weitere Beendigungsgründe: Entlassung, Verlust der Beamtenrechte, Ruhestand, Tod."
  },
  {
    id: "br-2.5-04", part: "Beamtenrecht", chapter: "2.5 Einstellung und Entlassung",
    question: "Ab welcher strafrechtlichen Verurteilung verliert ein Beamter automatisch seine Beamtenrechte?",
    options: ["Ab einer Verurteilung zu mindestens 1 Jahr Freiheitsstrafe", "Bereits ab jeder Geldstrafe", "Erst ab 5 Jahren Freiheitsstrafe", "Nur bei Verurteilung wegen eines Amtsdelikts"],
    explanation: "Dies ist einer der gesetzlichen Gründe für die Beendigung des Beamtenverhältnisses."
  },
  {
    id: "br-2.5-05", part: "Beamtenrecht", chapter: "2.5 Einstellung und Entlassung",
    question: "Wer erstellt die dienstliche Beurteilung während der Probezeit eines Beamten an der Schule?",
    options: ["Der/die Schulleiter*in", "Das Kultusministerium", "Der Personalrat", "Der Elternbeirat"],
    explanation: "Grundlage: Formular \"Dienstliche Beurteilung\", relevant u.a. für die mögliche Verkürzung der Probezeit."
  },

  // ===================== 2.6 Pflichten und Rechte der Beamten =====================
  {
    id: "br-2.6-01", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "In welche drei Bereiche werden die Pflichten der Beamten laut Zusammenfassung eingeteilt?",
    options: ["Dienstleistungspflichten, Treuepflichten, Verhaltenspflichten", "Fürsorgepflichten, Vermögenspflichten, Schutzpflichten", "Laufbahnpflichten, Besoldungspflichten, Disziplinarpflichten", "Unterrichtspflichten, Konferenzpflichten, Aufsichtspflichten"],
    explanation: "Rechte werden analog in vermögenswerte Rechte, Fürsorgerechte und Schutzrechte eingeteilt."
  },
  {
    id: "br-2.6-02", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Was versteht man unter der Remonstrationspflicht?",
    options: ["Pflicht und Recht, gegen eine Dienstanweisung Widerspruch einzulegen, wenn Bedenken gegen deren Rechtmäßigkeit bestehen", "Pflicht, jede Weisung des Vorgesetzten unwidersprochen auszuführen", "Recht, den Dienst grundlos zu verweigern", "Pflicht zur jährlichen Selbstbeurteilung"],
    explanation: "Beispiel: Hinweis eines Referendars an den Schulleiter, im 1. Ausbildungsabschnitt keine Vertretungen übernehmen zu müssen."
  },
  {
    id: "br-2.6-03", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Dürfen Beamte streiken?",
    options: ["Nein, es besteht ein Streikverbot", "Ja, uneingeschränkt wie Angestellte", "Ja, aber nur maximal 1 Tag pro Jahr", "Ja, nach vorheriger Ankündigung beim Dienstherrn"],
    explanation: "Das Streikverbot ist Teil der Treuepflichten und sichert die Funktionsfähigkeit der Verwaltung."
  },
  {
    id: "br-2.6-04", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Wie hoch ist die besonders strenge Wertgrenze für zulässige Geschenke von Einzelpersonen an eine Lehrkraft?",
    options: ["5 Euro", "50 Euro", "1 Euro", "Es gibt keine Wertgrenze"],
    explanation: "Bei Gruppengeschenken der Klassengemeinschaft/Elternschaft (z.B. Essensgutschein) ist die Wertgrenze höher; im Zweifel die Schulleitung fragen."
  },
  {
    id: "br-2.6-05", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Dürfen Lehrkräfte ihre eigenen Kinder unterrichten oder benoten?",
    options: ["Nein, das verstößt gegen den Grundsatz der Unparteilichkeit", "Ja, wenn die Schulleitung zustimmt", "Ja, das ist ausdrücklich erlaubt", "Nur in Fächern mit weniger als 15 Schülern"],
    explanation: "Amtshandlungen, die Beamte oder ihre Angehörigen betreffen, sind grundsätzlich unzulässig."
  },
  {
    id: "br-2.6-06", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Was besagt das \"Überwältigungsverbot\" im Rahmen der politischen Neutralität im Dienst?",
    options: ["Schüler*innen dürfen nicht mit der eigenen (z.B. parteipolitischen) Meinung der Lehrkraft indoktriniert werden", "Lehrkräfte dürfen politische Themen im Unterricht generell nicht behandeln", "Nur regierungsnahe Positionen dürfen im Unterricht vertreten werden", "Schüler*innen dürfen ihre eigene Meinung nicht äußern"],
    explanation: "Grundlage: Beutelsbacher Konsens (1977), neben Kontroversitätsgebot und Prinzip der Urteilsbefähigung."
  },
  {
    id: "br-2.6-07", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Was besagt das \"Kontroversitätsgebot\" des Beutelsbacher Konsenses?",
    options: ["Was in Wissenschaft und Politik kontrovers ist, muss auch beim Lernen kontrovers behandelt werden", "Lehrkräfte müssen im Unterricht immer eine Position eindeutig vertreten", "Kontroverse Themen sind im Unterricht generell zu vermeiden", "Nur Themen ohne gesellschaftliche Kontroverse dürfen behandelt werden"],
    explanation: "Ausnahme: Positionen, die mit der freiheitlich-demokratischen Grundordnung unvereinbar sind (z.B. Gleichheit aller vor dem Gesetz), müssen nicht als gleichwertig dargestellt werden."
  },
  {
    id: "br-2.6-08", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Dürfen sich Beamte politisch betätigen und Mitglied einer Partei werden?",
    options: ["Ja, solange es sich nicht um eine verfassungswidrige Partei handelt; auch ein Mandat kann angestrebt werden", "Nein, jede Parteimitgliedschaft ist Beamten verboten", "Ja, aber nur außerhalb Baden-Württembergs", "Nur wenn die Schulleitung vorab zustimmt"],
    explanation: "Grenze ist die politische Treuepflicht (Art. 33 GG) gegenüber der freiheitlich-demokratischen Grundordnung."
  },
  {
    id: "br-2.6-09", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Ist das Tragen eines islamischen Kopftuchs durch eine Lehrkraft im Unterricht generell verboten?",
    options: ["Nein, es bedarf einer Einzelfallprüfung; ein Verbot ist nur bei Gefährdung des Schulfriedens möglich, eine Vollverschleierung ist aber die Grenze", "Ja, ein Kopftuch ist an Schulen in BW grundsätzlich verboten", "Nein, ein Kopftuch ist unter allen Umständen erlaubt, auch als Vollverschleierung", "Das hängt allein von der Entscheidung des Elternbeirats ab"],
    explanation: "Das Prinzip der religiösen Neutralität erfordert eine Abwägung im Einzelfall."
  },
  {
    id: "br-2.6-10", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Was umfasst die Amtsverschwiegenheit im schulischen Kontext insbesondere?",
    options: ["Das Konferenzgeheimnis", "Nur die Geheimhaltung von Prüfungsaufgaben", "Nur die Geheimhaltung des eigenen Gehalts", "Sie gilt nur gegenüber der Presse"],
    explanation: "Amtsverschwiegenheit ist einer der hergebrachten Grundsätze des Berufsbeamtentums."
  },
  {
    id: "br-2.6-11", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "In welche drei Bereiche werden die Rechte der Beamten eingeteilt?",
    options: ["Vermögenswerte Rechte, Fürsorgerechte, Schutzrechte", "Laufbahnrechte, Besoldungsrechte, Urlaubsrechte", "Dienstrechte, Privatrechte, Sozialrechte", "Individualrechte, Kollektivrechte, Repräsentativrechte"],
    explanation: "Beispiele: Besoldung/Beihilfe (vermögenswert), Urlaub/Fürsorge (Fürsorgerechte), Beschwerderecht (Schutzrechte)."
  },
  {
    id: "br-2.6-12", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Über welchen Weg muss eine Beschwerde eines Beamten grundsätzlich eingereicht werden?",
    options: ["Über den Dienstweg, beginnend mit der Schulleitung", "Direkt beim Kultusministerium, unter Umgehung der Schulleitung", "Direkt bei Gericht ohne vorheriges Verfahren", "Über den Personalrat als einzige zulässige Stelle"],
    explanation: "Das Beschwerderecht ist eines der Schutzrechte der Beamten."
  },
  {
    id: "br-2.6-13", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "In welchem Gesetz ist das Verbot der Annahme von Belohnungen und Geschenken für Beamte geregelt?",
    options: ["§ 42 Beamtenstatusgesetz", "§ 90 SchG", "Im Landesbeamtengesetz gar nicht mehr geregelt", "Ausschließlich im TV-L"],
    explanation: "Für Tarifbeschäftigte gilt die vergleichbare Regelung des § 3 Abs. 3 TV-L; früher war dies in § 89 LBG-alt geregelt."
  },
  {
    id: "br-2.6-14", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Wer entscheidet an der Schule über die ausnahmsweise Zustimmung zur Annahme eines Geschenks?",
    options: ["Der/die Schulleiter*in", "Das Regierungspräsidium", "Der Elternbeirat", "Die Gesamtlehrerkonferenz"],
    explanation: "Zuständigkeit nach § 7 Abs. 1 Nr. 4 KMZuVO; die Entscheidung sollte stets schriftlich getroffen werden."
  },
  {
    id: "br-2.6-15", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Dürfen Lehrkräfte finanzielle oder sachliche Zuwendungen von Schulfotografen als Ausgleich für den Organisationsaufwand der Schulfotoaktion annehmen?",
    options: ["Nein, das ist laut BGH-Rechtsprechung unzulässig – unabhängig davon, ob die Zuwendung an Einzelpersonen, die Schule oder eine Klassenkasse geht", "Ja, solange die Zuwendung der Klassenkasse zugutekommt", "Ja, wenn die Schulleitung informiert wird", "Ja, bis zu einem Wert von 50 Euro pro Klasse"],
    explanation: "BGH, Urteil vom 26.5.2011 – 3 StR 492/10."
  },
  {
    id: "br-2.6-16", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Können Geschenke von Schülerinnen und Schülern mit überwiegend ideellem Wert (z.B. selbstgebastelte Gegenstände) angenommen werden?",
    options: ["Ja, solche Geschenke sind unproblematisch zulässig", "Nein, jedes Geschenk von Schülern ist untersagt", "Nur mit vorheriger schriftlicher Genehmigung des Kultusministeriums", "Nur wenn der Wert unter 1 Euro liegt"],
    explanation: "Im Unterschied dazu ist bei Geschenken von Einzelpersonen (z.B. Eltern) ein sehr strenger Maßstab anzulegen (Wertgrenze ca. 5 Euro bei Anlässen wie Geburtstag)."
  },
  {
    id: "br-2.6-17", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Welche Strafe droht einem Beamten bei strafbarer \"Vorteilsannahme\" nach § 331 StGB?",
    options: ["Freiheitsstrafe bis zu 3 Jahren oder Geldstrafe", "Ausschließlich eine Geldbuße von maximal 500 Euro", "Automatisch die Entfernung aus dem Beamtenverhältnis ohne Gerichtsverfahren", "Es drohen keine strafrechtlichen Konsequenzen, nur disziplinarrechtliche"],
    explanation: "Bei \"Bestechlichkeit\" (§ 332 StGB, wenn die Diensthandlung selbst pflichtwidrig ist) drohen bis zu 5 Jahre, in besonders schweren Fällen bis zu 10 Jahre Freiheitsstrafe."
  },
  {
    id: "br-2.6-18", part: "Beamtenrecht", chapter: "2.6 Pflichten und Rechte der Beamten",
    question: "Was muss ein Beamter tun, wenn versucht wird, seine Amtsführung durch das Angebot von Geschenken zu beeinflussen?",
    options: ["Er muss seinen Dienstvorgesetzten unverzüglich darüber unterrichten", "Er darf das Geschenk annehmen, solange er es nicht meldet", "Er muss unmittelbar Strafanzeige bei der Polizei stellen, eine interne Meldung genügt nicht", "Er muss nur reagieren, wenn der Wert 100 Euro übersteigt"],
    explanation: "Diese Meldepflicht ergibt sich aus der Verwaltungsvorschrift zu § 89 LBG-alt, die weiterhin sinngemäß angewendet wird."
  },

  // ===================== 2.7 Personalvertretung =====================
  {
    id: "br-2.7-01", part: "Beamtenrecht", chapter: "2.7 Personalvertretung",
    question: "Wie heißt die Personalvertretung auf Ebene des Kultusministeriums?",
    options: ["Hauptpersonalrat (HPR)", "Bezirkspersonalrat (BPR)", "Örtlicher Personalrat (ÖPR)", "Gesamtlehrerkonferenz"],
    explanation: "Auf Ebene der Regierungspräsidien heißt die Personalvertretung Bezirkspersonalrat (BPR)."
  },
  {
    id: "br-2.7-02", part: "Beamtenrecht", chapter: "2.7 Personalvertretung",
    question: "Wie heißt die Personalvertretung auf Ebene der Schule (Gymnasium/berufliche Schule) bzw. des staatlichen Schulamts?",
    options: ["Örtlicher Personalrat (ÖPR)", "Hauptpersonalrat (HPR)", "Bezirkspersonalrat (BPR)", "Elternbeirat"],
    explanation: "Die drei Ebenen: HPR (KM), BPR (RP), ÖPR (Schule/Schulamt)."
  },
  {
    id: "br-2.7-03", part: "Beamtenrecht", chapter: "2.7 Personalvertretung",
    question: "Was bedeutet \"Mitbestimmung\" als stärkstes Beteiligungsrecht des Personalrats?",
    options: ["Bei Nichteinigung entscheidet die Einigungsstelle oder das Kultusministerium per Evokationsrecht (z.B. bei Einstellung, Beförderung, Versetzung)", "Der Personalrat wird nur angehört, seine Meinung ist unverbindlich", "Der Personalrat entscheidet immer allein und endgültig", "Mitbestimmung gilt nur für Beförderungen"],
    explanation: "Schwächere Beteiligungsformen sind Anhörung und Mitwirkung."
  },
  {
    id: "br-2.7-04", part: "Beamtenrecht", chapter: "2.7 Personalvertretung",
    question: "Was bedeutet \"Mitwirkung\" als Beteiligungsrecht des Personalrats (z.B. bei Entlassung eines Beamten auf Probe)?",
    options: ["Die Maßnahme darf erst nach Zustimmung oder Entscheid des Kultusministeriums durchgeführt werden", "Der Personalrat wird nur informiert, ohne jede Mitsprache", "Der Personalrat entscheidet abschließend allein", "Mitwirkung betrifft ausschließlich Fortbildungen"],
    explanation: "Mitwirkung ist stärker als reine Anhörung, aber schwächer als volle Mitbestimmung."
  },
  {
    id: "br-2.7-05", part: "Beamtenrecht", chapter: "2.7 Personalvertretung",
    question: "Wodurch sind die Aufgaben der Personalvertretung begrenzt?",
    options: ["Durch den Amtsauftrag der Behörde gegenüber der Allgemeinheit und das Demokratieprinzip", "Es gibt keinerlei Begrenzung der Personalvertretung", "Nur durch die Anzahl der Personalratsmitglieder", "Ausschließlich durch das Landesdisziplinargesetz"],
    explanation: "Die Verwaltung bleibt gegenüber dem Parlament verantwortlich (Demokratieprinzip)."
  },

  // ===================== 2.8 Pflichtverletzung: Dienstvergehen von Beamten =====================
  {
    id: "br-2.8-01", part: "Beamtenrecht", chapter: "2.8 Pflichtverletzung: Dienstvergehen von Beamten",
    question: "Was ist ein Dienstvergehen?",
    options: ["Eine schuldhafte, d.h. vorsätzliche oder fahrlässige Pflichtverletzung", "Jede Meinungsäußerung eines Beamten in der Öffentlichkeit", "Ausschließlich eine strafrechtliche Verurteilung", "Jede Krankmeldung eines Beamten"],
    explanation: "Auch Verhalten außerhalb des Dienstes kann ein Dienstvergehen darstellen, wenn es dem Ansehen des Beamtentums schadet."
  },
  {
    id: "br-2.8-02", part: "Beamtenrecht", chapter: "2.8 Pflichtverletzung: Dienstvergehen von Beamten",
    question: "Kann auch ein Verhalten außerhalb des Dienstes (z.B. Trunkenheit am Steuer) als Dienstvergehen geahndet werden?",
    options: ["Ja, wenn es dem Ansehen des Beamtentums schadet", "Nein, private Verstöße sind für das Dienstrecht generell irrelevant", "Nur wenn die Presse darüber berichtet", "Nur bei Straftaten im Zusammenhang mit dem Schulgebäude"],
    explanation: "Dienstvergehen können also auch privates Verhalten mit Außenwirkung betreffen."
  },
  {
    id: "br-2.8-03", part: "Beamtenrecht", chapter: "2.8 Pflichtverletzung: Dienstvergehen von Beamten",
    question: "Welches Gesetz regelt den Ablauf eines Disziplinarverfahrens in Baden-Württemberg?",
    options: ["Das Landesdisziplinargesetz", "Das Landesbeamtengesetz", "Das Beamtenstatusgesetz", "Das Schulgesetz"],
    explanation: "Nach Ermittlungen erfolgt entweder die Einstellung des Verfahrens oder der Erlass einer Disziplinarverfügung."
  },
  {
    id: "br-2.8-04", part: "Beamtenrecht", chapter: "2.8 Pflichtverletzung: Dienstvergehen von Beamten",
    question: "Welche Behörde ist für Disziplinarverfahren gegen Lehrkräfte zuständig?",
    options: ["Die Schulaufsicht", "Der Schulträger", "Der Elternbeirat", "Die Gesamtlehrerkonferenz"],
    explanation: "Mögliche Disziplinarmaßnahmen reichen von Geldbuße bis zur Entfernung aus dem Beamtenverhältnis."
  },
  {
    id: "br-2.8-05", part: "Beamtenrecht", chapter: "2.8 Pflichtverletzung: Dienstvergehen von Beamten",
    question: "Was ist die mildeste dienstrechtliche Reaktion des Schulleiters unterhalb einer förmlichen Disziplinarmaßnahme?",
    options: ["Die Missbilligung (mündlich oder schriftlich)", "Die fristlose Entlassung", "Die Kürzung des Ruhegehalts", "Eine Geldbuße"],
    explanation: "Weitere Schritte des Schulleiters: Erteilung einer Weisung, (auch unangekündigte) Unterrichtsbesuche."
  },
  {
    id: "br-2.8-06", part: "Beamtenrecht", chapter: "2.8 Pflichtverletzung: Dienstvergehen von Beamten",
    question: "Was bedeutet eine \"Spannungsversetzung\"?",
    options: ["Eine Versetzung bei ungelöstem, den Schulfrieden störendem Streit unter Lehrkräften, wenn eine Mediation nicht erfolgreich war", "Eine automatische jährliche Rotation aller Lehrkräfte", "Eine Versetzung von Schülern in eine Parallelklasse", "Eine freiwillige Versetzung auf eigenen Wunsch"],
    explanation: "Diese Maßnahme wird durch die Schulaufsicht veranlasst."
  },
  {
    id: "br-2.8-07", part: "Beamtenrecht", chapter: "2.8 Pflichtverletzung: Dienstvergehen von Beamten",
    question: "Wer haftet primär für Schäden, die ein Beamter in Ausübung seines Dienstes einem Dritten zufügt?",
    options: ["Der Dienstherr (Art. 34 GG)", "Der Beamte persönlich und unmittelbar in voller Höhe", "Die gesetzliche Schülerunfallversicherung allein", "Der Schulträger allein"],
    explanation: "Der Dienstherr kann bei Vorsatz oder grober Fahrlässigkeit Regress beim Beamten nehmen."
  },
  {
    id: "br-2.8-08", part: "Beamtenrecht", chapter: "2.8 Pflichtverletzung: Dienstvergehen von Beamten",
    question: "Kann eine Pflichtverletzung eines Beamten sowohl disziplinar- als auch strafrechtlich geahndet werden?",
    options: ["Ja, eine solche \"Doppelbestrafung\" ist möglich (z.B. bei Körperverletzung im Amt)", "Nein, es gilt ein striktes Doppelbestrafungsverbot", "Nein, das Disziplinarrecht geht dem Strafrecht immer vor und schließt es aus", "Nein, nur das Strafrecht kann angewendet werden"],
    explanation: "Verletzung einer Beamtenpflicht kann gleichzeitig gegen das StGB verstoßen (z.B. Bestechlichkeit)."
  },

  // ===================== 2.9 Rechtsstellung der Referendare =====================
  {
    id: "br-2.9-01", part: "Beamtenrecht", chapter: "2.9 Rechtsstellung der Referendare",
    question: "Welchen beamtenrechtlichen Status haben Referendar*innen?",
    options: ["Beamte auf Widerruf", "Beamte auf Lebenszeit", "Beamte auf Probe", "Angestellte im öffentlichen Dienst"],
    explanation: "Vorbereitungsdienst und Beamtenverhältnis enden kraft Gesetzes mit Bekanntgabe des Bestehens/wiederholten Nichtbestehens der Prüfung."
  },
  {
    id: "br-2.9-02", part: "Beamtenrecht", chapter: "2.9 Rechtsstellung der Referendare",
    question: "Wann enden Vorbereitungsdienst und Beamtenverhältnis eines Referendars kraft Gesetzes?",
    options: ["Mit Ablauf des Tages der Mitteilung des Bestehens (bzw. wiederholten Nichtbestehens) der Prüfung", "Automatisch nach exakt 18 Monaten, unabhängig vom Prüfungsergebnis", "Erst mit Ablauf des Schuljahres", "Erst nach schriftlicher Kündigung durch den Referendar"],
    explanation: "Dies gilt unabhängig vom tatsächlichen letzten Arbeitstag."
  },
  {
    id: "br-2.9-03", part: "Beamtenrecht", chapter: "2.9 Rechtsstellung der Referendare",
    question: "Wie viele Unterrichtsstunden pro Monat können bei dringendem Bedarf über die Ausbildung hinaus höchstens vergütet werden?",
    options: ["Bis zu 24 Unterrichtsstunden/Monat", "Bis zu 5 Unterrichtsstunden/Monat", "Unbegrenzt viele Stunden", "Referendare dürfen keinen zusätzlichen Unterricht erteilen"],
    explanation: "Dies betrifft Unterricht über die durch die Ausbildung geforderten Stunden hinaus."
  },
  {
    id: "br-2.9-04", part: "Beamtenrecht", chapter: "2.9 Rechtsstellung der Referendare",
    question: "Was passiert bei unerlaubtem Versäumen von Seminarveranstaltungen durch Referendare?",
    options: ["Anteiliger Verlust der Bezüge", "Automatisches Nichtbestehen der Prüfung", "Keinerlei Konsequenz", "Sofortige Entlassung ohne Vorwarnung"],
    explanation: "Dies ist eine besondere Konsequenz im Rahmen des eingeschränkten Rechtsstatus von Referendaren."
  },
  {
    id: "br-2.9-05", part: "Beamtenrecht", chapter: "2.9 Rechtsstellung der Referendare",
    question: "Wann kann eine vorzeitige Entlassung eines Referendars erfolgen (Beispiel)?",
    options: ["Wenn eine erforderliche Verlängerung um mehr als 2 Unterrichtshalbjahre nötig wäre", "Bereits bei einer einzigen mangelhaften Unterrichtsstunde", "Automatisch nach jeder Krankschreibung", "Wenn der Referendar Mitglied einer Partei ist"],
    explanation: "Weitere Gründe: kein selbständiger Unterricht nach einmaliger Verlängerung des 1. Abschnitts möglich, nicht verantwortbarer Einsatz im Unterricht (z.B. Sicherheitsmängel im Experimentalunterricht)."
  },
  {
    id: "br-2.9-06", part: "Beamtenrecht", chapter: "2.9 Rechtsstellung der Referendare",
    question: "Gelten für Referendare bei Beurlaubung und Nebentätigkeiten dieselben Rechte wie bei regulären Beamten?",
    options: ["Nein, es gelten Einschränkungen: keine längerfristige Beurlaubung, nur eingeschränkte Genehmigung von Nebentätigkeiten", "Ja, uneingeschränkt dieselben Rechte", "Nein, Referendare haben überhaupt keine Rechte", "Nur bei Referendaren über 30 Jahren gelten Einschränkungen"],
    explanation: "Ansonsten gelten Rechte und Pflichten wie bei anderen Beamten (Kapitel 2.6)."
  }

];
