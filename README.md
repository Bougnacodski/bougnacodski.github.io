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

## Deux langues

Le site est bilingue : le français est à la racine (`/blog/…`), l'anglais sous `/en/` (`/en/blog/…`). Le sélecteur FR / EN de l'en-tête mène à la même page dans l'autre langue quand elle existe, sinon à l'accueil de l'autre langue. Chaque langue a son propre flux RSS : `/rss.xml` et `/en/rss.xml`.

## Écrire un article

Crée un fichier dans `src/content/blog/fr/` (ou `src/content/blog/en/` pour un article en anglais), par exemple `mon-article.md` :

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

- Le nom du fichier devient l'adresse : `/blog/mon-article/` ou `/en/blog/my-post/`.
- Un article peut n'exister que dans une seule langue.
- **Traduire un article** : crée la version anglaise dans `src/content/blog/en/` et donne aux deux fichiers le même `translationKey` dans l'en-tête (par exemple `translationKey: mon-article`). Les deux versions sont alors reliées : lien « Lire en anglais / Lire en français » et sélecteur de langue. Si les deux fichiers portent le même nom, la clé est facultative.
- `draft: true` garde l'article hors ligne (il reste visible en local).
- Formules : `$...$` dans le texte, `$$...$$` centrées (rendu par KaTeX).
- Images : place-les dans `public/images/` et écris `![légende](/images/photo.jpg)`.

## Commentaires

Les commentaires utilisent [giscus](https://giscus.app) et sont stockés dans les Discussions GitHub de ce dépôt. Un lecteur a besoin d'un compte GitHub pour commenter. Tu modères depuis l'onglet **Discussions** du dépôt.

Mise en route (une seule fois) :

1. **Settings → General → Features** : coche **Discussions**.
2. Installe l'application giscus sur ce dépôt uniquement : https://github.com/apps/giscus.
3. Sur https://giscus.app, saisis `Bougnacodski/bougnacodski.github.io`, choisis la catégorie **Announcements**, puis recopie la valeur `data-category-id` dans `categoryId` de `src/config.ts`.
4. `git commit` puis `git push` : les commentaires apparaissent sous chaque article.

- Les versions française et anglaise d'un même article partagent le même fil.
- `comments: false` dans l'en-tête d'un article désactive ses commentaires.
- Tant que `categoryId` est vide, aucun commentaire n'est affiché et aucun script giscus n'est chargé.

## CV

La page CV (`/cv/` et `/en/cv/`) est générée à partir de `src/data/cv.ts`. Pour ajouter un poste, copie un bloc de la liste `experience` et place-le en tête de liste. Les dates s'écrivent au format `AAAA-MM`. Laisse `end` absent pour le poste actuel. Les durées se calculent toutes seules.

**Logos des entreprises** : dépose chaque logo dans `public/logos/`, sous le nom indiqué par le champ `logo` du poste dans `src/data/cv.ts` : `chanel`, `clarins`, `believe`, `micropole`, `infotel`, `orange`. Formats acceptés : `.svg` (idéal), `.png`, `.webp` ou `.jpg`. Exemple : `public/logos/chanel.svg`. Les logos s'affichent sur un fond blanc arrondi, lisible en mode sombre comme à l'impression. Un fichier carré ou presque, sur fond transparent, donne le meilleur rendu. Sans fichier, une pastille avec l'initiale de l'entreprise s'affiche à la place.

Le bouton « Télécharger en PDF » ouvre la fenêtre d'impression du navigateur. Choisis « Enregistrer au format PDF » : une mise en page dédiée retire le menu et le pied de page.

## Ajouter un projet

Un fichier par projet et par langue, dans `src/content/projets/fr/` et `src/content/projets/en/` (voir les exemples), avec `title`, `description`, `repo` et/ou `url`, `stack` et `order` pour l'ordre d'affichage.

## Modifier le site

| Quoi | Où |
| --- | --- |
| Nom, présentation (FR et EN), liens | `src/config.ts` |
| Libellés de l'interface (menus, boutons…) | `src/i18n.ts` |
| CV (profil, expériences, en FR et EN) | `src/data/cv.ts` |
| Page « À propos » | `src/pages/a-propos.md` et `src/pages/en/about.md` |
| Mise en page des pages | `src/views/` (partagées entre les deux langues) |
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
