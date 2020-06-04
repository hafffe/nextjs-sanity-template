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
			name: 'text',
			type: 'textBlock'
		}
	],
	preview: {
		select: {
			media: 'image.asset'
		},
		prepare({media}) {
			return {
				media
			};
		}
	}
};
