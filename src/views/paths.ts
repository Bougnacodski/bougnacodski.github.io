// Génération des adresses des articles et des thèmes, pour une langue donnée.
import type { Lang } from '../i18n';
import { getPosts, findTranslation, entrySlug, slugify } from '../utils';

export async function postPaths(lang: Lang) {
  const posts = await getPosts(lang);
  return Promise.all(
    posts.map(async (post, i) => ({
      params: { slug: entrySlug(post) },
      props: { post, newer: posts[i - 1], older: posts[i + 1], translation: await findTranslation(post) },
    })),
  );
}

export async function tagPaths(lang: Lang) {
  const posts = await getPosts(lang);
  const tags = [...new Set(posts.flatMap((p) => p.data.tags))];
  return tags.map((tag) => ({
    params: { tag: slugify(tag) },
    props: { tag, posts: posts.filter((p) => p.data.tags.includes(tag)) },
  }));
}
