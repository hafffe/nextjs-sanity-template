import {groq} from 'next-sanity';

export const siteSettings = groq`
	*[_id == "siteSettings"][0]
`;
