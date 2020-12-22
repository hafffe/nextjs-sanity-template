import {groq} from 'next-sanity';

export const post = groq`
	*[_type == 'post' && slug.current == $slug][0] {
		...,
		author-> {name, title, phone, email, image}
	}
`;

export const postDraft = groq`
	*[_type == 'post' && slug.current == $slug && _id in path("drafts.**")][0] {
		...,
		author->
	}
`;

export const posts = groq`
	*[_type == 'post' && defined(slug.current)][0...$limit] | order(_createdAt desc)
`;

export const allPostSlug = groq`
	*[_type == 'post' && defined(slug.current)][].slug.current
`;
