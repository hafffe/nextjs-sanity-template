import {defineQuery} from "next-sanity";
import {blockContent, grid, mainImage, youtube} from "./fragments";

export const pageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0] {
    ...,
    content[] {
      ${blockContent},
      ${grid},
      ${mainImage},
      ${youtube}
    }
  }
`);

export const pageWithPostsQuery = defineQuery(`
  {
    "page": *[_type == 'page' && slug.current == $slug][0] {
      ...,
      content[] {
        ${blockContent},
        ${grid},
        ${mainImage},
        ${youtube}
      }
    },
    "posts": *[_type == 'post' && defined(slug.current)] | order(_createdAt desc)[0...$limit]
  }
`);

export const allPagesSlug = defineQuery(`
  *[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`);
