import { Locale } from "@/lib/i18n";

type NavItem = {
  href: string;
  label: string;
};

type ServiceCard = {
  title: string;
  text: string;
  items: string[];
};

type ProjectCard = {
  title: string;
  subtitle: string;
  image: string;
};

type StepCard = {
  step: string;
  title: string;
  text: string;
};

type TrustCard = {
  label: string;
  value: string;
  text: string;
};

type CareerPerk = {
  title: string;
  text: string;
};

type LegalSection = {
  title: string;
  text: string;
};

export type SiteDictionary = {
  localeLabel: string;
  languageShort: string;
  nav: {
    items: NavItem[];
    cta: string;
    menu: string;
  };
  brand: {
    eyebrow: string;
    subtitle: string;
  };
  home: {
    heroTitle: string;
    heroText: string;
    heroTags: string[];
    primaryCta: string;
    secondaryCta: string;
    heroNote: string;
    heroPanelLabel: string;
    heroMetrics: { value: string; label: string }[];
    metricsBar: { title: string; text: string }[];
    aboutTag: string;
    aboutTitle: string;
    aboutParagraphs: string[];
    aboutCards: { title: string; text: string }[];
    servicesTag: string;
    servicesTitle: string;
    servicesIntro: string;
    services: ServiceCard[];
    advantagesTag: string;
    advantagesTitle: string;
    advantages: string[];
    projectsTag: string;
    projectsTitle: string;
    projectsIntro: string;
    projects: ProjectCard[];
    beforeAfter: {
      beforeLabel: string;
      beforeTitle: string;
      beforeText: string;
      afterLabel: string;
      afterTitle: string;
      afterText: string;
    };
    processTag: string;
    processTitle: string;
    steps: StepCard[];
    calculatorTag: string;
    calculatorTitle: string;
    calculatorText: string;
    coverageLabel: string;
    coverage: string[];
    trustTag: string;
    trustTitle: string;
    trustCards: TrustCard[];
    reviewTag: string;
    reviewTitle: string;
    reviewText: string;
  };
  aboutPage: {
    title: string;
    intro: string;
    text: string[];
    stats: { value: string; label: string }[];
    valuesTitle: string;
    values: { title: string; text: string }[];
  };
  servicesPage: {
    title: string;
    intro: string;
    outroTitle: string;
    outroText: string;
  };
  contactsPage: {
    tag: string;
    title: string;
    intro: string;
    detailsTitle: string;
    note: string;
  };
  careerPage: {
    tag: string;
    title: string;
    intro: string;
    openPositionsTag: string;
    openPositionsTitle: string;
    noJobsTitle: string;
    noJobsText: string;
    perksTag: string;
    perksTitle: string;
    perks: CareerPerk[];
    applyCall: string;
    emailAction: string;
  };
  privacyPage: {
    tag: string;
    title: string;
    intro: string;
    sections: LegalSection[];
  };
  cookiePage: {
    tag: string;
    title: string;
    intro: string;
    sections: LegalSection[];
  };
  footer: {
    description: string;
    navigationTitle: string;
    contactTitle: string;
    legalTitle: string;
    privacy: string;
    cookies: string;
    rights: string;
    cookieSettings: string;
  };
  form: {
    estimateTag: string;
    estimateTitle: string;
    estimateText: string;
    typeLabel: string;
    areaLabel: string;
    cityLabel: string;
    deadlineLabel: string;
    resultLabel: string;
    resultHint: string;
    fastTag: string;
    fastTitle: string;
    fastText: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    photoLabel: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    consent: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    workTypes: { value: string; label: string; rate: number }[];
    cities: { value: string; label: string; factor: number }[];
    deadlines: { value: string; label: string; factor: number }[];
  };
  cookieBanner: {
    title: string;
    text: string;
    essential: string;
    acceptAll: string;
    acceptNecessary: string;
    settings: string;
    saved: string;
  };
};

const baseProjects = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&w=1200&q=80",
] as const;

type BaseLocale = Exclude<Locale, "uk">;

