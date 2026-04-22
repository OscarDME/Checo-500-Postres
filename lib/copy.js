// ÚNICA FUENTE DE CONTENIDO VISIBLE — todo el texto mostrado por la landing
// vive aquí. Los componentes NO deben tener strings hardcodeados (excepto iconos
// UI neutros). Cualquier cambio de copy se hace en este archivo.
export const copy = {
  metadata: {
    title: "500 zdravých dezertů — Babička Růžena",
    description:
      "500 receptů na vláčné, nadýchané a lahodné dezerty, zcela bez lepku, mléka a přidaného cukru.",
    productName: "Kniha „500 dezertů babičky Růženy“",
  },

  hero: {
    urgencyBar: "NABÍDKA KONČÍ DNES · SLEVA 90 % pouze dnes",
    badge: "Nová kuchařka · Více než 3 200 spokojených čtenářek",
    headline: {
      before: "UŽ NIKDY SE NEBUDEŠ DÍVAT NA ",
      accent: "ZDRAVÉ DEZERTY",
      after: " STEJNĚ JAKO DŘÍV, AŽ UVIDÍŠ TOHLE.",
    },
    subheadline:
      "Objev 500 receptů na vláčné, nadýchané a výborné dezerty – zcela bez lepku, laktózy a přidaného cukru. Vychutnej si každé sousto bez výčitek, nadýmání nebo omezování.",
    ctaLabel: "ANO, CHCI KNIHU RECEPTŮ",
    starsAriaLabel: "Hodnocení 5 z 5 hvězdiček",
    starsRating: "5.0",
    socialProof: "+3 200 spokojených zákazníků",
    trustChips: [
      { icon: "🌾", text: "Bez lepku" },
      { icon: "🥛", text: "Bez mléka" },
      { icon: "🍬", text: "Bez cukru" },
    ],
    image: {
      src: "/hero-mockup.webp",
      alt: "Kniha 500 zdravých dezertů babičky Růženy",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Hotovo za", bottom: "20 min" },
      discount: { icon: "🔥", top: "Dnes", bottom: "SLEVA 90 %" },
    },
  },

  preview: {
    kicker: "Malá ochutnávka",
    headline: "PODÍVEJ SE NA TY DOBROTY, KTERÉ SE NAUČÍŠ PÉCT",
    items: [
      { src: "/preview/3-6.webp", alt: "Zdravý dezert 1" },
      { src: "/preview/2-7.webp", alt: "Zdravý dezert 2" },
      { src: "/preview/4-3.webp", alt: "Zdravý dezert 3" },
      { src: "/preview/3-5-1.webp", alt: "Zdravý dezert 4" },
      { src: "/preview/1-7.webp", alt: "Zdravý dezert 5" },
      { src: "/preview/4-2.webp", alt: "Zdravý dezert 6" },
      { src: "/preview/7-1-2-2.webp", alt: "Zdravý dezert 7" },
      { src: "/preview/1-5-1.webp", alt: "Zdravý dezert 8" },
      { src: "/preview/3-3.webp", alt: "Zdravý dezert 9" },
      { src: "/preview/2-4.webp", alt: "Zdravý dezert 10" },
      { src: "/preview/1-4.webp", alt: "Zdravý dezert 11" },
      { src: "/preview/1-6-1.webp", alt: "Zdravý dezert 12" },
      { src: "/preview/2-3.webp", alt: "Zdravý dezert 13" },
      { src: "/preview/chocolate.webp", alt: "Zdravý čokoládový dezert" },
      { src: "/preview/ce2f26de6ce5f6b237a4-1.webp", alt: "Zdravý dezert 15" },
      { src: "/preview/Design-sem-nome-5-1.webp", alt: "Zdravý dezert 16" },
      { src: "/preview/12-1-2.webp", alt: "Zdravý dezert 17" },
      { src: "/preview/2-6.webp", alt: "Zdravý dezert 18" },
      { src: "/preview/1-8.webp", alt: "Zdravý dezert 19" },
    ],
  },

  benefits: {
    kicker: "Proč si ji zamiluješ",
    headline: "Zdravé dezerty bez kompromisů v chuti",
    items: [
      { icon: "🎂", title: "500 chutí, které tě nikdy neomrzí" },
      { icon: "✨", title: "Dokonalá textura i bez lepku" },
      { icon: "🌾", title: "Nepotřebuješ žádné speciální mouky" },
      { icon: "⚡", title: "Bleskové dezerty hotové do 20 minut" },
      { icon: "💚", title: "Zcela bez mléka a bez cukru" },
      { icon: "📖", title: "Podrobné postupy krok za krokem" },
    ],
  },

  samples: {
    kicker: "Vyzkoušej je jako první",
    headline: "NEUVĚŘITELNĚ LAHODNÉ DEZERTY (VE ZDRAVÉ VERZI):",
    badge: "Bez cukru, lepku a laktózy",
    items: [
      {
        name: "ČOKOLÁDOVÝ DORTÍK",
        variant: "(FIT A NADÝCHANÝ)",
        kcal: "88",
        time: "20 minut",
        src: "/samples/pastel-chocolate.gif",
        alt: "Fit čokoládový dortík",
      },
      {
        name: "MRKVOVÝ DORT",
        variant: "(S FIT ČOKOLÁDOVOU POLEVOU)",
        kcal: "120",
        time: "20 minut",
        src: "/samples/pastel-zanahoria.gif",
        alt: "Mrkvový dort s čokoládou",
      },
      {
        name: "BANÁNOVÝ CHLEBÍČEK",
        variant: "(FIT)",
        kcal: "90",
        time: "20 minut",
        src: "/samples/pastel-platano.gif",
        alt: "Fit banánový chlebíček",
      },
      {
        name: "DORT TRES LECHES",
        variant: "(BEZ LAKTÓZY)",
        kcal: "100",
        time: "20 minut",
        src: "/samples/pastel-tres-leches.gif",
        alt: "Dort Tres leches bez laktózy",
      },
      {
        name: "ČOKOLÁDOVÝ DORT",
        variant: "(Z 5 INGREDIENCÍ)",
        kcal: "108",
        time: "20 minut",
        src: "/samples/chocotorta.gif",
        alt: "Zdravý čokoládový dort",
      },
      {
        name: "CITRONOVÝ KOLÁČ",
        variant: "(PŘIPRAVENÝ V MIXÉRU)",
        kcal: "100",
        time: "20 minut",
        src: "/samples/pastel-limon.gif",
        alt: "Citronový koláč",
      },
      {
        name: "DORT RED VELVET",
        variant: "(FIT)",
        kcal: "105",
        time: "19 minut",
        src: "/samples/pastel-red-velvet.gif",
        alt: "Fit dort Red Velvet",
      },
    ],
    caloriesLabel: "Kalorie",
    timeLabel: "Čas",
  },

  moreRecipesCta: {
    pretitle: "A dalších více než",
    big: "493",
    post: "RECEPTŮ NA DEZERTY...",
    ctaLabel: "STÁHNOUT MOJI KNIHU",
  },

  testimonials: {
    kicker: "Skutečné ohlasy",
    headline: "PODÍVEJ SE, CO ŘÍKAJÍ TI, KTEŘÍ UŽ PEČOU S NÁMI",
    subheadline: "Co s námi sdílejí naše čtenářky",
    studentsBadge: "+ 3 200 spokojených zákazníků",
    items: [
      {
        text: "Včera jsem upekla ten čokoládový koláč a nezbyl ani kousek 😍 Rodina už mě prosila, ať ho o víkendu udělám znovu. Bez cukru a bez lepku... to je prostě neuvěřitelné!!",
        time: "10:23",
      },
      {
        text: "Nechápala jsem, jak to může být tak dobré bez mléka a cukru. Bezlaktozový dort Tres leches mi vyrazil dech 🤯 Už tři dny peču v kuse.",
        time: "11:47",
      },
      {
        text: "Mám celiakii už 10 let a nikdy jsem si nemohla dát pořádný dort. S touhle knihou si ho konečně můžu vychutnat jako všichni ostatní 😭❤️",
        time: "14:02",
      },
      {
        text: "Mrkvový dort s čokoládovou polevou dopadl ÚPLNĚ STEJNĚ jako z cukrárny, akorát bez mouky a cukru. Donesla jsem ho do práce a nikdo nechtěl věřit, že je zdravý hahaha.",
        time: "09:15",
      },
      {
        text: "Knihu mám asi měsíc a vyzkoušela jsem už víc než 15 receptů. Fit Red Velvet je nádherně nadýchaný a má úplně dokonalou barvu 🎂 100% všem doporučuji!!",
        time: "16:38",
      },
      {
        text: "Ze začátku jsem byla trochu skeptická... ale hned první dezert mě dostal. Fit banánový chlebíček za 20 minut je naprostý zázrak ⭐⭐⭐⭐⭐ Děkuji, že jste.",
        time: "20:54",
      },
    ],
    mockup: {
      src: "/testimonials/mockup-grande.webp",
      alt: "Kuchařka na mobilu, počítači a tabletu",
    },
  },

  categories: {
    kicker: "Aby tě to nikdy neomrzelo",
    headline: "RECEPTY ROZDĚLENÉ DO KATEGORIÍ",
    groups: [
      {
        title: "100 plněných dezertů",
        items: [
          { src: "/preview/1-4.webp", alt: "Plněný dezert 1" },
          { src: "/preview/7-1-2-2.webp", alt: "Plněný dezert 2" },
          { src: "/preview/12-1-2.webp", alt: "Plněný dezert 3" },
          { src: "/preview/2-3.webp", alt: "Plněný dezert 4" },
          { src: "/preview/7-1-2-1.webp", alt: "Plněný dezert 5" },
        ],
      },
      {
        title: "100 ovocných dezertů",
        items: [
          { src: "/preview/1-5-1.webp", alt: "Ovocný dezert 1" },
          { src: "/preview/2-4.webp", alt: "Ovocný dezert 2" },
          { src: "/preview/3-3.webp", alt: "Ovocný dezert 3" },
          { src: "/preview/Design-sem-nome-5-1.webp", alt: "Ovocný dezert 4" },
          { src: "/preview/Design-sem-nome-6-1.webp", alt: "Ovocný dezert 5" },
        ],
      },
      {
        title: "100 klasických dezertů",
        items: [
          { src: "/preview/1-6-1.webp", alt: "Klasický dezert 1" },
          { src: "/preview/2-5-1.webp", alt: "Klasický dezert 2" },
          { src: "/preview/4-2.webp", alt: "Klasický dezert 3" },
        ],
      },
      {
        title: "100 slavných dezertů z TikToku",
        items: [
          { src: "/preview/1-7.webp", alt: "Dezert z TikToku 1" },
          { src: "/preview/2-6.webp", alt: "Dezert z TikToku 2" },
          { src: "/preview/3-5-1.webp", alt: "Dezert z TikToku 3" },
          { src: "/preview/4-3.webp", alt: "Dezert z TikToku 4" },
        ],
      },
      {
        title: "100 nepečených dezertů",
        items: [
          { src: "/preview/1-8.webp", alt: "Nepečený dezert 1" },
          { src: "/preview/2-7.webp", alt: "Nepečený dezert 2" },
          { src: "/preview/3-6.webp", alt: "Nepečený dezert 3" },
          { src: "/preview/4-4.webp", alt: "Nepečený dezert 4" },
        ],
      },
    ],
    ctaLabel: "CHCI TYTO RECEPTY",
  },

  story: {
    kicker: "Příběh za knihou",
    headline: "JAK TATO KUCHAŘKA VZNIKLA?",
    paragraphs: [
      "Babička Růžena vždycky provoněla celý náš dům dezerty, které spojovaly naši rodinu. Ale když moje dcera Tereza zjistila, že nesmí jíst lepek, všechno se změnilo.",
      "Jako nutriční specialistka jsem se rozhodla, že společně s babičkou tyto recepty upravíme do zdravější podoby: bez cukru, bez lepku a bez laktózy. Po mnoha pokusech se nám podařilo dosáhnout výsledků, které překvapily i samotnou babičku Růženu.",
      "A tak vznikla tato kniha: rodinné dědictví plné lásky a chuti, které se teď může stát součástí i tvého příběhu.",
    ],
    image: {
      src: "/story.webp",
      alt: "Babička Růžena a její vnučka v kuchyni",
    },
  },

  bonuses: {
    kicker: "Dárky navíc",
    headline: "ZÍSKÁŠ +5 BONUSŮ ZCELA ZDARMA",
    items: [
      {
        label: "BONUSOVÁ KNIHA 1",
        name: "SUŠENKY A MUFFINY",
        desc: "20 neodolatelných receptů na křupavé sušenky a vláčné muffiny, zdravě a chutně.",
        price: "499 Kč",
        freeLabel: "DNES ZDARMA",
        image: { src: "/bonuses/bonus-galletas.webp", alt: "Bonus Sušenky a Muffiny" },
      },
      {
        label: "BONUSOVÁ KNIHA 2",
        name: "PROTEINOVÉ RECEPTY PRO HORKOVZDUŠNOU FRITÉZU",
        desc: "20 receptů na rychlá, zdravá a na bílkoviny bohatá jídla z horkovzdušné fritézy.",
        price: "499 Kč",
        freeLabel: "DNES ZDARMA",
        image: { src: "/bonuses/bonus-freidora.webp", alt: "Bonus Horkovzdušná fritéza" },
      },
      {
        label: "BONUSOVÁ KNIHA 3",
        name: "RECEPTY NA ZDRAVÉ KBLIHY",
        desc: "Křupavé kousky bez výčitek, zdravé a plné chuti v každém soustu.",
        price: "499 Kč",
        freeLabel: "DNES ZDARMA",
        image: { src: "/bonuses/bonus-bunuelos.webp", alt: "Bonus Zdravé Koblížky" },
      },
      {
        label: "BONUSOVÁ KNIHA 4",
        name: "RECEPTY NA VÝBORNÉ SALÁTY",
        desc: "Svěží, snadné a zdravé saláty, abys mohla jíst chutně a vyváženě každý den.",
        price: "499 Kč",
        freeLabel: "DNES ZDARMA",
        image: { src: "/bonuses/bonus-ensaladas.webp", alt: "Bonus Saláty" },
      },
      {
        label: "BONUSOVÁ KNIHA 5",
        name: "67 DETOXIKAČNÍCH ŠŤÁV",
        desc: "Obnov svou energii díky 67 receptům na přírodní, osvěžující a výživné detoxikační šťávy.",
        price: "499 Kč",
        freeLabel: "DNES ZDARMA",
        image: { src: "/bonuses/bonus-sucos.webp", alt: "Bonus 67 detoxikačních šťáv" },
      },
    ],
    secretBonus: {
      label: "+3 TAJNÉ BONUSY",
      name: "Exkluzivní překvapení pro ty, kteří si kuchařku pořídí ještě dnes",
      price: "1 499 Kč",
      freeLabel: "DNES ZDARMA",
      image: { src: "/bonuses/bonus-secreto.webp", alt: "Krabice s tajnými bonusy" },
    },
    ctaLabel: "CHCI TYTO RECEPTY",
  },

  audience: {
    kicker: "Je to pro tebe?",
    headline: "PRO LIDI, KTEŘÍ HLEDAJÍ:",
    items: [
      "Zdravější varianty receptů",
      "Změnu svých stravovacích návyků",
      "Mají intoleranci na laktózu",
      "Trpí celiakií",
      "Mají cukrovku",
    ],
  },

  finalCta: {
    flagline: "Prvních 100 zákazníků získá 20 videolekcí zdarma",
    headline: "KNIHA 500 DEZERTŮ OD BABIČKY RŮŽENY ®",
    subheadline: "Všechno, co potřebuješ pro pečení bez výčitek",
    includesTitle: "+5 KNIH ZDARMA:",
    includes: [
      "+ RECEPTY NA VÝBORNÉ SALÁTY A ZÁLIVKY",
      "+ RECEPTY NA ZDRAVÉ KBLIHY",
      "+ RECEPTY NA SUŠENKY A MUFFINY",
      "+ PROTEINOVÉ RECEPTY PRO HORKOVZDUŠNOU FRITÉZU",
      "+ 67 RECEPTŮ NA DETOXIKAČNÍ ŠŤÁVY",
    ],
    secretTitle: "+3 TAJNÉ BONUSY:",
    discountLabel: "SLEVA 90 %",
    regularPriceLabel: "BĚŽNĚ",
    regularPrice: "1 499 Kč",
    regularPriceSuffix: "...",
    offerPriceLabel: "Dnes jen za",
    offerCurrency: "",
    offerPrice: "199 Kč",
    button: "ANO, CHCI JI",
    urgencyNote: "**NABÍDKA KONČÍ DNES**",
    paymentLabel: "PLATEBNÍ METODY",
    paymentImage: { src: "/payment-methods.webp", alt: "Platební metody" },
    secureLabel: "100% BEZPEČNÝ NÁKUP",
    secureImage: { src: "/secure-site.webp", alt: "100% bezpečný nákup" },
    image: { src: "/final-mockup.webp", alt: "Kuchařky na všech platformách" },
    bonusesBadge: "+8 bonusů zdarma",
    discountStickerLabel: "Sleva",
    discountStickerValue: "SLEVA 90 %",
  },

  delivery: {
    kicker: "Doručení",
    headline: "JAK RECEPTY OBDRŽÍM?",
    items: [
      { icon: "🖨️", text: "Můžeš si je snadno vytisknout na papír." },
      { icon: "📱", text: "Můžeš si je prohlížet na svém mobilu." },
      { icon: "💻", text: "Můžeš je číst pohodlně na počítači." },
      { icon: "🚫", text: "Nebo také na tabletu." },
      { icon: "♾️", text: "Doživotní přístup: Včetně všech nových receptů." },
      { icon: "📩", text: "Ztratila jsi recept? Pošleme ti ho znovu." },
      { icon: "📚", text: "Získáš nové e-knihy každý měsíc." },
    ],
  },

  guarantee: {
    kicker: "Bez rizika",
    headline: "VYZKOUŠEJ BEZ RIZIKA — 60denní bezpodmínečná záruka.",
    body: "Máš 60 dní na to, abys vše v klidu vyzkoušela. Pokud tě recepty nepřesvědčí, vrátím ti peníze do posledního haléře. Bez zbytečných otázek. Bez stresu.",
    alt: "Pečeť pro 60denní bezpodmínečnou záruku",
    image: { src: "/guarantee-badge.webp", alt: "Záruka 60 dní" },
  },

  faq: {
    kicker: "Otázky a odpovědi",
    headline: "FAQ — na co se nejčastěji ptáte",
    items: [
      {
        q: "Jsou suroviny drahé?",
        a: "Ne! Používáme běžné suroviny, které už máš nejspíš doma: žádné složité nebo předražené produkty.",
      },
      {
        q: "Je dezert bez pšenice, mléka, laktózy a cukru opravdu dobrý?",
        a: "Ano, a co víc: příprava je neskutečně snadná! Recepty jsou navržené tak, aby si zachovaly chuť, kterou miluješ, ale s využitím lehčích a snadno dostupných surovin.",
      },
      {
        q: "Jsou recepty vhodné pro začátečníky (kteří nikdy nepekli)?",
        a: "Pro začátečníky jsou naprosto ideální! Vše je vysvětleno krok za krokem, za použití obyčejných surovin a jasných pokynů. Pokud umíš zapnout troubu, zvládneš je upéct taky.",
      },
      {
        q: "Čím se dezerty sladí?",
        a: "Můžeš si vybrat, co ti vyhovuje nejvíc: ovoce (banány nebo datle), med, nebo sladidla jako stévie a erythritol. V každém receptu je uvedeno přesné množství pro každou z variant.",
      },
      {
        q: "Můžu cukr nahradit ovocem (banány, datlemi)? Jak na to?",
        a: "Ano, samozřejmě! A je to jednodušší, než se zdá: v receptu zjistíš, jaké ovoce použít, kolik ho přidat a jak dosáhnout dokonalého, vláčného a sladkého výsledku.",
      },
      {
        q: "Jaké mouky používáte?",
        a: "Používáme směs bezlepkových muk, jako je rýžová, ovesná nebo mandlová, které dnes najdeš v každém supermarketu – často navíc vyjdou levněji než klasická pšeničná.",
      },
      {
        q: "Za jak dlouho je dezert hotový?",
        a: "Většina receptů zabere 20 nebo 30 minut. Než si uvaříš kávu, kuchyní se už bude linout vůně čerstvého dezertu.",
      },
    ],
  },

  footer: {
    brand: "Babička Růžena",
    links: [
      { label: "Zásady ochrany osobních údajů", href: "https://grandmateresa.com/politica-de-privacidad/" },
      { label: "Podmínky použití", href: "https://grandmateresa.com/condiciones-de-uso/" },
      { label: "Zásady vrácení zboží", href: "https://grandmateresa.com/politica-de-devoluciones/" },
    ],
    copyright: "© 2026 / Babička Růžena – Všechna práva vyhrazena.",
  },

  stickyCta: {
    priceLabel: "Dnes jen",
    offerPrice: "199 Kč",
    strikePrice: "1 499 Kč",
    ctaLabel: "CHCI KNIHU",
  },
};