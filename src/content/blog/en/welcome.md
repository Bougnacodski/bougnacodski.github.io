---
title: Welcome to this site
description: Why I'm starting a personal site, and what a post looks like here.
date: 2026-11-09
tags: [meta, mathematics]
translationKey: bienvenue
---

This site is a space of my own, away from the platforms: I publish essays, notes and projects here. This post also doubles as a template, showing everything you can write in Markdown.

## Text

Write normally, with **strong emphasis**, *italics*, [links](https://github.com/) and `inline code`.

> A quote is indented, with a coloured rule.

A list:

- first point;
- second point, with a sub-idea;
- third point.

## Equations

Write LaTeX between `$...$` inline, for example $\nabla f(x^\star) = 0$, or between `$$...$$` for a centred equation:

$$
\min_{u_0,\dots,u_{N-1}} \; \sum_{k=0}^{N-1} \left( x_k^\top Q\, x_k + u_k^\top R\, u_k \right) + x_N^\top P\, x_N
\quad \text{s.t.} \quad x_{k+1} = A x_k + B u_k .
$$

The one-dimensional shallow water equations, in conservative form:

$$
\partial_t h + \partial_x (hu) = 0, \qquad
\partial_t (hu) + \partial_x\!\left(hu^2 + \tfrac{g}{2} h^2\right) = -g\, h\, \partial_x z .
$$

## Code

```python
import numpy as np

def flux(h, hu, g=9.81):
    u = np.where(h > 1e-8, hu / h, 0.0)
    return np.stack([hu, hu * u + 0.5 * g * h**2])
```

## A table

| Tool | Role |
| --- | --- |
| Astro | turns Markdown into pages |
| GitHub Actions | builds the site on every push |
| GitHub Pages | hosts the site |

---

To write a new post, copy this file into `src/content/blog/en/`, change the header and write.
