---
title: Bienvenue sur ce site
description: Pourquoi j'ouvre un site personnel, et à quoi ressemble un article ici.
date: 2026-11-09
tags: [méta, mathématiques]
translationKey: bienvenue
---

Ce site est un espace à moi, hors des plateformes : j'y publie des articles, des notes et mes projets. Cet article sert aussi de modèle. Il montre tout ce qu'on peut écrire en Markdown.

## Du texte

On écrit normalement, avec de l'**emphase forte**, de l'*italique*, des [liens](https://github.com/) et du `code en ligne`.

> Une citation se met en retrait, avec un filet de couleur.

Une liste :

- premier point ;
- deuxième point, avec une sous-idée ;
- troisième point.

## Des formules

Les formules s'écrivent en LaTeX entre `$...$` dans le texte, par exemple $\nabla f(x^\star) = 0$, ou entre `$$...$$` pour une formule centrée :

$$
\min_{u_0,\dots,u_{N-1}} \; \sum_{k=0}^{N-1} \left( x_k^\top Q\, x_k + u_k^\top R\, u_k \right) + x_N^\top P\, x_N
\quad \text{s.c.} \quad x_{k+1} = A x_k + B u_k .
$$

Les équations de Saint-Venant en une dimension, sous forme conservative :

$$
\partial_t h + \partial_x (hu) = 0, \qquad
\partial_t (hu) + \partial_x\!\left(hu^2 + \tfrac{g}{2} h^2\right) = -g\, h\, \partial_x z .
$$

## Du code

```python
import numpy as np

def flux(h, hu, g=9.81):
    u = np.where(h > 1e-8, hu / h, 0.0)
    return np.stack([hu, hu * u + 0.5 * g * h**2])
```

## Un tableau

| Outil | Rôle |
| --- | --- |
| Astro | génère les pages à partir du Markdown |
| GitHub Actions | compile le site à chaque envoi |
| GitHub Pages | héberge le site |

---

Pour écrire un nouvel article, il suffit de copier ce fichier dans `src/content/blog/fr/`, de changer l'en-tête et d'écrire.
