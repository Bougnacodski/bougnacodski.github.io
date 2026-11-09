import { getCollection, type CollectionEntry } from 'astro:content';
import { LOCALES, localize, type Lang } from './i18n';

type Post = CollectionEntry<'blog'>;

// Les fichiers sont rangés par langue : src/content/blog/fr/x.md → langue « fr », adresse « x ».
export function entryLang(entry: { id: string }): Lang {
  return entry.id.split('/')[0] as Lang;
}
export function entrySlug(entry: { id: string }) {
  return entry.id.split('/').slice(1).join('/');
}
// Clé qui relie un article à sa traduction : `translationKey` si présent, sinon le nom du fichier.
export function translationKey(post: Post) {
  return post.data.translationKey ?? entrySlug(post);
}

export async function getPosts(lang?: Lang) {
  const posts = await getCollection(
    'blog',
    (p) => (import.meta.env.DEV || !p.data.draft) && (!lang || entryLang(p) === lang),
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects(lang: Lang) {
  const all = await getCollection('projets', (p) => entryLang(p) === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function findTranslation(post: Post) {
  const key = translationKey(post);
  const lang = entryLang(post);
  const all = await getPosts();
  return all.find((p) => entryLang(p) !== lang && translationKey(p) === key);
}

export function postPath(post: Post) {
  return localize(entryLang(post), `/blog/${entrySlug(post)}/`);
}
export function tagPath(lang: Lang, tag: string) {
  return localize(lang, `/tags/${slugify(tag)}/`);
}

export function formatDate(d: Date, lang: Lang) {
  return d.toLocaleDateString(LOCALES[lang], { day: 'numeric', month: 'long', year: 'numeric' });
}

export function readingTime(body = '') {
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Ajoute le préfixe `base` éventuel (dépôt qui n'est pas <pseudo>.github.io).
export function url(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path.startsWith('http') ? path : `${base}${path}`;
}
