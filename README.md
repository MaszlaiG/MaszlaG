# MaszlaG — Mászlai Gábor portfolio

**Language / Nyelv:** [English](#english) · [Magyar](#magyar)

**🌐 Live / Élő oldal:** <https://maszlaig.github.io/MaszlaG/>

**🔗 GitHub:** <!-- Paste the project repository link here, e.g. https://github.com/username/maszlag / Illeszd be ide a projekt repójának linkjét --> _(link coming soon / link hamarosan)_

---

## English

> The **bilingual (Hungarian/English) portfolio website** of Gábor Mászlai, freelance web developer. A single, dependency-free, no-build page that works well on phone, tablet and desktop alike.

It introduces the developer, the workflow and a selection of projects, closing with a direct order form.

### Key features

- **Bilingual (HU/EN)** — switchable from the header; every string comes from the translation table (`T`) in `script.js` and from the `data-i18n` attributes in the markup.
- **SPA router** — the home page, the "All work" view and the project details are separate views with hash-based routing (no page reload).
- **Scroll-driven animations** — e.g. the progress animation of the "This is how a website is built" section and the fade-in of the sections.
- **Project gallery + lightbox** — cards for the selected work, with image zoom. Each web-app project has a **light/dark toggle** in its detail view, so its screenshots can be viewed in both themes.
- **Embedded order form** — a bilingual form tied to the Rendli order engine (with EmailJS notifications), so a visitor can order directly from the page.
- **Responsive layout** — no horizontal overflow; on phones the header collapses into a hamburger menu.

### Editable content

Content lives in a few clearly-marked structures near the top of `script.js`:

- **Translations** — the `T` table (each entry has an `hu` and `en` string); the markup pulls them via `data-i18n` / `data-i18n-html` attributes.
- **Projects** — the `PROJECTS` array; each project is an object with `id`, `title`, `year`, `type`, `tech`, `short`, `details` and an `images` object. `images` holds a `dark` and/or `light` array of screenshot paths — a project with both gets the light/dark toggle, one with only `light` (e.g. a static site) is shown as light-only.
- **Prices** — the `PRICES` array feeds both the pricing section and the order form's service dropdown.

### Files

- `index.html` — the UI (header, hero, sections, views)
- `style.css` — design + responsive layout
- `script.js` — data, translations, SPA router, animations, lightbox, order logic
- `kepek/` — project images and other graphics

### Tech stack

- **Vanilla HTML / CSS / JavaScript** — no build step, no framework.
- **EmailJS + Firebase** — the embedded order form forwards orders through the central Rendli engine.

### Run / deploy

No build step. Open `index.html` locally, or upload it to any static host (e.g. **GitHub Pages**, Netlify, your own hosting) — it works immediately.

---

## Magyar

> Mászlai Gábor szabadúszó webfejlesztő **kétnyelvű (magyar/angol) portfólió-weboldala**. Egyetlen, függőség és build lépés nélküli oldal, amely telefonon, tableten és asztali gépen egyaránt jól működik.

Bemutatja a fejlesztőt, a munkafolyamatot és a kiválasztott projekteket, végén egy közvetlen megrendelési űrlappal.

### Főbb funkciók

- **Kétnyelvűség (HU/EN)** — a fejlécben lévő kapcsolóval váltható; minden szöveg a `script.js` fordítás-táblájából (`T`) és a jelölésben lévő `data-i18n` attribútumokból jön.
- **SPA-router** — a kezdőlap, az „Összes munka" nézet és a projekt-részletek külön nézetek, hash-alapú útvonalkezeléssel (oldalújratöltés nélkül).
- **Görgetés-vezérelt animációk** — pl. az „Így épül egy weboldal" szekció készültségi animációja és a szekciók fade-in megjelenése.
- **Projekt-galéria + lightbox** — a kiválasztott munkák kártyái, kép-nagyítással. Minden webapp-projekt részletes nézetében van egy **világos/sötét kapcsoló**, így a képernyőképek mindkét témában megtekinthetők.
- **Beágyazott megrendelési űrlap** — a Rendli rendelés-motorjához kötött, kétnyelvű űrlap (EmailJS-értesítéssel), így a látogató közvetlenül az oldalról tud rendelni.
- **Reszponzív megjelenés** — nincs vízszintes túllógás; a fejléc telefonon hamburger-menüvé csukódik.

### Szerkeszthető adatok

A tartalom néhány jól jelölt szerkezetben található a `script.js` tetején:

- **Fordítások** — a `T` tábla (minden bejegyzésnek van `hu` és `en` szövege); a jelölés a `data-i18n` / `data-i18n-html` attribútumokon keresztül húzza be őket.
- **Projektek** — a `PROJECTS` tömb; minden projekt egy objektum `id`, `title`, `year`, `type`, `tech`, `short`, `details` és `images` mezőkkel. Az `images` egy `dark` és/vagy `light` tömböt tartalmaz a képernyőképek útvonalaival — amelyiknek mindkettő megvan, az kap világos/sötét kapcsolót, amelyiknek csak `light` (pl. statikus oldal), az csak világosként jelenik meg.
- **Árak** — a `PRICES` tömb táplálja az ár-szekciót és a megrendelő űrlap szolgáltatás-legördülőjét is.

### Fájlok

- `index.html` — a felület (fejléc, hero, szekciók, nézetek)
- `style.css` — dizájn + reszponzív elrendezés
- `script.js` — adatok, fordítások, SPA-router, animációk, lightbox, rendelési logika
- `kepek/` — projekt-képek és egyéb grafikák

### Technológia

- **Vanilla HTML / CSS / JavaScript** — build lépés és keretrendszer nélkül.
- **EmailJS + Firebase** — a beágyazott megrendelési űrlap a Rendli központi motorján keresztül továbbítja a rendeléseket.

### Futtatás / deploy

Nincs build lépés. Nyisd meg helyben a `index.html`-t, vagy töltsd fel bármilyen statikus tárhelyre (pl. **GitHub Pages**, Netlify, saját tárhely) — azonnal működik.
