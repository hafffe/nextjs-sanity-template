import {RiImageLine} from 'react-icons/ri';

export default {
	name: 'mainImage',
	title: 'Image',
	description: 'Image',
	type: 'image',
	icon: RiImageLine,
	options: {
		hotspot: true
	},
	fields: [
		{
			name: 'alt',
			title: 'Alternative text',
			type: 'string',
			description: 'Important for SEO and accessiblity.',
			validation: (Rule: any) => Rule.error('You have to fill out the alternative text.').required(),
			options: {
				isHighlighted: true
			}
		}
	],
	preview: {
		select: {
			title: 'alt',
			media: 'asset'
		},
		prepare({media, title}: any) {
			return {
				media,
				title
			};
		}
	}
};
