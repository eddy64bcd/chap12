# Portfolio — Eddy Ramoni

Portfolio de développeur front-end, construit avec **React** et **Vite**.
Présente le parcours de reconversion, les compétences (HTML, CSS, JavaScript,
React, Redux) et les 12 projets réalisés durant la formation **Intégrateur
Web** d'OpenClassrooms.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Génère le dossier `dist/` prêt à être déployé.

```bash
npm run preview
```

Permet de prévisualiser le build de production en local.

## Structure du projet

```
src/
  components/   → Header, Hero, About, Skills, Projects, ProjectCard, Contact, Footer
  data/         → projects.js (les 12 projets), skills.js (compétences)
  App.jsx       → assemblage des sections
  App.css       → styles des composants
  index.css     → reset & variables CSS (couleurs, typographie)
```

## Personnaliser

- **Projets** : modifie `src/data/projects.js`. Le champ `repo` de chaque
  projet pointe pour l'instant vers ton profil GitHub — remplace-le par le
  lien exact du dépôt une fois qu'il est en ligne.
- **Compétences** : ajuste les niveaux (`level`, en %) dans
  `src/data/skills.js`.
- **Couleurs** : les variables sont définies en haut de `src/index.css`
  (`--accent`, `--surface-1`, etc.).
- **Photo** : remplace l'avatar "ER" dans `src/components/About.jsx` par une
  vraie photo si tu le souhaites (`<img src="..." />` à la place de la div
  `.about__avatar`).

## Déployer gratuitement

**Vercel** (recommandé, le plus simple) :
1. Pousse ce projet sur un dépôt GitHub.
2. Va sur [vercel.com](https://vercel.com), importe le dépôt.
3. Vercel détecte Vite automatiquement — clique sur "Deploy".

**Netlify** :
1. Pousse le projet sur GitHub.
2. Sur [netlify.com](https://netlify.com), "Add new site" → "Import an
   existing project".
3. Build command : `npm run build` — Publish directory : `dist`.

**GitHub Pages** :
1. `npm install -D gh-pages`
2. Ajoute dans `package.json` : `"homepage": "https://<ton-user>.github.io/<repo>"`
   puis un script `"deploy": "gh-pages -d dist"`.
3. `npm run build && npm run deploy`.
