export const METADATA = {
  author: "Matteo Marino",
  title: "Matteo Marino | Web Developer",
  description:
    "Matteo Marino is a professional Web Developer, dedicated to crafting elegant and modern websites and apps that engage users.",
  siteUrl: "https://www.matteomarino.cloud/",
  twitterHandle: "@matteomarino",
  keywords: [
    "Matteo Marino",
    "Web Developer",
    "Frontend Engineer",
    "Fullstack Developer",
    "Portfolio",
    "Next.js",
    "React",
  ].join(", "),
  image:
    "https://www.matteomarino.cloud/preview.png",
  language: "Italian",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Competenze",
    ref: "skills",
  },
  {
    name: "Progetti",
    ref: "projects",
  },
  {
    name: "Esperienza",
    ref: "work",
  },
  {
    name: "Contatti",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Uno sviluppatore web appassionato",
  "Realizzo siti web ed e-commerce",
  "Sviluppo applicazioni mobili performanti",
  "Ottimizzo la tua presenza online (SEO)",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:info@matteomarino.cloud",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/matteo-marino-web-developer/",
  },
  {
    name: "github",
    url: "https://github.com/matteomarino",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/matteomarino.cloud/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "figma",
    "vite",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "tailwindcss",
    "chakra-ui",
    "antdesign",
  ],
  databases: ["mongodb", "mysql"],
  other: ["git", "vercel", "cursor"],
};

export const PROJECTS = [
  {
    name: "Wehea Creative Studio",
    imageKey: "nextboss",
    description: "Studio creativo per soluzioni digitali innovative 🎨",
    gradient: ["#FF69B4", "#FFB6C1"],
    url: "https://wehea.it",
    tech: ["nextjs", "react", "tailwindcss", "figma"],
  },
  {
    name: "Naturalism Natural",
    imageKey: "ready-ai",
    description: "E-commerce di prodotti naturali e biologici �",
    gradient: ["#F4D03F", "#58D68D"],
    url: "https://naturalismnatural.it",
    tech: ["nextjs", "react", "mongodb", "tailwindcss"],
  },
  {
    name: "Archi del Duca",
    imageKey: "round1",
    description: "Sito web per una struttura ricettiva di lusso 🏰",
    gradient: ["#5D4037", "#8D6E63"],
    url: "https://archidelduca.it",
    tech: ["nextjs", "react", "sass", "figma"],
  },
  {
    name: "La Dimora di Nonna Dora",
    imageKey: "react-native-directory",
    description: "Sito web per casa vacanze accogliente 🏡",
    gradient: ["#000000", "#1A1A1A"],
    url: "https://ladimoradinonnadora.it",
    tech: ["nextjs", "react", "tailwindcss"],
  },
  {
    name: "We Engineering",
    imageKey: "buywow",
    description: "Sito corporate per studio di ingegneria �️",
    gradient: ["#FFD54F", "#FFB300"],
    url: "https://weengineering.it",
    tech: ["nextjs", "react", "typescript", "tailwindcss"],
  },
  {
    name: "Como Intelvi Lodges",
    imageKey: "bot9",
    description: "Portale per affitti turistici sul Lago di Como 🏔️",
    gradient: ["#3F51B5", "#7986CB"],
    url: "https://comointelvilodges.it",
    tech: ["nextjs", "react", "mongodb", "tailwindcss"],
  },
];

export const WORK_CONTENTS = {
  FREELANCE: [
    {
      title: "Matteo Marino Dev",
      description:
        "Come sviluppatore freelance, aiuto aziende e professionisti a creare una presenza online forte e moderna, specializzandomi in siti vetrina, e-commerce e applicazioni web performanti.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Trasformo le tue idee in realtà digitale
        </div>
      ),
    },
    {
      title: "Servizi",
      description:
        "Offro soluzioni complete: dalla progettazione UI/UX su Figma allo sviluppo frontend con React e Next.js, fino all'ottimizzazione SEO per garantire la massima visibilità sui motori di ricerca.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer & SEO Specialist
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
