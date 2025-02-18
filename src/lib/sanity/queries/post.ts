import {defineQuery} from "next-sanity";

export const postQuery = defineQuery(`
  *[_type == 'post' && slug.current == $slug][0] {
    ...,
    author-> {name, title, phone, email, image}
  }
`);

export const postsQuery = defineQuery(`
  *[_type == 'post' && defined(slug.current)] | order(_createdAt desc)[0...$limit]
`);

export const allPostSlugQuery = defineQuery(`
   *[_type == "post" && defined(slug.current)]{"slug": slug.current}
`);
