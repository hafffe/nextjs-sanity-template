import {groq} from 'next-sanity';

export const post = groq`
	*[_type == 'post' && slug.current == $slug][0]
`;

export const posts = groq`
	*[_type == 'post'][0...$limit]
`;