export const siteContent: Record<BaseLocale, SiteDictionary> = {
  cs: {
    localeLabel: "Čeština",
    languageShort: "CZ",
    nav: {
      items: [
        { href: "/about", label: "O společnosti" },
        { href: "/services", label: "Služby" },
        { href: "/career", label: "Kariéra" },
        { href: "/contacts", label: "Kontakt" },
      ],
      cta: "Získat kalkulaci",
      menu: "Menu",
    },
    brand: {
      eyebrow: "ConStrukT VS Company",
      subtitle: "European Construction Partner",
    },
    home: {
      heroTitle: "Stavební řešení pro projekty jakékoli složitosti",
      heroText:
        "Od rekonstrukcí bytů po rozsáhlé průmyslové objekty. Náš tým má více než 10 let zkušeností na stavebních projektech po celé Evropě.",
      heroTags: [
        "Stavební práce",
        "Rekonstrukce",
        "Montáž průmyslových konstrukcí",
        "Inženýrské práce",
      ],
      primaryCta: "Získat konzultaci",
      secondaryCta: "Spočítat cenu",
      heroNote:
        "Garance kvality, dodržení termínů a transparentní komunikace s klientem.",
      heroPanelLabel: "Evropský standard řízení",
      heroMetrics: [
        { value: "10+", label: "let zkušeností specialistů" },
        { value: "24 h", label: "na přípravu úvodní nabídky" },
        { value: "360°", label: "od malých oprav po průmyslové projekty" },
      ],
      metricsBar: [
        {
          title: "Evropa",
          text: "Zkušenosti z mezinárodních stavebních projektů a práce podle vysokých standardů.",
        },
        {
          title: "Private / Commercial / Industrial",
          text: "Pracujeme pro soukromé klienty, developery i průmyslové zadavatele.",
        },
        {
          title: "Foto reporty",
          text: "Každá etapa je přehledná, dokumentovaná a srozumitelně komunikovaná klientovi.",
        },
      ],
      aboutTag: "O společnosti",
      aboutTitle: "ConStrukT VS Company",
      aboutParagraphs: [
        "ConStrukT VS Company je tým zkušených specialistů v oblasti stavebnictví, rekonstrukcí a inženýrských prací. Realizujeme zakázky různého rozsahu od menších oprav až po průmyslové objekty.",
        "Naši mistři mají mnohaleté zkušenosti na projektech po celé Evropě, proto dokážeme držet tempo, kvalitu i disciplínu na stavbách s vysokými nároky. Spokojený klient je pro nás nejlepší důkaz dobře odvedené práce.",
      ],
      aboutCards: [
        { title: "Kvalita", text: "Vysoký standard provedení a pečlivý dohled nad každou etapou." },
        { title: "Termíny", text: "Reálně plánujeme a držíme odsouhlasený harmonogram." },
        { title: "Přístup", text: "Každý projekt řešíme individuálně podle cíle klienta i objektu." },
        { title: "Transparentnost", text: "Jasný rozpočet, čitelný postup a poctivá komunikace bez překvapení." },
      ],
      servicesTag: "Naše služby",
      servicesTitle: "Široké spektrum stavebních a montážních prací",
      servicesIntro:
        "Struktura služeb je navržena tak, aby klient rychle pochopil, s čím umíme pomoci a kde přinášíme největší hodnotu.",
      services: [
        {
          title: "Silnoproud",
          text: "Kompletní silnoproudé elektroinstalace pro byty, domy, komerční objekty a technicky náročné provozy včetně rozvaděčů a napájecích tras.",
          items: ["Rozvaděče a jištění", "Napájecí kabelové trasy", "Kompletní silová infrastruktura"],
        },
        {
          title: "Slaboproudá elektroinstalace",
          text: "Instalace datových, bezpečnostních a komunikačních systémů s důrazem na čisté kabeláže, funkčnost a budoucí rozšiřitelnost.",
          items: ["Datové rozvody a racky", "CCTV a přístupové systémy", "Strukturovaná kabeláž"],
        },
        {
          title: "Fotovoltaika a tepelné čerpadlo",
          text: "Návrh a montáž fotovoltaických systémů a návazných technologií pro úsporné a energeticky efektivní objekty.",
          items: ["Střešní FVE systémy", "Invertory a technické zapojení", "Řešení pro rodinné domy i firmy"],
        },
        {
          title: "Výstavba domů na klíč",
          text: "Kompletní realizace rodinných domů na klíč od přípravy stavby přes hrubou konstrukci až po finální dokončení.",
          items: ["Kompletní řízení stavby", "Koordinace profesí", "Předání hotového domu"],
        },
        {
          title: "Výběr a montáž oplocení",
          text: "Montáž kovových, panelových, průmyslových a dekorativních plotů s návrhem optimálního řešení podle rozpočtu, designu a životnosti.",
          items: ["Kovové ploty", "Panelové oplocení", "Vrata a branky"],
        },
        {
          title: "Interiérové a exteriérové práce",
          text: "Kompletní vnitřní a venkovní stavební práce pro byty, domy, komerční prostory i projekty rekonstrukcí.",
          items: ["Sádrokarton, omítky, malby", "Obklady, dlažby a stropy", "Fasády, zateplení, obklady"],
        },
        {
          title: "Montáž sendvičových panelů",
          text: "Profesionální montáž pro sklady, haly, výrobní a obchodní objekty s kontrolou geometrie i těsnosti.",
          items: ["Sklady a haly", "Obchodní prostory", "Průmyslové budovy"],
        },
        {
          title: "Diamantové vrtání",
          text: "Přesné jádrové vrtání do betonu a železobetonu pro rozvody, větrání i technické instalace bez zbytečného poškození konstrukce.",
          items: ["Technické rozvody", "Vzduchotechnika", "Elektro a sítě"],
        },
        {
          title: "Zemní práce",
          text: "Příprava staveniště, výkopy, základy, srovnání terénu a čištění území pro soukromé i rozsáhlé stavební projekty.",
          items: ["Rýhy a základy", "Příprava staveniště", "Demolice a vyklízení"],
        },
      ],
      advantagesTag: "Proč ConStrukT VS",
      advantagesTitle: "Spolehlivost, rychlost a jasně řízený projekt",
      advantages: [
        "Zkušenosti specialistů z projektů po celé Evropě",
        "Moderní technika a ověřené stavební technologie",
        "Důsledná kontrola kvality v každé fázi",
        "Dodržení termínů a transparentní komunikace",
        "Individuální přístup ke každému objektu",
      ],
      projectsTag: "Projekty / portfolio",
      projectsTitle: "Reference, které budují důvěru",
      projectsIntro:
        "Velké vizuály, jasné kategorie a silná prezentace výsledků pomáhají rychle ukázat rozsah i úroveň realizací.",
      projects: [
        { title: "Projekt skladového objektu", subtitle: "Montáž nosných konstrukcí a obálky budovy", image: baseProjects[0] },
        { title: "Montáž průmyslového oplocení", subtitle: "Bezpečný perimetr pro komerční areál", image: baseProjects[1] },
        { title: "Rekonstrukce bytu", subtitle: "Komplexní interiér a technická příprava", image: baseProjects[2] },
        { title: "Montáž sendvičových panelů", subtitle: "Rychlá výstavba obchodních a průmyslových prostor", image: baseProjects[3] },
      ],
      beforeAfter: {
        beforeLabel: "Před",
        beforeTitle: "Analýza objektu a příprava",
        beforeText: "Zaznamenáme výchozí stav, termíny, omezení stavby a technické požadavky klienta.",
        afterLabel: "Po",
        afterTitle: "Předaný výsledek s kontrolou kvality",
        afterText: "Předáváme hotovou etapu nebo celý objekt včetně dokumentace a fotodohledu.",
      },
      processTag: "Jak pracujeme",
      processTitle: "Transparentní proces bez zbytečné byrokracie",
      steps: [
        { step: "01", title: "Konzultace", text: "Probereme zadání, rozpočet, termíny i specifika objektu." },
        { step: "02", title: "Nabídka", text: "Vyhodnotíme rozsah prací a připravíme jasnou cenovou nabídku." },
        { step: "03", title: "Realizace", text: "Projekt provádíme profesionálně s průběžnou kontrolou kvality." },
        { step: "04", title: "Předání", text: "Provedeme finální kontrolu a předáme hotový výsledek klientovi." },
      ],
      calculatorTag: "Kalkulátor ceny",
      calculatorTitle: "Získat orientační kalkulaci do 24 hodin",
      calculatorText:
        "Předběžný odhad pomáhá klientovi rychle pochopit rámec rozpočtu ještě před detailní nabídkou.",
      coverageLabel: "Zkušenosti z regionů",
      coverage: ["Praha", "Brno", "Ostrava", "Plzeň", "Liberec", "Česko", "Německo", "Rakousko"],
      trustTag: "Blok důvěry",
      trustTitle: "Doklady, zkušenosti a přehledná firemní identita",
      trustCards: [
        {
          label: "DIČ společnosti",
          value: "CZ24503215",
          text: "Oficiální firemní údaje a právně transparentní způsob práce.",
        },
        {
          label: "Datová schránka",
          value: "49t6e8",
          text: "Spolehlivý úřední kanál a rychlá formální komunikace.",
        },
        {
          label: "Zkušenost týmu",
          value: "10+ years",
          text: "Specialisté s mezinárodní praxí na stavebních projektech v Evropě.",
        },
        {
          label: "Reporting",
          value: "Foto + etapy + termíny",
          text: "Klient má přehled o průběhu prací, milnících a aktuálním stavu realizace.",
        },
      ],
      reviewTag: "Reference a doporučení",
      reviewTitle: "Reálné reference a detailní case studies poskytujeme na vyžádání",
      reviewText:
        "Na webu stavíme důvěru na reálných firemních údajích, zkušenostech týmu, přehledném reportingu a vizuálně silném portfoliu.",
    },
    aboutPage: {
      title: "Stavební partner s evropskou zkušeností",
      intro:
        "Zajišťujeme stavební, montážní a inženýrské práce v režimu, který je srozumitelný pro soukromé klienty i profesionální investory.",
      text: [
        "ConStrukT VS Company staví na zkušeném týmu mistrů, montážníků a koordinátorů, kteří mají za sebou projekty různých měřítek napříč Evropou.",
        "Naším cílem není jen dobře postavit, ale také dobře řídit celý proces: plánování, dohled, komunikaci, návaznost profesí a finální předání.",
      ],
      stats: [
        { value: "10+", label: "let zkušeností specialistů" },
        { value: "EU", label: "projekty v evropském prostředí" },
        { value: "24 h", label: "na reakci a první odhad" },
      ],
      valuesTitle: "Na čem stavíme spolupráci",
      values: [
        { title: "Disciplinované řízení", text: "Hlídáme návaznosti, termíny i odpovědnost jednotlivých etap." },
        { title: "Řemeslná kvalita", text: "Detaily provedení i celkový výsledek musí obstát v čase." },
        { title: "Přímá komunikace", text: "Klient ví, kdo vede zakázku, co se děje a jaký je další krok." },
        { title: "Flexibilita", text: "Umíme řešit menší opravy i větší průmyslové realizace v jednom standardu." },
      ],
    },
    servicesPage: {
      title: "Stavební a montážní služby od jedné firmy",
      intro:
        "Od přípravy objektu přes hlavní stavební činnost až po specializované montáže. Jedna odpovědnost, jeden partner, jeden standard kvality.",
      outroTitle: "Potřebujete přesnější rozsah?",
      outroText:
        "Pošlete poptávku a připravíme strukturovaný návrh řešení, termínu i orientačního rozpočtu.",
    },
    contactsPage: {
      tag: "Kontakt",
      title: "Připraveni probrat váš projekt",
      intro:
        "Pošlete nám poptávku s několika základními údaji. Odpovíme s prvním rámcem řešení a dalšími kroky.",
      detailsTitle: "Firemní údaje",
      note:
        "Pro kalkulaci projektu je nejlepší použít formulář. Firemní právní údaje najdete také v sekci GDPR a cookies.",
    },
    careerPage: {
      tag: "Kariéra",
      title: "Rosteme a hledáme kvalitní lidi",
      intro:
        "Pokud umíte pracovat zodpovědně, držet kvalitu a fungovat v týmu, rádi se s vámi spojíme.",
      openPositionsTag: "Otevřené pozice",
      openPositionsTitle: "Aktuální příležitosti v týmu",
      noJobsTitle: "Momentálně nejsou vypsané žádné pozice",
      noJobsText:
        "I tak nám můžete poslat kontakt nebo CV. Jakmile budeme otevírat odpovídající roli, ozveme se.",
      perksTag: "Co nabízíme",
      perksTitle: "Jak u nás spolupráce funguje",
      perks: [
        { title: "Stabilní projekty", text: "Práce na reálných zakázkách bez nahodilých výpadků." },
        { title: "Férové ohodnocení", text: "Odměna odpovídající zkušenostem, nasazení a odpovědnosti." },
        { title: "Vybavení", text: "Zázemí, nářadí a organizace práce bez improvizace." },
        { title: "Růst", text: "Možnost dlouhodobé spolupráce a profesního rozvoje." },
      ],
      applyCall: "Mám zájem",
      emailAction: "Poslat email",
    },
    privacyPage: {
      tag: "Právní informace",
      title: "Zpracování osobních údajů",
      intro:
        "Tato stránka shrnuje, jak ConStrukT VS Compani s.r.o. zpracovává údaje z kontaktních formulářů a obchodní komunikace.",
      sections: [
        {
          title: "1. Správce osobních údajů",
          text: "Správcem osobních údajů je ConStrukT VS Compani s.r.o., IČO 24503215, DIČ CZ24503215, se sídlem Sokolská 1883/8, 120 00 Praha 2 - Nové Město, Česká republika. Kontakt: ConStrukT.VS@seznam.cz, datová schránka 49t6e8.",
        },
        {
          title: "2. Jaké údaje zpracováváme",
          text: "Zpracováváme údaje, které nám sami poskytnete ve formuláři: jméno, telefon, email, lokalitu projektu, typ prací, rozsah, termín, odkaz na fotografie a text poptávky.",
        },
        {
          title: "3. Účel zpracování",
          text: "Údaje používáme výhradně pro vyřízení poptávky, přípravu cenového odhadu, obchodní komunikaci a případné uzavření smluvního vztahu.",
        },
        {
          title: "4. Právní základ",
          text: "Právním základem je jednání o smlouvě, oprávněný zájem na obchodní komunikaci a váš souhlas se zpracováním při odeslání formuláře.",
        },
        {
          title: "5. Doba uchování",
          text: "Poptávky uchováváme po dobu nezbytnou pro jejich vyřízení a následnou obchodní evidenci, nejdéle však po dobu přiměřenou charakteru spolupráce a zákonným povinnostem.",
        },
        {
          title: "6. Předávání údajů",
          text: "Údaje nepředáváme mimo nezbytné technické poskytovatele hostingu a infrastruktury. Nepoužíváme je pro prodej třetím stranám.",
        },
        {
          title: "7. Vaše práva",
          text: "Máte právo požádat o přístup, opravu, omezení nebo výmaz údajů a obrátit se na Úřad pro ochranu osobních údajů, pokud se domníváte, že s údaji není nakládáno správně.",
        },
      ],
    },
    cookiePage: {
      tag: "Cookies",
      title: "Informace o cookies",
      intro:
        "Na webu používáme nezbytné technické cookies a ukládáme vaši volbu ohledně cookie souhlasu, aby stránka fungovala stabilně a podle vašich preferencí.",
      sections: [
        {
          title: "1. Nezbytné cookies",
          text: "Nezbytné cookies zajišťují základní technické fungování webu, včetně administrace, bezpečnosti a uložení vaší volby souhlasu s cookies.",
        },
        {
          title: "2. Preference uživatele",
          text: "Ukládáme také informaci o tom, zda jste přijali pouze nezbytné cookies, nebo všechny dostupné cookies. Tato volba se ukládá lokálně ve vašem prohlížeči.",
        },
        {
          title: "3. Marketing a analytika",
          text: "V aktuální verzi webu nepoužíváme externí reklamní ani analytické skripty. Pokud budou v budoucnu přidány, cookie lišta bude rozšířena o jejich správu.",
        },
        {
          title: "4. Jak volbu změnit",
          text: "Svou volbu můžete kdykoli změnit prostřednictvím odkazu „Nastavení cookies“ ve footeru webu.",
        },
      ],
    },
    footer: {
      description:
        "Moderní stavební a montážní partner pro rekonstrukce, průmyslové objekty a inženýrské práce v evropském standardu.",
      navigationTitle: "Navigace",
      contactTitle: "Kontakt",
      legalTitle: "Právní informace",
      privacy: "GDPR / ochrana údajů",
      cookies: "Informace o cookies",
      rights: "Všechna práva vyhrazena.",
      cookieSettings: "Nastavení cookies",
    },
    form: {
      estimateTag: "Smart estimate",
      estimateTitle: "Předběžný kalkulátor",
      estimateText:
        "Okamžitě ukáže orientační cenové rozpětí podle typu prací, plochy, města a termínu.",
      typeLabel: "Typ prací",
      areaLabel: "Plocha, m²",
      cityLabel: "Město",
      deadlineLabel: "Termín",
      resultLabel: "Orientační cena",
      resultHint: "Přesnou kalkulaci potvrdíme po upřesnění projektu, fotografií a rozsahu prací.",
      fastTag: "Rychlý kontakt",
      fastTitle: "Odeslat poptávku",
      fastText: "Nechte kontakt a krátký popis. Ozveme se s prvním odhadem do 24 hodin.",
      nameLabel: "Jméno",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      photoLabel: "Foto / odkaz na objekt",
      detailsLabel: "Popis projektu",
      detailsPlaceholder: "Popište typ objektu, rozsah prací, termín a důležité požadavky.",
      consent: "Souhlasím se zpracováním osobních údajů pro účely odpovědi na poptávku.",
      submit: "Odeslat poptávku",
      sending: "Odesíláme...",
      success: "Děkujeme. Ozveme se vám do 24 hodin.",
      error: "Odeslání se nepodařilo. Zkuste to prosím znovu.",
      workTypes: [
        { value: "power", label: "Silnoproud", rate: 5900 },
        { value: "lowcurrent", label: "Slaboproudá elektroinstalace", rate: 4800 },
        { value: "solar", label: "Fotovoltaika a tepelné čerpadlo", rate: 7800 },
        { value: "turnkey", label: "Výstavba domů na klíč", rate: 12500 },
        { value: "fences", label: "Ploty a oplocení", rate: 4200 },
        { value: "interior", label: "Interiérové práce", rate: 6200 },
        { value: "exterior", label: "Exteriérové práce", rate: 5600 },
        { value: "panels", label: "Montáž sendvičových panelů", rate: 5100 },
        { value: "drilling", label: "Diamantové vrtání", rate: 2900 },
        { value: "earthworks", label: "Zemní práce", rate: 3700 },
      ],
      cities: [
        { value: "praha", label: "Praha", factor: 1.15 },
        { value: "brno", label: "Brno", factor: 1.08 },
        { value: "ostrava", label: "Ostrava", factor: 1.04 },
        { value: "other", label: "Jiné město", factor: 1 },
      ],
      deadlines: [
        { value: "urgent", label: "Expresní termín", factor: 1.22 },
        { value: "standard", label: "Standardní termín", factor: 1 },
        { value: "planned", label: "Plánovaně / bez spěchu", factor: 0.94 },
      ],
    },
    cookieBanner: {
      title: "Používáme technické cookies",
      text: "Web ukládá pouze nezbytné technické cookies a vaši volbu souhlasu, aby fungoval správně a bezpečně.",
      essential: "Pouze nezbytné",
      acceptAll: "Přijmout vše",
      acceptNecessary: "Pouze nezbytné",
      settings: "Nastavení",
      saved: "Volba cookies byla uložena.",
    },
  },
  en: {
    localeLabel: "English",
    languageShort: "EN",
    nav: {
      items: [
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/career", label: "Careers" },
        { href: "/contacts", label: "Contact" },
      ],
      cta: "Get estimate",
      menu: "Menu",
    },
    brand: {
      eyebrow: "ConStrukT VS Company",
      subtitle: "European Construction Partner",
    },
    home: {
      heroTitle: "Construction solutions for projects of any complexity",
      heroText:
        "From apartment renovations to large industrial facilities. Our specialists bring more than 10 years of experience from construction projects across Europe.",
      heroTags: [
        "Construction works",
        "Reconstructions",
        "Industrial structure assembly",
        "Engineering works",
      ],
      primaryCta: "Get consultation",
      secondaryCta: "Calculate cost",
      heroNote: "Quality guarantee, reliable timelines and transparent communication with every client.",
      heroPanelLabel: "European delivery standard",
      heroMetrics: [
        { value: "10+", label: "years of specialist experience" },
        { value: "24 h", label: "for the initial estimate" },
        { value: "360°", label: "from minor repairs to industrial facilities" },
      ],
      metricsBar: [
        { title: "Europe", text: "Hands-on experience from international construction environments." },
        { title: "Private / Commercial / Industrial", text: "We work with private clients, businesses and industrial investors." },
        { title: "Photo reports", text: "Every phase is visible, documented and clearly communicated." },
      ],
      aboutTag: "About company",
      aboutTitle: "ConStrukT VS Company",
      aboutParagraphs: [
        "ConStrukT VS Company is a team of experienced specialists in construction, reconstruction and engineering works. We handle projects of different scale, from small repairs to large industrial facilities.",
        "Our crews have many years of experience on projects across Europe, which allows us to keep quality, pace and discipline on demanding sites. A satisfied client is our strongest proof of quality.",
      ],
      aboutCards: [
        { title: "Quality", text: "High execution standards and close supervision at every stage." },
        { title: "Deadlines", text: "Realistic planning and disciplined delivery against the agreed schedule." },
        { title: "Approach", text: "Each project is tailored to the client, the site and the business goal." },
        { title: "Transparency", text: "Clear budget, clear next steps and honest communication throughout." },
      ],
      servicesTag: "Our services",
      servicesTitle: "A wide scope of construction and assembly works",
      servicesIntro:
        "Our service structure is built to show where we deliver the highest value in speed, workmanship and project organization.",
      services: [
        {
          title: "High-current electrical installation",
          text: "Complete power electrical installations for apartments, houses, commercial units and technically demanding facilities, including switchboards and main supply routes.",
          items: ["Switchboards and protection", "Power cable routes", "Complete power infrastructure"],
        },
        {
          title: "Low-current electrical systems",
          text: "Installation of data, security and communication systems with clean cabling, reliability and future scalability in mind.",
          items: ["Data cabling and racks", "CCTV and access control", "Structured low-voltage networks"],
        },
        {
          title: "Photovoltaics and heat pumps",
          text: "Design and installation of photovoltaic systems and related technologies for energy-efficient homes and commercial properties.",
          items: ["Roof-mounted PV systems", "Inverters and technical wiring", "Solutions for homes and businesses"],
        },
        {
          title: "Turnkey house construction",
          text: "Complete delivery of family houses on a turnkey basis, from site preparation and shell construction to final finishing.",
          items: ["Full project coordination", "Trade coordination", "Ready-to-live handover"],
        },
        {
          title: "Fence selection and installation",
          text: "Installation of metal, panel, industrial and decorative fencing with the right balance of budget, design and durability.",
          items: ["Metal fences", "Panel fencing", "Gates and wickets"],
        },
        {
          title: "Interior and exterior works",
          text: "Complete internal and external construction works for apartments, houses, commercial units and reconstruction projects.",
          items: ["Drywall, plaster, painting", "Tiles and ceilings", "Facades, insulation, cladding"],
        },
        {
          title: "Sandwich panel installation",
          text: "Professional installation for warehouses, hangars, manufacturing and retail buildings with control of geometry and airtight joints.",
          items: ["Warehouses and hangars", "Retail premises", "Industrial buildings"],
        },
        {
          title: "Diamond drilling",
          text: "Precise core drilling in concrete and reinforced concrete for engineering networks, ventilation and technical systems.",
          items: ["Utilities", "Ventilation", "Electrical systems"],
        },
        {
          title: "Earthworks",
          text: "Site preparation, trenching, foundations, levelling and clearing works for private and large-scale construction sites.",
          items: ["Trenches and foundations", "Site preparation", "Demolition and clearing"],
        },
      ],
      advantagesTag: "Why ConStrukT VS",
      advantagesTitle: "Reliability, speed and fully structured project delivery",
      advantages: [
        "Specialists with experience across Europe",
        "Modern equipment and proven technologies",
        "Strict quality control at every stage",
        "Reliable deadlines and transparent communication",
        "Tailored approach to every project",
      ],
      projectsTag: "Projects / portfolio",
      projectsTitle: "Cases that build trust",
      projectsIntro: "Strong visuals and clear project types help communicate the scale and quality of our work.",
      projects: [
        { title: "Warehouse building project", subtitle: "Structural assembly and building envelope works", image: baseProjects[0] },
        { title: "Industrial fencing installation", subtitle: "Perimeter safety for a commercial facility", image: baseProjects[1] },
        { title: "Apartment reconstruction", subtitle: "Full interior upgrade and technical preparation", image: baseProjects[2] },
        { title: "Sandwich panel installation", subtitle: "Fast delivery for industrial and retail premises", image: baseProjects[3] },
      ],
      beforeAfter: {
        beforeLabel: "Before",
        beforeTitle: "Site analysis and preparation",
        beforeText: "We define the current condition, client targets, restrictions and technical requirements.",
        afterLabel: "After",
        afterTitle: "Delivered result with quality control",
        afterText: "We hand over the finished stage or facility with clear reporting and visual documentation.",
      },
      processTag: "How we work",
      processTitle: "A transparent process without unnecessary bureaucracy",
      steps: [
        { step: "01", title: "Consultation", text: "We discuss goals, budget, time frame and site specifics." },
        { step: "02", title: "Proposal", text: "We evaluate the scope and prepare a structured commercial offer." },
        { step: "03", title: "Execution", text: "We deliver the project professionally with quality control." },
        { step: "04", title: "Handover", text: "We perform the final review and hand over the completed result." },
      ],
      calculatorTag: "Cost calculator",
      calculatorTitle: "Get a price estimate within 24 hours",
      calculatorText: "A fast preliminary estimate helps the client understand the budget range before the full proposal.",
      coverageLabel: "Project geography",
      coverage: ["Prague", "Brno", "Ostrava", "Plzeň", "Liberec", "Czech Republic", "Germany", "Austria"],
      trustTag: "Trust block",
      trustTitle: "Documents, experience and a clear business identity",
      trustCards: [
        { label: "VAT ID", value: "CZ24503215", text: "Official company data and legally transparent cooperation." },
        { label: "Data box", value: "49t6e8", text: "Reliable official communication channel and document flow." },
        { label: "Team experience", value: "10+ years", text: "International construction experience across Europe." },
        { label: "Reporting", value: "Photos + stages + deadlines", text: "The client always sees progress, milestones and status." },
      ],
      reviewTag: "References and recommendations",
      reviewTitle: "Detailed references and real case studies are available on request",
      reviewText: "Instead of inflated claims, we build trust through company data, delivery discipline, experience and transparent reporting.",
    },
    aboutPage: {
      title: "A construction partner with European experience",
      intro: "We handle construction, installation and engineering works in a format that works for private clients and professional investors alike.",
      text: [
        "ConStrukT VS Company is built around experienced supervisors, installers and coordinators with proven backgrounds on projects of different scale across Europe.",
        "Our goal is not only to build well, but to manage the entire process well: planning, supervision, sequencing, communication and final handover.",
      ],
      stats: [
        { value: "10+", label: "years of specialist experience" },
        { value: "EU", label: "projects in European environments" },
        { value: "24 h", label: "for response and first estimate" },
      ],
      valuesTitle: "What defines our cooperation",
      values: [
        { title: "Disciplined management", text: "We control sequencing, deadlines and ownership across all project phases." },
        { title: "Craft quality", text: "Execution details matter just as much as the overall result." },
        { title: "Direct communication", text: "The client always knows who leads the project and what comes next." },
        { title: "Flexibility", text: "We can handle smaller jobs and larger industrial works with the same standard." },
      ],
    },
    servicesPage: {
      title: "Construction and assembly services from one partner",
      intro: "From site preparation to key construction works and specialized assembly, we keep one responsibility and one delivery standard.",
      outroTitle: "Need a more precise scope?",
      outroText: "Send us an inquiry and we will prepare a structured solution, timing and budget outline.",
    },
    contactsPage: {
      tag: "Contact",
      title: "Ready to discuss your project",
      intro: "Send us your inquiry with a few basic details. We will reply with the first solution framework and next steps.",
      detailsTitle: "Company details",
      note: "For a project estimate, the form is the fastest route. Legal company details are also available in the GDPR and cookies section.",
    },
    careerPage: {
      tag: "Careers",
      title: "We are growing and looking for strong people",
      intro: "If you work responsibly, care about quality and function well within a team, we would like to hear from you.",
      openPositionsTag: "Open positions",
      openPositionsTitle: "Current opportunities",
      noJobsTitle: "No open positions at the moment",
      noJobsText: "You can still send us your details or CV and we will contact you when a relevant role opens.",
      perksTag: "What we offer",
      perksTitle: "How cooperation works with us",
      perks: [
        { title: "Stable projects", text: "Real work on active projects without random downtime." },
        { title: "Fair compensation", text: "Reward in line with experience, responsibility and performance." },
        { title: "Equipment", text: "Solid tools, site organization and proper work setup." },
        { title: "Growth", text: "Long-term cooperation and room for professional development." },
      ],
      applyCall: "Apply",
      emailAction: "Send email",
    },
    privacyPage: {
      tag: "Legal information",
      title: "Privacy and personal data processing",
      intro: "This page explains how ConStrukT VS Compani s.r.o. processes personal data from contact forms and commercial communication.",
      sections: [
        { title: "1. Data controller", text: "The controller is ConStrukT VS Compani s.r.o., Company ID 24503215, VAT ID CZ24503215, registered at Sokolská 1883/8, 120 00 Prague 2 - Nové Město, Czech Republic. Contact: ConStrukT.VS@seznam.cz, data box 49t6e8." },
        { title: "2. What data we process", text: "We process the data you submit to us: name, phone, email, project location, work type, area, deadline, photo link and your message." },
        { title: "3. Purpose of processing", text: "We use the data only to handle your inquiry, prepare an estimate, maintain business communication and potentially enter into a contractual relationship." },
        { title: "4. Legal basis", text: "The legal basis is pre-contractual communication, legitimate business interest and your consent when submitting the form." },
        { title: "5. Retention period", text: "Inquiries are retained for the time reasonably necessary to process them and to maintain relevant business records." },
        { title: "6. Data sharing", text: "We do not sell personal data. Data may only be processed by essential hosting and infrastructure providers needed for website operation." },
        { title: "7. Your rights", text: "You may request access, correction, restriction or deletion of your data and you may contact the Czech data protection authority if needed." },
      ],
    },
    cookiePage: {
      tag: "Cookies",
      title: "Cookie information",
      intro: "We use only essential technical cookies and store your consent preference so that the website works correctly and according to your choice.",
      sections: [
        { title: "1. Essential cookies", text: "Essential cookies support basic website functions, admin security and storage of your cookie preference." },
        { title: "2. Preference storage", text: "We store whether you accepted only essential cookies or all cookies. This choice is kept locally in your browser." },
        { title: "3. Analytics and marketing", text: "The current website version does not use third-party analytics or advertising scripts. If this changes later, cookie controls will be expanded accordingly." },
        { title: "4. How to change your choice", text: "You can reopen cookie settings at any time from the footer link called “Cookie settings”." },
      ],
    },
    footer: {
      description: "Modern construction and assembly partner for reconstructions, industrial facilities and engineering works delivered in a European standard.",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      legalTitle: "Legal",
      privacy: "GDPR / privacy policy",
      cookies: "Cookie information",
      rights: "All rights reserved.",
      cookieSettings: "Cookie settings",
    },
    form: {
      estimateTag: "Smart estimate",
      estimateTitle: "Preliminary calculator",
      estimateText: "Shows the estimated price range immediately based on work type, area, city and deadline.",
      typeLabel: "Work type",
      areaLabel: "Area, m²",
      cityLabel: "City",
      deadlineLabel: "Deadline",
      resultLabel: "Estimated price",
      resultHint: "The exact estimate is confirmed after reviewing the project details, photos and scope.",
      fastTag: "Fast contact",
      fastTitle: "Send request",
      fastText: "Leave your contact and project summary. We reply with the first estimate within 24 hours.",
      nameLabel: "Name",
      phoneLabel: "Phone",
      emailLabel: "Email",
      photoLabel: "Photo / link to project",
      detailsLabel: "Project description",
      detailsPlaceholder: "Describe the facility type, work scope, deadline and any important requirements.",
      consent: "I agree to the processing of personal data for the purpose of responding to my request.",
      submit: "Send request",
      sending: "Sending...",
      success: "Thank you. We will contact you within 24 hours.",
      error: "The request could not be sent. Please try again.",
      workTypes: [
        { value: "power", label: "High-current electrical installation", rate: 5900 },
        { value: "lowcurrent", label: "Low-current electrical systems", rate: 4800 },
        { value: "solar", label: "Photovoltaics and heat pumps", rate: 7800 },
        { value: "turnkey", label: "Turnkey house construction", rate: 12500 },
        { value: "fences", label: "Fences and barriers", rate: 4200 },
        { value: "interior", label: "Interior works", rate: 6200 },
        { value: "exterior", label: "Exterior works", rate: 5600 },
        { value: "panels", label: "Sandwich panel installation", rate: 5100 },
        { value: "drilling", label: "Diamond drilling", rate: 2900 },
        { value: "earthworks", label: "Earthworks", rate: 3700 },
      ],
      cities: [
        { value: "praha", label: "Prague", factor: 1.15 },
        { value: "brno", label: "Brno", factor: 1.08 },
        { value: "ostrava", label: "Ostrava", factor: 1.04 },
        { value: "other", label: "Other city", factor: 1 },
      ],
      deadlines: [
        { value: "urgent", label: "Urgent", factor: 1.22 },
        { value: "standard", label: "Standard", factor: 1 },
        { value: "planned", label: "Planned / flexible", factor: 0.94 },
      ],
    },
    cookieBanner: {
      title: "We use technical cookies",
      text: "The website stores only essential technical cookies and your consent choice so that it works correctly and securely.",
      essential: "Essential only",
      acceptAll: "Accept all",
      acceptNecessary: "Essential only",
      settings: "Settings",
      saved: "Cookie preference saved.",
    },
  },
  de: {
    localeLabel: "Deutsch",
    languageShort: "DE",
    nav: {
      items: [
        { href: "/about", label: "Über uns" },
        { href: "/services", label: "Leistungen" },
        { href: "/career", label: "Karriere" },
        { href: "/contacts", label: "Kontakt" },
      ],
      cta: "Kalkulation anfragen",
      menu: "Menü",
    },
    brand: {
      eyebrow: "ConStrukT VS Company",
      subtitle: "European Construction Partner",
    },
    home: {
      heroTitle: "Baulösungen für Projekte jeder Größenordnung",
      heroText:
        "Von Wohnungsrenovierungen bis zu großen Industrieobjekten. Unsere Spezialisten verfügen über mehr als 10 Jahre Erfahrung auf Baustellen in ganz Europa.",
      heroTags: ["Bauarbeiten", "Rekonstruktionen", "Montage von Industriekonstruktionen", "Ingenieurleistungen"],
      primaryCta: "Beratung anfordern",
      secondaryCta: "Kosten berechnen",
      heroNote: "Qualitätsgarantie, verlässliche Termine und transparente Kommunikation mit dem Kunden.",
      heroPanelLabel: "Europäischer Projektstandard",
      heroMetrics: [
        { value: "10+", label: "Jahre Praxiserfahrung" },
        { value: "24 h", label: "bis zur ersten Kalkulation" },
        { value: "360°", label: "von kleinen Reparaturen bis Industrieprojekten" },
      ],
      metricsBar: [
        { title: "Europa", text: "Erfahrung aus internationalen Bauprojekten und anspruchsvollen Standards." },
        { title: "Private / Commercial / Industrial", text: "Wir arbeiten für Privatkunden, Unternehmen und industrielle Auftraggeber." },
        { title: "Fotoreports", text: "Jede Phase ist transparent, dokumentiert und nachvollziehbar." },
      ],
      aboutTag: "Über das Unternehmen",
      aboutTitle: "ConStrukT VS Company",
      aboutParagraphs: [
        "ConStrukT VS Company ist ein Team erfahrener Fachkräfte im Bereich Bau, Rekonstruktion und Ingenieurleistungen. Wir realisieren Aufträge jeder Größenordnung.",
        "Unsere Teams bringen langjährige Erfahrung aus Projekten in ganz Europa mit. Dadurch können wir Qualität, Tempo und Disziplin auch auf anspruchsvollen Baustellen sicherstellen.",
      ],
      aboutCards: [
        { title: "Qualität", text: "Hohe Ausführungsstandards und sorgfältige Kontrolle in jeder Phase." },
        { title: "Termine", text: "Realistische Planung und konsequente Einhaltung des abgestimmten Zeitplans." },
        { title: "Ansatz", text: "Jedes Projekt wird individuell auf Auftrag, Objekt und Ziel abgestimmt." },
        { title: "Transparenz", text: "Klarer Ablauf, klares Budget und ehrliche Kommunikation ohne Überraschungen." },
      ],
      servicesTag: "Unsere Leistungen",
      servicesTitle: "Breites Spektrum an Bau- und Montageleistungen",
      servicesIntro:
        "Die Leistungsstruktur ist so aufgebaut, dass der Kunde schnell erkennt, wo wir den größten Mehrwert in Qualität, Geschwindigkeit und Organisation liefern.",
      services: [
        {
          title: "Starkstrom",
          text: "Komplette Starkstrominstallationen für Wohnungen, Häuser, Gewerbeobjekte und technisch anspruchsvolle Anlagen inklusive Verteilungen und Einspeisewegen.",
          items: ["Verteilungen und Schutztechnik", "Energie-Kabeltrassen", "Komplette Starkstrom-Infrastruktur"],
        },
        {
          title: "Schwachstrominstallation",
          text: "Installation von Daten-, Sicherheits- und Kommunikationssystemen mit sauberer Verkabelung, Zuverlässigkeit und Erweiterbarkeit.",
          items: ["Datennetze und Racks", "CCTV und Zutrittskontrolle", "Strukturierte Verkabelung"],
        },
        {
          title: "Photovoltaik und Wärmepumpe",
          text: "Planung und Montage von Photovoltaiksystemen und zugehörigen Technologien für energieeffiziente Wohn- und Gewerbeobjekte.",
          items: ["PV-Anlagen auf Dächern", "Wechselrichter und technische Einbindung", "Lösungen für Häuser und Firmen"],
        },
        {
          title: "Schlüsselfertiger Hausbau",
          text: "Komplette Realisierung von Einfamilienhäusern schlüsselfertig - von der Baustellenvorbereitung bis zur finalen Übergabe.",
          items: ["Ganzheitliche Baukoordination", "Koordination aller Gewerke", "Bezugsfertige Übergabe"],
        },
        {
          title: "Auswahl und Montage von Zäunen",
          text: "Montage von Metall-, Panel-, Industrie- und Designzäunen mit der passenden Lösung in Bezug auf Budget, Design und Lebensdauer.",
          items: ["Metallzäune", "Panelzäune", "Tore und Pforten"],
        },
        {
          title: "Innen- und Außenarbeiten",
          text: "Komplette Innen- und Außenarbeiten für Wohnungen, Häuser, Gewerbeeinheiten und Rekonstruktionsprojekte.",
          items: ["Trockenbau, Putz, Anstrich", "Fliesen und Decken", "Fassaden, Dämmung, Verkleidung"],
        },
        {
          title: "Montage von Sandwichpaneelen",
          text: "Professionelle Montage für Lagerhallen, Hangars, Produktions- und Handelsobjekte mit Kontrolle von Geometrie und Dichtheit.",
          items: ["Lager und Hallen", "Handelsflächen", "Industriebauten"],
        },
        {
          title: "Diamantbohren",
          text: "Präzises Kernbohren in Beton und Stahlbeton für Leitungen, Lüftung und technische Systeme.",
          items: ["Versorgungsleitungen", "Lüftung", "Elektrosysteme"],
        },
        {
          title: "Erdarbeiten",
          text: "Baustellenvorbereitung, Gräben, Fundamente, Geländeanpassung und Räumung für private und große Bauvorhaben.",
          items: ["Gräben und Fundamente", "Baustellenvorbereitung", "Abriss und Räumung"],
        },
      ],
      advantagesTag: "Warum ConStrukT VS",
      advantagesTitle: "Verlässlichkeit, Tempo und klare Projektsteuerung",
      advantages: [
        "Fachkräfte mit Erfahrung auf europäischen Projekten",
        "Moderne Technik und bewährte Bauverfahren",
        "Strenge Qualitätskontrolle in jeder Phase",
        "Termintreue und transparente Kommunikation",
        "Individueller Ansatz für jedes Projekt",
      ],
      projectsTag: "Projekte / Portfolio",
      projectsTitle: "Referenzen, die Vertrauen schaffen",
      projectsIntro: "Große Bilder und klare Kategorisierung zeigen den Maßstab und das Niveau unserer Arbeiten auf einen Blick.",
      projects: [
        { title: "Lagerhallenprojekt", subtitle: "Montage von Tragkonstruktionen und Gebäudehülle", image: baseProjects[0] },
        { title: "Montage einer Industrieeinfriedung", subtitle: "Perimeterschutz für ein Gewerbeobjekt", image: baseProjects[1] },
        { title: "Wohnungsrekonstruktion", subtitle: "Kompletter Innenausbau und technische Vorbereitung", image: baseProjects[2] },
        { title: "Montage von Sandwichpaneelen", subtitle: "Schnelle Realisierung für Industrie- und Handelsräume", image: baseProjects[3] },
      ],
      beforeAfter: {
        beforeLabel: "Vorher",
        beforeTitle: "Objektanalyse und Vorbereitung",
        beforeText: "Wir definieren den Ausgangszustand, die Ziele, Einschränkungen und technischen Anforderungen.",
        afterLabel: "Nachher",
        afterTitle: "Abgegebenes Ergebnis mit Qualitätskontrolle",
        afterText: "Wir übergeben die fertige Phase oder das Objekt mit nachvollziehbarer Dokumentation und Fotobericht.",
      },
      processTag: "So arbeiten wir",
      processTitle: "Transparenter Ablauf ohne unnötige Bürokratie",
      steps: [
        { step: "01", title: "Beratung", text: "Wir besprechen Ziel, Budget, Zeitrahmen und Besonderheiten des Objekts." },
        { step: "02", title: "Angebot", text: "Wir bewerten den Umfang und erstellen ein klares kommerzielles Angebot." },
        { step: "03", title: "Ausführung", text: "Wir realisieren das Projekt professionell mit laufender Qualitätskontrolle." },
        { step: "04", title: "Übergabe", text: "Wir führen die Endkontrolle durch und übergeben das fertige Ergebnis." },
      ],
      calculatorTag: "Kostenrechner",
      calculatorTitle: "Kalkulation innerhalb von 24 Stunden erhalten",
      calculatorText: "Eine schnelle Vorabschätzung hilft, den Budgetrahmen schon vor dem Detailangebot zu verstehen.",
      coverageLabel: "Projektregionen",
      coverage: ["Prag", "Brünn", "Ostrau", "Pilsen", "Liberec", "Tschechien", "Deutschland", "Österreich"],
      trustTag: "Vertrauensblock",
      trustTitle: "Unternehmensdaten, Erfahrung und klare rechtliche Identität",
      trustCards: [
        { label: "USt-IdNr.", value: "CZ24503215", text: "Offizielle Firmendaten und rechtlich transparente Zusammenarbeit." },
        { label: "Databox", value: "49t6e8", text: "Zuverlässiger offizieller Kommunikationskanal." },
        { label: "Teamerfahrung", value: "10+ years", text: "Internationale Praxiserfahrung auf Baustellen in Europa." },
        { label: "Reporting", value: "Fotos + Etappen + Termine", text: "Der Kunde sieht Fortschritt, Meilensteine und aktuellen Status." },
      ],
      reviewTag: "Referenzen und Empfehlungen",
      reviewTitle: "Detaillierte Referenzen und reale Cases stellen wir auf Anfrage bereit",
      reviewText: "Vertrauen entsteht bei uns durch echte Firmendaten, strukturierte Kommunikation, Erfahrung und dokumentierte Ergebnisse.",
    },
    aboutPage: {
      title: "Baupartner mit europäischer Erfahrung",
      intro: "Wir liefern Bau-, Montage- und Ingenieurleistungen in einer Form, die für Privatkunden wie professionelle Investoren funktioniert.",
      text: [
        "ConStrukT VS Company basiert auf erfahrenen Bauleitern, Monteuren und Koordinatoren mit Projekterfahrung in verschiedenen europäischen Märkten.",
        "Unser Ziel ist nicht nur gutes Bauen, sondern auch gutes Steuern des gesamten Prozesses: Planung, Koordination, Kommunikation und Übergabe.",
      ],
      stats: [
        { value: "10+", label: "Jahre Spezialisten-Erfahrung" },
        { value: "EU", label: "Projekte im europäischen Umfeld" },
        { value: "24 h", label: "bis zur ersten Rückmeldung" },
      ],
      valuesTitle: "Worauf wir Zusammenarbeit aufbauen",
      values: [
        { title: "Strukturierte Steuerung", text: "Wir kontrollieren Abfolgen, Termine und Verantwortlichkeiten." },
        { title: "Handwerkliche Qualität", text: "Ausführungsdetails sind genauso wichtig wie das Gesamtergebnis." },
        { title: "Direkte Kommunikation", text: "Der Kunde weiß immer, wer führt und was als Nächstes kommt." },
        { title: "Flexibilität", text: "Wir bedienen kleinere Aufgaben und große Industrieprojekte im selben Standard." },
      ],
    },
    servicesPage: {
      title: "Bau- und Montageleistungen aus einer Hand",
      intro: "Von der Vorbereitung über Hauptbauleistungen bis zu Spezialmontagen: eine Verantwortung, ein Partner, ein Qualitätsstandard.",
      outroTitle: "Brauchen Sie eine präzisere Lösung?",
      outroText: "Senden Sie uns Ihre Anfrage und wir erstellen einen strukturierten Vorschlag mit Zeit- und Budgetrahmen.",
    },
    contactsPage: {
      tag: "Kontakt",
      title: "Bereit, Ihr Projekt zu besprechen",
      intro: "Senden Sie uns eine kurze Anfrage. Wir antworten mit dem ersten Lösungsrahmen und den nächsten Schritten.",
      detailsTitle: "Firmendaten",
      note: "Für eine Kalkulation ist das Formular der schnellste Weg. Rechtliche Unternehmensdaten finden Sie auch in der GDPR- und Cookie-Sektion.",
    },
    careerPage: {
      tag: "Karriere",
      title: "Wir wachsen und suchen starke Leute",
      intro: "Wenn Sie verantwortungsvoll arbeiten, Qualität wichtig finden und gut im Team funktionieren, freuen wir uns über Ihre Nachricht.",
      openPositionsTag: "Offene Positionen",
      openPositionsTitle: "Aktuelle Möglichkeiten",
      noJobsTitle: "Derzeit keine offenen Positionen",
      noJobsText: "Sie können uns trotzdem Ihren Kontakt oder Lebenslauf senden. Bei einer passenden Rolle melden wir uns.",
      perksTag: "Was wir bieten",
      perksTitle: "Wie Zusammenarbeit bei uns aussieht",
      perks: [
        { title: "Stabile Projekte", text: "Kontinuierliche Arbeit auf realen Baustellen ohne zufällige Ausfälle." },
        { title: "Faire Vergütung", text: "Bezahlung entsprechend Erfahrung, Verantwortung und Einsatz." },
        { title: "Ausstattung", text: "Werkzeug, Organisation und Arbeitsbedingungen ohne Improvisation." },
        { title: "Entwicklung", text: "Langfristige Zusammenarbeit und Raum für Wachstum." },
      ],
      applyCall: "Bewerben",
      emailAction: "E-Mail senden",
    },
    privacyPage: {
      tag: "Rechtliche Informationen",
      title: "Datenschutz und Verarbeitung personenbezogener Daten",
      intro: "Diese Seite erklärt, wie ConStrukT VS Compani s.r.o. Daten aus Kontaktformularen und geschäftlicher Kommunikation verarbeitet.",
      sections: [
        { title: "1. Verantwortlicher", text: "Verantwortlicher ist ConStrukT VS Compani s.r.o., ID 24503215, USt-IdNr. CZ24503215, Sokolská 1883/8, 120 00 Prag 2 - Nové Město, Tschechische Republik. Kontakt: ConStrukT.VS@seznam.cz, Databox 49t6e8." },
        { title: "2. Welche Daten wir verarbeiten", text: "Wir verarbeiten die von Ihnen übermittelten Daten: Name, Telefon, Email, Projektstandort, Leistungsart, Fläche, Termin, Fotolink und Nachricht." },
        { title: "3. Zweck der Verarbeitung", text: "Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage, zur Angebotserstellung und für die geschäftliche Kommunikation verwendet." },
        { title: "4. Rechtsgrundlage", text: "Rechtsgrundlage sind vorvertragliche Kommunikation, berechtigtes Interesse und Ihre Zustimmung beim Absenden des Formulars." },
        { title: "5. Speicherdauer", text: "Anfragen werden nur so lange gespeichert, wie es für ihre Bearbeitung und angemessene Geschäftsunterlagen erforderlich ist." },
        { title: "6. Weitergabe von Daten", text: "Wir verkaufen keine Daten. Zugriff erhalten nur notwendige Hosting- und Infrastrukturpartner für den technischen Betrieb." },
        { title: "7. Ihre Rechte", text: "Sie können Auskunft, Berichtigung, Einschränkung oder Löschung verlangen und sich bei der zuständigen Datenschutzbehörde beschweren." },
      ],
    },
    cookiePage: {
      tag: "Cookies",
      title: "Informationen zu Cookies",
      intro: "Wir verwenden nur technisch notwendige Cookies und speichern Ihre Auswahl zum Cookie-Einverständnis, damit die Website korrekt und sicher funktioniert.",
      sections: [
        { title: "1. Notwendige Cookies", text: "Notwendige Cookies unterstützen die Grundfunktionen der Website, die Sicherheit im Adminbereich und die Speicherung Ihrer Cookie-Entscheidung." },
        { title: "2. Speicherung der Präferenz", text: "Wir speichern, ob Sie nur notwendige oder alle Cookies akzeptiert haben. Diese Information bleibt lokal in Ihrem Browser." },
        { title: "3. Analyse und Marketing", text: "In der aktuellen Version der Website verwenden wir keine externen Analyse- oder Werbeskripte. Falls sich das ändert, wird die Cookie-Verwaltung erweitert." },
        { title: "4. Auswahl ändern", text: "Sie können Ihre Auswahl jederzeit über den Footer-Link „Cookie-Einstellungen“ erneut öffnen." },
      ],
    },
    footer: {
      description: "Moderner Bau- und Montagepartner für Rekonstruktionen, Industrieobjekte und Ingenieurleistungen im europäischen Standard.",
      navigationTitle: "Navigation",
      contactTitle: "Kontakt",
      legalTitle: "Rechtliches",
      privacy: "GDPR / Datenschutz",
      cookies: "Cookie-Informationen",
      rights: "Alle Rechte vorbehalten.",
      cookieSettings: "Cookie-Einstellungen",
    },
    form: {
      estimateTag: "Smart estimate",
      estimateTitle: "Vorläufiger Kalkulator",
      estimateText: "Zeigt sofort einen ungefähren Preisrahmen nach Leistungsart, Fläche, Stadt und Termin an.",
      typeLabel: "Leistungsart",
      areaLabel: "Fläche, m²",
      cityLabel: "Stadt",
      deadlineLabel: "Termin",
      resultLabel: "Geschätzter Preis",
      resultHint: "Die genaue Kalkulation bestätigen wir nach Prüfung der Details, Fotos und des Leistungsumfangs.",
      fastTag: "Schneller Kontakt",
      fastTitle: "Anfrage senden",
      fastText: "Hinterlassen Sie Ihre Kontaktdaten und eine kurze Projektbeschreibung. Wir melden uns innerhalb von 24 Stunden.",
      nameLabel: "Name",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      photoLabel: "Foto / Link zum Objekt",
      detailsLabel: "Projektbeschreibung",
      detailsPlaceholder: "Beschreiben Sie Objekttyp, Leistungsumfang, Termin und besondere Anforderungen.",
      consent: "Ich stimme der Verarbeitung personenbezogener Daten zur Beantwortung meiner Anfrage zu.",
      submit: "Anfrage senden",
      sending: "Wird gesendet...",
      success: "Vielen Dank. Wir melden uns innerhalb von 24 Stunden.",
      error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      workTypes: [
        { value: "power", label: "Starkstrom", rate: 5900 },
        { value: "lowcurrent", label: "Schwachstrominstallation", rate: 4800 },
        { value: "solar", label: "Photovoltaik und Wärmepumpe", rate: 7800 },
        { value: "turnkey", label: "Schlüsselfertiger Hausbau", rate: 12500 },
        { value: "fences", label: "Zäune und Einfriedungen", rate: 4200 },
        { value: "interior", label: "Innenarbeiten", rate: 6200 },
        { value: "exterior", label: "Außenarbeiten", rate: 5600 },
        { value: "panels", label: "Montage von Sandwichpaneelen", rate: 5100 },
        { value: "drilling", label: "Diamantbohren", rate: 2900 },
        { value: "earthworks", label: "Erdarbeiten", rate: 3700 },
      ],
      cities: [
        { value: "praha", label: "Prag", factor: 1.15 },
        { value: "brno", label: "Brünn", factor: 1.08 },
        { value: "ostrava", label: "Ostrau", factor: 1.04 },
        { value: "other", label: "Andere Stadt", factor: 1 },
      ],
      deadlines: [
        { value: "urgent", label: "Dringend", factor: 1.22 },
        { value: "standard", label: "Standard", factor: 1 },
        { value: "planned", label: "Geplant / flexibel", factor: 0.94 },
      ],
    },
    cookieBanner: {
      title: "Wir verwenden technische Cookies",
      text: "Die Website speichert nur notwendige technische Cookies und Ihre Auswahl, damit sie korrekt und sicher funktioniert.",
      essential: "Nur notwendige",
      acceptAll: "Alle akzeptieren",
      acceptNecessary: "Nur notwendige",
      settings: "Einstellungen",
      saved: "Cookie-Auswahl gespeichert.",
    },
  },
  ru: {
    localeLabel: "Русский",
    languageShort: "RU",
    nav: {
      items: [
        { href: "/about", label: "О компании" },
        { href: "/services", label: "Услуги" },
        { href: "/career", label: "Карьера" },
        { href: "/contacts", label: "Контакты" },
      ],
      cta: "Получить расчет",
      menu: "Меню",
    },
    brand: {
      eyebrow: "ConStrukT VS Company",
      subtitle: "European Construction Partner",
    },
    home: {
      heroTitle: "Строительные решения для проектов любой сложности",
      heroText:
        "От ремонта квартир до крупных промышленных объектов. Наши специалисты имеют более 10 лет опыта на строительных проектах по всей Европе.",
      heroTags: ["Строительные работы", "Реконструкции", "Монтаж промышленных конструкций", "Инженерные работы"],
      primaryCta: "Получить консультацию",
      secondaryCta: "Рассчитать стоимость",
      heroNote: "Гарантия качества, точные сроки и прозрачная коммуникация с клиентом.",
      heroPanelLabel: "Европейский стандарт реализации",
      heroMetrics: [
        { value: "10+", label: "лет опыта специалистов" },
        { value: "24 ч", label: "на подготовку первичного расчета" },
        { value: "360°", label: "от мелкого ремонта до индустриальных объектов" },
      ],
      metricsBar: [
        { title: "Европа", text: "Опыт работы на международных строительных проектах и в требовательной среде." },
        { title: "Private / Commercial / Industrial", text: "Работаем с частными клиентами, бизнесом и промышленными заказчиками." },
        { title: "Фотоотчеты", text: "Каждый этап прозрачен, документирован и понятен клиенту." },
      ],
      aboutTag: "О компании",
      aboutTitle: "ConStrukT VS Company",
      aboutParagraphs: [
        "ConStrukT VS Company — это команда опытных специалистов в сфере строительства, реконструкции и инженерных работ. Мы берем на себя задачи разного масштаба: от небольших ремонтов до крупных промышленных объектов.",
        "Наши мастера имеют многолетний опыт работы по всей Европе, поэтому умеют держать качество, темп и дисциплину на сложных объектах. Для нас довольный клиент — главный показатель качества.",
      ],
      aboutCards: [
        { title: "Качество", text: "Высокий стандарт исполнения и внимательный контроль на каждом этапе." },
        { title: "Сроки", text: "Реалистичное планирование и соблюдение согласованного графика." },
        { title: "Подход", text: "Каждый проект подбирается под задачу клиента и особенности объекта." },
        { title: "Прозрачность", text: "Понятный бюджет, понятные этапы и честная коммуникация без сюрпризов." },
      ],
      servicesTag: "Наши услуги",
      servicesTitle: "Широкий спектр строительных и монтажных работ",
      servicesIntro:
        "Структура услуг выстроена так, чтобы клиент быстро понял, где мы можем дать лучший результат по качеству, скорости и организации.",
      services: [
        {
          title: "Силовая электрика",
          text: "Комплексные силовые электромонтажные работы для квартир, домов, коммерческих объектов и технически сложных площадок, включая щиты и магистральные линии.",
          items: ["Электрощиты и защита", "Силовые кабельные трассы", "Полная силовая инфраструктура"],
        },
        {
          title: "Слабострумова електроінсталяція",
          text: "Монтаж слаботочных, сетевых и охранных систем с аккуратной кабельной организацией, надежностью и запасом для расширения.",
          items: ["Сетевые линии и rack-решения", "CCTV и контроль доступа", "Структурированная кабельная система"],
        },
        {
          title: "Фотовольтаика и тепловые насосы",
          text: "Проектирование и монтаж солнечных систем и смежных энергоэффективных решений для домов и коммерческих объектов.",
          items: ["Кровельные PV-системы", "Инверторы и техническое подключение", "Решения для домов и бизнеса"],
        },
        {
          title: "Строительство домов под ключ",
          text: "Полный цикл строительства частных домов под ключ: от подготовки участка и коробки здания до финальной сдачи готового дома.",
          items: ["Полное управление строительством", "Координация всех подрядных работ", "Готовый дом к передаче клиенту"],
        },
        {
          title: "Выбор и установка заборов",
          text: "Монтаж металлических, панельных, промышленных и декоративных ограждений с подбором решения по бюджету, дизайну и сроку службы.",
          items: ["Металлические заборы", "Панельные ограждения", "Ворота и калитки"],
        },
        {
          title: "Интерьерные и экстерьерные работы",
          text: "Полный цикл внутренних и наружных работ для квартир, домов, коммерческих помещений и проектов реконструкции.",
          items: ["Гипсокартон, штукатурка, покраска", "Плитка и потолки", "Фасады, утепление, облицовка"],
        },
        {
          title: "Монтаж сэндвич-панелей",
          text: "Профессиональный монтаж для складов, ангаров, производственных и торговых помещений с контролем геометрии и герметичности.",
          items: ["Склады и ангары", "Торговые помещения", "Промышленные здания"],
        },
        {
          title: "Алмазное бурение",
          text: "Точное ядровое бурение отверстий в бетоне и железобетоне для коммуникаций, вентиляции и инженерных систем.",
          items: ["Коммуникации", "Вентиляция", "Электрические системы"],
        },
        {
          title: "Земляные работы",
          text: "Подготовка площадок, траншеи, фундаменты, выравнивание и расчистка территорий для частных и больших объектов.",
          items: ["Траншеи и фундаменты", "Подготовка площадки", "Демонтаж и расчистка"],
        },
      ],
      advantagesTag: "Почему ConStrukT VS",
      advantagesTitle: "Надежность, скорость и четкое управление проектом",
      advantages: [
        "Опыт специалистов на проектах по всей Европе",
        "Современное оборудование и проверенные технологии",
        "Строгий контроль качества на каждом этапе",
        "Соблюдение сроков и прозрачная коммуникация",
        "Индивидуальный подход к каждому проекту",
      ],
      projectsTag: "Проекты / портфолио",
      projectsTitle: "Кейсы, которые создают доверие",
      projectsIntro: "Большие фото и ясная структура помогают быстро показать масштаб и уровень работ.",
      projects: [
        { title: "Проект складского помещения", subtitle: "Монтаж несущих конструкций и оболочки здания", image: baseProjects[0] },
        { title: "Монтаж промышленного ограждения", subtitle: "Периметральная безопасность для коммерческого объекта", image: baseProjects[1] },
        { title: "Реконструкция квартиры", subtitle: "Комплексная внутренняя отделка и инженерная подготовка", image: baseProjects[2] },
        { title: "Монтаж сэндвич-панелей", subtitle: "Быстрое возведение торговых и промышленных помещений", image: baseProjects[3] },
      ],
      beforeAfter: {
        beforeLabel: "До",
        beforeTitle: "Анализ объекта и подготовка",
        beforeText: "Фиксируем исходное состояние, задачи, ограничения и технические требования.",
        afterLabel: "После",
        afterTitle: "Готовый результат с контролем качества",
        afterText: "Передаем завершенный этап или объект с понятной отчетностью и фотофиксацией.",
      },
      processTag: "Как мы работаем",
      processTitle: "Прозрачный процесс без лишней бюрократии",
      steps: [
        { step: "01", title: "Консультация", text: "Обсуждаем задачи, бюджет, сроки и особенности объекта." },
        { step: "02", title: "Предложение", text: "Оцениваем объем работ и формируем прозрачное предложение." },
        { step: "03", title: "Выполнение", text: "Профессионально реализуем проект с контролем качества." },
        { step: "04", title: "Сдача", text: "Проводим финальную проверку и передаем результат клиенту." },
      ],
      calculatorTag: "Калькулятор стоимости",
      calculatorTitle: "Получить предварительный расчет за 24 часа",
      calculatorText: "Быстрый предварительный расчет помогает понять бюджетный диапазон еще до полной сметы.",
      coverageLabel: "География опыта",
      coverage: ["Прага", "Брно", "Острава", "Пльзень", "Либерец", "Чехия", "Германия", "Австрия"],
      trustTag: "Блок доверия",
      trustTitle: "Документы, опыт и прозрачная деловая репутация",
      trustCards: [
        { label: "DIČ компании", value: "CZ24503215", text: "Официальные реквизиты и юридически прозрачная работа." },
        { label: "Datová schránka", value: "49t6e8", text: "Надежный официальный канал коммуникации и документооборота." },
        { label: "Опыт команды", value: "10+ years", text: "Международный опыт на строительных проектах в Европе." },
        { label: "Отчетность", value: "Фото + этапы + сроки", text: "Клиент всегда видит прогресс, этапы и статус работ." },
      ],
      reviewTag: "Отзывы и рекомендации",
      reviewTitle: "Подробные кейсы и реальные рекомендации предоставляем по запросу",
      reviewText: "Мы строим доверие не выдуманными обещаниями, а опытом, прозрачностью процесса, реквизитами и качеством исполнения.",
    },
    aboutPage: {
      title: "Строительный партнер с европейским опытом",
      intro: "Мы реализуем строительные, монтажные и инженерные работы в формате, удобном и для частных клиентов, и для профессиональных инвесторов.",
      text: [
        "ConStrukT VS Company строится на опыте прорабов, монтажников и координаторов, которые работали на проектах разного масштаба в Европе.",
        "Наша задача — не только качественно строить, но и грамотно вести весь процесс: планирование, координацию, коммуникацию и финальную сдачу.",
      ],
      stats: [
        { value: "10+", label: "лет опыта специалистов" },
        { value: "EU", label: "проекты в европейской среде" },
        { value: "24 ч", label: "на ответ и первый расчет" },
      ],
      valuesTitle: "На чем строится сотрудничество",
      values: [
        { title: "Системное управление", text: "Мы контролируем последовательность работ, сроки и ответственность." },
        { title: "Качество исполнения", text: "Детали реализации так же важны, как и общий итог." },
        { title: "Прямая коммуникация", text: "Клиент всегда понимает, кто ведет проект и что будет дальше." },
        { title: "Гибкость", text: "Берем и компактные задачи, и крупные индустриальные объекты в одном стандарте." },
      ],
    },
    servicesPage: {
      title: "Строительные и монтажные услуги от одного партнера",
      intro: "От подготовки площадки до основной строительной части и специализированного монтажа: одна ответственность, один партнер, один стандарт качества.",
      outroTitle: "Нужен более точный объем?",
      outroText: "Отправьте запрос, и мы подготовим структурированное решение, сроки и рамку бюджета.",
    },
    contactsPage: {
      tag: "Контакты",
      title: "Готовы обсудить ваш проект",
      intro: "Отправьте нам заявку с базовыми данными. Мы вернемся с первым вариантом решения и дальнейшими шагами.",
      detailsTitle: "Данные компании",
      note: "Для расчета проекта лучше всего использовать форму. Юридические реквизиты также указаны в разделах GDPR и cookies.",
    },
    careerPage: {
      tag: "Карьера",
      title: "Мы растем и ищем сильных специалистов",
      intro: "Если вы работаете ответственно, любите качество и умеете быть частью команды, нам будет интересно познакомиться.",
      openPositionsTag: "Открытые позиции",
      openPositionsTitle: "Актуальные возможности в команде",
      noJobsTitle: "Сейчас открытых позиций нет",
      noJobsText: "Вы все равно можете отправить контакт или CV. Когда появится подходящая роль, мы свяжемся с вами.",
      perksTag: "Что предлагаем",
      perksTitle: "Как устроена работа с нами",
      perks: [
        { title: "Стабильные проекты", text: "Работа на реальных объектах без случайных простоев." },
        { title: "Честная оплата", text: "Вознаграждение в соответствии с опытом, ответственностью и качеством работы." },
        { title: "Оснащение", text: "Нормальный инструмент, организация работ и рабочая среда без хаоса." },
        { title: "Рост", text: "Долгосрочное сотрудничество и возможности развития." },
      ],
      applyCall: "Откликнуться",
      emailAction: "Отправить email",
    },
    privacyPage: {
      tag: "Юридическая информация",
      title: "Конфиденциальность и обработка персональных данных",
      intro: "На этой странице описано, как ConStrukT VS Compani s.r.o. обрабатывает данные из контактных форм и деловой коммуникации.",
      sections: [
        { title: "1. Оператор данных", text: "Оператором персональных данных является ConStrukT VS Compani s.r.o., IČO 24503215, DIČ CZ24503215, адрес: Sokolská 1883/8, 120 00 Praha 2 - Nové Město, Czech Republic. Контакт: ConStrukT.VS@seznam.cz, datová schránka 49t6e8." },
        { title: "2. Какие данные мы обрабатываем", text: "Мы обрабатываем данные, которые вы сами передаете через форму: имя, телефон, email, город, тип работ, площадь, сроки, ссылку на фото и описание проекта." },
        { title: "3. Цель обработки", text: "Данные используются только для обработки заявки, подготовки предварительного расчета, деловой коммуникации и возможного заключения договора." },
        { title: "4. Правовое основание", text: "Правовым основанием является преддоговорная коммуникация, законный интерес бизнеса и ваше согласие при отправке формы." },
        { title: "5. Срок хранения", text: "Заявки хранятся только столько, сколько необходимо для их обработки и разумного ведения деловой документации." },
        { title: "6. Передача данных", text: "Мы не продаем персональные данные. Они могут обрабатываться только техническими поставщиками хостинга и инфраструктуры, необходимыми для работы сайта." },
        { title: "7. Ваши права", text: "Вы можете запросить доступ, исправление, ограничение или удаление данных, а также обратиться в надзорный орган по защите данных." },
      ],
    },
    cookiePage: {
      tag: "Cookies",
      title: "Информация о cookies",
      intro: "Мы используем только необходимые технические cookies и сохраняем ваш выбор по согласию, чтобы сайт работал корректно и безопасно.",
      sections: [
        { title: "1. Необходимые cookies", text: "Необходимые cookies обеспечивают базовую работу сайта, безопасность админки и сохранение вашего выбора по cookies." },
        { title: "2. Сохранение выбора", text: "Мы сохраняем, приняли ли вы только необходимые cookies или все cookies. Эта информация хранится локально в вашем браузере." },
        { title: "3. Аналитика и маркетинг", text: "В текущей версии сайта сторонние аналитические и рекламные скрипты не используются. Если они появятся позже, управление cookies будет расширено." },
        { title: "4. Как изменить выбор", text: "Вы можете заново открыть настройки через ссылку «Настройки cookies» в футере сайта." },
      ],
    },
    footer: {
      description: "Современный строительный и монтажный партнер для реконструкций, промышленных объектов и инженерных работ в европейском стандарте.",
      navigationTitle: "Навигация",
      contactTitle: "Контакт",
      legalTitle: "Юридическая информация",
      privacy: "GDPR / конфиденциальность",
      cookies: "Информация о cookies",
      rights: "Все права защищены.",
      cookieSettings: "Настройки cookies",
    },
    form: {
      estimateTag: "Smart estimate",
      estimateTitle: "Предварительный калькулятор",
      estimateText: "Сразу показывает ориентировочный диапазон стоимости по типу работ, площади, городу и срокам.",
      typeLabel: "Тип работ",
      areaLabel: "Площадь, м²",
      cityLabel: "Город",
      deadlineLabel: "Сроки",
      resultLabel: "Ориентировочная стоимость",
      resultHint: "Точный расчет подтверждаем после уточнения проекта, фото и объема работ.",
      fastTag: "Быстрый контакт",
      fastTitle: "Отправить запрос",
      fastText: "Оставьте контакты и краткое описание. Ответим с первым расчетом в течение 24 часов.",
      nameLabel: "Имя",
      phoneLabel: "Телефон",
      emailLabel: "Email",
      photoLabel: "Фото / ссылка на объект",
      detailsLabel: "Описание проекта",
      detailsPlaceholder: "Опишите тип объекта, объем работ, сроки и особые требования.",
      consent: "Согласен на обработку персональных данных для ответа на мой запрос.",
      submit: "Отправить запрос",
      sending: "Отправляем...",
      success: "Спасибо. Мы свяжемся с вами в течение 24 часов.",
      error: "Не удалось отправить запрос. Попробуйте еще раз.",
      workTypes: [
        { value: "power", label: "Силовая электрика", rate: 5900 },
        { value: "lowcurrent", label: "Слабострумова електроінсталяція", rate: 4800 },
        { value: "solar", label: "Фотовольтаика и тепловые насосы", rate: 7800 },
        { value: "turnkey", label: "Строительство домов под ключ", rate: 12500 },
        { value: "fences", label: "Заборы и ограждения", rate: 4200 },
        { value: "interior", label: "Интерьерные работы", rate: 6200 },
        { value: "exterior", label: "Экстерьерные работы", rate: 5600 },
        { value: "panels", label: "Монтаж сэндвич-панелей", rate: 5100 },
        { value: "drilling", label: "Алмазное бурение", rate: 2900 },
        { value: "earthworks", label: "Земляные работы", rate: 3700 },
      ],
      cities: [
        { value: "praha", label: "Прага", factor: 1.15 },
        { value: "brno", label: "Брно", factor: 1.08 },
        { value: "ostrava", label: "Острава", factor: 1.04 },
        { value: "other", label: "Другой город", factor: 1 },
      ],
      deadlines: [
        { value: "urgent", label: "Срочно", factor: 1.22 },
        { value: "standard", label: "Стандартный срок", factor: 1 },
        { value: "planned", label: "Планово / без спешки", factor: 0.94 },
      ],
    },
    cookieBanner: {
      title: "Мы используем технические cookies",
      text: "Сайт сохраняет только необходимые технические cookies и ваш выбор согласия, чтобы работать корректно и безопасно.",
      essential: "Только необходимые",
      acceptAll: "Принять все",
      acceptNecessary: "Только необходимые",
      settings: "Настройки",
      saved: "Выбор cookies сохранен.",
    },
  },
};

