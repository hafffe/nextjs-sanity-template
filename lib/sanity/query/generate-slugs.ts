import "server-only";

import {client} from "~/lib/sanity/client";
import {token} from "~/lib/sanity/token";
import {allPostSlug, allPagesSlug} from "~/lib/queries";
import type {Post} from "~/models/post";
import type {Page} from "~/models/page";

// Not using loadQuery as it's optimized for fetching in the RSC lifecycle
export const generateCategorySlugs = async () => {
  const pages = await client
    .withConfig({
      token,
      perspective: "published",
      useCdn: false,
      stega: false,
    })
    .fetch<Page[]>(allPagesSlug);

  return pages?.map((page) => ({
    slug: page,
  }));
};

// Not using loadQuery as it's optimized for fetching in the RSC lifecycle
export const generatePostsSlugs = async () => {
  const posts = await client
    .withConfig({
      token,
      perspective: "published",
      useCdn: false,
      stega: false,
    })
    .fetch<Post[]>(allPostSlug);

  return posts?.map((post) => ({
    slug: post.slug.current,
  }));
};
