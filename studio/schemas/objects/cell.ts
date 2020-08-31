import {RiGridLine} from 'react-icons/ri';

export default {
	name: 'cell',
	type: 'object',
	title: 'Cell',
	hidden: true,
	description: 'Cell',
	icon: RiGridLine,
	fields: [
		{
			name: 'title',
			type: 'string'
		},
		{
			name: 'image',
			type: 'image'
		},
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
			name: 'text',
			type: 'textBlock'
		}
	],
	preview: {
		select: {
			media: 'image.asset'
		},
		prepare({media}: any) {
			return {
				media
			};
		}
	}
};