const ukContent: SiteDictionary = {
  ...siteContent.ru,
  localeLabel: "Українська",
  languageShort: "UA",
  nav: {
    items: [
      { href: "/about", label: "Про компанію" },
      { href: "/services", label: "Послуги" },
      { href: "/career", label: "Кар'єра" },
      { href: "/contacts", label: "Контакти" },
    ],
    cta: "Отримати розрахунок",
    menu: "Меню",
  },
  home: {
    ...siteContent.ru.home,
    heroTitle: "Будівельні рішення для проєктів будь-якої складності",
    heroText:
      "Від ремонту квартир до великих промислових об'єктів. Наші спеціалісти мають понад 10 років досвіду на будівельних проєктах по всій Європі.",
    heroNote: "Гарантія якості, точні терміни та прозора комунікація з клієнтом.",
    heroPanelLabel: "Європейський стандарт реалізації",
    heroMetrics: [
      { value: "10+", label: "років досвіду спеціалістів" },
      { value: "24 год", label: "на підготовку первинного розрахунку" },
      { value: "360°", label: "від дрібного ремонту до індустріальних об'єктів" },
    ],
    aboutTag: "Про компанію",
    aboutParagraphs: [
      "ConStrukT VS Company — це команда досвідчених спеціалістів у сфері будівництва, реконструкції та інженерних робіт. Ми беремо на себе завдання різного масштабу: від невеликих ремонтів до великих промислових об'єктів.",
      "Наші майстри мають багаторічний досвід роботи по всій Європі, тому вміють тримати якість, темп і дисципліну на складних об'єктах. Для нас задоволений клієнт — головний показник якості.",
    ],
    aboutCards: [
      { title: "Якість", text: "Високий стандарт виконання та уважний контроль на кожному етапі." },
      { title: "Терміни", text: "Реалістичне планування та дотримання погодженого графіка." },
      { title: "Підхід", text: "Кожен проєкт адаптується під завдання клієнта та особливості об'єкта." },
      { title: "Прозорість", text: "Зрозумілий бюджет, чіткі етапи та чесна комунікація без сюрпризів." },
    ],
    servicesTitle: "Широкий спектр будівельних і монтажних робіт",
    servicesIntro:
      "Структура послуг побудована так, щоб клієнт швидко зрозумів, де ми можемо дати найкращий результат за якістю, швидкістю та організацією.",
    services: [
      {
        title: "Силова електрика",
        text: "Комплексні силові електромонтажні роботи для квартир, будинків, комерційних об'єктів і технічно складних майданчиків, включаючи щити та магістральні лінії.",
        items: ["Електрощити та захист", "Силові кабельні траси", "Повна силова інфраструктура"],
      },
      {
        title: "Слабкострумова електроінсталяція",
        text: "Монтаж слабкострумових, мережевих та охоронних систем з акуратною кабельною організацією, надійністю та запасом для розширення.",
        items: ["Мережеві лінії та rack-рішення", "CCTV і контроль доступу", "Структурована кабельна система"],
      },
      {
        title: "Фотовольтаїка та теплові насоси",
        text: "Проєктування і монтаж сонячних систем та суміжних енергоефективних рішень для будинків і комерційних об'єктів.",
        items: ["Дахові PV-системи", "Інвертори та технічне підключення", "Рішення для будинків і бізнесу"],
      },
      {
        title: "Будівництво будинків під ключ",
        text: "Повний цикл будівництва приватних будинків під ключ: від підготовки ділянки та коробки будівлі до фінальної здачі готового будинку.",
        items: ["Повне управління будівництвом", "Координація всіх підрядних робіт", "Готовий будинок до передачі клієнту"],
      },
      {
        title: "Вибір та встановлення парканів",
        text: "Монтаж металевих, панельних, промислових і декоративних огорож з підбором рішення за бюджетом, дизайном і строком служби.",
        items: ["Металеві паркани", "Панельні огорожі", "Ворота і хвіртки"],
      },
      {
        title: "Інтер'єрні та екстер'єрні роботи",
        text: "Повний цикл внутрішніх і зовнішніх робіт для квартир, будинків, комерційних приміщень і проєктів реконструкції.",
        items: ["Гіпсокартон, штукатурка, фарбування", "Плитка і стелі", "Фасади, утеплення, облицювання"],
      },
      {
        title: "Монтаж сендвіч-панелей",
        text: "Професійний монтаж для складів, ангарів, виробничих і торгових приміщень з контролем геометрії та герметичності.",
        items: ["Склади та ангари", "Торгові приміщення", "Промислові будівлі"],
      },
      {
        title: "Алмазне буріння",
        text: "Точне кернове буріння отворів у бетоні та залізобетоні для комунікацій, вентиляції та інженерних систем.",
        items: ["Комунікації", "Вентиляція", "Електричні системи"],
      },
      {
        title: "Земляні роботи",
        text: "Підготовка майданчиків, траншеї, фундаменти, вирівнювання та розчищення територій для приватних і великих об'єктів.",
        items: ["Траншеї та фундаменти", "Підготовка майданчика", "Демонтаж і розчищення"],
      },
    ],
    advantagesTag: "Чому ConStrukT VS",
    advantagesTitle: "Надійність, швидкість і чітке управління проєктом",
    projectsTag: "Проєкти / портфоліо",
    projectsTitle: "Кейси, які створюють довіру",
    projectsIntro: "Великі фото і зрозуміла структура допомагають швидко показати масштаб і рівень робіт.",
    beforeAfter: {
      beforeLabel: "До",
      beforeTitle: "Аналіз об'єкта і підготовка",
      beforeText: "Фіксуємо вихідний стан, завдання, обмеження та технічні вимоги.",
      afterLabel: "Після",
      afterTitle: "Готовий результат з контролем якості",
      afterText: "Передаємо завершений етап або об'єкт зі зрозумілою звітністю та фотофіксацією.",
    },
    processTag: "Як ми працюємо",
    processTitle: "Прозорий процес без зайвої бюрократії",
    steps: [
      { step: "01", title: "Консультація", text: "Обговорюємо задачі, бюджет, терміни та особливості об'єкта." },
      { step: "02", title: "Пропозиція", text: "Оцінюємо обсяг робіт і формуємо прозору пропозицію." },
      { step: "03", title: "Виконання", text: "Професійно реалізуємо проєкт з контролем якості." },
      { step: "04", title: "Здача", text: "Проводимо фінальну перевірку і передаємо результат клієнту." },
    ],
    calculatorTag: "Калькулятор вартості",
    calculatorTitle: "Отримати попередній розрахунок за 24 години",
    calculatorText: "Швидкий попередній розрахунок допомагає зрозуміти бюджетний діапазон ще до повного кошторису.",
    coverageLabel: "Географія досвіду",
    trustTag: "Блок довіри",
    trustTitle: "Документи, досвід і прозора ділова репутація",
    reviewTag: "Відгуки та рекомендації",
    reviewTitle: "Детальні кейси та реальні рекомендації надаємо за запитом",
    reviewText: "Ми будуємо довіру не вигаданими обіцянками, а досвідом, прозорістю процесу, реквізитами та якістю виконання.",
  },
  aboutPage: {
    ...siteContent.ru.aboutPage,
    title: "Будівельний партнер з європейським досвідом",
    intro: "Ми реалізуємо будівельні, монтажні та інженерні роботи у форматі, зручному і для приватних клієнтів, і для професійних інвесторів.",
    text: [
      "ConStrukT VS Company базується на досвіді виконробів, монтажників і координаторів, які працювали на проєктах різного масштабу в Європі.",
      "Наша задача — не лише якісно будувати, а й грамотно вести весь процес: планування, координацію, комунікацію та фінальну здачу.",
    ],
    stats: [
      { value: "10+", label: "років досвіду спеціалістів" },
      { value: "EU", label: "проєкти в європейському середовищі" },
      { value: "24 год", label: "на відповідь і перший розрахунок" },
    ],
    valuesTitle: "На чому будується співпраця",
    values: [
      { title: "Системне управління", text: "Ми контролюємо послідовність робіт, терміни та відповідальність." },
      { title: "Якість виконання", text: "Деталі реалізації так само важливі, як і загальний підсумок." },
      { title: "Пряма комунікація", text: "Клієнт завжди розуміє, хто веде проєкт і що буде далі." },
      { title: "Гнучкість", text: "Беремо і компактні задачі, і великі індустріальні об'єкти в одному стандарті." },
    ],
  },
  servicesPage: {
    title: "Будівельні та монтажні послуги від одного партнера",
    intro: "Від підготовки майданчика до основної будівельної частини та спеціалізованого монтажу: одна відповідальність, один партнер, один стандарт якості.",
    outroTitle: "Потрібен точніший обсяг?",
    outroText: "Надішліть запит, і ми підготуємо структуроване рішення, терміни та рамку бюджету.",
  },
  contactsPage: {
    tag: "Контакти",
    title: "Готові обговорити ваш проєкт",
    intro: "Надішліть нам заявку з базовими даними. Ми повернемося з першим варіантом рішення та подальшими кроками.",
    detailsTitle: "Дані компанії",
    note: "Для розрахунку проєкту найкраще використовувати форму. Юридичні реквізити також зазначені в розділах GDPR і cookies.",
  },
  careerPage: {
    tag: "Кар'єра",
    title: "Ми зростаємо і шукаємо сильних спеціалістів",
    intro: "Якщо ви працюєте відповідально, любите якість і вмієте бути частиною команди, нам буде цікаво познайомитися.",
    openPositionsTag: "Відкриті позиції",
    openPositionsTitle: "Актуальні можливості в команді",
    noJobsTitle: "Зараз відкритих позицій немає",
    noJobsText: "Ви все одно можете надіслати контакт або CV. Коли з'явиться відповідна роль, ми зв'яжемося з вами.",
    perksTag: "Що пропонуємо",
    perksTitle: "Як влаштована робота з нами",
    perks: [
      { title: "Стабільні проєкти", text: "Робота на реальних об'єктах без випадкових простоїв." },
      { title: "Чесна оплата", text: "Винагорода відповідно до досвіду, відповідальності та якості роботи." },
      { title: "Оснащення", text: "Нормальний інструмент, організація робіт і робоче середовище без хаосу." },
      { title: "Ріст", text: "Довгострокова співпраця та можливості розвитку." },
    ],
    applyCall: "Відгукнутися",
    emailAction: "Надіслати email",
  },
  privacyPage: {
    tag: "Юридична інформація",
    title: "Конфіденційність та обробка персональних даних",
    intro: "На цій сторінці описано, як ConStrukT VS Compani s.r.o. обробляє дані з контактних форм і ділової комунікації.",
    sections: [
      { title: "1. Оператор даних", text: "Оператором персональних даних є ConStrukT VS Compani s.r.o., IČO 24503215, DIČ CZ24503215, адреса: Sokolská 1883/8, 120 00 Praha 2 - Nové Město, Czech Republic. Контакт: ConStrukT.VS@seznam.cz, datová schránka 49t6e8." },
      { title: "2. Які дані ми обробляємо", text: "Ми обробляємо дані, які ви самі передаєте через форму: ім'я, телефон, email, місто, тип робіт, площу, строки, посилання на фото та опис проєкту." },
      { title: "3. Мета обробки", text: "Дані використовуються лише для обробки заявки, підготовки попереднього розрахунку, ділової комунікації та можливого укладення договору." },
      { title: "4. Правова підстава", text: "Правовою підставою є переддоговірна комунікація, законний інтерес бізнесу та ваша згода при надсиланні форми." },
      { title: "5. Строк зберігання", text: "Заявки зберігаються лише стільки, скільки необхідно для їх обробки та розумного ведення ділової документації." },
      { title: "6. Передача даних", text: "Ми не продаємо персональні дані. Вони можуть оброблятися лише технічними постачальниками хостингу та інфраструктури, необхідними для роботи сайту." },
      { title: "7. Ваші права", text: "Ви можете запросити доступ, виправлення, обмеження або видалення даних, а також звернутися до наглядового органу із захисту даних." },
    ],
  },
  cookiePage: {
    tag: "Cookies",
    title: "Інформація про cookies",
    intro: "Ми використовуємо лише необхідні технічні cookies та зберігаємо ваш вибір щодо згоди, щоб сайт працював коректно і безпечно.",
    sections: [
      { title: "1. Необхідні cookies", text: "Необхідні cookies забезпечують базову роботу сайту, безпеку адмінки та збереження вашого вибору щодо cookies." },
      { title: "2. Збереження вибору", text: "Ми зберігаємо, чи прийняли ви лише необхідні cookies або всі cookies. Ця інформація зберігається локально у вашому браузері." },
      { title: "3. Аналітика та маркетинг", text: "У поточній версії сайту сторонні аналітичні та рекламні скрипти не використовуються. Якщо вони з'являться пізніше, керування cookies буде розширено." },
      { title: "4. Як змінити вибір", text: "Ви можете знову відкрити налаштування через посилання «Налаштування cookies» у футері сайту." },
    ],
  },
  footer: {
    description: "Сучасний будівельний та монтажний партнер для реконструкцій, промислових об'єктів та інженерних робіт у європейському стандарті.",
    navigationTitle: "Навігація",
    contactTitle: "Контакт",
    legalTitle: "Юридична інформація",
    privacy: "GDPR / конфіденційність",
    cookies: "Інформація про cookies",
    rights: "Усі права захищені.",
    cookieSettings: "Налаштування cookies",
  },
  form: {
    estimateTag: "Smart estimate",
    estimateTitle: "Попередній калькулятор",
    estimateText: "Одразу показує орієнтовний діапазон вартості за типом робіт, площею, містом та строками.",
    typeLabel: "Тип робіт",
    areaLabel: "Площа, м²",
    cityLabel: "Місто",
    deadlineLabel: "Терміни",
    resultLabel: "Орієнтовна вартість",
    resultHint: "Точний розрахунок підтверджуємо після уточнення проєкту, фото та обсягу робіт.",
    fastTag: "Швидкий контакт",
    fastTitle: "Надіслати запит",
    fastText: "Залиште контакти та короткий опис. Відповімо з першим розрахунком протягом 24 годин.",
    nameLabel: "Ім'я",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    photoLabel: "Фото / посилання на об'єкт",
    detailsLabel: "Опис проєкту",
    detailsPlaceholder: "Опишіть тип об'єкта, обсяг робіт, строки та особливі вимоги.",
    consent: "Погоджуюсь на обробку персональних даних для відповіді на мій запит.",
    submit: "Надіслати запит",
    sending: "Надсилаємо...",
    success: "Дякуємо. Ми зв'яжемося з вами протягом 24 годин.",
    error: "Не вдалося надіслати запит. Спробуйте ще раз.",
    workTypes: [
      { value: "power", label: "Силова електрика", rate: 5900 },
      { value: "lowcurrent", label: "Слабкострумова електроінсталяція", rate: 4800 },
      { value: "solar", label: "Фотовольтаїка та теплові насоси", rate: 7800 },
      { value: "turnkey", label: "Будівництво будинків під ключ", rate: 12500 },
      { value: "fences", label: "Паркани та огорожі", rate: 4200 },
      { value: "interior", label: "Інтер'єрні роботи", rate: 6200 },
      { value: "exterior", label: "Екстер'єрні роботи", rate: 5600 },
      { value: "panels", label: "Монтаж сендвіч-панелей", rate: 5100 },
      { value: "drilling", label: "Алмазне буріння", rate: 2900 },
      { value: "earthworks", label: "Земляні роботи", rate: 3700 },
    ],
    cities: [
      { value: "praha", label: "Прага", factor: 1.15 },
      { value: "brno", label: "Брно", factor: 1.08 },
      { value: "ostrava", label: "Острава", factor: 1.04 },
      { value: "other", label: "Інше місто", factor: 1 },
    ],
    deadlines: [
      { value: "urgent", label: "Терміново", factor: 1.22 },
      { value: "standard", label: "Стандартний термін", factor: 1 },
      { value: "planned", label: "Планово / без поспіху", factor: 0.94 },
    ],
  },
  cookieBanner: {
    title: "Ми використовуємо технічні cookies",
    text: "Сайт зберігає лише необхідні технічні cookies і ваш вибір згоди, щоб працювати коректно та безпечно.",
    essential: "Лише необхідні",
    acceptAll: "Прийняти все",
    acceptNecessary: "Лише необхідні",
    settings: "Налаштування",
    saved: "Вибір cookies збережено.",
  },
};

export function getSiteContent(locale: Locale): SiteDictionary {
  if (locale === "uk") {
    return ukContent;
  }

  return siteContent[locale];
}
