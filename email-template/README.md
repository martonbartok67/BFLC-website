# BFLC e-mail-sablonok

Két reszponzív, táblázatos HTML-sablon készült a Budapest Financial Literacy Club számára. A fő arculati szín mindkettőben a kért, változatlan `#132572`; a kiegészítő levendulaárnyalat és a sötét szövegszín a BFLC weboldalának vizuális világához igazodik.

- `next-session-template.html`: az adott heti foglalkozás promója, heti tartalomhelyőrzőkkel.
- `promo.html`: általános bemutatkozó promó, heti alkalomtól függetlenül használható.
- `forbes-top100-2026.html`: kitöltött heti meghívó Golovics Milán november 19-i előadásához.
- `signup-confirmation.html`: egymondatos feliratkozás-visszaigazolás.
- `proba.html`: kitöltött, korábbi vizuális minta a heti sablonhoz.

## Általános promó

A `promo.html` egy már kitöltött bemutatkozó levél a BFLC-ről, a visszatérő programokról, a hamarosan érkező vendégekről, a jövőbeli AI-workshopról és a közösségi eseményről. A CTA a BFLC Messenger-csoportjára mutat. A BFLC logója és a galériafotók a `bflc.hu` weboldaláról töltődnek be. A BlackRock és a Forbes logója HTML-es feliratblokk; az ALAP Hírekhez a `public/images/email/alap-logo.jpg` csatolt fájl szerepel. Az AI-workshop külön szekciót kapott, a ChatGPT-, Claude- és Gemini-jeleket az `ai-tools-strip.png` tartalmazza.

A vendégnevek és a programok a jelenlegi tervek alapján kerültek a levélbe. Küldés előtt igazítsd a szöveget a program aktuális állapotához.

## Heti tartalom frissítése

Nyisd meg a `next-session-template.html` fájlt egy szövegszerkesztőben, majd küldés előtt keresd meg és cseréld le az alábbi helyőrzőket:

| Helyőrző | Mit írj a helyére? |
|---|---|
| `{{HETI_FOCIM}}` | Rövid, figyelemfelkeltő heti főcím. |
| `{{ALKALOM_CIME}}` | Az alkalom vagy foglalkozás címe. |
| `{{ROVID_LEIRAS}}` | 1–3 mondatos, konkrét leírás arról, mit csináltok vagy tanultok. A helyőrző utáni mintamondatot is írd át vagy töröld, ha ismétlődne. |
| `{{DATUM}}` | Dátum magyar formátumban, például: `november 19.` |
| `{{ESEMENY_NAPTAR_URL}}` | Az adott alkalom publikált Google Naptár-eseményének „Link to event” URL-je. Ugyanazt a linket használd a normál és az Outlook-gombhoz; ne a naptár általános beágyazási vagy iCal-címét. |
| `{{ELOADO_BLOKK}}` | Opcionális előadói sor, például: `Vendégünk: Név, beosztás`. Ha nincs előadó, töröld a teljes bekezdést tartalmazó `<tr>...</tr>` sort. |

A heti főcím fölötti felvezető, a mottó, a helyszín és az időpont állandó. A CTA felirata `OTT LESZEK`; a fölötte lévő szürke sor jelzi, hogy a gombbal a naptárba menthető az esemény. Minden küldés előtt cseréld le a `{{ESEMENY_NAPTAR_URL}}` értékét az adott esemény publikált Google Naptár-linkjére. A helyszínt ellenőrizd, hogy az adott héten is aktuális-e.

## Kép cseréje

A sablon most a BFLC weboldalán tárolt korábbi foglalkozás képét használja. Cseréld le az `img` elem `src` címét és a körülötte lévő hivatkozás `href` címét egy nyilvánosan elérhető, HTTPS-es képcímre. A `width="520"` érték maradhat; a kép mobilon a rendelkezésre álló szélességhez igazodik. Az `alt` attribútumban rövid, magyar leírás szerepeljen. A képek egyes levelezőkben alapértelmezetten nem jelennek meg, ezért a lényeges információ mindig szövegként is legyen benne a levélben.

## Importálás a Brevo-ba

1. Válaszd ki a heti sablont (`next-session-template.html`) vagy az általános promót (`promo.html`). Cseréld le a heti sablon helyőrzőit, különösen az esemény Google Naptár-linkjét; az általános promóban ellenőrizd, hogy a leírt programok aktuálisak-e.
2. Használj nyilvánosan elérhető HTTPS-képet. A képek külső betöltését egyes levelezők letilthatják.
3. A Brevo-ban hozz létre egy HTML-kódot használó kampányt, majd az egyéni HTML-szerkesztőben illeszd be a kiválasztott HTML-fájl teljes tartalmát.
4. A leiratkozási hivatkozásban hagyd meg a Brevo által támogatott `{{ unsubscribe }}` változót. Ne alakítsd át közönséges webcímmé.
5. Küldés előtt ellenőrizd a próbalevelet asztali és mobilnézetben, a gomb és a leiratkozás működését, valamint azt, hogy nem maradt helyőrző a levélben.

## Technikai megjegyzések

- A szerkezet táblázatokkal készült, a megjelenés nagy része közvetlenül az elemekre írt stílusokat használ.
- A keskeny képernyőkhöz tartozó rövid média-lekérdezés segíti a mobilos tördelést; nélküle is olvasható marad a tartalom.
- A gombhoz Outlook-kompatibilis VML-változat is tartozik. Az eseménylinket mind a normál, mind a VML-gombban cseréld ki.
- A betűtípus Arial/Helvetica/system sans-serif; ezek széles körben elérhetők, és támogatják a magyar ékezetes karaktereket.
- A sablon előnézetéhez nyisd meg a `next-session-template.html` fájlt böngészőben. A böngészős előnézet nem helyettesíti a Brevo próbalevelét és az e-mail-kliensekben végzett ellenőrzést.
