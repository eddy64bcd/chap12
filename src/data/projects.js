// Les 12 projets réalisés dans le cadre de la formation
// "Intégrateur Web" d'OpenClassrooms.
//
// L'ordre et les intitulés suivent le parcours officiel OpenClassrooms
// (vérifié sur le tableau de bord de la formation).
//
// `siteUrl` = lien vers la PAGE DU SITE mise en ligne (pas le dépôt GitHub).
// `repoUrl` = lien vers le dépôt GitHub contenant le code source du projet.
// Laisse la valeur à `null` quand le lien n'existe pas (ou pas encore) — le
// bouton correspondant ne s'affiche pas dans ce cas (voir ProjectCard.jsx).

const projects = [
  {
    id: 1,
    title: "Démarrez votre formation d'intégrateur web",
    category: "Méthodologie",
    description:
      "Cadrage du parcours de formation : organisation, méthode de travail et définition d'objectifs pour la reconversion vers le développement web.",
    tech: ["Méthodologie", "Gestion de projet"],
    siteUrl: null, // pas de site à mettre en ligne pour ce projet
    repoUrl: null, // pas de code associé (projet de cadrage)
  },
  {
    id: 2,
    title: "Premiers pas sur le langage HTML",
    category: "HTML / CSS",
    description:
      "Réalisation d'une première page web complète en HTML et CSS, prise en main de la structure sémantique et des bases du style.",
    tech: ["HTML", "CSS"],
    siteUrl: null, // eddy64bcd.github.io/chap2/ affiche un autre site (association de skateboard) → lien à corriger côté GitHub Pages
    repoUrl: "https://github.com/eddy64bcd/chap2",
  },
  {
    id: 3,
    title: "Booki — page d'accueil d'une agence de voyage",
    category: "HTML / CSS",
    description:
      "Intégration responsive de la page d'accueil de Booki à partir d'une maquette, avec une approche mobile-first en HTML/CSS pur.",
    tech: ["HTML", "CSS", "Responsive"],
    siteUrl: "https://eddy64bcd.github.io/chap3/",
    repoUrl: "https://github.com/eddy64bcd/chap3",
  },
  {
    id: 4,
    title: "Ohmyfood — interface mobile avec animations CSS",
    category: "HTML / CSS",
    description:
      "Site food-tech avec une interface mobile-first, des animations et transitions CSS, et une feuille de style organisée en Sass.",
    tech: ["HTML", "Sass", "Animations CSS"],
    siteUrl: "https://eddy64bcd.github.io/projet-4/",
    repoUrl: "https://github.com/eddy64bcd/projet-4",
  },
  {
    id: 5,
    title: "Premiers pas sur le langage JavaScript",
    category: "JavaScript",
    description:
      "Développement d'un carrousel d'images en JavaScript vanilla pour le site d'une entreprise d'imprimerie.",
    tech: ["JavaScript", "DOM"],
    siteUrl: "https://eddy64bcd.github.io/projet-5/",
    repoUrl: "https://github.com/eddy64bcd/projet-5",
  },
  {
    id: 6,
    title: "Créez une page web dynamique avec JavaScript",
    category: "JavaScript",
    description:
      "Site portfolio dynamique pour un architecte, avec appel d'API, manipulation du DOM et filtrage des projets côté client.",
    tech: ["JavaScript", "API", "DOM"],
    siteUrl: "https://eddy64bcd.github.io/chap6/", // vérifié : le site Sophie Bluel (architecte) fonctionne
    repoUrl: "https://github.com/eddy64bcd/chap6",
  },
  {
    id: 7,
    title: "Kasa — application de location immobilière",
    category: "React",
    description:
      "Application React de location entre particuliers : découpage en composants réutilisables, routing avec React Router et gestion des props.",
    tech: ["React", "React Router", "JavaScript"],
    siteUrl: null, // https://eddy64bcd.github.io/chapit7/ → page blanche (titre "projet7") pour l'instant
    repoUrl: "https://github.com/eddy64bcd/chapit7",
  },
  {
    id: 8,
    title: "Optimisez le référencement d'un site de photographe",
    category: "SEO / Accessibilité",
    description:
      "Amélioration du référencement naturel (SEO) et de l'accessibilité d'un site vitrine pour un photographe indépendant.",
    tech: ["SEO", "Accessibilité", "Performance"],
    siteUrl: "https://eddy64bcd.github.io/chap8/", // vérifié : affiche bien le site Nina Carducci (photographe)
    repoUrl: "https://github.com/eddy64bcd/chap8",
  },
  {
    id: 9,
    title: "Débuggez le site d'une agence d'événementiel",
    category: "JavaScript",
    description:
      "Correction de bugs JavaScript et CSS sur le site de l'agence 724 Events, avec mise en place de tests pour fiabiliser le code.",
    tech: ["JavaScript", "Débogage", "Tests"],
    siteUrl: null, // TODO : lien vers la page en ligne
    repoUrl: null, // TODO : lien vers le dépôt GitHub
  },
  {
    id: 10,
    title: "Argent Bank — front-end d'une application bancaire",
    category: "React",
    description:
      "Front-end React d'une application bancaire : authentification, appels API, gestion de l'état global avec Redux.",
    tech: ["React", "Redux", "API REST"],
    siteUrl: null, // https://eddy64bcd.github.io/projet10/ → page blanche (titre "testreact") pour l'instant
    repoUrl: "https://github.com/eddy64bcd/projet10",
  },
  {
    id: 11,
    title: "Planifiez le développement du site de votre client",
    category: "Méthodologie",
    description:
      "Cahier des charges et planification technique d'une plateforme de création de menus pour un restaurant.",
    tech: ["Planification", "Cahier des charges"],
    siteUrl: null, // TODO : lien vers la page en ligne (si applicable)
    repoUrl: null, // TODO : lien vers le dépôt GitHub (si applicable)
  },
  {
    id: 12,
    title: "Ce portfolio — conçu et développé avec React",
    category: "React",
    description:
      "Le site que vous êtes en train de consulter : conception, développement en React et publication d'un portfolio de développeur.",
    tech: ["React", "Design", "Déploiement"],
    siteUrl: null, // pourra pointer vers ce portfolio lui-même une fois en ligne
    repoUrl: "https://github.com/eddy64bcd/chap12",
  },
];

export default projects;
