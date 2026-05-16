// =================================================================
// PUSTELNIK COACH — obsah webu
// =================================================================
// Tady jsou všechny texty, ceny, výsledky klientů a kontakty.
// Když chceš něco změnit, řekni o tom Claude Code česky —
// najde to a upraví.
//
// PRAVIDLO 1: Neměň názvy proměnných (např. "hero", "headline").
//             Měň jen TEXTY v uvozovkách.
// PRAVIDLO 2: Hvězdičky **text** udělají z textu tučně.
//             Příklad: "tohle je **tučně** a tohle ne"
// =================================================================

// -----------------------------------------------------------------
// NAV — odkazy v horní liště
// -----------------------------------------------------------------
export const nav = {
  brand: "PUSTELNIK", // ÚPRAVA: značka/logo text vlevo nahoře
  links: [
    { label: "Výsledky", href: "#vysledky" },
    { label: "O mně", href: "#o-mne" },
    { label: "Balíčky", href: "#balicky" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  cta: "Začít teď", // ÚPRAVA: text hlavního tlačítka v navigaci
};

// -----------------------------------------------------------------
// HERO — úvodní sekce webu (to první, co návštěvník vidí)
// -----------------------------------------------------------------
export const hero = {
  // ÚPRAVA: malý text nad hlavním nadpisem (uppercase)
  eyebrow: "OSOBNÍ TRENÉR · ELEMENTS GYM OSTRAVA",

  // ÚPRAVA: hlavní nadpis — dva řádky
  headlineLine1: "Trenér, který tě dovede k cíli.",
  headlineLine2: "Ne k frustraci.",

  // ÚPRAVA: podnadpis pod hlavním textem
  // (hvězdičkami **text** udělá tučně)
  subheadline:
    "**Šest let praxe. Přes sto klientů.** Žádné restarty, žádné výmluvy — jen **systém, který drží roky.**",

  ctaPrimary: "Začít teď", // ÚPRAVA: text hlavního tlačítka
  ctaSecondary: "Vidět výsledky", // ÚPRAVA: text druhého tlačítka

  // ÚPRAVA: cesta k hero fotce (poměr 4:5, ulož do public/images/)
  image: "/images/hero.jpg",
  imageAlt: "Petr Pustelník — osobní trenér",
};

// -----------------------------------------------------------------
// PROOF BAR — tři čísla pod hero sekcí
// -----------------------------------------------------------------
// Pokud je hodnota v "number" číslo (např. "6+", "100+"),
// při scrollu se animovaně počítá od nuly.
// Pokud je to text (např. "Orchard"), jenom se rozsvítí.
// -----------------------------------------------------------------
export const proof = [
  { number: "6+", label: "let praxe v trénování" }, // ÚPRAVA: roky praxe
  { number: "100+", label: "klientů dosáhlo cíle" }, // ÚPRAVA: počet klientů
  { number: "99 %", label: "úspěšnost při dodržení plánu" }, // ÚPRAVA: úspěšnost
];

// -----------------------------------------------------------------
// VÝSLEDKY KLIENTŮ — karty s před/po
// -----------------------------------------------------------------
// PŘIDÁNÍ NOVÉHO KLIENTA:
// 1. Zkopíruj jeden objekt níže (od { po }).
// 2. Vlož ho na konec pole (před závorkou ]).
// 3. Vyplň údaje.
// 4. Ulož fotku do public/images/results/[jmeno].jpg
// -----------------------------------------------------------------
export const resultsHeading = {
  title: "Výsledky, ne sliby", // ÚPRAVA: nadpis sekce
  subtitle: "Reálné fotky reálných klientů. Žádný photoshop, žádné stock fotky.", // ÚPRAVA
};

export const results = [
  {
    name: "Dominik J.", // ÚPRAVA: jméno klienta
    before: "100 kg", // ÚPRAVA: stav před
    after: "86 kg", // ÚPRAVA: stav po
    duration: "5 měsíců", // ÚPRAVA: za jak dlouho
    quote: "Konečně systém, který drží i po skončení spolupráce.", // ÚPRAVA: citát
    image: "/images/results/dominik.jpg", // ÚPRAVA: cesta k fotce
  },
  {
    name: "Jakub P.",
    before: "125 kg",
    after: "85 kg",
    duration: "8 měsíců",
    quote: "40 kilo dole. Petis ví, co dělá.",
    image: "/images/results/jakub.jpg",
  },
  {
    name: "Justýna H.",
    before: "Před",
    after: "+10 kg svalu",
    duration: "od ledna",
    quote: "Forma, kterou jsem si nedokázala představit.",
    image: "/images/results/justyna.jpg",
  },
];

// -----------------------------------------------------------------
// O MNĚ — bio sekce
// -----------------------------------------------------------------
export const about = {
  heading: "O mně", // ÚPRAVA: nadpis sekce

  // ÚPRAVA: jednotlivé odstavce textu
  // Hvězdičky **text** udělají z textu tučně.
  paragraphs: [
    "**Šest let cvičím. Rok trénuju klienty v Elements Gymu Ostrava.**",
    "Začal jsem **u sebe** — léta jsem studoval, co opravdu funguje, a postavil postavu, kterou jsem chtěl. Bez zkratek, bez extrémních diet, bez magie.",
    "Pak se začali ptát **kamarádi** — co jíš, jak cvičíš, jak to děláš. Tak jsem začal pomáhat jim. Když to fungovalo opakovaně, došlo mi, že stejný systém můžu dát i lidem mimo svůj okruh.",
    "Teď trénuju **klienty** v Elements Gymu a online po celé republice — formování postavy, sílu, powerlifting i kulturistiku včetně závodní přípravy.",
    "**Zdraví máte jen jedno.** O tělo se musí starat — nejde jen o váhu nebo postavu, jde o klouby, srdce, hlavu, spánek. Žádný cíl není moc malý a žádný čas není moc pozdě.",
    "Jsi tu správně. **Jsem tvůj člověk.**",
  ],

  // ÚPRAVA: štítky pod textem (kvalifikace, místo)
  badges: [
    "Fitness trenér / instruktor fitness",
    "Sestavování jídelníčků",
    "6+ let praxe v cvičení",
    "Elements Gym Ostrava",
  ],

  // ÚPRAVA: cesta k portrétní fotce (poměr 4:5)
  image: "/images/about.jpg",
  imageAlt: "Petr Pustelník",
};

// -----------------------------------------------------------------
// EXCUSES — sekce "Možná si říkáš…" — boří nejčastější výmluvy
// -----------------------------------------------------------------
// Klienti často přicházejí s obavami, které je drží zpátky.
// Tato sekce je vyjmenuje a krátce na ně odpoví.
// -----------------------------------------------------------------
export const excusesHeading = {
  title: "Možná si říkáš…", // ÚPRAVA: nadpis sekce
  subtitle:
    "Většinu lidí brzdí jedna z těchhle vět. Ne argument — **strach z neúspěchu** v hávu logiky.", // ÚPRAVA
};

export const excuses = [
  {
    excuse: "„Mám 100 kilo, to už je pozdě.“", // ÚPRAVA: výmluva v uvozovkách
    answer:
      "**Smysl to má vždycky.** Sundat 5–10 kg ve 100 kg = větší úleva pro klouby, srdce a spánek než z 80 na 75. **Zdraví máte jen jedno** — a o tělo se musí starat bez ohledu na věk a startovní stav.", // ÚPRAVA: odpověď
  },
  {
    excuse: "„Nemám čas, mám práci a rodinu.“",
    answer:
      "Online Coaching je postavený pro lidi se **dvěma hodinami týdně**. Plán je flexibilní, jídelníček se vejde do oběda. **Většinu klientů cvičí kolem práce a rodiny**, ne místo nich.",
  },
  {
    excuse: "„Už jsem to zkoušel. Vždy mi to vydrží 2 měsíce.“",
    answer:
      "Protože ti chybí **systém a kontrola.** Krátkodobé výzvy jsou navržené tak, aby se vrátily. Tady **držím nad tebou ruku** — a stavíme habity, ne dietu.",
  },
  {
    excuse: "„Jsem moc starý / moc začátečník.“",
    answer:
      "Začátečníky mám rád — **žádné zlozvyky k odbourání.** Věk je proměnná, ne překážka. Trénuju lidi od 18 do 60+. Postup se přizpůsobí, cíl ne.",
  },
];

// -----------------------------------------------------------------
// CURVE — křivka výsledků (hokejka)
// -----------------------------------------------------------------
// Vysvětluje psychologii spolupráce: většina lidí čeká lineární
// progres, ale realita je exponenciální. Většina lidí to vzdá
// v "ploché" fázi — předtím, než výsledky přijdou.
// -----------------------------------------------------------------
export const curveHeading = {
  title: "Proč většina lidí nikdy neuvidí výsledek", // ÚPRAVA: nadpis sekce
  subtitle:
    "Většina ti slíbí lineární cestu. Realita vypadá takhle:", // ÚPRAVA
};

export const curveCopy = {
  // ÚPRAVA: popisky bodů křivky
  expectedLabel: "Co ti slíbili",
  realityLabel: "Realita",
  quitZoneLabel: "Tady končí 85 % lidí",
  payoffZoneLabel: "Tady přicházejí výsledky",

  // ÚPRAVA: vysvětlující odstavec pod grafem
  body:
    "**Většina lidí ukončí spolupráci v týdnu 4–8** — ve chvíli, kdy ještě nevidí výsledky, ale tělo už dělá tvrdou práci v pozadí. Moje práce je **dotáhnout tě přes tuhle fázi**. Sleduju, kontroluju, povzbuzuju, upravuju. Jakmile se dostaneš za zlom, výsledky přijdou samy a rychle.",
};

// -----------------------------------------------------------------
// PILLARS — jak pracuju, čím se liším od ostatních trenérů
// -----------------------------------------------------------------
// Ikona musí být jeden z názvů z https://lucide.dev/icons
// (např. "Target", "Repeat2", "ShieldCheck", "UserCheck").
// -----------------------------------------------------------------
export const pillarsHeading = {
  title: "Čím se liším", // ÚPRAVA: nadpis sekce
  subtitle:
    "Žádné sliby. **Jenom systém postavený na šesti letech zkušeností.**", // ÚPRAVA: podtitulek (bold přes **text**)
};

export const pillars = [
  {
    icon: "Target", // ikona z https://lucide.dev/icons
    title: "Systém, ne #fitnessjourney", // ÚPRAVA: nadpis pillaru
    description:
      "Žádný hype, žádné výkřiky. Plán postavený na **tobě a tvém životě**, vyhodnocování každý týden.", // ÚPRAVA
  },
  {
    icon: "Repeat2",
    title: "Trvalá změna, ne 6týdenní detox",
    description:
      "Stavíme **návyky, které drží roky** po skončení spolupráce — ne kila, která se za měsíc vrátí. Cokoliv, co se musí 'vydržet', mě nezajímá.",
  },
  {
    icon: "ShieldCheck",
    title: "Technika dřív než zátěž",
    description:
      "Nedáme ti 100 kg na záda, protože to vypadá dobře. **Předejdeme zraněním** a každý cvik má smysl.",
  },
  {
    icon: "UserCheck",
    title: "Sto klientů, žádný copy-paste",
    description:
      "Plán **šitý tobě**. Jiné cíle, jiné tělo, jiný čas = jiný program. Šablonu z internetu si stáhneš zdarma a víš sám, jak dopadnou.",
  },
];

// -----------------------------------------------------------------
// GARANCE & SPOLUPRÁCE NA MÍRU — risk reversal sekce
// -----------------------------------------------------------------
// Tahle sekce řeší obavu "co když mi to nevyjde" a otevírá dveře
// klientům, kterým nesedí žádný balíček z ceníku.
// -----------------------------------------------------------------
export const guarantee = {
  // ÚPRAVA: velký nadpis sekce
  heading: "Garantuju ti výsledek. Ne sliby.",

  // ÚPRAVA: hlavní statistika nahoře (např. "99 %")
  statNumber: "99 %",
  statLabel:
    "klientů, kteří dodrželi plán, dosáhli svého cíle. To není marketing — to je průměr za 6 let.",

  // ÚPRAVA: text garance (zvýrazněný box)
  promise:
    "**Pokud po prvním měsíci nevidíš změnu** při dodržení plánu, **vrátím ti peníze.** Žádné podmínky, žádné výmluvy.",

  // ÚPRAVA: druhá část — spolupráce mimo ceník
  customTitle: "Nesedí ti žádný balíček?",
  customBody:
    "Není nutné si vybrat balíček z ceníku. Když mi popíšeš, co potřebuješ, **domluvíme něco na míru**. Třeba jako s Petou — společně jsme šli mimo standard a **shodil 3 kg tuku za měsíc.**",
  customCta: "Domluvit spolupráci na míru",
};

// -----------------------------------------------------------------
// URGENCY — krátká věta nad balíčky
// -----------------------------------------------------------------
export const urgency = {
  // ÚPRAVA: krátká věta o omezené kapacitě / exkluzivitě
  message:
    "**Můj čas není digitální produkt.** Ceník je jen pro představu — nejdřív si dáme nezávaznou konzultaci, kde ti řeknu, který balíček ti sedne nejvíc.",
};

// -----------------------------------------------------------------
// BALÍČKY — měsíční spolupráce (4 hlavní balíčky)
// -----------------------------------------------------------------
// ZMĚNA CENY:
// Najdi balíček podle name (Hybrid, Hybrid Pro, ...) a změň price.
//
// PŘIDÁNÍ BALÍČKU:
// Zkopíruj jeden objekt a vlož na konec pole.
//
// TAG "NEJOBLÍBENĚJŠÍ" / "MAX VÝSLEDEK":
// Změň pole tag. Doporučuju mít max 1-2 zvýrazněné balíčky.
// -----------------------------------------------------------------
export const packagesHeading = {
  title: "Spolupráce", // ÚPRAVA: nadpis sekce
  subtitle:
    "Měsíční partnerství. Tohle nejsou produkty na klik — **každá spolupráce začíná konzultací**, kde se domluvíme, co ti sedí.", // ÚPRAVA (bold přes **text**)
};

export const packages = [
  {
    name: "Online Coaching", // ÚPRAVA: název balíčku
    price: "2 290", // ÚPRAVA: cena měsíčně v Kč
    period: "/měsíc",
    tag: "PRO LIDI MIMO OSTRAVU", // ÚPRAVA: badge nahoře — null nebo "..."
    bestFor: "Máš disciplínu, ale chceš plán a kontrolu.", // ÚPRAVA: pro koho je
    features: [
      "Online komunikace",
      "2× měsíčně kontrola",
      "Tréninkový plán",
      "Jídelníček",
      "Suplementace",
    ],
  },
  {
    name: "Hybrid",
    price: "3 290",
    period: "/měsíc",
    tag: null,
    bestFor: "Zkoušíš vážnější přístup, chceš osobní kontakt.",
    features: [
      "Online komunikace",
      "1× osobní konzultace",
      "2× osobní tréninky",
      "Tréninkový plán",
      "Jídelníček — 4 varianty",
      "Suplementace",
    ],
  },
  {
    name: "Hybrid Pro",
    price: "4 390",
    period: "/měsíc",
    tag: "NEJOBLÍBENĚJŠÍ",
    bestFor: "Chceš výsledky teď a víš, že sám to nezvládneš.",
    features: [
      "Online komunikace",
      "1× osobní konzultace",
      "4× osobní tréninky",
      "Tréninkový plán",
      "Jídelníček — 4 varianty",
      "Suplementace",
    ],
  },
  {
    name: "Hybrid Elite",
    price: "6 490",
    period: "/měsíc",
    tag: "MAX VÝSLEDEK",
    bestFor: "Závodní příprava nebo extrémní cíl.",
    features: [
      "Online komunikace",
      "1× osobní konzultace",
      "8× osobních tréninků",
      "Tréninkový plán",
      "Jídelníček — 4 varianty",
      "Suplementace",
    ],
  },
];

// -----------------------------------------------------------------
// JEDNORÁZOVKY — služby, co se neprodávají měsíčně
// -----------------------------------------------------------------
export const oneTimeHeading = "Jednorázové služby"; // ÚPRAVA: nadpis sekce

export const oneTime = [
  { name: "1 osobní trénink", price: "590", note: "studenti 500" },
  { name: "Tréninkový plán", price: "1 090", note: null },
  { name: "Jídelníček", price: "1 490", note: "4 varianty na každé jídlo" },
  {
    name: "Naučím tě cvičit",
    price: "6 790",
    note: "10 lekcí + plán + suplementace",
  },
];

// -----------------------------------------------------------------
// PROCES — jak spolupráce probíhá (transformační oblouk)
// -----------------------------------------------------------------
// Tohle nejsou kroky tvojí strany (vyplníš formulář, ozvu se...),
// ale milníky výsledků klienta. Posouvá to focus z procesu na výsledek.
// -----------------------------------------------------------------
export const processHeading = {
  title: "Jak to probíhá", // ÚPRAVA: nadpis sekce
  subtitle:
    "Tohle je oblouk, kterým si projdeš. Není to slib, je to průměr.", // ÚPRAVA
};

export const process = [
  {
    step: "Týden 1",
    title: "Audit, plán, start", // ÚPRAVA: nadpis kroku
    description:
      "**Měření, focení, plán šitý tobě.** Tréninkový program, jídelníček, suplementace. První trénink ještě ten týden.", // ÚPRAVA: popis kroku
  },
  {
    step: "Týden 4",
    title: "První viditelné změny",
    description:
      "Tělo začne reagovat. **Plán se ladí** podle toho, jak na to reaguješ — ne podle šablony.",
  },
  {
    step: "Měsíc 3",
    title: "Habity jedou samy",
    description:
      "Trénink a jídlo už nejsou rozhodnutí, jsou **návyk**. Viditelný pokrok, ostatní si toho začínají všímat.",
  },
  {
    step: "Měsíc 6+",
    title: "Trvalá forma",
    description:
      "Forma, kterou jsi nečekal. A hlavně **systém, který drží i bez mě** — návyky, technika, vědomí, co tělo potřebuje.",
  },
];

// -----------------------------------------------------------------
// FAQ — nejčastější otázky a námitky
// -----------------------------------------------------------------
// PŘIDÁNÍ OTÁZKY: zkopíruj objekt a vlož na konec pole.
// Pokud chceš část odpovědi tučně, zabal slovo do **hvězdiček**.
// -----------------------------------------------------------------
export const faqHeading = {
  title: "Časté otázky", // ÚPRAVA: nadpis sekce
  subtitle:
    "Většina lidí mě řeší jednu z těchhle věcí. Pokud chybí tvoje, ozvi se.", // ÚPRAVA
};

export const faq = [
  {
    q: "Funguje to, i když mám hodně práce?",
    a: "Online Coaching je postavený pro lidi se dvěma hodinami týdně. Plán, jídelníček a kontrola se vejdou do obědové pauzy. **Hybrid je intenzivnější, ale flexibilní** — tréninky plánujeme podle tebe, ne podle mě.",
  },
  {
    q: "Co když budu cestovat?",
    a: "Tréninkový plán umím udělat na cokoliv — **gym, hotelové fitko, vlastní váha doma**. Komunikace zůstává stejná, ať jsi v Ostravě nebo v Thajsku.",
  },
  {
    q: "Co když to nevyjde / nezhubnu, jak chci?",
    a: "**Při dodržení plánu 99 % klientů dosáhne cíle.** Pokud nevidíš pohyb, problém je v plánu, ne v tobě — upravíme. A pokud po prvním měsíci nejsi spokojený, vrátím ti peníze.",
  },
  {
    q: "Už jsem to zkoušel jinde a nevyšlo to.",
    a: "Většinou to není o tobě, ale o **systému, který nedrží.** Krátkodobé výzvy a extrémní diety jsou navržené tak, aby se vrátily. Tady stavíme něco, co drží roky po skončení spolupráce.",
  },
  {
    q: "Musím chodit do gymu?",
    a: "**Online Coaching** děláš odkudkoliv — gym, doma, venku. **Hybrid balíčky** předpokládají osobní tréninky v Elements Gymu (Ostrava). Pokud bydlíš jinde, Online Coaching je tvoje cesta.",
  },
  {
    q: "Co když nesedí žádný balíček z ceníku?",
    a: "**Ozvi se a domluvíme něco na míru.** Není nutné si vybrat z předem postavených balíčků — s Petou jsme šli mimo standard a fungovalo to.",
  },
  {
    q: "Můžu nejdřív vyzkoušet jeden trénink?",
    a: "Jasně. **Jeden osobní trénink je 590 Kč** (studenti 500). Pokud potom přejdeš na měsíční balíček, započítá se.",
  },
];

// -----------------------------------------------------------------
// FORMULÁŘ — texty a popisky kroků (🔒 strukturu kroků NEMĚŇ)
// -----------------------------------------------------------------
export const formCopy = {
  // ÚPRAVA: nadpis sekce s formulářem
  sectionTitle: "Pojďme začít",
  sectionSubtitle:
    "Vyplň formulář, ozvu se ti do 48 hodin. Žádný prodejní tlak, jen krátký call.",

  // ÚPRAVA: text tlačítka pod formulářem
  submit: "Odeslat poptávku",
  submitting: "Odesílám…",

  // ÚPRAVA: mikrokopie pod tlačítkem
  microcopy: "Ozvu se ti do 48 hodin. — Petis",

  // ÚPRAVA: text na úspěšné obrazovce
  success: {
    title: "Tvoje poptávka je u mě.",
    subtitle: "Ozvu se ti do 48 hodin.",
    instagramCta: "Mezitím mě sleduj na Instagramu",
  },
};

// -----------------------------------------------------------------
// FOOTER — patička webu
// -----------------------------------------------------------------
export const footer = {
  tagline: "Osobní trenér · Ostrava", // ÚPRAVA: tagline pod logem
  rightsLine: "© 2026 Petr Pustelník", // ÚPRAVA: copyright (změň rok, když je potřeba)
};

// -----------------------------------------------------------------
// KONTAKT — telefon, e-mail, socky (objevuje se v hero, footru i formuláři)
// -----------------------------------------------------------------
export const contact = {
  phone: "702 169 863", // ÚPRAVA: telefon
  phoneHref: "+420702169863", // ÚPRAVA: telefon ve formátu pro tel: link (bez mezer, s předvolbou)
  email: "petrpustelnikcoach@gmail.com", // ÚPRAVA: e-mail
  instagram: "petrpustelnikcoach", // ÚPRAVA: IG handle (bez @)
  instagramUrl: "https://instagram.com/petrpustelnikcoach", // ÚPRAVA: URL na IG profil
  tiktok: "petrpustelnikcoach", // ÚPRAVA: TikTok handle (bez @)
  tiktokUrl: "https://www.tiktok.com/@petrpustelnikcoach", // ÚPRAVA: URL na TikTok profil
  facebook: "Petr Pustelník", // ÚPRAVA: zobrazené jméno na FB
  facebookUrl: "https://www.facebook.com/petr.pustelnik.13", // ÚPRAVA: URL na Facebook profil
  gym: "Elements Gym Ostrava", // ÚPRAVA: gym
};

// -----------------------------------------------------------------
// PRÁVNÍ — odkazy a obsah pro GDPR / obchodní podmínky
// -----------------------------------------------------------------
// Tyto údaje se objevují v patičce a v právních stránkách.
// IČO a adresu MUSÍŠ doplnit, jakmile budeš mít živnostenský list.
// -----------------------------------------------------------------
export const legal = {
  // ÚPRAVA: tvoje plné jméno (jak v živnosti)
  fullName: "Petr Pustelník",
  // ÚPRAVA: IČO ze živnostenského listu
  ico: "22444661",
  // ÚPRAVA: tvoje sídlo (kam ti chodí pošta)
  address: "Holasická 1100/53, 747 05 Opava-Kateřinky",
  // ÚPRAVA: e-mail pro právní záležitosti (může být ten samý jako kontaktní)
  legalEmail: "petrpustelnikcoach@gmail.com",
  // ÚPRAVA: datum poslední aktualizace dokumentů
  updatedAt: "16. 5. 2026",
};

// -----------------------------------------------------------------
// SEO — co se zobrazí v Google a při sdílení na sítích
// -----------------------------------------------------------------
export const seo = {
  // ÚPRAVA: titulek záložky v prohlížeči a v Google
  title: "Petr Pustelník — Osobní trenér Ostrava | Elements Gym",
  // ÚPRAVA: popis pod titulkem v Google (ideálně do 160 znaků)
  description:
    "Osobní trenér v Ostravě (Elements Gym). 6+ let praxe, přes 100 klientů, 99 % úspěšnost. Hubnutí, nabírání svalů, formování postavy. Online i osobní spolupráce.",
  ogTitle: "Petr Pustelník — Osobní trenér Ostrava",
  ogDescription: "Trenér, který tě dovede k cíli. Ne k frustraci.",
};
