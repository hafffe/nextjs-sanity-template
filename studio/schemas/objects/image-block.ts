import {RiImageLine} from 'react-icons/ri';

export default {
	name: 'imageBlock',
	title: 'Image',
	description: 'Image Block',
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
		},
		{
			name: 'layout',
			title: 'Layout',
			type: 'string',
			options: {
				isHighlighted: true,
				list: [
					{title: 'Full width', value: 'full'},
					{title: 'Orignal width', value: 'original'}
				],
				layout: 'dropdown'
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
