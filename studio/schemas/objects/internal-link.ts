import {RiLinksLine} from 'react-icons/ri';

const internalLink = {
	title: 'Internal Link',
	name: 'internalLink',
	type: 'object',
	hidden: true,
	icon: RiLinksLine,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'link',
			title: 'Link',
			type: 'reference',
			to: [
				{
					type: 'page'
				}
			]
		}
	],
	blockEditor: {
		icon: RiLinksLine
	}
};

export default internalLink;;
