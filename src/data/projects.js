// Les 12 projets réalisés dans le cadre de la formation
// "Intégrateur Web" d'OpenClassrooms.
//
// `siteUrl` = lien vers la PAGE DU SITE mise en ligne (pas le dépôt GitHub).
// Laisse `siteUrl: null` pour un projet qui n'a pas (ou plus) de site en
// ligne — le bouton "Voir le site en ligne" ne s'affiche pas dans ce cas
// (voir ProjectCard.jsx).

const projects = [
  {
    id: 1,
    title: "Démarrez votre formation d'intégrateur web",
    category: "Méthodologie",
    description:
      "Cadrage du parcours de formation : organisation, méthode de travail et définition d'objectifs pour la reconversion vers le développement web.",
    tech: ["Méthodologie", "Gestion de projet"],
    siteUrl: null, // pas de site à mettre en ligne pour ce projet
  },
  {
    id: 2,
    title: "Premiers pas sur le langage HTML",
    category: "HTML / CSS",
    description:
      "Réalisation d'une première page web complète en HTML et CSS, prise en main de la structure sémantique et des bases du style.",
    tech: ["HTML", "CSS"],
    siteUrl: null, // TODO : lien vers la page en ligne
  },
  {
    id: 3,
    title: "Booki — page d'accueil d'une agence de voyage",
    category: "HTML / CSS",
    description:
      "Intégration responsive de la page d'accueil de Booki à partir d'une maquette, avec une approche mobile-first en HTML/CSS pur.",
    tech: ["HTML", "CSS", "Responsive"],
    siteUrl: "https://eddy64bcd.github.io/chap3/",
  },
  {
    id: 4,
    title: "Ohmyfood — interface mobile avec animations CSS",
    category: "HTML / CSS",
    description:
      "Site food-tech avec une interface mobile-first, des animations et transitions CSS, et une feuille de style organisée en Sass.",
    tech: ["HTML", "Sass", "Animations CSS"],
    siteUrl: "https://eddy64bcd.github.io/projet-4/",
  },
  {
    id: 5,
    title: "Premiers pas sur le langage JavaScript",
    category: "JavaScript",
    description:
      "Développement d'un carrousel d'images en JavaScript vanilla pour le site d'une entreprise d'imprimerie.",
    tech: ["JavaScript", "DOM"],
    siteUrl: "https://eddy64bcd.github.io/projet-5/",
  },
  {
    id: 6,
    title: "Créez une page web dynamique avec JavaScript",
    category: "JavaScript",
    description:
      "Site portfolio dynamique pour un architecte, avec appel d'API, manipulation du DOM et filtrage des projets côté client.",
    tech: ["JavaScript", "API", "DOM"],
    siteUrl: null, // https://eddy64bcd.github.io/chap6/ → 404 pour l'instant, à corriger
  },
  {
    id: 7,
    title: "Planifiez le développement du site de votre client",
    category: "Méthodologie",
    description:
      "Cahier des charges et planification technique d'une plateforme de création de menus pour un restaurant.",
    tech: ["Planification", "Cahier des charges"],
    siteUrl: null, // https://eddy64bcd.github.io/chapit7/ → page blanche (titre "projet7") pour l'instant
  },
  {
    id: 8,
    title: "Kasa — application de location immobilière",
    category: "React",
    description:
      "Application React de location entre particuliers : découpage en composants réutilisables, routing avec React Router et gestion des props.",
    tech: ["React", "React Router", "JavaScript"],
    siteUrl: null, // TODO : lien vers la page en ligne (chap8 pointe en fait vers le projet 9, voir ci-dessous)
  },
  {
    id: 9,
    title: "Optimisez le référencement d'un site de photographe",
    category: "SEO / Accessibilité",
    description:
      "Amélioration du référencement naturel (SEO) et de l'accessibilité d'un site vitrine pour un photographe indépendant.",
    tech: ["SEO", "Accessibilité", "Performance"],
    siteUrl: "https://eddy64bcd.github.io/chap8/", // vérifié : affiche bien le site Nina Carducci (photographe)
  },
  {
    id: 10,
    title: "Débuggez le site d'une agence d'événementiel",
    category: "JavaScript",
    description:
      "Correction de bugs JavaScript et CSS sur le site de l'agence 724 Events, avec mise en place de tests pour fiabiliser le code.",
    tech: ["JavaScript", "Débogage", "Tests"],
    siteUrl: null, // https://eddy64bcd.github.io/projet10/ → page blanche (titre "testreact") pour l'instant
  },
  {
    id: 11,
    title: "Argent Bank — front-end d'une application bancaire",
    category: "React",
    description:
      "Front-end React d'une application bancaire : authentification, appels API, gestion de l'état global avec Redux.",
    tech: ["React", "Redux", "API REST"],
    siteUrl: null, // TODO : lien vers la page en ligne
  },
  {
    id: 12,
    title: "Ce portfolio — conçu et développé avec React",
    category: "React",
    description:
      "Le site que vous êtes en train de consulter : conception, développement en React et publication d'un portfolio de développeur.",
    tech: ["React", "Design", "Déploiement"],
    siteUrl: null, // pourra pointer vers ce portfolio lui-même une fois en ligne
  },
];

export default projects;
