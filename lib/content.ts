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
  brand: "PUSTELNIK", // ÚPRAVA: značka/logo text vlevo nahoře (tečka se přidá automaticky v zelené)
  links: [
    { label: "O mně", href: "#o-mne" },
    { label: "Výsledky", href: "#vysledky" },
    { label: "Recenze", href: "#recenze" },
    { label: "Balíčky", href: "#balicky" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  cta: "Začít teď", // ÚPRAVA: text hlavního tlačítka v navigaci

  // REZERVACE — skrytá záložka. Až bude hotová, přepni `showReservations` na
  // true a v liště (i v mobilním menu) se objeví odkaz "Rezervace" → /rezervace.
  showReservations: true,
  reservationsLabel: "Rezervace",
  reservationsHref: "/rezervace",
};

// -----------------------------------------------------------------
// HERO — úvodní sekce webu (to první, co návštěvník vidí)
// -----------------------------------------------------------------
export const hero = {
  // ÚPRAVA: malý text nad hlavním nadpisem (uppercase)
  eyebrow: "OSOBNÍ TRENÉR · ELEMENTS GYM OSTRAVA / OPAVA",

  // ÚPRAVA: hlavní nadpis — dva řádky
  headlineLine1: "Tvoje forma mluví",
  headlineLine2: "dřív než ty.",

  // ÚPRAVA: podnadpis pod hlavním textem
  // (hvězdičkami **text** udělá tučně)
  subheadline:
    "**Šest let praxe. Přes sto klientů.** Žádné restarty, žádné výmluvy. Jen **jednoduchá cesta k vysněné formě**, postavená na selském rozumu.",

  ctaPrimary: "Začít teď", // ÚPRAVA: text hlavního tlačítka
  ctaSecondary: "Vidět výsledky", // ÚPRAVA: text druhého tlačítka

  // ÚPRAVA: cesta k hero fotce (poměr 4:5, ulož do public/images/)
  image: "/images/hero.jpg",
  imageAlt: "Petr Pustelník, osobní trenér",
};

// -----------------------------------------------------------------
// PROOF BAR — tři čísla pod hero sekcí
// -----------------------------------------------------------------
// Pokud je hodnota v "number" číslo (např. "6+", "100+"),
// při scrollu se animovaně počítá od nuly.
// Pokud je to text (např. "Orchard"), jenom se rozsvítí.
// -----------------------------------------------------------------
export const proof = [
  { number: "6+", label: "let praxe v trénování" },
  { number: "100+", label: "klientů dosáhlo cíle" },
  { number: "100 %", label: "úspěšnost klientů, kteří dodrželi plán" },
];

// -----------------------------------------------------------------
// VÝSLEDKY KLIENTŮ — karty s před/po
// -----------------------------------------------------------------
// Každá karta má pole `kind`:
//   "ba"     = před / po (dvě fotky, `before` + `after`)
//   "single" = jen jedna fotka (`image`)
//
// PŘIDÁNÍ NOVÉHO KLIENTA:
// 1. Zkopíruj jeden objekt níže.
// 2. Vlož ho na konec pole (před závorkou ]).
// 3. Ulož fotky do public/images/results/
// -----------------------------------------------------------------
export const resultsHeading = {
  title: "Výsledky, ne sliby",
  subtitle:
    "Reálné fotky reálných klientů. Žádný photoshop, žádné stock fotky.",
};

export type ResultCard =
  | {
      kind: "ba";
      name: string;
      before: string; // cesta k fotce „před"
      after: string; // cesta k fotce „po"
      duration: string;
      quote?: string;
      // Vycentrování ořezu fotky, např. "50% 30%" (vlevo-vpravo % mezera nahoře-dole %)
      beforePosition?: string;
      afterPosition?: string;
    }
  | {
      kind: "single";
      name: string;
      image: string;
      duration: string;
      quote?: string;
      // "top-zoom" = zoom na obličej (užitečné, když je fotka focená z dálky)
      focus?: "top-zoom";
      // Vycentrování ořezu fotky, např. "50% 30%" (vlevo-vpravo % mezera nahoře-dole %)
      objectPosition?: string;
      // Přiblížení fotky (1 = bez zoomu, 1.3 = přiblížit o 30 %) — ořízne okraje
      zoom?: number;
      // Široký formát (8:5) — stejná výška jako karta „před/po", aby řady seděly
      wide?: boolean;
    };

// HLAVNÍ VÝSLEDKY — zobrazí se na úvodní stránce
// Pozn.: karty „před/po" a jednotlivé fotky jsou seskupené po dvojicích,
// aby si řady ve dvousloupcové mřížce výškově seděly.
export const featuredResults: ResultCard[] = [
  {
    kind: "ba",
    name: "Jakub Přibyla",
    before: "/images/results/jakub-pribyla-before.jpg",
    after: "/images/results/jakub-pribyla-after.jpg",
    duration: "Dlouhodobá spolupráce",
    quote:
      "Začínal jsem na 115 kg a ve svém těle jsem se necítil dobře. Dneska jsem někdo úplně jiný a to z velké části díky němu.",
  },
  {
    kind: "ba",
    name: "Justýna H.",
    before: "/images/results/justyna-before-v2.jpg",
    after: "/images/results/justyna-after-v2.jpg",
    duration: "4 měsíce",
    quote:
      "Hip thrust z 15 kg na 80 kg, dřep z 20 na 60. Změna je vidět na postavě, síle i náladě.",
  },
  {
    kind: "ba",
    name: "Jakub Pustelník",
    before: "/images/results/jakub-before.png",
    after: "/images/results/jakub-after.png",
    duration: "Dlouhodobá spolupráce",
    quote:
      "Brácha Petr mě připravil na soutěž v kulturistice (starší dorost, Morava a Slezsko), kterou jsem vyhrál. Vřele ho doporučuju.",
  },
  {
    kind: "single",
    name: "Dominik Jedlička",
    image: "/images/results/dominik-jedlicka.png",
    duration: "Dlouhodobá spolupráce",
    wide: true,
    quote:
      "Přivedla mě nespokojenost s formou. Změnila se váha i vzhled. Doporučil bych ho lidem, co chtějí začít cvičit a neví jak na to, stejně tak i s jídelníčkem.",
  },
];

// ARCHIV — zobrazí se jen na podstránce /vysledky
export const archivedResults: ResultCard[] = [
  {
    kind: "ba",
    name: "Tomáš Medek",
    before: "/images/results/tomas-before.jpg",
    after: "/images/results/tomas-after.jpg",
    duration: "Dlouhodobá spolupráce",
    quote:
      "Díky coachingu se mi výrazně zvedlo sebevědomí a cítím se ve svém těle mnohem líp.",
  },
  {
    kind: "ba",
    name: "Jan Neuwirth",
    before: "/images/results/jan-before.jpg",
    after: "/images/results/jan-after.jpg",
    duration: "Změna návyků",
    quote:
      "Pochopil jsem, jak funguje moje tělo, a vidím výsledky. Proto Petra doporučuju.",
  },
  {
    kind: "single",
    name: "Vali Rožošová",
    image: "/images/results/vali.jpg",
    duration: "Dlouhodobá spolupráce",
    wide: true,
    quote:
      "Posunula jsem se psychicky, mám k sobě lepší vztah a cítím se silnější než dřív.",
  },
  {
    kind: "single",
    name: "Felix Kuba",
    image: "/images/results/felix-kuba.png",
    duration: "Výherce Deadlift Masterclass 2025",
    wide: true,
    quote:
      "Po měsíci spolupráce s Petrem jsem se naučil spoustu nových věcí. 100 % doporučuju.",
  },
];

// VŠECHNY VÝSLEDKY (pro subpage)
export const allResults: ResultCard[] = [...featuredResults, ...archivedResults];

// Zpětná kompatibilita pro existující kód
export const results = featuredResults;

// -----------------------------------------------------------------
// TEXTOVÉ RECENZE — bez fotky, jen citát a jméno
// -----------------------------------------------------------------
// Pro klienty, kteří poslali text, ale nemají před/po fotku.
// -----------------------------------------------------------------
export const testimonialsHeading = {
  title: "Co o mně říkají",
  subtitle:
    "Recenze od klientů, kteří prošli spoluprací. Vlastní slova, vlastní zkušenost.",
};

export const testimonials = [
  {
    name: "Metoděj Strachoň",
    quote:
      "Měl jsem přes 100 kg a hned při prvním tréninku mi Petr pomohl, aniž by za to cokoliv chtěl. Naučil mě jíst zdravě i pít dostatek vody a tréninky mě s ním vždycky bavily. Doporučil bych ho každému, kdo chce se sebou něco dělat.",
  },
  {
    name: "Patrik Wludyka",
    quote:
      "Oslovil jsem Petra kvůli přípravě na fyzické zkoušky do práce, chtěl jsem to vzít systematicky. Výrazně se mi zlepšila kondice i síla a mám v tréninku mnohem větší jistotu. Doporučil bych ho každému, kdo se chce cíleně připravit.",
  },
  {
    name: "Luci Bogárová",
    quote:
      "Chtěla jsem se naučit cvičit a Petr mi byl sympatický. Má smysl pro humor a přitom to bere vážně. Od té doby, co s ním cvičím, mám velký posun v technice. Doporučím všem, co si chtějí pokecat a u toho pořádně zacvičit.",
  },
];

// -----------------------------------------------------------------
// O MNĚ — bio sekce
// -----------------------------------------------------------------
export const about = {
  heading: "O mně",

  // ÚPRAVA: jednotlivé odstavce textu
  // Hvězdičky **text** udělají z textu tučně.
  paragraphs: [
    "V roce **2021** mě jako **šestnáctiletého** srazilo auto. Doktoři mi dávali **1% šanci na přežití**.",
    "Když mi tělo dalo druhou šanci, slíbil jsem si, že ji **nepromarním**. Od toho dne beru zdraví i život **vážně**.",
    "**Šest let cvičím. Dva roky trénuju klienty v Elements Gymu Ostrava.**",
    "Začal jsem **u sebe**. Léta jsem studoval, co opravdu funguje, a postavil postavu, kterou jsem chtěl. Bez zkratek, bez extrémních diet, bez magie.",
    "Pak se začali ptát **kamarádi**. Co jíš, jak cvičíš, jak to děláš. Tak jsem začal pomáhat jim. Když to fungovalo opakovaně, došlo mi, že stejný systém můžu dát i lidem mimo svůj okruh.",
    "Teď trénuju **klienty** v Elements Gymu a online po celé republice. Formování postavy, sílu, powerlifting i kulturistiku včetně závodní přípravy.",
    "**Zdraví máte jen jedno.** O tělo se musí starat, nejde jen o váhu nebo postavu, jde o klouby, srdce, hlavu, spánek. Žádný cíl není moc malý a žádný čas není moc pozdě.",
    "Jsi tu správně. **Jsem tvůj člověk.**",
  ],

  // ÚPRAVA: štítky pod textem (kvalifikace, místo)
  badges: [
    "Fitness trenér / instruktor fitness",
    "Sestavování jídelníčků",
    "6+ let praxe v cvičení",
    "Elements Gym Ostrava / Opava",
  ],

  // ÚPRAVA: cesta k portrétní fotce (poměr 4:5)
  image: "/images/about.jpg",
  imageAlt: "Petr Pustelník",
};

// -----------------------------------------------------------------
// EXCUSES — sekce "Možná si říkáš…" — boří nejčastější výmluvy
// -----------------------------------------------------------------
export const excusesHeading = {
  title: "Možná si říkáš…",
  subtitle:
    "Většinu lidí brzdí jedna z těchhle vět. Není to argument. Je to **strach z neúspěchu**.",
};

export const excuses = [
  {
    excuse: "„Mám 100 kilo, to už je pozdě.“",
    answer:
      "**Smysl to má vždycky.** Sundat 5–10 kg ve 100 kg = větší úleva pro klouby, srdce a spánek než z 80 na 75. **Zdraví máte jen jedno.** O tělo se musí starat bez ohledu na věk a startovní stav.",
  },
  {
    excuse: "„Nemám čas, mám práci a rodinu.“",
    answer:
      "Online Coaching je postavený pro lidi se **dvěma hodinami týdně**. Plán je flexibilní, jídelníček se vejde do oběda. **Většinu klientů cvičí kolem práce a rodiny**, ne místo nich.",
  },
  {
    excuse: "„Už jsem to zkoušel. Vždy mi to vydrží 2 měsíce.“",
    answer:
      "Protože ti chybí **systém a kontrola.** Krátkodobé výzvy jsou navržené tak, aby se vrátily. Tady **držím nad tebou ruku** a stavíme návyky, ne dietu.",
  },
  {
    excuse: "„Jsem moc starý / moc začátečník.“",
    answer:
      "Začátečníky mám rád. **Žádné zlozvyky k odbourání.** Věk je proměnná, ne překážka. Trénuju lidi od 18 do 60+. Postup se přizpůsobí, cíl ne.",
  },
];

// -----------------------------------------------------------------
// CURVE — křivka výsledků (hokejka)
// -----------------------------------------------------------------
export const curveHeading = {
  title: "Proč většina lidí nikdy neuvidí výsledek",
  subtitle: "Většina ti slíbí lineární cestu. Realita vypadá takhle:",
};

export const curveCopy = {
  // ÚPRAVA: popisky bodů křivky
  expectedLabel: "Co ti slíbili ostatní",
  realityLabel: "Realita",
  quitZoneLabel: "Tady končí 85 % lidí",
  payoffZoneLabel: "Tady přicházejí výsledky",

  body:
    "**Většina lidí ukončí spolupráci v týdnu 4–8**, ve chvíli, kdy ještě nevidí výsledky, ale tělo už dělá tvrdou práci v pozadí. Moje práce je **dotáhnout tě přes tuhle fázi**. Sleduju, kontroluju, povzbuzuju, upravuju. Jakmile se dostaneš za zlom, výsledky přijdou samy a rychle.",
};

// -----------------------------------------------------------------
// PILLARS — jak pracuju, čím se liším od ostatních trenérů
// -----------------------------------------------------------------
export const pillarsHeading = {
  title: "Čím se liším",
  subtitle:
    "Žádné sliby. **Jednoduchost, selský rozum a šest let zkušeností.**",
};

export const pillars = [
  {
    icon: "Lightbulb",
    title: "Jednoduchost a selský rozum",
    description:
      "Žádné triky, žádné zázračné suplementy, žádné módní diety. **Co dává smysl, drží roky.** Všechno ostatní je marketing.",
  },
  {
    icon: "Repeat2",
    title: "Trvalá změna, ne 6týdenní detox",
    description:
      "Stavíme **návyky, které drží roky** po skončení spolupráce, ne kila, která se za měsíc vrátí. Cokoliv, co se musí 'vydržet', mě nezajímá.",
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
export const guarantee = {
  heading: "Garantuju ti výsledek. Ne sliby.",

  statNumber: "100 %",
  statLabel:
    "klientů, kteří dotáhli plán do konce, dosáhlo svého cíle. Není to marketing. Je to průměr za šest let praxe.",

  promise:
    "**Z mé strany udělám maximum, aby plán doručil to, co slibuje.** Tvoje práce je ho dodržet, moje práce je tě k tomu dovést.",

  customTitle: "Nesedí ti žádný balíček?",
  customBody:
    "Není nutné si vybrat balíček z ceníku. Když mi popíšeš, co potřebuješ, **domluvíme něco na míru**. Třeba jako s Lukášem Přibylou. Společně jsme šli mimo standard a **shodil 3 kg tuku za měsíc.**",
  customCta: "Domluvit spolupráci na míru",
};

// -----------------------------------------------------------------
// URGENCY — krátká věta nad balíčky
// -----------------------------------------------------------------
export const urgency = {
  message:
    "**Můj čas není digitální produkt.** Ceník je jen pro představu. Nejdřív si dáme nezávaznou konzultaci, kde ti řeknu, který balíček ti sedne nejvíc.",
};

// -----------------------------------------------------------------
// BALÍČKY — měsíční spolupráce (4 hlavní balíčky)
// -----------------------------------------------------------------
export const packagesHeading = {
  title: "Spolupráce",
  subtitle:
    "Měsíční partnerství. Tohle nejsou produkty na klik. **Každá spolupráce začíná konzultací**, kde se domluvíme, co ti sedí.",
};

export const packages = [
  {
    name: "Online Coaching",
    price: "2 290",
    period: "/měsíc",
    tag: null,
    bestFor: "Máš disciplínu, ale chceš plán a kontrolu.",
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
      "Jídelníček, 4 varianty",
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
      "Jídelníček, 4 varianty",
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
      "Jídelníček, 4 varianty",
      "Suplementace",
    ],
  },
];

// -----------------------------------------------------------------
// JEDNORÁZOVKY — služby, co se neprodávají měsíčně
// -----------------------------------------------------------------
export const oneTimeHeading = "Jednorázové služby";

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
export const processHeading = {
  title: "Jak to probíhá",
  subtitle: "Tohle je oblouk, kterým si projdeš. Není to slib, je to průměr.",
};

export const process = [
  {
    step: "Týden 1",
    title: "Audit, plán, start",
    description:
      "**Měření, focení, plán šitý tobě.** Tréninkový program, jídelníček, suplementace. První trénink ještě ten týden.",
  },
  {
    step: "Týden 4",
    title: "První viditelné změny",
    description:
      "Tělo začne reagovat. **Plán se ladí** podle toho, jak na to reaguješ, ne podle šablony.",
  },
  {
    step: "Měsíc 3",
    title: "Systém funguje sám",
    description:
      "Trénink a jídlo už nejsou rozhodnutí, jsou **návyk**. Viditelný pokrok, ostatní si toho začínají všímat.",
  },
  {
    step: "Měsíc 6+",
    title: "Vysněná forma",
    description:
      "**Forma, kterou jsi nečekal.** A hlavně **systém, který drží i bez mě.** Tohle je cíl.",
  },
];

// -----------------------------------------------------------------
// FAQ — nejčastější otázky a námitky
// -----------------------------------------------------------------
export const faqHeading = {
  title: "Časté otázky",
  subtitle:
    "Většina lidí mě řeší jednu z těchhle věcí. Pokud chybí tvoje, ozvi se.",
};

export const faq = [
  {
    q: "Funguje to, i když mám hodně práce?",
    a: "Online Coaching je postavený pro lidi se dvěma hodinami týdně. Plán, jídelníček a kontrola se vejdou do obědové pauzy. **Hybrid je intenzivnější, ale flexibilní.** Tréninky plánujeme podle tebe, ne podle mě.",
  },
  {
    q: "Co když budu cestovat?",
    a: "Tréninkový plán umím udělat na cokoliv: **gym, hotelové fitko, vlastní váha doma**. Komunikace zůstává stejná, ať jsi v Ostravě nebo v Thajsku.",
  },
  {
    q: "Co když to nevyjde / nezhubnu, jak chci?",
    a: "**100 % klientů, kteří plán opravdu dotáhli do konce, svého cíle dosáhlo.** Pokud nevidíš pohyb, problém je v plánu, ne v tobě. Upravíme. Z mé strany udělám maximum, aby plán doručil to, co slibuje.",
  },
  {
    q: "Už jsem to zkoušel jinde a nevyšlo to.",
    a: "Většinou to není o tobě, ale o **systému, který nedrží.** Krátkodobé výzvy a extrémní diety jsou navržené tak, aby se vrátily. Tady stavíme něco, co drží roky po skončení spolupráce.",
  },
  {
    q: "Musím chodit do gymu?",
    a: "**Online Coaching** děláš odkudkoliv: gym, doma, venku. **Hybrid balíčky** předpokládají osobní tréninky v Elements Gymu Ostrava i Opava. Pokud bydlíš jinde, Online Coaching je tvoje cesta.",
  },
  {
    q: "Co když nesedí žádný balíček z ceníku?",
    a: "**Ozvi se a domluvíme něco na míru.** Není nutné si vybrat z předem postavených balíčků. S Lukášem Přibylou jsme šli mimo standard a fungovalo to.",
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
  sectionTitle: "Pojďme začít",
  sectionSubtitle:
    "Vyplň formulář, ozvu se ti do 48 hodin. Žádný prodejní tlak, jen krátký hovor.",

  submit: "Odeslat poptávku",
  submitting: "Odesílám…",

  microcopy: "Ozvu se ti do 48 hodin. Petr",

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
  tagline: "Osobní trenér · Ostrava / Opava",
  rightsLine: "© 2026 Petr Pustelník",
};

// -----------------------------------------------------------------
// KONTAKT — telefon, e-mail, socky
// -----------------------------------------------------------------
export const contact = {
  phone: "702 169 863",
  phoneHref: "+420702169863",
  email: "petrpustelnikcoach@gmail.com",
  instagram: "petrpustelnikcoach",
  instagramUrl: "https://instagram.com/petrpustelnikcoach",
  tiktok: "petrpustelnikcoach",
  tiktokUrl: "https://www.tiktok.com/@petrpustelnikcoach",
  facebook: "Petr Pustelník",
  facebookUrl: "https://www.facebook.com/petr.pustelnik.13",
  gym: "Elements Gym Ostrava / Opava",
};

// -----------------------------------------------------------------
// PRÁVNÍ — odkazy a obsah pro GDPR / obchodní podmínky
// -----------------------------------------------------------------
export const legal = {
  fullName: "Petr Pustelník",
  ico: "22444661",
  address: "Holasická 1100/53, 747 05 Opava-Kateřinky",
  legalEmail: "petrpustelnikcoach@gmail.com",
  updatedAt: "18. 5. 2026",
};

// -----------------------------------------------------------------
// SEO — co se zobrazí v Google a při sdílení na sítích
// -----------------------------------------------------------------
export const seo = {
  title: "Petr Pustelník | Osobní trenér Ostrava / Opava | Elements Gym",
  description:
    "Osobní trenér v Ostravě a Opavě (Elements Gym). 6+ let praxe, přes 100 klientů, 100 % úspěšnost při dodržení plánu. Hubnutí, nabírání svalů, formování postavy.",
  ogTitle: "Petr Pustelník | Osobní trenér Ostrava / Opava",
  ogDescription:
    "Tvoje forma mluví dřív než ty. Jednoduchá cesta k vysněné formě, postavená na selském rozumu.",
};
