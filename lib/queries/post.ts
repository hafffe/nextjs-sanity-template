import {groq} from "next-sanity";

export const postQuery = groq`
  *[_type == 'post' && slug.current == $slug][0] {
    ...,
    author-> {name, title, phone, email, image}
  }
`;

export const postsQuery = groq`
  *[_type == 'post' && defined(slug.current)] | order(_createdAt desc)[0...$limit]
`;

export const allPostSlug = groq`
  *[_type == 'post' && defined(slug.current)][]
`;
