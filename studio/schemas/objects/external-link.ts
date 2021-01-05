import {RiExternalLinkLine} from 'react-icons/ri';

export default {
	title: 'External Link',
	name: 'externalLink',
	type: 'object',
	hidden: true,
	icon: RiExternalLinkLine,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			description:
				'There is no `link` validation on this so please type accurate urls with https://, mailto:, tel: etc.',
			validation: (Rule: any) => Rule.required()
		}
	],
	blockEditor: {
		icon: RiExternalLinkLine
	}
};
