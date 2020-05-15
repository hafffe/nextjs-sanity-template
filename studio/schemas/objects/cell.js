import {MdGridOn} from 'react-icons/md';

export default {
	name: 'cell',
	type: 'object',
	title: 'Cell',
	hidden: true,
	description: 'Cell',
	icon: MdGridOn,
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
