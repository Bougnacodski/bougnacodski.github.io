// Langues du site. Le français est servi à la racine, l'anglais sous /en/.
export const LANGS = ['fr', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'fr';

export const LOCALES: Record<Lang, string> = { fr: 'fr-FR', en: 'en-GB' };
export const LANG_NAMES: Record<Lang, string> = { fr: 'Français', en: 'English' };

// Pages fixes et leur adresse dans chaque langue.
export const ROUTES = {
  home: { fr: '/', en: '/en/' },
  blog: { fr: '/blog/', en: '/en/blog/' },
  projects: { fr: '/projets/', en: '/en/projects/' },
  cv: { fr: '/cv/', en: '/en/cv/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
} satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof ROUTES;

// Tous les libellés de l'interface.
export const UI = {
  fr: {
    'nav.blog': 'Articles',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.cv': 'CV',
    'cv.title': 'CV',
    'cv.description': 'Parcours professionnel de Mathieu Besson.',
    'cv.about': 'Profil',
    'cv.experience': 'Expérience',
    'cv.topSkills': 'Compétences principales',
    'cv.present': "aujourd'hui",
    'cv.print': 'Télécharger en PDF',
    'cv.duration': (y: number, m: number) =>
      [y ? `${y} an${y > 1 ? 's' : ''}` : '', m ? `${m} mois` : ''].filter(Boolean).join(' '),
    'home.eyebrow': 'Data · Apprentissage automatique · Mathématiques appliquées',
    'home.hello': 'Bonjour, je suis Mathieu.',
    'home.latest': 'Derniers articles',
    'home.allPosts': 'Tous les articles →',
    'home.projects': 'Projets',
    'home.allProjects': 'Tous les projets →',
    'blog.title': 'Articles',
    'blog.description': 'Tous les articles, du plus récent au plus ancien.',
    'blog.count': (n: number) => `${n} article${n > 1 ? 's' : ''}, du plus récent au plus ancien.`,
    'blog.empty': 'Aucun article pour le moment.',
    'post.back': '← Articles',
    'post.readingTime': (n: number) => `${n} min de lecture`,
    'post.updated': 'mis à jour le',
    'post.draft': 'brouillon',
    'post.toc': 'Sommaire',
    'post.prev': '← Précédent',
    'post.next': 'Suivant →',
    'post.neighbours': 'Articles voisins',
    'post.translation': 'Lire en anglais',
    'tag.title': (t: string) => `Thème : ${t}`,
    'tag.back': '← Tous les articles',
    'tag.count': (n: number) => `${n} article${n > 1 ? 's' : ''}`,
    'projects.title': 'Projets',
    'projects.description': 'Projets personnels, expérimentations et code ouvert.',
    'project.view': 'Voir →',
    'project.code': 'Code source →',
    'theme.toggle': 'Changer de thème',
    'nav.label': 'Navigation principale',
    '404.title': "Cette page n'existe pas.",
    '404.back': "Retour à l'accueil",
    'comments.title': 'Commentaires',
    'comments.note': 'Les commentaires passent par GitHub : un compte GitHub est nécessaire pour participer.',
  },
  en: {
    'nav.blog': 'Writing',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'cv.title': 'CV',
    'cv.description': "Mathieu Besson's professional experience.",
    'cv.about': 'About',
    'cv.experience': 'Experience',
    'cv.topSkills': 'Top skills',
    'cv.present': 'Present',
    'cv.print': 'Download as PDF',
    'cv.duration': (y: number, m: number) =>
      [y ? `${y} yr${y > 1 ? 's' : ''}` : '', m ? `${m} mo${m > 1 ? 's' : ''}` : ''].filter(Boolean).join(' '),
    'home.eyebrow': 'Data · Machine learning · Applied mathematics',
    'home.hello': "Hi, I'm Mathieu.",
    'home.latest': 'Latest writing',
    'home.allPosts': 'All posts →',
    'home.projects': 'Projects',
    'home.allProjects': 'All projects →',
    'blog.title': 'Writing',
    'blog.description': 'All posts, newest first.',
    'blog.count': (n: number) => `${n} post${n > 1 ? 's' : ''}, newest first.`,
    'blog.empty': 'Nothing here yet.',
    'post.back': '← Writing',
    'post.readingTime': (n: number) => `${n} min read`,
    'post.updated': 'updated',
    'post.draft': 'draft',
    'post.toc': 'Contents',
    'post.prev': '← Previous',
    'post.next': 'Next →',
    'post.neighbours': 'Nearby posts',
    'post.translation': 'Lire en français',
    'tag.title': (t: string) => `Topic: ${t}`,
    'tag.back': '← All posts',
    'tag.count': (n: number) => `${n} post${n > 1 ? 's' : ''}`,
    'projects.title': 'Projects',
    'projects.description': 'Side projects, experiments and open-source code.',
    'project.view': 'Visit →',
    'project.code': 'Source code →',
    'theme.toggle': 'Toggle theme',
    'nav.label': 'Main navigation',
    '404.title': "This page doesn't exist.",
    '404.back': 'Back to home',
    'comments.title': 'Comments',
    'comments.note': 'Comments are powered by GitHub: you need a GitHub account to take part.',
  },
} as const;

type Dict = (typeof UI)['fr'];
export function t<K extends keyof Dict>(lang: Lang, key: K): Dict[K] {
  return (UI[lang] as Dict)[key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}

// Préfixe une adresse interne selon la langue (/blog/x/ → /en/blog/x/).
export function localize(lang: Lang, path: string) {
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}
