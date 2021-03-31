define({
  "taskUrl": "Feladat URL-címe",
  "setTask": "Beállítás",
  "setTaskPopupTitle": "Feladat beállítása",
  "validate": "Beállítás",
  "inValidGPService": "Adjon meg érvényes téradat-feldolgozási szolgáltatást.",
  "noOutputParameterWithGeometryType": "A kiválasztott téradat-feldolgozási szolgáltatásnak rendelkeznie kell legalább egy meghatározott geometriai jellemzőkkel bíró kimeneti paraméterrel. Válasszon másik téradat-feldolgozási szolgáltatást.",
  "invalidOutputGeometry": "A kiválasztott téradat-feldolgozási szolgáltatás kimeneti geometriai jellemzője nem kompatibilis a projektbeállításokkal. A téradat-feldolgozási szolgáltatás eredményei nem tárolhatók.",
  "GPFeatureRecordSetLayerERR": "Olyan téradat-feldolgozási szolgáltatást adjon meg, amely kizárólag 'GPFeatureRecordSetLayer' típusú bevitelt tesz lehetővé.",
  "invalidInputParameters": "Abemeneti paraméterek száma 1-nél kevesebb vagy 3-nál több. Adjon meg egy érvényes téradat-feldolgozási szolgáltatást.",
  "projectSetting": {
    "title": "Projektbeállítások",
    "note": "Megjegyzés: A Projektbeállítások választhatók; beállításukat követően a felhasználó a kívánt webtérképrétegekben tárolhatja a projektet a hálózati kimaradás által érintett területtel és a bemeneti paraméterekkel. A felhasználó az egyéb kimeneti paramétereket a „Kimenet” lapon tárolhatja.",
    "projectPolygonLayer": "Projekt polygonrétege",
    "outputParameterName": "Kimeneti paraméter neve",
    "projectPointLayer": "Projekt pontrétege",
    "selectLabel": "Kiválasztás",
    "polygonLayerHelp": "<p>A következő feltételeknek megfelelő polygonrétegek jelennek meg:<br/><ul><li>A rétegnek támogatnia kell a következő szerkesztési műveleteket: „Létrehozás”, „Törlés” és „Frissítés”.</li><li>A rétegnek két, pontos névvel és adattípussal rendelkező mezőt kell tartalmaznia:</li><ul><li>név (karakterlánc típusú mező)</li><li>globális azonosító (globális azonosító típusú mező)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>A feladat-URL-ből származó kimeenti polygonrétegek jelennek meg<p/>",
    "pointLayerHelp": "<p>A következő feltételeknek megfelelő pontrétegek jelennek meg: <br/><ul><li>A rétegnek támogatnia kell a következő szerkesztési műveleteket: „Létrehozás”, „Törlés” és „Frissítés”.</li><li>A rétegnek két, pontos névvel és adattípussal rendelkező mezőt kell tartalmaznia:</li><ul><li>bemeneti típus (karakterlánc típusú mező)</li><li>projektazonosító (globális azonosító típusú mező)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "Zászló",
    "barrier": "Akadály",
    "skip": "Kihagyás",
    "title": "Bemenet",
    "inputTooltip": "Eszköztipp",
    "typeText": "Típus",
    "symbol": "Szimbólum",
    "summaryEditorText": "Összefoglalás szövege",
    "summaryTextTitle": "Adja meg a beviteli lapon megjelenítendő szöveget"
  },
  "summaryTab": {
    "title": "Kimenet",
    "summaryFieldsetText": "Összefoglalás beállításai",
    "inputOutput": "Bemenet/kimenet",
    "field": "Mező",
    "operator": "Operátor",
    "inputOperatorCountOption": "Darabszám",
    "outputOperatorCountOption": "Darabszám",
    "outputOperatorSkipCountOption": "Számlálás kihagyása",
    "fieldOperatorSumOption": "Összeg",
    "fieldOperatorMinOption": "Min.",
    "fieldOperatorMaxOption": "Max.",
    "fieldOperatorMeanOption": "Átlag",
    "expressionAddButtonText": "Hozzáadás",
    "expressionVerifyButtonText": "Hitelesítés",
    "summaryEditorText": "Összefoglalás szövege",
    "zoomText": "Automatikus nagyítás/kicsinyítés nyomvonala",
    "summarSettingTooltipText": "Bemeneti/kimeneti szám hozzáadása",
    "symbol": "Szimbólum",
    "outputParametersText": "Kimeneti paraméterek",
    "skipText": "Kihagyható",
    "visibilityText": "Látható",
    "exportToCsvText": "Exportálás CSV-fájlba",
    "settitngstext": "Beállítások",
    "saveToLayerText": "Mentés rétegbe (Opcionális)",
    "inputLabel": "Felirat",
    "inputTooltip": "Eszköztipp",
    "outputDisplay": "Megjelenített szöveg",
    "addFieldTitle": "Mező hozzáadása",
    "setScale": "Méretarány beállítása",
    "enterDisplayText": "Megjelenített szöveg megadása",
    "saveToLayerHelp": "<p>A következő feltételeknek megfelelő pontrétegek jelennek meg:<br/><ul><li>A rétegnek támogatnia kell a szerkesztési műveleteket, nevezetesen a „Létrehozás”,a „Törlés” és a „Frissítés” műveletet.</li><li>A rétegnek két, pontos névvel és adattípussal rendelkező mezőt kell tartalmaznia:</li><ul><li>paraméternév (karakterlánc típusú mező)</li><li>projektazonosító (globális azonosító típus mező)</li></ul></ul><p/>",
    "exportToCsvDisplayText": "CSV",
    "summaryTextTitle": "Adja meg a kimeneti lapon megjelenítendő összegző szöveget",
    "addSummaryItemsTitle": "Összefoglaló elemek hozzáadása"
  },
  "validationErrorMessage": {
    "webMapError": "Nincsenek elérhető rétegek a webtérképen. Válasszon érvényes webtérképet.",
    "inputTypeFlagGreaterThanError": "A típusjelölőnek legfeljebb egy bemenete lehet.",
    "inputTypeFlagLessThanError": "A típusjelölőhöz legalább egy bemenet szükséges.",
    "inputTypeBarrierErr": "A típusakadálynak legfeljebb egy bemenete lehet.",
    "inputTypeSkipErr": "A típuskihagyásnak legfeljebb egy bemenete lehet.",
    "displayTextForButtonError": "A „Futtatás” gomb megjelenített szövege nem lehet üres.",
    "UnableToLoadGeoprocessError": "Nem sikerült a téradat-feldolgozás szolgáltatás betöltése.",
    "invalidSummaryExpression": "Érvénytelen kifejezés.",
    "validSummaryExpression": "Sikerült!",
    "invalidProjectSettings": "Érvénytelen projektbeállítások.<br/> Válasszon érvényes értéket itt: „${projectSetting}”."
  },
  "hintText": {
    "labelTextHint": "Tipp: Adjon megjelenített feliratot a a kimeneti paraméter eredménypaneljéhez.",
    "displayTextHint": "Tipp: Ez a kimeneti paraméter Részletek paneljében jelenik meg.",
    "inputTextHint": "Tipp: Hozza létre kifejezését alább az összegző elemek hozzáadása gomb használatával.",
    "expressionHint": "Tipp: Válassza ki a kívánt elemeket, majd kattintson a Hozzáadás elemre a kifejezés létrehozásához."
  }
});