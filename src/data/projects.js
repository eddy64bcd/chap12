// Les 12 projets réalisés dans le cadre de la formation
// "Intégrateur Web" d'OpenClassrooms.
// Complète le champ `repo` avec le lien GitHub exact de chaque projet
// quand tu l'auras mis en ligne (ou remplace-le simplement).

const GITHUB_PROFILE = "https://github.com/eddy64bcd";

const projects = [
  {
    id: 1,
    title: "Démarrez votre formation d'intégrateur web",
    category: "Méthodologie",
    description:
      "Cadrage du parcours de formation : organisation, méthode de travail et définition d'objectifs pour la reconversion vers le développement web.",
    tech: ["Méthodologie", "Gestion de projet"],
  
  },
  {
    id: 2,
    title: "Premiers pas sur le langage HTML",
    category: "HTML / CSS",
    description:
      "Réalisation d'une première page web complète en HTML et CSS, prise en main de la structure sémantique et des bases du style.",
    tech: ["HTML", "CSS"],
    repo: `${GITHUB_PROFILE}/chap2`,
  },
  {
    id: 3,
    title: "Booki — page d'accueil d'une agence de voyage",
    category: "HTML / CSS",
    description:
      "Intégration responsive de la page d'accueil de Booki à partir d'une maquette, avec une approche mobile-first en HTML/CSS pur.",
    tech: ["HTML", "CSS", "Responsive"],
    repo: `${GITHUB_PROFILE}/chap3`,
  },
  {
    id: 4,
    title: "Ohmyfood — interface mobile avec animations CSS",
    category: "HTML / CSS",
    description:
      "Site food-tech avec une interface mobile-first, des animations et transitions CSS, et une feuille de style organisée en Sass.",
    tech: ["HTML", "Sass", "Animations CSS"],
    repo: `${GITHUB_PROFILE}/ohmyfood`,
  },
  {
    id: 5,
    title: "Premiers pas sur le langage JavaScript",
    category: "JavaScript",
    description:
      "Développement d'un carrousel d'images en JavaScript vanilla pour le site d'une entreprise d'imprimerie.",
    tech: ["JavaScript", "DOM"],
    repo: `${GITHUB_PROFILE}/projet-5`,
  },
  {
    id: 6,
    title: "Créez une page web dynamique avec JavaScript",
    category: "JavaScript",
    description:
      "Site portfolio dynamique pour un architecte, avec appel d'API, manipulation du DOM et filtrage des projets côté client.",
    tech: ["JavaScript", "API", "DOM"],
    repo: `${GITHUB_PROFILE}/chap6`,
  },
  {
    id: 7,
    title: "Planifiez le développement du site de votre client",
    category: "Méthodologie",
    description:
      "Cahier des charges et planification technique d'une plateforme de création de menus pour un restaurant.",
    tech: ["Planification", "Cahier des charges"],
    repo: `${GITHUB_PROFILE}/chap7`,
  },
  {
    id: 8,
    title: "Kasa — application de location immobilière",
    category: "React",
    description:
      "Application React de location entre particuliers : découpage en composants réutilisables, routing avec React Router et gestion des props.",
    tech: ["React", "React Router", "JavaScript"],
     repo: `${GITHUB_PROFILE}/chap8`,
  },
  {
    id: 9,
    title: "Optimisez le référencement d'un site de photographe",
    category: "SEO / Accessibilité",
    description:
      "Amélioration du référencement naturel (SEO) et de l'accessibilité d'un site vitrine pour un photographe indépendant.",
    tech: ["SEO", "Accessibilité", "Performance"],
    repo: `${GITHUB_PROFILE}/chap9`,
  },
  {
    id: 10,
    title: "Débuggez le site d'une agence d'événementiel",
    category: "JavaScript",
    description:
      "Correction de bugs JavaScript et CSS sur le site de l'agence 724 Events, avec mise en place de tests pour fiabiliser le code.",
    tech: ["JavaScript", "Débogage", "Tests"],
    repo: `${GITHUB_PROFILE}/projet10`,
  },
  {
    id: 11,
    title: "Argent Bank — front-end d'une application bancaire",
    category: "React",
    description:
      "Front-end React d'une application bancaire : authentification, appels API, gestion de l'état global avec Redux.",
    tech: ["React", "Redux", "API REST"],
    repo: `${GITHUB_PROFILE}/chap11`,
  },
  {
    id: 12,
    title: "Ce portfolio — conçu et développé avec React",
    category: "React",
    description:
      "Le site que vous êtes en train de consulter : conception, développement en React et publication d'un portfolio de développeur.",
    tech: ["React", "Design", "Déploiement"],
    repo: `${GITHUB_PROFILE}/chap12`,
  },
];

export default projects;
