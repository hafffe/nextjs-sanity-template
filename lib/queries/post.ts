import {groq} from 'next-sanity';

export const postQuery = groq`
	*[_type == 'post' && slug.current == $slug][0] {
		...,
		author-> {name, title, phone, email, image}
	}
`;

export const postsQuery = groq`
	*[_type == 'post' && defined(slug.current)][0...$limit] | order(_createdAt desc)
`;

export const allPostSlug = groq`
	*[_type == 'post' && defined(slug.current)][].slug.current
`;
