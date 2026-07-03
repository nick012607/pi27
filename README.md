# PI27 — Ironman Mission Control · App-pakket

Dit pakket bevat de telefoon-app van jullie Ironman-dashboard.
Bestanden: `index.html` (de app), `manifest.json`, `sw.js`, iconen, `scan-proxy-worker.js` (voor de AI-scan).

## Stap 1 — Online zetten (gratis, ±10 minuten)
1. Maak een account op github.com en klik "New repository", naam bijv. `pi27`, zet hem op Public.
2. Upload alle bestanden uit deze map (Add file > Upload files).
3. Ga naar Settings > Pages > kies branch `main` en map `/root` > Save.
4. Na een minuut staat de app op `https://<jouwnaam>.github.io/pi27/`.

## Stap 2 — Op jullie telefoons "installeren"
- iPhone (Omar & jij): open de link in Safari > deelknop > **Zet op beginscherm**.
- Android: open in Chrome > menu > **App installeren**.
De app krijgt een eigen icoon, opent fullscreen en werkt offline.

## Stap 3 — AI-fotoscan aanzetten (optioneel, vereist eigen API-sleutel)
De scan kan niet rechtstreeks vanaf de telefoon naar Anthropic (dan zou je geheime sleutel
in de app zitten). Daarom een mini-tussenstation:
1. Maak een API-sleutel aan op console.anthropic.com (tegoed vereist; een scan kost ~1 cent).
2. Volg de 4 stappen bovenin `scan-proxy-worker.js` (gratis Cloudflare Worker).
3. Zet de Worker-URL in `index.html` bij `SCAN_PROXY_URL = ''` en upload het bestand opnieuw.

## Updaten (jouw workflow)
1. Vraag Claude om een aanpassing; je krijgt een nieuwe `index.html`.
2. Vervang het bestand in je GitHub-repo (Upload files > overschrijven).
3. Verhoog in `sw.js` het versienummer (`pi27-v1` -> `pi27-v2`) en upload ook dat bestand.
4. Bij de volgende keer openen hebben beide telefoons de nieuwe versie.

## Goed om te weten
- In deze app-versie staat het logboek per toestel (jij op jouw telefoon, Omar op de zijne).
  Gedeeld meekijken in elkaars logboek werkt in de Claude-versie van de app.
- Willen jullie ooit echte synchronisatie tussen jullie telefoons: dat kan met een gratis
  Supabase-database; vraag Claude dan om "PI27 met Supabase-sync".

## En de App Store dan?
Kan, via een "wrapper" (Capacitor) om precies deze app heen. Realistisch beeld:
- Apple Developer-account: 99 euro per jaar, plus een Mac of een cloud-bouwdienst.
- Voor twee gebruikers is TestFlight (Apple's testkanaal) de logische route; volledige
  App Store-review is voor een privé-app voor 2 personen vaak een afwijzingsrisico.
- Android is simpeler: eenmalig 25 dollar voor Google Play, of zelfs een los APK-bestand.
De PWA hierboven geeft 95% van dezelfde ervaring zonder kosten. Wil je toch de
Store-route, vraag Claude dan om het Capacitor-project te genereren.
