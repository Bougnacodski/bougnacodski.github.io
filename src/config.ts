import type { Lang } from './i18n';

// Toutes les informations personnelles du site, au même endroit.
export const SITE = {
  title: 'Mathieu Besson',
  author: 'Mathieu Besson',
  description: {
    fr: 'Data, apprentissage automatique et mathématiques appliquées : notes, articles et projets.',
    en: 'Data, machine learning and applied mathematics: notes, essays and projects.',
  } satisfies Record<Lang, string>,
  intro: {
    fr: "Architecte data et apprentissage automatique depuis douze ans, avec un ancrage en ingénierie mathématique. J'écris ici sur la donnée, l'organisation des équipes et les mathématiques appliquées.",
    en: 'Data and machine learning architect for twelve years, with roots in mathematical engineering. I write here about data, how teams are organised, and applied mathematics.',
  } satisfies Record<Lang, string>,
  // `rss: true` : le lien pointe vers le flux de la langue affichée.
  links: [
    { label: 'GitHub', href: 'https://github.com/Bougnacodski' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'RSS', href: '/rss.xml', rss: true },
  ],
};
