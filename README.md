# Site personnel

Site statique construit avec [Astro](https://astro.build), publié sur GitHub Pages.

## Mise en ligne (une seule fois)

1. Crée sur GitHub un dépôt public nommé **`<ton-pseudo>.github.io`** (ici `bougnacodski.github.io`).
2. Dans ce dossier :
   ```bash
   git init -b main
   git add .
   git commit -m "Premier commit"
   git remote add origin git@github.com:<ton-pseudo>/<ton-pseudo>.github.io.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. Une à deux minutes plus tard, le site est en ligne à `https://<ton-pseudo>.github.io`.

Si tu choisis un autre nom de dépôt, adapte `site` (et `base`) dans `astro.config.mjs`, et les liens dans `src/config.ts`.

## Écrire un article

Crée un fichier dans `src/content/blog/`, par exemple `mon-article.md` :

```markdown
---
title: Mon article
description: Une phrase de résumé, affichée dans les listes.
date: 2026-11-15
tags: [data, organisation]
draft: false
---

Le texte en Markdown…
```

Puis `git add`, `git commit`, `git push` : le site se met à jour tout seul.

- Le nom du fichier devient l'adresse : `/blog/mon-article/`.
- `draft: true` garde l'article hors ligne (il reste visible en local).
- Formules : `$...$` dans le texte, `$$...$$` centrées (rendu par KaTeX).
- Images : place-les dans `public/images/` et écris `![légende](/images/photo.jpg)`.

## Ajouter un projet

Un fichier par projet dans `src/content/projets/` (voir les exemples), avec `title`, `description`, `repo` et/ou `url`, `stack` et `order` pour l'ordre d'affichage.

## Modifier le site

| Quoi | Où |
| --- | --- |
| Nom, présentation, liens | `src/config.ts` |
| Page « À propos » | `src/pages/a-propos.md` |
| Couleurs, polices, mise en page | `src/styles/global.css` (variables en haut du fichier) |
| Adresse du site | `astro.config.mjs` |

## Travailler en local

Nécessite Node.js 22 ou plus récent.

```bash
npm install
npm run dev      # aperçu sur http://localhost:4321, rechargé à chaque modification
npm run build    # génère le site dans dist/
```

## Nom de domaine personnel (facultatif)

1. Ajoute un fichier `public/CNAME` contenant uniquement ton domaine (ex. `mathieubesson.fr`).
2. Chez ton registraire, crée les enregistrements DNS (Domain Name System, l'annuaire qui relie un nom de domaine à un serveur) indiqués par GitHub (Settings → Pages → Custom domain).
3. Mets `site: 'https://mathieubesson.fr'` dans `astro.config.mjs`.
