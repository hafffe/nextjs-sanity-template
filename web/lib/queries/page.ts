import {groq} from 'next-sanity';

export const pageById = groq`
	*[_type == 'page' && _id == $id][0]
`;

export const pageBySlug = groq`
	*[_type == 'page' && slug.current == $slug][0]
`;

export const allPagesSlug = groq`
	*[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`;
