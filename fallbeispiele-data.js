// Fallbeispiele-Datenbank für den Fallbeispiel-Modus
// Quelle: "Fälle zur Aufsichtspflicht" (Referat LRD M. Moser, RP Freiburg, Fälle 1–5)
// sowie ergänzende Fälle/Regelungen aus derselben Zusammenstellung.
//
// Jeder Fall wird nach dem Schema der juristischen Fallbearbeitung (vgl. Kapitel 1.1)
// in drei Schritten gelöst: Tatbestand -> Subsumtion -> Rechtsfolge.

window.FALLBEISPIELE = [

  {
    id: "fb-1.12-01", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Der Fenstersturz",
    sachverhalt: "Ein 13-jähriger Schüler wird während des Unterrichts wegen Störungen unbeaufsichtigt vor die Tür gestellt. Der Schüler geht in einen daneben liegenden Raum und stürzt dort aus dem Fenster, wobei nicht zu klären war, ob er aus Unachtsamkeit stürzte oder sich herausgestürzt hatte. Der Schüler zog sich schwere Verletzungen zu.",
    schritte: [
      { label: "Tatbestand",
        frage: "Wann liegt eine Aufsichtspflichtverletzung der Lehrkraft vor?",
        loesung: "Eine Aufsichtspflichtverletzung liegt vor, wenn die Lehrkraft nicht die nach den konkreten Umständen (Alter, Reife, Vorgeschichte, erkennbare Gefahrenlage) gebotene vorausschauende, umsichtige und nachdrückliche Aufsicht sichergestellt hat. Maßstab ist, was eine verständige Lehrkraft in dieser Situation hätte vorhersehen und veranlassen müssen." },
      { label: "Subsumtion",
        frage: "Musste der Lehrer damit rechnen, dass der Schüler in den Nebenraum geht und aus dem Fenster stürzt?",
        loesung: "Nach Auffassung des OLG Stuttgart durfte der Lehrer davon ausgehen, dass sich ein Schüler dieses Alters in dieser Situation ordnungsgemäß und vernünftig verhält. Ein ausdrücklicher Hinweis, sich vor der Tür aufzuhalten, war nicht erforderlich; auch musste die Klassenzimmertür nicht offen gelassen werden. Dass der Schüler im Nebenraum aus dem Fenster stürzte, lag außerhalb aller Lebenserfahrung." },
      { label: "Rechtsfolge",
        frage: "Zu welchem Ergebnis kommt das Gericht?",
        loesung: "Keine Aufsichtspflichtverletzung des Lehrers. Anmerkung: Diese Entscheidung kann keinesfalls verallgemeinert werden – die Umstände des Einzelfalls (z.B. ein bereits auffälliger Schüler) können zu einem anderen Ergebnis führen." }
    ],
    quelle: "OLG Stuttgart"
  },

  {
    id: "fb-1.12-02", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Der unübersichtliche Pausenhof",
    sachverhalt: "Die Schulleitung hatte für die große Pause die Lehrkraft L als Pausenaufsicht abgestellt. Bei dem Pausenhof handelte es sich um einen großen und unübersichtlichen Schulhof, der von einer einzelnen Person in keiner Weise auch nur annähernd überblickt werden konnte. Bei einer Schlägerei kam ein Schüler zu Fall und verletzte sich am Auge.",
    schritte: [
      { label: "Tatbestand",
        frage: "Wer trägt die Verantwortung, wenn die Aufsichtsführung schon organisatorisch nicht ausreichend geplant war?",
        loesung: "Reicht eine einzelne Aufsichtsperson organisatorisch nicht aus, um den Pausenhof wirksam zu überblicken, kann bereits die Personalplanung selbst – also die Entscheidung der Schulleitung – pflichtwidrig sein, unabhängig vom konkreten Verhalten der eingesetzten Lehrkraft L." },
      { label: "Subsumtion",
        frage: "War bei diesem großen, unübersichtlichen Schulhof mit nur einer Aufsichtsperson eine wirksame Aufsicht überhaupt möglich?",
        loesung: "Nach Ansicht des OLG Celle ist in einem derartigen Fall eine wirksame Aufsicht nicht zu gewährleisten. In bestimmten Bereichen des Schulhofes konnten sich die Schüler fast völlig unbeaufsichtigt fühlen – genau dort kam es zu der Schlägerei." },
      { label: "Rechtsfolge",
        frage: "Wen trifft die Pflichtverletzung – die Aufsichtsperson oder die Schulleitung?",
        loesung: "Die Richter gingen von einer Pflichtverletzung der Schulleitung aus, da für diesen Pausenhof nur eine einzige Lehrkraft eingeteilt worden war." }
    ],
    quelle: "OLG Celle"
  },

  {
    id: "fb-1.12-03", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Die Schulbushaltestelle",
    sachverhalt: "Unmittelbar an das Schulgelände grenzt eine Schulbushaltestelle. Nach Unterrichtsschluss wurde ein 11-jähriger Schüler schwer verletzt, weil eine Gruppe von Schülern gegen den Bus drängte, als dieser sich langsam der Haltestelle näherte.",
    schritte: [
      { label: "Tatbestand",
        frage: "Wann fällt eine Bushaltestelle unter die schulische Aufsichtspflicht statt unter den (nicht aufsichtspflichtigen) Schulweg?",
        loesung: "Entscheidend ist, ob die Haltestelle gezielt für den von der Schule ausgelösten Ziel- und Quellverkehr eingerichtet ist und damit zum Schulbetrieb gehört – nicht die bloße räumliche Nähe. Die formale Erwägung, dass ggf. ein weiteres Grundstück dazwischenliegt oder auch Nichtschüler mitfahren dürfen, schließt dies nicht aus." },
      { label: "Subsumtion",
        frage: "Wie ist das massenhafte Drängen minderjähriger Schüler an einer unmittelbar angrenzenden Haltestelle zu bewerten?",
        loesung: "Nach einer Grundsatzentscheidung des Bundesgerichtshofes hätte die Schule an der Haltestelle eine Aufsicht bereithalten müssen. Das gilt insbesondere, wenn sich die Haltestelle in unmittelbarer Nähe der Schule befindet. Das massenweise Ein- oder Aussteigen minderjähriger Schüler ist besonders gefahrenträchtig." },
      { label: "Rechtsfolge",
        frage: "War die fehlende Aufsicht an der Haltestelle pflichtwidrig?",
        loesung: "Ja – die Schule hätte hier eine Aufsichtsperson bereithalten müssen. Das Fehlen einer solchen Aufsicht begründet eine Amtspflichtverletzung." }
    ],
    quelle: "BGH"
  },

  {
    id: "fb-1.12-04", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Der Schwimmunterricht",
    sachverhalt: "Die dritte Klasse einer Grundschule machte sich nach mehreren Unterrichtsstunden auf den Weg zu einem etwa 1 km entfernten Freizeitbad. Die Schüler wurden dabei nicht von einer Aufsichtsperson begleitet. Ein Schüler kletterte auf das Dach eines am Weg abgestellten Fahrzeuges und beschädigte es.",
    schritte: [
      { label: "Tatbestand",
        frage: "Unterscheidet sich ein von der Schule veranlasster Unterrichtsweg vom (nicht aufsichtspflichtigen) individuellen Nachhauseweg der Schüler?",
        loesung: "Ja: Auf einem Unterrichtsweg bewegt sich die Klasse geschlossen in Richtung eines von der Schule vorgegebenen Ziels; die Schüler bleiben dabei in der Obhut der Schule. Das unterscheidet ihn vom individuellen Nachhauseweg, den die Schüler ohnehin unbeaufsichtigt zurücklegen." },
      { label: "Subsumtion",
        frage: "Durfte eine dritte Grundschulklasse den 1-km-Weg zum Freizeitbad ohne Begleitung zurücklegen?",
        loesung: "Das Landgericht Hamburg bejahte eine Amtspflichtverletzung der Schule. Zwar legen Schüler auch den Nachhauseweg unbeaufsichtigt zurück – bei einem geschlossenen Unterrichtsweg ist die Gefahr unsachgemäßer und unerwünschter Handlungen der Schüler aber wesentlich erhöht." },
      { label: "Rechtsfolge",
        frage: "Welche Konsequenz hatte das Fehlen einer Aufsichtsperson?",
        loesung: "Die Schule hätte eine Aufsichtsperson als Begleitung mitgehen lassen müssen; deren Fehlen begründete einen Schadensersatzanspruch des Fahrzeugeigentümers gegen das Land." }
    ],
    quelle: "LG Hamburg"
  },

  {
    id: "fb-1.12-05", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Der Ausflug zum Baggersee",
    sachverhalt: "Eine Lehrerin unternimmt mit einer sechsten Klasse (30 Kinder) einen Tagesausflug an den Baggersee. Das Baden ist dort zugelassen, es war jedoch keine offizielle Badeaufsicht vorhanden (Schild „Baden auf eigene Gefahr\"). Die Lehrerin hatte die Schüler wiederholt auf die Gefahren hingewiesen und von den Eltern schriftliche Erklärungen zur Schwimmfähigkeit und zum Einverständnis verlangt. Sie besaß keinen Rettungsschwimmnachweis und hatte sich bei der Schulleitung nicht um weitere Aufsichtspersonen bemüht. Zwei Schülerinnen paddelten unbemerkt mit einer Luftmatratze über den freigegebenen Bereich hinaus und verloren das Gleichgewicht. Eine Schülerin, die die elterliche Erklärung gefälscht hatte, ertrank.",
    schritte: [
      { label: "Tatbestand",
        frage: "Welche Sorgfaltsanforderungen treffen eine Lehrkraft bei der Wahl des Ausflugsziels, der Gruppengröße und der Aufsicht am Wasser?",
        loesung: "Zu prüfen sind: (1) ob das Ausflugsziel angesichts fehlender offizieller Badeaufsicht überhaupt geeignet gewählt war, (2) ob eine einzelne Lehrkraft 30 Kinder am Wasser wirksam beaufsichtigen kann, (3) ob Elternerklärungen zur Schwimmfähigkeit ungeprüft ausreichen, und (4) welche Anforderungen an die konkrete Aufsichtsführung am Badeplatz (ständige Beobachtung der Wasserfläche) zu stellen sind." },
      { label: "Subsumtion",
        frage: "Hat die Lehrerin diesen Anforderungen genügt?",
        loesung: "Das OLG Köln bejahte mehrere Pflichtwidrigkeiten: Bereits die Wahl des Ausflugsziels ohne offizielle Badeaufsicht war pflichtwidrig. Die Lehrerin war mit der Aufsicht über so viele Schüler am Wasser überfordert, zumal ohne Rettungsschwimmnachweis und ohne weitere Aufsichtspersonen. Sie durfte sich nicht ungeprüft auf die vorgelegten (teils gefälschten) Erklärungen verlassen und wusste dadurch nicht, wie gut die einzelnen Schüler tatsächlich schwimmen konnten. Zusätzlich vernachlässigte sie die erhöhte Sorgfalt am Badeplatz: Sie hätte die Wasserfläche ständig im Blick behalten und das Entfernen der beiden Schülerinnen mit der Luftmatratze bemerken müssen." },
      { label: "Rechtsfolge",
        frage: "Welche rechtliche Konsequenz zog das Gericht?",
        loesung: "Das OLG Köln zog die Lehrerin strafrechtlich zur Verantwortung. Der Fall zeigt beispielhaft das Zusammenspiel von Zielwahl, Gruppengröße, Rettungsfähigkeit und aktiver Aufsichtsführung am Wasser (vgl. Kapitel 1.13 AUV: Rettungsfähigkeit und persönlicher Augenschein statt bloßer Elternbestätigung)." }
    ],
    quelle: "OLG Köln"
  },

  {
    id: "fb-1.12-06", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Der Museumsbesuch",
    sachverhalt: "Statt des regulären Vormittagsunterrichts ist mit einer Klasse 9 ein Besuch eines Museums in der Stadtmitte geplant. Der Lehrer lässt die Schüler morgens direkt zum Museum kommen, statt sie zuvor in der Schule zu sammeln.",
    schritte: [
      { label: "Tatbestand",
        frage: "Muss eine Klasse für eine außerhalb der Schule stattfindende Veranstaltung immer zuerst an der Schule zusammenkommen?",
        loesung: "Nein, notwendig ist das nicht in jedem Fall – entscheidend ist, ob die Anreise zum außerschulischen Treffpunkt für die Schüler mit besonderen Gefahren verbunden ist. Ist das nicht der Fall, kann die Anreise als \"Schulweg\" eingeordnet werden, für den keine Aufsichtspflicht besteht." },
      { label: "Subsumtion",
        frage: "Wie ist der direkte Weg einer Klasse-9-Schülerschaft zu einem innerstädtischen Museum einzuordnen?",
        loesung: "Wenn die Erreichbarkeit des Museums für die Schüler keine besonderen Gefahren beinhaltet, ist das Vorgehen zulässig – der Weg zum Museum ist dann rechtlich wie ein gewöhnlicher Schulweg zu behandeln." },
      { label: "Rechtsfolge",
        frage: "Besteht während der individuellen Anreise zum Museum Aufsichtspflicht?",
        loesung: "Nein – wie beim Schulweg besteht während der Anreise keine Aufsichtspflicht der Schule; sie beginnt erst mit dem Eintreffen am Treffpunkt." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-07", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Die dreifache Aufsicht",
    sachverhalt: "Eine Lehrerin erhält vom Schulleiter den Auftrag, in der fünften Stunde drei Klassen in verschiedenen Räumen zu beaufsichtigen.",
    schritte: [
      { label: "Tatbestand",
        frage: "Darf eine Schulleitung eine Lehrkraft anweisen, mehrere Klassen gleichzeitig in getrennten Räumen zu beaufsichtigen?",
        loesung: "Das ist eine Frage der zulässigen Aufsichtsintensität im Einzelfall. Sie hängt insbesondere vom Entwicklungsstand und der Zuverlässigkeit der betroffenen Schüler sowie von organisatorischen Möglichkeiten (z.B. räumliche Nähe der Zimmer) ab." },
      { label: "Subsumtion",
        frage: "Was muss die Lehrerin tun, damit eine solche Mehrfachaufsicht vertretbar ist?",
        loesung: "Der Auftrag ist unter gewissen Rahmenbedingungen zulässig. Jede der drei Klassen muss damit rechnen, dass die Lehrerin zur Kontrolle vorbeikommt; sie sollte den Klassen vorab entsprechende Verhaltenshinweise geben und kann sich einzelne Schüler zur Unterstützung auswählen." },
      { label: "Rechtsfolge",
        frage: "Wie kann die Schulleitung die Situation zusätzlich entschärfen?",
        loesung: "Die Schulleitung könnte durch geeignete Raumverlegungen dafür sorgen, dass sich die drei Klassen in unmittelbarer räumlicher Nähe zueinander befinden, um die Kontrollwege der Lehrerin zu verkürzen." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-08", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Die Mittelstufenparty",
    sachverhalt: "Die Schülermitverantwortung (SMV) plant eine Mittelstufenparty. Als Aufsicht möchte sie zur Entlastung der Lehrkräfte Schüler/innen der Jahrgangsstufe 1 (Kursstufe) einsetzen.",
    schritte: [
      { label: "Tatbestand",
        frage: "Unter welcher Voraussetzung dürfen SMV-Veranstaltungen ohne Präsenzaufsicht einer Lehrkraft stattfinden?",
        loesung: "Nach § 14 SMV-VO ist eigenverantwortliche Durchführung durch geeignete, mindestens 16-jährige Schüler mit Einverständnis der Erziehungsberechtigten möglich – es sei denn, die Art der Veranstaltung macht im Hinblick auf Alter der Teilnehmer oder erhöhte Gefahren die Aufsicht durch eine Lehrkraft erforderlich (§ 14 Abs. 4 SMV-VO)." },
      { label: "Subsumtion",
        frage: "Reicht bei einer Mittelstufenparty mit möglichem Alkoholkonsum eine reine Schüleraufsicht aus?",
        loesung: "Im Hinblick auf das Alter der Partyteilnehmer/innen (Mittelstufe) und die daraus eventuell resultierenden Gefahren (z.B. Alkohol) ist die Aufsichtsführung durch Lehrkräfte hier verpflichtend." },
      { label: "Rechtsfolge",
        frage: "Ist der Einsatz der Kursstufen-Schüler damit ausgeschlossen?",
        loesung: "Nein, nicht vollständig: Schüler/innen können durch die verantwortlichen Aufsichtslehrer zur Unterstützung herangezogen werden – die Gesamtverantwortung und Präsenzpflicht bleibt aber bei den Lehrkräften." }
    ],
    quelle: "§ 14 SMV-VO"
  },

  {
    id: "fb-1.12-09", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Der NWT-Unterricht",
    sachverhalt: "Im NWT-Unterricht lötet ein Teil der Klasse eine Platine. Der andere Teil baut aus Holzteilen eine Brücke. Die Lehrerin verlässt kurzfristig den Raum, um für einen Schüler das Arbeitsblatt der vergangenen Stunde zu kopieren.",
    schritte: [
      { label: "Tatbestand",
        frage: "Unter welchen Voraussetzungen dürfen Lehrkräfte den Klassenraum während der Unterrichtszeit verlassen?",
        loesung: "Lehrkräfte dürfen das Klassenzimmer während der Unterrichtszeit nur verlassen, wenn triftige Gründe vorliegen und dabei kein erkennbares Gefährdungspotential für die Schüler/innen besteht." },
      { label: "Subsumtion",
        frage: "Ist das Kopieren eines Arbeitsblatts ein triftiger Grund, und besteht hier ein Gefährdungspotential?",
        loesung: "Ein triftiger Grund liegt nicht vor – die Kopie hätte auch nach der Stunde angefertigt werden können. Zudem besteht durch die Tätigkeiten der Schüler/innen (Löten, Sägen, Bohren) ein erhebliches Gefährdungspotential (und zusätzlich ein erhöhtes Vandalismuspotential)." },
      { label: "Rechtsfolge",
        frage: "Wie ist das Verlassen des Raums durch die Lehrerin rechtlich zu bewerten?",
        loesung: "Es liegt eine Aufsichtspflichtverletzung vor, da weder ein triftiger Grund noch eine gefahrlose Situation in der Klasse gegeben war." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-10", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Die Gruppenarbeit",
    sachverhalt: "Bei einer Gruppenarbeit sollen die Schüler/innen in verschiedenen Räumen des Schulhauses arbeiten. Der Schulleiter untersagt dies mit dem Hinweis auf die Aufsichtspflicht.",
    schritte: [
      { label: "Tatbestand",
        frage: "Setzt Aufsichtspflicht zwingend voraus, dass sich die Lehrkraft ständig im selben Raum wie alle Schüler aufhält?",
        loesung: "Nein – entscheidend ist eine angemessene, kontinuierliche Aufsichtsführung, nicht die ununterbrochene physische Anwesenheit in jedem einzelnen Raum. Eine wandernde Aufsicht mit klaren Absprachen kann ausreichen." },
      { label: "Subsumtion",
        frage: "Reicht es aus, wenn die Lehrkraft die Klasse instruiert und selbst zwischen den Räumen wechselt?",
        loesung: "Die Argumentation des Schulleiters ist nicht ausreichend, wenn die Lehrkraft die Klasse entsprechend instruiert und eine kontinuierliche Aufsicht sichergestellt ist, indem sie immer wieder das Zimmer wechselt." },
      { label: "Rechtsfolge",
        frage: "Was sollte zusätzlich organisiert werden, damit das Vorgehen rechtssicher ist?",
        loesung: "Die Schüler/innen sollten immer wissen, in welchem Raum sich die Lehrkraft gerade befinden könnte (z.B. mögliche Räume in jedem Arbeitsraum an die Tafel schreiben) – dann ist die Gruppenarbeit in verschiedenen Räumen zulässig." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-11", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Die Befragung",
    sachverhalt: "Eltern bieten an, die Klassenlehrerin bei einem Schulfest oder einer Klassenfahrt als Begleitperson zu unterstützen. Die Klassenlehrerin führt vorab ein kurzes Gespräch mit den Eltern. Zusatzfall: Bei der Klassenfahrt überträgt die Klassenlehrerin der Begleitperson die Aufsicht über 15 Schüler der Klasse und beaufsichtigt selbst nur die restlichen 7 – gerade die undisziplinierten.",
    schritte: [
      { label: "Tatbestand",
        frage: "Darf die Aufsichtspflicht auf Erziehungsberechtigte oder andere Hilfspersonen übertragen werden – und was bleibt dabei Aufgabe der Lehrkraft?",
        loesung: "Eine Übertragung von Aufsichtsaufgaben auf Erziehungsberechtigte, Schüler oder andere Personen ist nicht ausgeschlossen. Die Aufsichtspflicht des eigentlich Verantwortlichen (i.d.R. Lehrer/Schulleiter) bleibt aber im Hinblick auf die Auswahl einer geeigneten Person und die Übertragung angemessener Aufgaben bestehen – Auswahl, Instruktion und Kontrolle der Hilfsperson obliegen der Lehrkraft." },
      { label: "Subsumtion",
        frage: "Genügt ein kurzes Gespräch mit den Eltern, und ist die spätere Aufgabenverteilung (15 zu 7 Schüler, undisziplinierte bei der Lehrerin) vertretbar?",
        loesung: "Gewinnt die Klassenlehrerin aufgrund des Gesprächs den Eindruck, es handele sich um eine geeignete Begleitperson, hat sie den Anforderungen an eine sorgfältige Auswahl genügt – die \"Befragung\" ist notwendig, darf aber wegen der Zumutbarkeit für die Begleitperson auch nicht überzogen ausführlich sein; ein gänzlicher Verzicht ist unzulässig. Die auf den ersten Blick befremdliche Aufteilung (Lehrerin übernimmt die undisziplinierten Schüler, die Begleitperson die disziplinierten) kann im Einzelfall gerade eine angemessene Aufsicht sicherstellen." },
      { label: "Rechtsfolge",
        frage: "Ist das Vorgehen der Klassenlehrerin insgesamt rechtmäßig?",
        loesung: "Ja, sofern sie eine sorgfältige Auswahl (Gespräch) vorgenommen hat und die Aufgabenverteilung nachvollziehbar auf die tatsächliche Betreuungsbedürftigkeit der Schülergruppen abstellt." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-12", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Der Aufsicht führende Hausmeister",
    sachverhalt: "Der Schulhausmeister soll als eigenständig verantwortliche Aufsichtsperson eingesetzt werden, z.B. während einer unterrichtsfreien Zeit im Schulgebäude.",
    schritte: [
      { label: "Tatbestand",
        frage: "Wer kommt als \"verantwortlich zu betrauende\" Aufsichtsperson grundsätzlich in Betracht?",
        loesung: "Als verantwortlich zu betrauende Aufsichtspersonen kommen grundsätzlich nur Lehrer in Betracht. Auch für unterrichtsfreie Zeiträume bleibt die Beaufsichtigung der Schüler eine erzieherische und betreuende Aufgabe, die an das Lehramt gekoppelt ist." },
      { label: "Subsumtion",
        frage: "Kann der Hausmeister diese Rolle der verantwortlichen Aufsichtsperson übernehmen?",
        loesung: "Nein – der Schulhausmeister scheidet als verantwortlich zu betrauende Aufsichtsperson grundsätzlich aus, da ihm die pädagogische Qualifikation und die dienstrechtliche Stellung eines Lehrers fehlen." },
      { label: "Rechtsfolge",
        frage: "Ist der Hausmeister damit für die Aufsicht komplett ungeeignet?",
        loesung: "Nein – er kann weiterhin als Hilfsperson der Aufsicht eingesetzt werden (z.B. bei kleineren Ordnungsfragen), muss dafür von der Schule autorisiert sein, und ein verantwortlicher Lehrer muss erreichbar bleiben (vgl. Kapitel 1.12: Hilfspersonen der Aufsicht)." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-13", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Theaterbesuch",
    sachverhalt: "Nach einem Theaterbesuch mit einer siebten Klasse außerhalb der Schule stellt sich die Frage, ob die Schüler den Rückweg selbstständig antreten können und wie die Eltern über Ort und Zeit des Endes der Veranstaltung informiert werden müssen.",
    schritte: [
      { label: "Tatbestand",
        frage: "Können Schüler bei Veranstaltungen außerhalb des Schulgeländes ohne Weiteres an einem anderen Ort als der Schule entlassen werden?",
        loesung: "Das hängt vom Alter der Schüler ab: Bei der Primarstufe müssen Eltern vorher schriftlich informiert werden und die Kenntnisnahme bestätigen. Bei der Sekundarstufe I genügt eine schriftliche Mitteilung, wenn die Eltern nicht widersprechen. Bei der Sekundarstufe II ist keine schriftliche Benachrichtigung nötig." },
      { label: "Subsumtion",
        frage: "Kann bei Schülern einer 7. Klasse (Sekundarstufe I) ohne Weiteres davon ausgegangen werden, dass sie den Rückweg von einer außerschulischen Veranstaltung selbstständig antreten können?",
        loesung: "Nein, das kann bei einer siebten Klasse nicht ohne weiteres unterstellt werden. Der Lehrer hätte daher mit der Gruppe zur Schule zurückkehren müssen und hätte die Veranstaltung dort zu einer vorher den Eltern und Schülern mitgeteilten Zeit für beendet erklären können." },
      { label: "Rechtsfolge",
        frage: "Was ist die praktische Konsequenz für die Organisation solcher Veranstaltungen?",
        loesung: "Bei jüngeren Sekundarstufe-I-Klassen sollte die Veranstaltung grundsätzlich an der Schule enden (oder die Entlassung an einem anderen Ort vorher schriftlich mit den Eltern abgestimmt werden), statt die Schüler direkt vom externen Veranstaltungsort selbstständig entlassen zu lassen." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-14", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Verletzter Schüler",
    sachverhalt: "Ein Schüler verletzt sich während des Unterrichts und muss zum Arzt oder ins Krankenhaus gebracht werden. Es stellt sich die Frage, wie der Transport organisiert werden muss und wann die Aufsichtspflicht der Schule endet.",
    schritte: [
      { label: "Tatbestand",
        frage: "Besteht auf dem Weg eines verletzten Schülers zum Arzt oder Krankenhaus überhaupt Aufsichtspflicht der Schule?",
        loesung: "Ja, auf diesem Weg besteht Aufsichtspflicht der Schule. Der Transport kann je nach vermuteter Schwere der Verletzung zu Fuß, mit öffentlichen Verkehrsmitteln, einer Taxe, einem privaten Pkw oder einem Rettungsfahrzeug erfolgen; als Begleitpersonen kommen Schüler, Erziehungsberechtigte, nichtlehrendes Personal und Lehrer infrage." },
      { label: "Subsumtion",
        frage: "Muss eine Lehrkraft den Schüler im Rettungswagen begleiten, und wann darf sie sich später entfernen?",
        loesung: "Erfolgt der Transport in einem Kranken- oder Rettungswagen, muss die Schule entscheiden, ob eine Begleitung durch eine Lehrkraft (z.B. wegen Alter oder Art der Verletzung) erforderlich ist, ggf. in Absprache mit den Rettungskräften, die die Aufsicht auch übernehmen können. Verletzte Schüler sollten im Regelfall nicht mit dem privaten Pkw der Lehrkraft transportiert werden. Die Aufsichtspflicht endet mit dem Eintreffen der Erziehungsberechtigten; treffen diese gar nicht oder erst spät ein, hängt es vom Alter und psychischen Zustand des Schülers ab, wann sich die begleitende Lehrkraft entfernen darf." },
      { label: "Rechtsfolge",
        frage: "Gibt es eine Grenze für die Dauer der Begleitpflicht?",
        loesung: "Ja: Die Zumutbarkeit einer langdauernden Anwesenheit und die Tatsache, dass Ärzte und Krankenhauspersonal eine eigene Aufsichtsverpflichtung haben, setzen der schulischen Aufsichtspflicht in dieser Situation Grenzen." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-15", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Aufsicht in der Freistunde",
    sachverhalt: "Eltern verlangen von der Schule, dass in Freistunden eine Lehrkraft ständig persönlich anwesend ist, um die Schüler lückenlos zu beaufsichtigen.",
    schritte: [
      { label: "Tatbestand",
        frage: "Haben Eltern einen Anspruch auf eine bestimmte, von ihnen gewünschte Aufsichtsintensität?",
        loesung: "Die Eltern haben einen Anspruch auf eine durch die Schulleitung verbindlich geregelte Aufsicht durch Lehrer. Ob sich diese Aufsicht auf stichprobenartige Kontrollen beschränkt oder eine ständige Anwesenheit erforderlich ist, liegt aber im Ermessen der Schule – nur die Schulleitung, nicht die Eltern, besitzt die nötige Sachkenntnis, um dies für konkrete schulische Situationen festzulegen." },
      { label: "Subsumtion",
        frage: "Können die Eltern die ständige Anwesenheit einer Aufsichtsperson in der Freistunde gerichtlich durchsetzen?",
        loesung: "Nein – die Entscheidung über Stichproben vs. Dauerpräsenz bleibt der fachlichen Einschätzung der Schulleitung vorbehalten, solange eine verbindlich geregelte Aufsicht überhaupt existiert." },
      { label: "Rechtsfolge",
        frage: "Besteht im geschilderten Fall ein Rechtsanspruch auf dauernde Anwesenheit einer Aufsichtsperson?",
        loesung: "Nein, ein solcher Rechtsanspruch besteht nicht." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-16", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Der verschwundene Ausweis",
    sachverhalt: "Auf einer Studienfahrt sammeln zwei Lehrer zur Ausstellung von Schiffskarten die Ausweise der (auch volljährigen) Schüler ein. Bei der Rückgabe durch die Schiffsgesellschaft kommt ein Ausweis abhanden.",
    schritte: [
      { label: "Tatbestand",
        frage: "Besteht eine Fürsorgepflicht der Lehrer für eingesammelte Ausweise, und gilt diese auch gegenüber volljährigen Schülern?",
        loesung: "Die Besorgung der Schiffskarten ist im Rahmen der Fürsorgepflicht als Amtspflicht der Lehrer anzusehen. Indem sie die Ausweise einsammelten, gaben sie zu erkennen, für den Kartenkauf Sorge zu tragen – ihre Fürsorgepflicht konkretisierte sich darauf, dass die Ausweise nicht abhandenkommen. Diese Pflicht bestand auch gegenüber volljährigen Schülern, da diese der Leitung der Studienfahrt in gleicher Weise unterstellt waren." },
      { label: "Subsumtion",
        frage: "Haben die Lehrer ihre Fürsorgepflicht durch die Art der Ausweis-Rückgabe verletzt?",
        loesung: "Ja: Die Lehrer hätten dem Busfahrer besondere Instruktionen geben müssen, bei der Rückgabe der Pässe auf deren vollzählige Rückgabe zu achten – zumal die Abwicklung der Formalitäten sich zeitlich hinzog. Alternativ hätte einer der beiden Lehrer den Busfahrer begleiten und die Rückgabe selbst kontrollieren müssen." },
      { label: "Rechtsfolge",
        frage: "Haften die Lehrer persönlich für den verlorenen Ausweis?",
        loesung: "Nein: Die Pflichtverletzung war (nur) fahrlässig. Bei fahrlässiger Verletzung der Amtspflichten kommt gemäß Art. 34 GG der Staat für den Schaden auf, ohne dass ein Rückgriff bei den Lehrern möglich ist." }
    ],
    quelle: "OLG Düsseldorf"
  },

  {
    id: "fb-1.12-17", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Die Verweisung aus der Klasse",
    sachverhalt: "Ein Schüler wird wegen anhaltender Störungen des Unterrichts vor die Tür des Klassenzimmers gestellt. Die Lehrkraft bleibt im Klassenzimmer und kann den Schüler nicht mehr direkt sehen.",
    schritte: [
      { label: "Tatbestand",
        frage: "Ist das Hinausstellen eines Schülers vor die Tür ohne direkte Sicht grundsätzlich mit der Aufsichtspflicht vereinbar?",
        loesung: "Liegen keine Anzeichen für eine besondere Gefahrenlage vor, ist die Maßnahme unter dem Gesichtspunkt der präventiven Aufsichtsführung unbedenklich. Handelt es sich dagegen um einen Schüler, der zu Kurzschlussreaktionen neigt oder wegen eines unkontrollierten Wutanfalls hinausgestellt wurde, liegen besondere Gefahren vor, die gegen ein bloßes Hinausstellen sprechen – ebenso, wenn sich bereits andere Schüler auf dem Flur aufhalten." },
      { label: "Subsumtion",
        frage: "Muss die Lehrkraft den hinausgestellten Schüler trotzdem im Blick behalten?",
        loesung: "Ja – die aktive Aufsichtsführung erfordert zumindest eine stichprobenartige Kontrolle des Verhaltens des hinausgestellten Schülers. Bei besonderen Gefahrenlagen kann dem z.B. durch das Offenlassen der Tür oder die Übergabe an die im Nachbarraum unterrichtende Lehrkraft (nur mit deren Einverständnis) genügt werden." },
      { label: "Rechtsfolge",
        frage: "Was gilt, wenn der Schüler außerhalb des Klassenraums größeren Schaden anrichten könnte als drinnen?",
        loesung: "Dann hängt es vom Alter und der konkreten emotionalen Situation des Schülers ab, ob er stattdessen an anderer Stelle in der Schule (z.B. im Lehrerzimmer) beaufsichtigt oder ganz nach Hause geschickt wird." }
    ],
    quelle: "SchulVerwaltung BW"
  },

  {
    id: "fb-1.12-18", part: "Schulrecht", chapter: "1.12 Aufsichtspflicht",
    title: "Der enteilende Schüler",
    sachverhalt: "Ein Schüler verlässt während des Unterrichts plötzlich und ohne Erlaubnis das Klassenzimmer und läuft aus dem Schulgebäude, bevor die Lehrkraft eingreifen kann.",
    schritte: [
      { label: "Tatbestand",
        frage: "Woran bemisst sich, ob das plötzliche Weglaufen eines Schülers eine Aufsichtspflichtverletzung der Lehrkraft begründet?",
        loesung: "Zunächst ist zu klären, ob dieses Verhalten des Schülers vorhersehbar war (präventive Aufsicht) und mit zumutbaren Mitteln hätte verhindert werden können (aktive Aufsicht)." },
      { label: "Subsumtion",
        frage: "Welche konkreten Maßnahmen sind einer Lehrkraft zumutbar, um ein Weglaufen zu verhindern?",
        loesung: "Hat ein Schüler den Klassenraum schon einmal ohne Erlaubnis verlassen, kann ihm z.B. ein Sitzplatz in möglichst großer Entfernung von der Tür zugewiesen werden. Je nach Alter des Schülers kann es auch zumutbar sein, ihn festzuhalten – das schließt sogar eine kurze \"Verfolgung\" im Schulgebäude ein, falls die Situation in der Klasse das zulässt." },
      { label: "Rechtsfolge",
        frage: "Ist die Lehrkraft aufsichtspflichtverletzt, wenn sie den Schüler trotzdem nicht aufhalten konnte?",
        loesung: "Nein, sofern der Lehrer zunächst die Aufsicht über die verbleibende Klasse wahrnimmt (er darf den Klassenraum nur ausnahmsweise bei zwingender Notwendigkeit verlassen). Ist es mit zumutbaren Mitteln nicht möglich, den Schüler am Verlassen zu hindern, stellt dessen unerlaubtes Weglaufen keine Aufsichtspflichtverletzung des Lehrers dar." }
    ],
    quelle: "SchulVerwaltung BW"
  }

];
