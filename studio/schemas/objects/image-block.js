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
			name: 'caption',
			title: 'Caption',
			type: 'string',
			options: {
				isHighlighted: true
			},
			validation: (Rule) => Rule.required()
		},
		{
			name: 'alt',
			title: 'Alternative text',
			type: 'string',
			description: 'Important for SEO and accessiblity.',
			validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
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
			title: 'caption',
			media: 'asset'
		},
		prepare({media, title}) {
			return {
				media,
				title
			};
		}
	}
};
