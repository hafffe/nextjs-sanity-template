import {groq} from 'next-sanity';

export const siteSettingsQuery = groq`
	*[_id == "siteSettings"][0]{
		...,
		navigation[]{
			...,
			link->{_type, slug}
		}
	}
`;
