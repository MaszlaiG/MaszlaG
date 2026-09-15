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
      id: 'kvitli',
      title: 'Kvitli',
      year: '2026',
      type: {
        hu: 'Webapp',
        en: 'Web app'
      },
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      images: {
        dark: [
          'kepek/kvitli_attekintes_dark.png',
          'kepek/kvitli_megrendelesek_dark.png',
          'kepek/kvitli_projektek_dark.png',
          'kepek/kvitli_ugyfelek_dark.png',
          'kepek/kvitli_szamlak_dark.png',
          'kepek/kvitli_urlap_dark.png'
        ],
        light: [
          'kepek/kvitli_attekintes_light.png',
          'kepek/kvitli_megrendelesek_light.png',
          'kepek/kvitli_projektek_light.png',
          'kepek/kvitli_ugyfelek_light.png',
          'kepek/kvitli_szamlak_light.png',
          'kepek/kvitli_urlap_light.png'
        ]
      },
      short: {
        hu: 'Vállalkozáskezelő szabadúszóknak: megkeresések, megrendelések, projektek, ügyfelek, számlák és pénzügyek egy helyen — beágyazható megrendelő-űrlappal.',
        en: 'A business manager for freelancers: leads, orders, projects, clients, invoices and finances in one place — with an embeddable order form.'
      },
      details: {
        hu: [
          {
            h: 'Probléma',
            p: 'A szabadúszók és kisvállalkozók megkeresései, megrendelései, projektjei, ügyfelei és számlái jellemzően szétszórva élnek — e-mailben, táblázatokban, füzetben. Így könnyű elveszíteni egy leadet vagy lecsúszni egy határidőről, és nincs valós kép a bevételről.'
          },
          {
            h: 'Megoldás',
            p: 'Fiók-alapú vállalkozáskezelő webapp, amely mindezt egy helyre hozza. Egy külön fül beágyazható megrendelő-űrlapot generál (a kódot elég egyszer a weboldalra illeszteni), a leadott rendelések kézi rögzítés nélkül, élőben, státuszokkal jelennek meg; a projektekhez folyamat-nyilvántartás, az ügyfelekhez ügyféltörzs, a pénzügyekhez tételes bevétel/kiadás tartozik. Az adatok a felhőben (Firebase) tárolódnak.'
          },
          {
            h: 'Eredmény',
            p: 'Egy munka a megkereséstől a kiállított számláig végigkövethető egyetlen felületen. Az áttekintő vezérlőpult azonnal mutatja az idei árbevételt, a folyamatban lévő projekteket, a közelgő határidőket és az új megkereséseket — havi bevétel/kiadás diagrammal, projekt-státusz gyűrűvel és pénzforgalom-táblázattal.'
          }
        ],
        en: [
          {
            h: 'Problem',
            p: 'For freelancers and small businesses, leads, orders, projects, clients and invoices usually live scattered across email, spreadsheets and notebooks — it is easy to lose a lead or miss a deadline, with no real picture of revenue.'
          },
          {
            h: 'Solution',
            p: 'An account-based business-management web app that brings it all into one place. A dedicated tab generates an embeddable order form (paste the code onto your site once), submitted orders appear live with statuses and no manual entry; projects get progress tracking, clients form a client base, and finances get itemised income/expense records. Data is stored in the cloud (Firebase).'
          },
          {
            h: 'Result',
            p: 'A job can be followed from the first enquiry to the issued invoice on a single screen. The overview dashboard instantly shows this year’s revenue, ongoing projects, upcoming deadlines and new leads — with a monthly income/expense chart, a project-status donut and a cash-flow table.'
          }
        ]
      }
    },
    {
      id: 'bd-hairstudio',
      title: 'B&D Hairstudio',
      year: '2026',
      type: {
        hu: 'Weboldal',
        en: 'Website'
      },
      tech: ['HTML', 'CSS', 'JavaScript'],
      images: {
        light: [
          'kepek/bd_hero_light.png',
          'kepek/bd_galeria_light.png',
          'kepek/bd_arak_light.png',
          'kepek/bd_kapcsolat_light.png'
        ]
      },
      short: {
        hu: 'Bemutatkozó weboldal egy hajdúszoboszlói fodrászatnak — merész, modern arculat élénk zöld akcentussal, galériával és közvetlen foglalással.',
        en: 'A presentation site for a hair studio in Hajdúszoboszló — a bold, modern identity with a vivid green accent, a gallery and direct booking.'
      },
      details: {
        hu: [
          {
            h: 'Probléma',
            p: 'Egy helyi fodrászat/borbély online jellemzően csak egy közösségi oldalon él — nincs egy önálló, jól mutató felület, amely rendezetten bemutatja a szolgáltatásokat és az árakat, és foglalásra terel.'
          },
          {
            h: 'Megoldás',
            p: 'Egyoldalas, statikus bemutatkozó weboldal merész, modern arculattal: nagy, geometrikus nagybetűs címsorok, élénk zöld akcentus, futószöveg és görgetésre megjelenő animációk. A szolgáltatások, a galéria és az árak után közvetlen foglalásra terel — a foglalás és a kapcsolat a stúdió Facebook és TikTok csatornáin fut, saját backend nélkül.'
          },
          {
            h: 'Eredmény',
            p: 'Egy gyors, mobil-first oldal, amely erős első benyomást ad, hamburger-menüvel és sima navigációval, és szerver nélkül bármelyik tárhelyre feltölthető. Kész, egyedi arculat, amelyet a stúdió azonnal használatba vehet.'
          }
        ],
        en: [
          {
            h: 'Problem',
            p: 'A local hair studio/barber usually lives online only on a social page — there is no standalone, good-looking site that shows the services and prices in an organised way and drives bookings.'
          },
          {
            h: 'Solution',
            p: 'A one-page static presentation site with a bold, modern identity: large geometric all-caps headings, a vivid green accent, a marquee ticker and reveal-on-scroll animations. After the services, gallery and prices it nudges toward direct booking — running on the studio’s Facebook and TikTok channels, with no backend.'
          },
          {
            h: 'Result',
            p: 'A fast, mobile-first site that makes a strong first impression, with a hamburger menu and smooth navigation, and uploads to any host with no server. A finished, custom identity the studio can put to use straight away.'
          }
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
          {
            h: 'Probléma',
            p: 'A telefonon és üzenetben érkező időpontfoglalás időrabló és hibázós: dupla foglalások, oda-vissza egyeztetés, és nincs élő rálátás a napra. Egy kisvállalkozásnak ritkán éri meg drága foglalórendszert bérelni.'
          },
          {
            h: 'Megoldás',
            p: 'Fiók-alapú időpontfoglaló, amely két dolgot csinál: az adminon élőben követi a foglalásokat, és generál egy beágyazható foglaló-widgetet a vállalkozó saját weboldalára (a kódot elég egyszer beilleszteni). A szolgáltatások, a nyitvatartás (akár ebédszünettel) és a sávhossz alapján számolja a szabad időpontokat, ütközésvédelemmel — két egyidejű foglalásból a második nem megy át.'
          },
          {
            h: 'Eredmény',
            p: 'A látogató csak ténylegesen szabad sávot foglalhat, a foglalások élőben, státuszokkal jelennek meg, a lemondás pedig visszaszabadítja a sávot. Egy áttekintő nézet az utolsó 12 hónap bevételét is mutatja. Az adatok a felhőben (Firebase) élőben szinkronizálódnak.'
          }
        ],
        en: [
          {
            h: 'Problem',
            p: 'Taking appointments by phone and DM is time-consuming and error-prone: double bookings, back-and-forth, and no live view of the day. A small business rarely wants to rent an expensive booking system.'
          },
          {
            h: 'Solution',
            p: 'An account-based booker that does two things: the admin tracks bookings live, and it generates an embeddable booking widget for the owner’s own website (paste the code once). It computes free times from the services, opening hours (with breaks) and slot length, with collision protection — of two simultaneous bookings, the second one fails.'
          },
          {
            h: 'Result',
            p: 'Visitors can only book genuinely free slots, bookings appear live with statuses, and a cancellation frees the slot again. An overview also shows the last 12 months of revenue. Data syncs live in the cloud (Firebase).'
          }
        ]
      }
    },
    {
      id: 'panetti',
      title: 'Panetti Photography',
      year: '2026',
      type: {
        hu: 'Weboldal',
        en: 'Website'
      },
      tech: ['HTML', 'CSS', 'JavaScript'],
      images: {
        light: [
          'kepek/panetti_hero_light.png',
          'kepek/panetti_rolam_light.png',
          'kepek/panetti_galeria_light.png',
          'kepek/panetti_kapcsolat_light.png'
        ]
      },
      short: {
        hu: 'Elegáns portfólió- és foglaló-oldal egy fotográfusnak — szűrhető galéria lightboxszal, animált nyitó-logó, kétnyelvű, arany-krém arculat.',
        en: 'An elegant portfolio & booking site for a photographer — a filterable gallery with a lightbox, an animated intro logo, bilingual, cream-and-gold identity.'
      },
      details: {
        hu: [
          {
            h: 'Probléma',
            p: 'Egy fotográfusnál a képek eladják magukat — de csak akkor, ha van egy elegáns, gyors felület, amely rendezetten mutatja a munkákat, és megkönnyíti a megkeresést. Egy közösségi galéria erre kevés.'
          },
          {
            h: 'Megoldás',
            p: 'Kétnyelvű (HU/EN), mobil-first portfólió- és foglaló-oldal krém-arany arculattal, klasszikus serif tipográfiával. A központi elem a kategóriánként (kismama, portré, esküvő, családi, gyermek) szűrhető galéria lightboxszal; egy animált nyitó-logó fogadja a látogatót, amely kirajzolódik, majd átúszik a tartalomba. Kapcsolat mailto: űrlappal, saját backend nélkül.'
          },
          {
            h: 'Eredmény',
            p: 'Egy letisztult, elegáns oldal, amely a fotós stílusát tükrözi, és élesben fut (GitHub Pages). A látogató kategóriánként böngészheti a munkákat, és pár kattintással megkeresheti a fotográfust.'
          }
        ],
        en: [
          {
            h: 'Problem',
            p: 'For a photographer the images sell themselves — but only with an elegant, fast interface that shows the work in an organised way and makes enquiries easy. A social gallery is not enough.'
          },
          {
            h: 'Solution',
            p: 'A bilingual (HU/EN), mobile-first portfolio & booking site with a cream-and-gold identity and classic serif typography. The centrepiece is a gallery filterable by category (maternity, portrait, wedding, family, child) with a lightbox; an animated intro logo greets the visitor, drawing itself and dissolving into the content. Contact via a mailto: form, with no backend.'
          },
          {
            h: 'Result',
            p: 'A refined, elegant site that reflects the photographer’s style and runs live (GitHub Pages). Visitors can browse the work by category and reach the photographer in a couple of clicks.'
          }
        ]
      }
    },
    {
      id: 'crestly',
      title: 'Crestly',
      year: '2026',
      type: {
        hu: 'Webapp',
        en: 'Web app'
      },
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      images: {
        dark: [
          'kepek/crestly_attekintes_dark.png',
          'kepek/crestly_reszveny_dark.png',
          'kepek/crestly_kripto_dark.png',
          'kepek/crestly_arany_dark.png',
          'kepek/crestly_hitel_dark.png',
          'kepek/crestly_szolgaltatasok_dark.png'
        ],
        light: [
          'kepek/crestly_attekintes_light.png',
          'kepek/crestly_reszveny_light.png',
          'kepek/crestly_kripto_light.png',
          'kepek/crestly_arany_light.png',
          'kepek/crestly_hitel_light.png',
          'kepek/crestly_szolgaltatasok_light.png'
        ]
      },
      short: {
        hu: 'Fiók-alapú személyi pénzügyi és vagyonkezelő webapp élő árfolyamokkal. Arany, részvény, kripto, hitel és előfizetés egyetlen áttekinthető felületen, saját rajzolású diagramokkal.',
        en: 'An account-based personal finance & wealth manager with live prices. Gold, stocks, crypto, loans and subscriptions on one clear screen, with custom-drawn charts.'
      },
      details: {
        hu: [
          {
            h: 'Probléma',
            p: 'Egy magánszemély vagyona jellemzően szétszórtan él — arany, részvény, kripto, hitel, előfizetés külön appokban és táblázatokban. Nincs egyetlen szám, amely megmondaná, valójában mennyit ér a portfólió, és mennyi rajta a hozam.'
          },
          {
            h: 'Megoldás',
            p: 'Fiók-alapú vagyonkezelő webapp, amely minden eszköztípust egy felületre hoz, és élő árfolyamokkal számol publikus forrásokból (kripto: CoinGecko, részvény: Yahoo Finance, deviza: EKB, arany: XAU spot). A nyereség/veszteség automatikus; a deviza akár a tranzakció napi árfolyamán váltódik a pontos historikus értékért. Saját rajzolású diagramok, külső könyvtár és build lépés nélkül.'
          },
          {
            h: 'Eredmény',
            p: 'Egy kép a teljes nettó vagyonról: befektetett érték, realizált/nem realizált eredmény, osztalékráta, havi pénzforgalom és eszközallokáció — mind élőben, kétnyelvű, világos/sötét felületen, mobilon is hibátlanul.'
          }
        ],
        en: [
          {
            h: 'Problem',
            p: 'An individual’s wealth usually lives scattered — gold, stocks, crypto, loans and subscriptions across separate apps and spreadsheets. There is no single number telling you what the portfolio is really worth, or what it is returning.'
          },
          {
            h: 'Solution',
            p: 'An account-based wealth manager that brings every asset type onto one screen and calculates with live prices from public sources (crypto: CoinGecko, stocks: Yahoo Finance, FX: ECB, gold: XAU spot). P&L is automatic; FX can resolve at each trade’s own date for accurate historical value. Custom-drawn charts, no external library and no build step.'
          },
          {
            h: 'Result',
            p: 'One picture of total net worth: invested value, realised/unrealised P&L, dividend rate, monthly cash flow and asset allocation — all live, bilingual, in a light/dark interface that is flawless on mobile too.'
          }
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
    galTheme = 'light';
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
    if (p.images && p.images.light && p.images.light.length) t.push('light');
    if (p.images && p.images.dark && p.images.dark.length) t.push('dark');
    return t;
  }
  function projImgs(p, theme) {
    return (p.images && (p.images[theme] || p.images.dark || p.images.light)) || [];
  }
  function projThumb(p) {
    return projImgs(p, 'light')[0] || projImgs(p, 'dark')[0] || '';
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
    galTheme = ths.indexOf('light') >= 0 ? 'light' : 'dark';
    var paras = (p.details[LANG] || p.details.hu)
      .map(function (t) {
        if (t && typeof t === 'object') return '<h4 class="md-h">' + esc(t.h) + '</h4><p>' + esc(t.p) + '</p>';
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
