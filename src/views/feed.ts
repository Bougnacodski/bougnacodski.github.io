// Flux RSS d'une langue : /rss.xml (français) et /en/rss.xml (anglais).
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../config';
import { LOCALES, type Lang } from '../i18n';
import { getPosts, postPath } from '../utils';

export async function feed(lang: Lang, context: APIContext) {
  const posts = await getPosts(lang);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: SITE.title,
    description: SITE.description[lang],
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `${base}${postPath(post)}`,
      categories: post.data.tags,
    })),
    customData: `<language>${LOCALES[lang].toLowerCase()}</language>`,
  });
}
