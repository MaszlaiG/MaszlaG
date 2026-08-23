(function () {
  'use strict';
  var LANG = (function () {
    try {
      return localStorage.getItem('mg_lang') || 'hu';
    } catch (e) {
      return 'hu';
    }
  })();
  function setLang(l) {
    LANG = l;
    try {
      localStorage.setItem('mg_lang', l);
    } catch (e) {}
  }
  function pick(o) {
    return o && (o[LANG] != null ? o[LANG] : o.hu);
  }
  var T = {
    'nav.about': {
      hu: 'Rólam',
      en: 'About'
    },
    'nav.services': {
      hu: 'Szolgáltatások',
      en: 'Services'
    },
    'nav.work': {
      hu: 'Munkáim',
      en: 'Work'
    },
    'nav.prices': {
      hu: 'Árak',
      en: 'Prices'
    },
    'nav.cta': {
      hu: 'Dolgozzunk együtt',
      en: "Let's work together"
    },
    'hero.eyebrow': {
      hu: 'Webfejlesztő · építőipari háttérrel · Hajdúszoboszló',
      en: 'Web developer · with a construction background · Hungary'
    },
    'hero.h1': {
      hu: '<span class="ln"><span>Régen <span class="strike">betonból</span></span></span><span class="ln"><span>építettem.</span></span><span class="ln"><span>Ma <em>weboldalakból.</em></span></span>',
      en: '<span class="ln"><span>I used to build with <span class="strike">concrete</span>.</span></span><span class="ln"><span>Now I build</span></span><span class="ln"><span><em>websites.</em></span></span>'
    },
    'hero.lead': {
      hu: 'Az építőiparban tanultam meg, hogy minden tartós dolog jó alapon áll. Ma ezt viszem a webre — gyors, mobilon is hibátlan oldalakat építek, amik az érdeklődőből ügyfelet csinálnak.',
      en: 'Construction taught me that everything that lasts rests on a good foundation. I bring that to the web — fast, flawless-on-mobile sites that turn visitors into customers.'
    },
    'hero.btn1': {
      hu: 'Nézd meg a munkáimat',
      en: 'See my work'
    },
    'hero.btn2': {
      hu: 'Vegyük fel a kapcsolatot',
      en: 'Get in touch'
    },
    'hero.scroll': {
      hu: 'Görgess — épül a terv',
      en: 'Scroll — the plan is building'
    },
    'facts.focus.k': {
      hu: 'Fókusz',
      en: 'Focus'
    },
    'facts.focus.v': {
      hu: 'Weboldalak, frontend',
      en: 'Websites, frontend'
    },
    'facts.reply.k': {
      hu: 'Válaszidő',
      en: 'Response time'
    },
    'facts.reply.v': {
      hu: '24 órán belül',
      en: 'Within 24 hours'
    },
    'facts.status.k': {
      hu: 'Státusz',
      en: 'Status'
    },
    'facts.status.v': {
      hu: 'Projektre nyitva',
      en: 'Open to projects'
    },
    'ix.about': {
      hu: '/ Rólam',
      en: '/ About'
    },
    'about.h2': {
      hu: 'Az <em>alaptól</em> a frontendig',
      en: 'From the <em>foundation</em> to the frontend'
    },
    'about.lead': {
      hu: 'Az építőiparból hoztam a szemléletet: az alap dönt el mindent. Online a weboldalad ez az alap — ezen múlik, hogy az érdeklődőből ügyfél lesz-e.',
      en: 'I brought my mindset from construction: the foundation decides everything. Online, your website is that foundation — it decides whether a visitor becomes a customer.'
    },
    'manifesto.q': {
      hu: 'Az <em>alap</em> dönt el mindent.',
      en: 'The <em>foundation</em> decides everything.'
    },
    'manifesto.cite': {
      hu: '— és online a weboldalad ez az alap.',
      en: '— and online, your website is that foundation.'
    },
    'stat.products': {
      hu: 'Kiadott termék',
      en: 'Shipped products'
    },
    'stat.reply': {
      hu: 'Órán belüli válasz',
      en: 'Reply within hours'
    },
    'stat.custom': {
      hu: 'Egyedi, sablonmentes kód',
      en: 'Custom, template-free code'
    },
    'stat.zero': {
      hu: 'Sablon, mellébeszélés',
      en: 'Templates, fluff'
    },
    'ix.services': {
      hu: '/ Szolgáltatások',
      en: '/ Services'
    },
    'svc.h2': {
      hu: 'Amiben <em>segíteni</em> tudok',
      en: 'How I can <em>help</em>'
    },
    'ix.process': {
      hu: '/ Folyamat',
      en: '/ Process'
    },
    'proc.h2': {
      hu: 'Így épül egy <em>weboldal</em>',
      en: 'How a <em>website</em> is built'
    },
    'ix.work': {
      hu: '/ Munkáim',
      en: '/ Work'
    },
    'work.h2': {
      hu: 'Kiválasztott <em>projektek</em>',
      en: 'Selected <em>projects</em>'
    },
    'work.all': {
      hu: 'Összes munka megtekintése',
      en: 'View all work'
    },
    'work.back': {
      hu: '← Vissza a főoldalra',
      en: '← Back to home'
    },
    'work.page.eyebrow': {
      hu: 'Munkáim',
      en: 'Work'
    },
    'work.page.h2': {
      hu: 'Összes <em>munka</em>',
      en: 'All <em>work</em>'
    },
    'work.page.sub': {
      hu: 'Minden projekt egy helyen — kattints bármelyikre a részletes esettanulmányért.',
      en: 'Every project in one place — click any of them for the full case study.'
    },
    'ix.prices': {
      hu: '/ Árak',
      en: '/ Prices'
    },
    'price.h2': {
      hu: 'Szolgáltatások és <em>árak</em>',
      en: 'Services & <em>pricing</em>'
    },
    'price.lead': {
      hu: 'Kezdő árlista — minden ár tájékoztató „-tól” kezdőár. A pontos ajánlat mindig a projekt terjedelmétől függ, és az első konzultáció ingyenes.',
      en: "Starter price list — every price is an indicative “from” starting price. The exact quote always depends on the project's scope, and the first consultation is free."
    },
    'price.note': {
      hu: 'A havi üzemeltetési díj nem csak a tárhelyet fedezi: biztonsági mentés, karbantartás, garantált válaszidő és havi 1–2 óra ingyenes módosítás is jár mellé. Nem találod a listában a projektedet? Írj — összerakjuk együtt.',
      en: "The monthly operating fee doesn't just cover hosting: backups, maintenance, a guaranteed response time and 1–2 hours of free changes per month come with it. Can't find your project in the list? Get in touch — we'll scope it together."
    },
    'ix.contact': {
      hu: '/ Kapcsolat',
      en: '/ Contact'
    },
    'contact.avail': {
      hu: 'Jelenleg projektre nyitva',
      en: 'Currently open to projects'
    },
    'contact.h2': {
      hu: 'Van egy ötleted?<br>Építsük meg <em>együtt.</em>',
      en: "Got an idea?<br>Let's build it <em>together.</em>"
    },
    'contact.sub': {
      hu: 'Írd meg pár mondatban, mire van szükséged, és 24 órán belül válaszolok egy reális tervvel. Az első konzultáció ingyenes, és semmire sem kötelez.',
      en: "Tell me in a few sentences what you need, and I'll reply within 24 hours with a realistic plan. The first consultation is free and commits you to nothing."
    },
    'form.name': {
      hu: 'Név',
      en: 'Name'
    },
    'form.email': {
      hu: 'E-mail',
      en: 'Email'
    },
    'form.phone': {
      hu: 'Telefon',
      en: 'Phone'
    },
    'form.entity': {
      hu: 'Megrendelő',
      en: 'You are'
    },
    'form.company': {
      hu: 'Cég neve',
      en: 'Company name'
    },
    'form.service': {
      hu: 'Munka típusa',
      en: 'Type of work'
    },
    'form.budget': {
      hu: 'Tervezett keret',
      en: 'Budget'
    },
    'form.message': {
      hu: 'Üzenet',
      en: 'Message'
    },
    'form.submit': {
      hu: 'Rendelés elküldése',
      en: 'Send order'
    },
    'form.note': {
      hu: 'A rendelésed közvetlenül hozzám érkezik, és 24 órán belül válaszolok. Az első konzultáció ingyenes.',
      en: "Your order comes straight to me, and I'll reply within 24 hours. The first consultation is free."
    },
    'foot.role': {
      hu: 'Webfejlesztő',
      en: 'Web developer'
    },
    'foot.built': {
      hu: 'Egyedi kód · tiszta HTML, CSS, JavaScript',
      en: 'Custom code · plain HTML, CSS, JavaScript'
    }
  };
  var MARQUEE = {
    hu: [
      'Reszponzív',
      'Tiszta kód',
      'HTML',
      'CSS',
      'JavaScript',
      'Firebase',
      'Mobil-first',
      'Gyors betöltés',
      'Egyedi dizájn',
      'SEO'
    ],
    en: [
      'Responsive',
      'Clean code',
      'HTML',
      'CSS',
      'JavaScript',
      'Firebase',
      'Mobile-first',
      'Fast loading',
      'Custom design',
      'SEO'
    ]
  };
  var TIMELINE = [
    {
      yr: {
        hu: '— korábban',
        en: '— earlier'
      },
      ph: {
        hu: 'Fázis 00 · Építőipar',
        en: 'Phase 00 · Construction'
      },
      h3: {
        hu: 'A kétkezi szakma évei',
        en: 'Years in the trade'
      },
      p: {
        hu: 'Éveket dolgoztam az építőiparban. Itt tanultam meg, ami azóta is minden munkám alapja: az alap dönt el mindent. Pontos terv, teherbíró szerkezet, betartott határidő — és semmi mellébeszélés.',
        en: "I spent years in construction. That's where I learned what still underpins all my work: the foundation decides everything. A precise plan, a load-bearing structure, deadlines kept — and no fluff."
      }
    },
    {
      yr: {
        hu: '2025',
        en: '2025'
      },
      ph: {
        hu: 'Fázis 01 · Váltás',
        en: 'Phase 01 · The switch'
      },
      h3: {
        hu: 'Ugyanaz a logika, új anyag',
        en: 'Same logic, new material'
      },
      p: {
        hu: 'A precizitást és a rendszerszemléletet átvittem a kódba. Az első oldalak saját projektként indultak, hogy valódi, működő terméken tanuljak — nem tananyagon.',
        en: 'I carried the precision and systems thinking into code. My first sites started as personal projects, so I could learn on a real, working product — not on tutorials.'
      }
    },
    {
      yr: {
        hu: '2026',
        en: '2026'
      },
      ph: {
        hu: 'Fázis 02 · Ma',
        en: 'Phase 02 · Today'
      },
      h3: {
        hu: 'Szabadúszó webfejlesztő',
        en: 'Freelance web developer'
      },
      p: {
        hu: 'Ma valódi, kiadott termékeket építek: pénzügyi vagyonkezelő, időpontfoglaló, vállalkozáskezelő és bemutatkozó oldalak. Tiszta HTML, CSS és JavaScript, Firebase háttérrel — keretrendszer és felesleg nélkül. Nálam nincs sablon és nincs mellébeszélés.',
        en: 'Today I build real, shipped products: a wealth manager, a booking system, a business manager and presentation sites. Plain HTML, CSS and JavaScript on a Firebase backend — no framework, no bloat. No templates, no fluff.'
      }
    }
  ];
  var SERVICES = [
    {
      n: '01',
      h3: {
        hu: 'Bemutatkozó & landing oldalak',
        en: 'Presentation & landing pages'
      },
      p: {
        hu: 'Reszponzív bemutatkozó, landing vagy portfólió, ami telefonon és gépen is hibátlan — és úgy mutatja be a vállalkozásod, hogy bizalmat építsen.',
        en: "A responsive presentation site, landing page or portfolio that's flawless on phone and desktop — and presents your business so it builds trust."
      }
    },
    {
      n: '02',
      h3: {
        hu: 'Webalkalmazások',
        en: 'Web applications'
      },
      p: {
        hu: 'Fiók-alapú appok: időpontfoglaló, pénzügyi és vállalkozáskezelő rendszerek, felhő háttérrel (Firebase), élő adatokkal.',
        en: 'Account-based apps: booking, finance and business-management systems with a cloud backend (Firebase) and live data.'
      }
    },
    {
      n: '03',
      h3: {
        hu: 'Frontend & interakció',
        en: 'Frontend & interaction'
      },
      p: {
        hu: 'Gyors, interaktív felületek tiszta kóddal — olyan oldal, amit az ügyfeleid szívesen használnak, és később könnyen bővíthető.',
        en: "Fast, interactive interfaces with clean code — a site your customers enjoy using, and that's easy to extend later."
      }
    },
    {
      n: '04',
      h3: {
        hu: 'Tesztelés & üzemeltetés',
        en: 'Testing & operation'
      },
      p: {
        hu: 'Átadás előtt minden böngészőn és telefonon végigtesztelem. Utána sem hagylak magadra: hosting, mentés, karbantartás, support.',
        en: "Before handover I test on every browser and phone. And I don't disappear afterwards: hosting, backups, maintenance, support."
      }
    }
  ];
  var PROCESS = [
    {
      no: {
        hu: '01 — Alap',
        en: '01 — Foundation'
      },
      h3: {
        hu: 'Minden a tervvel kezdődik',
        en: 'It all starts with the plan'
      },
      p: {
        hu: 'Mielőtt egy sor kód megszületne, felmérem az igényeket és megtervezem a szerkezetet — ahogy az építkezésen az alapot.',
        en: 'Before a single line of code, I survey the needs and plan the structure — the way you lay a foundation on site.'
      }
    },
    {
      no: {
        hu: '02 — Szerkezet',
        en: '02 — Structure'
      },
      h3: {
        hu: 'Tiszta, teherbíró váz',
        en: 'A clean, load-bearing frame'
      },
      p: {
        hu: 'Szemantikus HTML és átgondolt CSS: kód, ami évek múlva is karbantartható, és minden képernyőn megáll a lábán.',
        en: 'Semantic HTML and considered CSS: code that stays maintainable for years and stands firm on every screen.'
      }
    },
    {
      no: {
        hu: '03 — Felület',
        en: '03 — Surface'
      },
      h3: {
        hu: 'Ugyanaz a logika, új anyag',
        en: 'Same logic, new material'
      },
      p: {
        hu: 'A vázra kerül a dizájn, az interakció és a tesztelés — a végén egy oldal, ami pontosan úgy működik, ahogy terveztük.',
        en: 'Design, interaction and testing go onto the frame — and in the end a site that works exactly as planned.'
      }
    }
  ];
  var PRICES = [
    {
      name: {
        hu: 'Landing oldal',
        en: 'Landing page'
      },
      tag: null,
      desc: {
        hu: '1–2 görgethető szekció, kapcsolati űrlap, gyors betöltés.',
        en: '1–2 scrollable sections, a contact form, fast loading.'
      },
      once: {
        hu: '60.000 Ft',
        en: '€150'
      },
      run: {
        hu: '3.500 Ft',
        en: '€9'
      }
    },
    {
      name: {
        hu: 'Céges bemutatkozó',
        en: 'Company site'
      },
      tag: {
        hu: 'Népszerű',
        en: 'Popular'
      },
      desc: {
        hu: 'Rólunk, Szolgáltatások, Galéria, Kapcsolat aloldalak.',
        en: 'About, Services, Gallery and Contact subpages.'
      },
      once: {
        hu: '100.000 Ft',
        en: '€250'
      },
      run: {
        hu: '5.500 Ft',
        en: '€14'
      }
    },
    {
      name: {
        hu: 'Dinamikus portál',
        en: 'Dynamic portal'
      },
      tag: null,
      desc: {
        hu: 'Adatbázissal, ügyfél által szerkeszthető tartalom és webapp funkciók.',
        en: 'Database-backed, client-editable content and web-app features.'
      },
      once: {
        hu: '160.000 Ft',
        en: '€400'
      },
      run: {
        hu: '10.000 Ft',
        en: '€25'
      }
    }
  ];
  var PRICE_LBL = {
    once: {
      hu: 'Egyszeri díj',
      en: 'One-time fee'
    },
    run: {
      hu: 'Üzemeltetés / hó',
      en: 'Operating / mo'
    }
  };
  var PROJECTS = [
    {
      id: 'nettli',
      title: 'Nettli',
      year: '2026',
      type: {
        hu: 'Webapp',
        en: 'Web app'
      },
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      images: {
        dark: [
          'kepek/nettli_attekintes_dark.png',
          'kepek/nettli_reszveny_dark.png',
          'kepek/nettli_kripto_dark.png',
          'kepek/nettli_arany_dark.png',
          'kepek/nettli_hitel_dark.png',
          'kepek/nettli_szolgaltatasok_dark.png'
        ],
        light: [
          'kepek/nettli_attekintes_light.png',
          'kepek/nettli_reszveny_light.png',
          'kepek/nettli_kripto_light.png',
          'kepek/nettli_arany_light.png',
          'kepek/nettli_hitel_light.png',
          'kepek/nettli_szolgaltatasok_light.png'
        ]
      },
      short: {
        hu: 'Fiók-alapú személyi pénzügyi és vagyonkezelő webapp élő árfolyamokkal. Arany, részvény, kripto, hitel és előfizetés egyetlen áttekinthető felületen, saját rajzolású diagramokkal.',
        en: 'An account-based personal finance & wealth manager with live prices. Gold, stocks, crypto, loans and subscriptions on one clear screen, with custom-drawn charts.'
      },
      details: {
        hu: [
          'A Nettli egy fiók-alapú, személyes vagyonkezelő webapp, amely egyetlen áttekinthető felületen mutatja meg egy magánszemély teljes nettó vagyonát. Külön fül tartozik minden eszköztípushoz: befektetési arany, részvények, kripto, zálog, hitelek és előfizetések — így a szerteágazó pénzügyek végre egy helyen, összesítve láthatók.',
          'A vezérlőpult élőben számol: nettó vagyon, befektetett érték, realizált és nem realizált nyereség/veszteség, osztalékráta, havi kiadás és pénzforgalom, valamint az eszközallokáció egy saját rajzolású gyűrűdiagramon. Egy külön blokk kiemeli a közelgő fontos dátumokat is.',
          'Az árfolyamok valós időben, publikus forrásokból érkeznek: kripto (CoinGecko), részvény (Yahoo Finance), deviza (EKB) és arany (XAU spot). A nyereséget/veszteséget a rendszer automatikusan számolja, a devizát pedig akár az adott tranzakció napi árfolyamán váltja át a pontos historikus értékért.',
          'Az adatok a fiókodhoz kötve, a felhőben (Firebase) tárolódnak. A felület teljesen kétnyelvű, a megjelenés világos/sötét/automatikus, és mobil-first: semmi nem lóg ki oldalirányban. Külső diagramkönyvtár és build lépés nélkül.'
        ],
        en: [
          "Nettli is an account-based personal wealth manager that shows an individual's entire net worth on a single, clear screen. Each asset type gets its own tab — gold, stocks, crypto, pledge, loans and subscriptions — so scattered finances finally sit in one place.",
          'The dashboard calculates live: net worth, invested value, realised and unrealised P&L, dividend rate, monthly spend and cash flow, and asset allocation on a custom-drawn donut chart. A dedicated block also surfaces upcoming key dates.',
          "Prices arrive in real time from public sources: crypto (CoinGecko), stocks (Yahoo Finance), FX (ECB) and gold (XAU spot). P&L is computed automatically, and FX can be resolved at each trade's own date for accurate historical value.",
          "Data is stored in the cloud (Firebase), tied to your account. The interface is fully bilingual, appearance is light/dark/auto, and it's mobile-first: nothing overflows sideways. No external charting library and no build step."
        ]
      }
    },
    {
      id: 'slotli',
      title: 'Slotli',
      year: '2026',
      type: {
        hu: 'Webapp',
        en: 'Web app'
      },
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      images: {
        dark: [
          'kepek/slotli_attekintes_dark.png',
          'kepek/slotli_foglalasok_dark.png',
          'kepek/slotli_ugyfelek_dark.png',
          'kepek/slotli_szamlak_dark.png',
          'kepek/slotli_foglalo_dark.png'
        ],
        light: [
          'kepek/slotli_attekintes_light.png',
          'kepek/slotli_foglalasok_light.png',
          'kepek/slotli_ugyfelek_light.png',
          'kepek/slotli_szamlak_light.png',
          'kepek/slotli_foglalo_light.png'
        ]
      },
      short: {
        hu: 'Időpontfoglaló beágyazható widgettel. Az admin élőben követi a foglalásokat, a widget pedig a vállalkozó saját weboldalára illeszthető — ütközésvédelemmel.',
        en: "An appointment booker with an embeddable widget. The admin tracks bookings live, and the widget drops onto the owner's own website — with collision protection."
      },
      details: {
        hu: [
          'A Slotli egy fiók-alapú időpontfoglaló rendszer, amely két feladatot lát el: egy admin-felületen élőben követi a beérkező foglalásokat, és generál egy beágyazható foglaló-widgetet, amelyet a vállalkozó a saját weboldalára illeszthet — a kódot elég egyszer beilleszteni.',
          'A beállító fülön megadható minden szolgáltatás időtartammal és árral, a napi nyitvatartás (akár több idősávval, például ebédszünettel), valamint a sávhossz. A widget ezekből számolja ki a felkínált időpontokat, és a látogató csak a ténylegesen szabad sávokból választhat.',
          'A foglalás azonnal, ütközésvédelemmel lefoglalja a sávot: ha ketten egyszerre ugyanarra az időpontra foglalnának, a második nem megy át. A beérkező foglalások élőben, státuszokkal jelennek meg; egy lemondás visszaszabadítja a sávot.',
          'A felület teljesen kétnyelvű, összecsukható oldalsávval, és tartalmaz egy áttekintő nézetet az utolsó 12 hónap bevétel-diagramjával. Az adatok a felhőben (Firebase) tárolódnak, így a foglalások élőben szinkronizálódnak.'
        ],
        en: [
          'Slotli is an account-based booking system that does two jobs: an admin panel tracks incoming bookings live, and it generates an embeddable booking widget the owner can drop onto their own website — paste the code once.',
          'On the setup tab you define each service with its duration and price, the daily opening hours (with several windows, e.g. a lunch break) and the slot length. The widget computes the offered times from these, and visitors can only pick genuinely free slots.',
          'A booking reserves the slot immediately, with collision protection: if two people try the same time at once, the second one fails. Incoming bookings show up live with statuses; cancelling frees the slot again.',
          'The interface is fully bilingual with a collapsible sidebar, and includes an overview with a last-12-months revenue chart. Data is stored in the cloud (Firebase), so bookings sync live.'
        ]
      }
    },
    {
      id: 'rendli',
      title: 'Rendli',
      year: '2026',
      type: {
        hu: 'Webapp',
        en: 'Web app'
      },
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      images: {
        dark: [
          'kepek/rendli_attekintes_dark.png',
          'kepek/rendli_megrendelesek_dark.png',
          'kepek/rendli_projektek_dark.png',
          'kepek/rendli_ugyfelek_dark.png',
          'kepek/rendli_szamlak_dark.png',
          'kepek/rendli_urlap_dark.png'
        ],
        light: [
          'kepek/rendli_attekintes_light.png',
          'kepek/rendli_megrendelesek_light.png',
          'kepek/rendli_projektek_light.png',
          'kepek/rendli_ugyfelek_light.png',
          'kepek/rendli_szamlak_light.png',
          'kepek/rendli_urlap_light.png'
        ]
      },
      short: {
        hu: 'Vállalkozáskezelő szabadúszóknak: megkeresések, megrendelések, projektek, ügyfelek, számlák és pénzügyek egy helyen — beágyazható megrendelő-űrlappal.',
        en: 'A business manager for freelancers: leads, orders, projects, clients, invoices and finances in one place — with an embeddable order form.'
      },
      details: {
        hu: [
          'A Rendli egy fiók-alapú vállalkozáskezelő webalkalmazás szabadúszóknak és kisvállalkozásoknak: egy helyen kezeli a beérkező megkereséseket, a megrendeléseket, a projekteket, az ügyfeleket és a számlákat, valamint a bevételeket és kiadásokat.',
          'Az áttekintő vezérlőpult megmutatja az idei árbevételt, a folyamatban lévő és összes projektet, a közelgő határidőket és a beérkezett megkereséseket — havi bevétel/kiadás diagrammal, projekt-státusz gyűrűdiagrammal és havi pénzforgalom-táblázattal.',
          'Külön fül generál egy beágyazható megrendelő-űrlapot: a beállításokból összeáll a kód, amit elég egyszer a weboldalra illeszteni. A leadott rendelések kézi rögzítés nélkül, élőben megjelennek; a szolgáltatások, mezők és árak testre szabhatók.',
          'A rendelésekhez státuszok, a projektekhez folyamat-nyilvántartás, az ügyfelekhez ügyféltörzs, a pénzügyekhez tételes rögzítés tartozik — így egy munka a megkereséstől a kiállított számláig végigkövethető. Az adatok a felhőben (Firebase) tárolódnak.'
        ],
        en: [
          'Rendli is an account-based business-management web app for freelancers and small businesses: it handles incoming leads, orders, projects, clients and invoices, plus income and expenses, all in one place.',
          "The overview dashboard shows this year's revenue, ongoing and total projects, upcoming deadlines and incoming leads — with a monthly income/expense chart, a project-status donut and a monthly cash-flow table.",
          'A dedicated tab generates an embeddable order form: the settings assemble into code you paste onto your site once. Submitted orders appear live with no manual entry; services, fields and prices are configurable.',
          'Orders carry statuses, projects have progress tracking, clients form a client base, and finances get itemised recording — so a job can be followed from the first enquiry to the issued invoice. Data is stored in the cloud (Firebase).'
        ]
      }
    }
  ];
  var WORK_MORE = {
    hu: 'Esettanulmány',
    en: 'Case study'
  };
  var ENTITY = [
    {
      v: 'priv',
      hu: 'Magánszemély',
      en: 'Individual'
    },
    {
      v: 'biz',
      hu: 'Vállalkozó',
      en: 'Company'
    }
  ];
  var BUDGET = [
    {
      hu: 'Nem tudom még',
      en: 'Not sure yet'
    },
    {
      hu: '50 000 Ft alatt',
      en: 'Under €130'
    },
    {
      hu: '50 000 – 100 000 Ft',
      en: '€130 – €260'
    },
    {
      hu: '100 000 – 200 000 Ft',
      en: '€260 – €520'
    },
    {
      hu: '200 000 Ft felett',
      en: 'Over €520'
    }
  ];
  var MSG = {
    needCo: {
      hu: 'Vállalkozóként a cég nevét kötelező megadni.',
      en: 'As a company, the company name is required.'
    },
    invalid: {
      hu: 'Kérlek add meg a neved és egy érvényes e-mail címet.',
      en: 'Please provide your name and a valid email.'
    },
    opened: {
      hu: 'Megnyitottam a leveleződ — küldd el az üzenetet, és 24 órán belül válaszolok!',
      en: "I opened your email client — send the message and I'll reply within 24 hours!"
    }
  };
  var EMAIL_TO = 'maszlaigabor@icloud.com';
  var ORDER = {
    OWNER_UID: 'ijeLjmqPROgMS6qirifODRXpbqh1',
    KEY: 'rk_fd959968f2e44634daa927be8fe96d789673',
    EJ: {
      publicKey: 'eTf1OffvvcrBwZcAm',
      serviceId: 'service_598rmjv',
      notifyTemplate: 'template_kin80ip',
      confirmTemplate: 'template_ep1k324'
    }
  };
  var db = null,
    CFG = {};
  var ORDER_T = {
    hu: {
      em_heading: 'Megrendelés visszaigazolás',
      em_greeting: 'Kedves ',
      em_intro:
        'Megrendelésedet megkaptam. Hamarosan felveszem veled a kapcsolatot egy reális tervvel és árajánlattal.',
      em_details: 'Megrendelés részletei',
      em_service: 'Szolgáltatás',
      em_price: 'Ár',
      em_budget: 'Tervezett keret',
      em_message: 'Üzenet',
      em_closing: 'Köszönöm a bizalmat!',
      thanks: 'Köszönöm, a rendelést megkaptam! 24 órán belül válaszolok.',
      err: 'Hiba történt a küldéskor — nyisd meg inkább e-mailben.'
    },
    en: {
      em_heading: 'Order confirmation',
      em_greeting: 'Dear ',
      em_intro:
        'I have received your order. I will get back to you soon with a realistic plan and quote.',
      em_details: 'Order details',
      em_service: 'Service',
      em_price: 'Price',
      em_budget: 'Budget',
      em_message: 'Message',
      em_closing: 'Thank you for your trust!',
      thanks: "Thank you, I received your order! I'll reply within 24 hours.",
      err: 'Something went wrong — please send it by email instead.'
    }
  };
  function huf(s) {
    return Number(String(s == null ? '' : s).replace(/[^\d]/g, '')) || 0;
  }
  function $(s, r) {
    return (r || document).querySelector(s);
  }
  function $all(s, r) {
    return Array.prototype.slice.call((r || document).querySelectorAll(s));
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[c];
    });
  }
  var booted = false;
  function applyI18n() {
    document.documentElement.lang = LANG;
    $all('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (T[k]) el.textContent = pick(T[k]);
    });
    $all('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (T[k]) el.innerHTML = pick(T[k]);
    });
    $all('#lang [data-lang]').forEach(function (el) {
      el.classList.toggle('on', el.getAttribute('data-lang') === LANG);
    });
  }
  function revealClass() {
    return booted ? 'reveal in' : 'reveal';
  }
  function renderMarquee() {
    var el = $('#marquee');
    if (!el) return;
    var words = MARQUEE[LANG] || MARQUEE.hu;
    var one = words
      .map(function (w) {
        return '<span>' + esc(w) + '</span>';
      })
      .join('');
    el.innerHTML = '<div class="track">' + one + one + '</div>';
  }
  function renderTimeline() {
    var el = $('#timeline');
    if (!el) return;
    el.innerHTML = TIMELINE.map(function (it) {
      return (
        '<div class="tl-item ' +
        revealClass() +
        '">' +
        '<div class="side"><div class="yr">' +
        esc(pick(it.yr)) +
        '</div><div class="ph">' +
        esc(pick(it.ph)) +
        '</div></div>' +
        '<div><h3>' +
        esc(pick(it.h3)) +
        '</h3><p>' +
        esc(pick(it.p)) +
        '</p></div></div>'
      );
    }).join('');
  }
  function renderServices() {
    var el = $('#services');
    if (!el) return;
    el.innerHTML = SERVICES.map(function (s) {
      return (
        '<div class="svc ' +
        revealClass() +
        '"><div class="num">' +
        esc(s.n) +
        '</div><h3>' +
        esc(pick(s.h3)) +
        '</h3><p>' +
        esc(pick(s.p)) +
        '</p></div>'
      );
    }).join('');
  }
  function renderProcess() {
    var el = $('#process');
    if (!el) return;
    el.innerHTML = PROCESS.map(function (s) {
      return (
        '<div class="step ' +
        revealClass() +
        '"><div class="no">' +
        esc(pick(s.no)) +
        '</div><h3>' +
        esc(pick(s.h3)) +
        '</h3><p>' +
        esc(pick(s.p)) +
        '</p></div>'
      );
    }).join('');
  }
  function renderPrices() {
    var el = $('#prices');
    if (!el) return;
    el.innerHTML = PRICES.map(function (p) {
      var tag = p.tag ? ' <span class="tag">' + esc(pick(p.tag)) + '</span>' : '';
      return (
        '<div class="price-row ' +
        revealClass() +
        '">' +
        '<div><div class="pn">' +
        esc(pick(p.name)) +
        tag +
        '</div><div class="pd">' +
        esc(pick(p.desc)) +
        '</div></div>' +
        '<div class="pv">' +
        esc(pick(p.once)) +
        '<small>' +
        esc(pick(PRICE_LBL.once)) +
        '</small></div>' +
        '<div class="pv">' +
        esc(pick(p.run)) +
        '<small>' +
        esc(pick(PRICE_LBL.run)) +
        '</small></div></div>'
      );
    }).join('');
  }
  function renderWorks() {
    $all('.works').forEach(function (el) {
      var lim = parseInt(el.getAttribute('data-limit'), 10);
      var list = lim > 0 ? PROJECTS.slice(0, lim) : PROJECTS;
      el.innerHTML = list
        .map(function (p, i) {
          var idx = ('0' + (i + 1)).slice(-2);
          return (
            '<article class="work ' +
            revealClass() +
            '" data-proj="' +
            esc(p.id) +
            '" tabindex="0" role="button" aria-label="' +
            esc(p.title) +
            '">' +
            '<div class="w-img"><span class="idx">' +
            idx +
            '</span><img src="' +
            esc(projThumb(p)) +
            '" alt="' +
            esc(p.title) +
            '" loading="lazy"></div>' +
            '<div class="w-body"><div class="top"><h3>' +
            esc(p.title) +
            '</h3><span class="yr">' +
            esc(p.year) +
            '</span><span class="type">' +
            esc(pick(p.type)) +
            '</span></div>' +
            '<p>' +
            esc(pick(p.short)) +
            '</p>' +
            '<div class="w-tags">' +
            p.tech
              .map(function (t) {
                return '<span>' + esc(t) + '</span>';
              })
              .join('') +
            '</div>' +
            '<span class="w-more">' +
            esc(pick(WORK_MORE)) +
            ' <span>→</span></span></div></article>'
          );
        })
        .join('');
    });
  }
  function renderForm() {
    fillSelect(
      $('#clientType'),
      ENTITY.map(function (e) {
        return {
          value: e.v,
          label: pick(e)
        };
      })
    );
    var svc = PRICES.map(function (p) {
      return {
        value: pick(p.name),
        label: pick(p.name),
        attrs: {
          'data-price': huf(p.once.hu),
          'data-price-str': pick(p.once)
        }
      };
    });
    svc.push({
      value: 'other',
      label: LANG === 'en' ? 'Other / custom' : 'Egyéb / egyedi',
      attrs: {
        'data-price': 0,
        'data-price-str': ''
      }
    });
    fillSelect($('#serviceSel'), svc);
    fillSelect(
      $('#budgetSel'),
      BUDGET.map(function (b) {
        return {
          value: pick(b),
          label: pick(b)
        };
      })
    );
  }
  function fillSelect(sel, opts) {
    if (!sel) return;
    var cur = sel.value;
    sel.innerHTML = opts
      .map(function (o) {
        var at = '';
        if (o.attrs) for (var k in o.attrs) at += ' ' + k + '="' + esc(o.attrs[k]) + '"';
        return '<option value="' + esc(o.value) + '"' + at + '>' + esc(o.label) + '</option>';
      })
      .join('');
    if (cur) sel.value = cur;
  }
  function renderAll() {
    applyI18n();
    renderMarquee();
    renderTimeline();
    renderServices();
    renderProcess();
    renderPrices();
    renderWorks();
    renderForm();
    if (booted)
      $all('.reveal:not(.in)').forEach(function (el) {
        io.observe(el);
      });
  }
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        if (e.target.classList.contains('stats')) $all('[data-count]', e.target).forEach(runCount);
        io.unobserve(e.target);
      });
    },
    {
      threshold: 0.14
    }
  );
  function runCount(el) {
    var target = +el.dataset.count,
      sub = el.querySelector('em'),
      em = sub ? sub.outerHTML : '',
      t0 = performance.now(),
      dur = 1200;
    (function tick(now) {
      var p = Math.min(1, (now - t0) / dur),
        val = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.innerHTML = val + em;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  var modal = null,
    lb = null,
    lbImages = [],
    lbIndex = 0;
  var curProject = null,
    galTheme = 'dark';
  var GAL_LBL = {
    light: {
      hu: 'Világos',
      en: 'Light'
    },
    dark: {
      hu: 'Sötét',
      en: 'Dark'
    }
  };
  function projThemes(p) {
    var t = [];
    if (p.images && p.images.dark && p.images.dark.length) t.push('dark');
    if (p.images && p.images.light && p.images.light.length) t.push('light');
    return t;
  }
  function projImgs(p, theme) {
    return (p.images && (p.images[theme] || p.images.dark || p.images.light)) || [];
  }
  function projThumb(p) {
    return projImgs(p, 'dark')[0] || projImgs(p, 'light')[0] || '';
  }
  function themeToggleHTML(p) {
    var ths = projThemes(p);
    if (ths.length < 2) {
      var only = ths[0] || 'light';
      var icon = only === 'light' ? '☀ ' : '☾ ';
      var lbl =
        only === 'light'
          ? LANG === 'en'
            ? 'Light theme'
            : 'Világos téma'
          : LANG === 'en'
            ? 'Dark theme'
            : 'Sötét téma';
      return (
        '<div class="gal-theme single"><span class="gal-theme-note">' +
        icon +
        esc(lbl) +
        '</span></div>'
      );
    }
    function btn(t) {
      return (
        '<button type="button" class="gal-theme-btn' +
        (t === galTheme ? ' on' : '') +
        '" data-gt="' +
        t +
        '">' +
        (t === 'light' ? '☀ ' : '☾ ') +
        esc(pick(GAL_LBL[t])) +
        '</button>'
      );
    }
    return (
      '<div class="gal-theme" role="group" aria-label="' +
      esc(LANG === 'en' ? 'Theme' : 'Téma') +
      '">' +
      btn('light') +
      btn('dark') +
      '</div>'
    );
  }
  function renderGallery() {
    var p = curProject;
    if (!p) return;
    var g = $('#modalInner .md-gallery');
    if (!g) return;
    var srcs = projImgs(p, galTheme);
    g.innerHTML = srcs
      .map(function (src, i) {
        return (
          '<img src="' +
          esc(src) +
          '" alt="' +
          esc(p.title) +
          ' ' +
          (i + 1) +
          '" data-lb="' +
          i +
          '">'
        );
      })
      .join('');
    lbImages = srcs.slice();
    $all('#modalInner .md-gallery img').forEach(function (img) {
      img.addEventListener('click', function () {
        openLightbox(+img.getAttribute('data-lb'));
      });
    });
    $all('#modalInner .gal-theme-btn').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-gt') === galTheme);
    });
  }
  function openProject(id) {
    var p = PROJECTS.filter(function (x) {
      return x.id === id;
    })[0];
    if (!p) return;
    curProject = p;
    var ths = projThemes(p);
    galTheme = ths.indexOf('dark') >= 0 ? 'dark' : 'light';
    var paras = (p.details[LANG] || p.details.hu)
      .map(function (t) {
        return '<p>' + esc(t) + '</p>';
      })
      .join('');
    $('#modalInner').innerHTML =
      '<div class="md-head"><div class="type">' +
      esc(pick(p.type)) +
      ' · ' +
      esc(p.year) +
      '</div>' +
      '<h3>' +
      esc(p.title) +
      '</h3></div>' +
      '<div class="md-tags">' +
      p.tech
        .map(function (t) {
          return '<span>' + esc(t) + '</span>';
        })
        .join('') +
      '</div>' +
      themeToggleHTML(p) +
      '<div class="md-gallery"></div>' +
      '<div class="md-body">' +
      paras +
      '</div>';
    $all('#modalInner .gal-theme-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        galTheme = b.getAttribute('data-gt');
        renderGallery();
      });
    });
    renderGallery();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (!lb.classList.contains('open')) document.body.style.overflow = '';
  }
  function openLightbox(i) {
    lbIndex = i;
    $('#lbImg').src = lbImages[i];
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    if (!modal.classList.contains('open')) document.body.style.overflow = '';
  }
  function lbStep(d) {
    lbIndex = (lbIndex + d + lbImages.length) % lbImages.length;
    $('#lbImg').src = lbImages[lbIndex];
  }
  function wireForm() {
    var form = $('#order'),
      note = $('#formNote');
    if (!form) return;
    var ctSel = $('#clientType'),
      bizField = $('#bizField');
    ctSel.addEventListener('change', function () {
      bizField.style.display = ctSel.value === 'biz' ? '' : 'none';
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var el = form.elements,
        val = function (n) {
          return el[n] ? String(el[n].value || '').trim() : '';
        };
      if (el._hp && el._hp.value) return;
      var name = val('name'),
        email = val('email');
      var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !validEmail) {
        note.textContent = pick(MSG.invalid);
        note.className = 'form-note err';
        return;
      }
      if (ctSel.value === 'biz' && !val('companyName')) {
        note.textContent = pick(MSG.needCo);
        note.className = 'form-note err';
        return;
      }
      var opt = el.type && el.type.selectedOptions ? el.type.selectedOptions[0] : null;
      var payload = {
        name: name,
        email: email,
        phone: val('phone'),
        clientType: ENTITY.filter(function (x) {
          return x.v === ctSel.value;
        })[0],
        company: val('companyName'),
        service: val('type'),
        budget: val('budget'),
        message: val('message'),
        lang: LANG,
        priceNum: opt ? Number(opt.getAttribute('data-price')) || 0 : 0,
        priceStr: opt ? opt.getAttribute('data-price-str') || '' : ''
      };
      submitOrder(payload, form, note, bizField);
    });
  }
  function submitOrder(p, form, note, bizField) {
    var ot = ORDER_T[p.lang] || ORDER_T.hu;
    var clientTypeHu = p.clientType && p.clientType.v === 'biz' ? 'Vállalkozó' : 'Magánszemély';
    var msg = p.message || '';
    if (p.clientType && p.clientType.v === 'biz' && p.company)
      msg +=
        (msg ? '\n\n' : '') + '[' + (p.lang === 'en' ? 'Company' : 'Cég') + ': ' + p.company + ']';
    if (db) {
      var data = {
        name: p.name,
        email: p.email,
        type: p.service,
        key: ORDER.KEY,
        status: 'uj',
        price: p.priceNum,
        currency: 'HUF',
        date: new Date().toISOString().slice(0, 10),
        createdAt: Date.now(),
        clientType: clientTypeHu,
        message: msg
      };
      if (p.phone) data.phone = p.phone;
      if (p.budget) data.budget = p.budget;
      db.collection('swm_state')
        .doc(ORDER.OWNER_UID)
        .collection('inbox')
        .add(data)
        .then(function () {
          sendOrderEmails(p, clientTypeHu, msg);
          note.textContent = ot.thanks;
          note.className = 'form-note ok';
          form.reset();
          if (bizField) bizField.style.display = 'none';
        })
        .catch(function (err) {
          console.error('inbox add:', err);
          sendMailto(p);
          note.textContent = pick(MSG.opened);
          note.className = 'form-note ok';
        });
    } else {
      sendMailto(p);
      note.textContent = pick(MSG.opened);
      note.className = 'form-note ok';
      form.reset();
      if (bizField) bizField.style.display = 'none';
    }
  }
  function sendOrderEmails(p, clientTypeHu, msg) {
    try {
      if (!(window.emailjs && ORDER.EJ.publicKey && ORDER.EJ.serviceId)) return;
      try {
        emailjs.init({
          publicKey: ORDER.EJ.publicKey
        });
      } catch (e) {}
      var ej = CFG.emailjs || {},
        ownerEmail = ej.notifyEmail || '',
        bizName = ej.businessName || '';
      var ot = ORDER_T[p.lang] || ORDER_T.hu,
        or = function (v) {
          return v && String(v).trim() ? v : '—';
        };
      var notify = {
        business_name: bizName,
        nev: p.name,
        to_email: p.email,
        owner_email: ownerEmail,
        telefon: or(p.phone),
        ugyfel_tipus: clientTypeHu,
        vallalkozas_neve: or(p.company),
        adoszam: '—',
        tipus: or(p.service),
        ar: or(p.priceStr),
        keret: or(p.budget),
        hatarido: '—',
        uzenet: or(p.message),
        datum: new Date().toLocaleDateString('hu-HU')
      };
      var conf = {
        business_name: bizName,
        kicker: bizName,
        to_email: p.email,
        nev: p.name,
        heading: ot.em_heading,
        greeting: ot.em_greeting + p.name + '!',
        intro: ot.em_intro,
        details_title: ot.em_details,
        label_service: ot.em_service,
        label_price: ot.em_price,
        label_budget: ot.em_budget,
        label_message: ot.em_message,
        tipus: or(p.service),
        ar: or(p.priceStr),
        keret: or(p.budget),
        uzenet: or(p.message),
        closing: ot.em_closing
      };
      if (ORDER.EJ.notifyTemplate && ownerEmail)
        emailjs.send(ORDER.EJ.serviceId, ORDER.EJ.notifyTemplate, notify).catch(function (e) {
          console.warn('EmailJS notify:', e);
        });
      if (ORDER.EJ.confirmTemplate)
        emailjs.send(ORDER.EJ.serviceId, ORDER.EJ.confirmTemplate, conf).catch(function (e) {
          console.warn('EmailJS confirm:', e);
        });
    } catch (e) {
      console.warn('sendOrderEmails:', e);
    }
  }
  function initOrderBackend() {
    if (!$('#order')) return;
    try {
      if (
        window.FIREBASE_CONFIG &&
        window.FIREBASE_CONFIG.apiKey &&
        typeof firebase !== 'undefined'
      ) {
        if (!firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
        db = firebase.firestore();
        db.collection('form_configs')
          .doc(ORDER.OWNER_UID)
          .get()
          .then(function (doc) {
            CFG = doc.exists ? doc.data() || {} : {};
          })
          .catch(function () {
            CFG = {};
          });
      }
    } catch (e) {
      console.warn('Firebase init:', e);
    }
  }
  function sendMailto(p) {
    var L = p.lang;
    var subj = (L === 'en' ? 'Website enquiry — ' : 'Weboldal megkeresés — ') + p.name;
    var lines = [
      (L === 'en' ? 'Name' : 'Név') + ': ' + p.name,
      'E-mail: ' + p.email,
      p.phone ? (L === 'en' ? 'Phone' : 'Telefon') + ': ' + p.phone : '',
      (L === 'en' ? 'You are' : 'Megrendelő') + ': ' + (p.clientType ? pick(p.clientType) : '-'),
      p.company ? (L === 'en' ? 'Company' : 'Cég') + ': ' + p.company : '',
      (L === 'en' ? 'Service' : 'Szolgáltatás') + ': ' + p.service,
      (L === 'en' ? 'Budget' : 'Keret') + ': ' + p.budget,
      '',
      (L === 'en' ? 'Message' : 'Üzenet') + ':',
      p.message || '-'
    ].filter(function (x) {
      return x !== '';
    });
    window.location.href =
      'mailto:' +
      EMAIL_TO +
      '?subject=' +
      encodeURIComponent(subj) +
      '&body=' +
      encodeURIComponent(lines.join('\n'));
  }
  function onScroll() {
    var y = window.scrollY,
      hdr = $('#hdr'),
      prog = $('#prog');
    hdr.classList.toggle('scrolled', y > 20);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    var cur = '';
    $all('section[id]').forEach(function (s) {
      if (y >= s.offsetTop - 140) cur = s.id;
    });
    $all('.menu a').forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + cur);
    });
    $all('.w-img img').forEach(function (img) {
      var r = img.getBoundingClientRect(),
        off = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      img.style.setProperty('--py', (-off * 22).toFixed(1) + 'px');
    });
  }
  function route(initial) {
    var vh = $('#view-home'),
      vw = $('#view-work');
    if (!vh || !vw) return;
    var work = location.hash === '#osszes-munka';
    vh.hidden = work;
    vw.hidden = !work;
    if (work) {
      vw.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('in');
      });
      window.scrollTo(0, 0);
    } else if (!initial) {
      var h = location.hash;
      if (h && h !== '#top' && h !== '#osszes-munka') {
        var t = document.querySelector(h);
        if (t) {
          t.scrollIntoView();
          return;
        }
      }
      window.scrollTo(0, 0);
    }
  }
  function init() {
    $('#yr').textContent = new Date().getFullYear();
    modal = $('#modal');
    lb = $('#lightbox');
    renderAll();
    $all('.reveal').forEach(function (el) {
      io.observe(el);
    });
    booted = true;
    var burger = $('#burger'),
      menu = $('#menu');
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') menu.classList.remove('open');
    });
    $('#lang').addEventListener('click', function () {
      setLang(LANG === 'hu' ? 'en' : 'hu');
      renderAll();
    });
    document.addEventListener('click', function (e) {
      var w = e.target.closest('[data-proj]');
      if (w) openProject(w.getAttribute('data-proj'));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var w = e.target.closest('[data-proj]');
      if (w) {
        e.preventDefault();
        openProject(w.getAttribute('data-proj'));
      }
    });
    $all('[data-close]').forEach(function (b) {
      b.addEventListener('click', closeModal);
    });
    $('[data-lbclose]').addEventListener('click', closeLightbox);
    $('#lbPrev').addEventListener('click', function () {
      lbStep(-1);
    });
    $('#lbNext').addEventListener('click', function () {
      lbStep(1);
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (lb.classList.contains('open')) closeLightbox();
        else if (modal.classList.contains('open')) closeModal();
      }
      if (lb.classList.contains('open')) {
        if (e.key === 'ArrowLeft') lbStep(-1);
        if (e.key === 'ArrowRight') lbStep(1);
      }
    });
    wireForm();
    initOrderBackend();
    window.addEventListener('hashchange', function () {
      route(false);
    });
    route(true);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
