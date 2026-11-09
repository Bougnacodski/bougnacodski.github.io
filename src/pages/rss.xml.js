import rss from '@astrojs/rss';
import { SITE } from '../config';
import { getPosts } from '../utils';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: new URL(import.meta.env.BASE_URL, context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>fr-fr</language>',
  });
}
