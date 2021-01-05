import {groq} from 'next-sanity';

export const pageQuery = groq`
	*[_type == 'page' && slug.current == $slug][0]
`;

export const pageDraftQuery = groq`
	*[_type == 'page' && slug.current == $slug] | order(_updatedAt desc)[0]
`;

export const allPagesSlug = groq`
	*[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`;
