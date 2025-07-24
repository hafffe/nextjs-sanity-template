import {defineQuery} from "next-sanity";
import {pageBuilder} from "./fragments";

export const pageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0] {
    ...,
    ${pageBuilder}
  }
`);

export const pageWithPostsQuery = defineQuery(`
  {
    "page": *[_type == 'page' && slug.current == $slug][0] {
      ...,
      ${pageBuilder}
    },
    "posts": *[_type == 'post' && defined(slug.current)] | order(_createdAt desc)[0...$limit]
  }
`);

export const allPagesSlug = defineQuery(`
  *[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`);
