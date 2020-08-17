import {RiSettings5Line} from 'react-icons/ri';

export default {
	name: 'siteSettings',
	type: 'document',
	title: 'Site Settings',
	icon: RiSettings5Line,
	// eslint-disable-next-line camelcase, spaced-comment
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fieldsets: [
		{
			name: 'meta',
			title: 'General Information',
			options: {
				collapsible: true,
				collapsed: true
			}
		},
		{
			name: 'navigation',
			title: 'Main Navigation',
			options: {
				collapsible: true,
				collapsed: true
			}
		},
		{
			name: 'social',
			title: 'Social',
			options: {
				collapsible: true,
				collapsed: true
			}
		}
	],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Title of the page',
			fieldset: 'meta',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
			description: 'Description for search engines and social media.',
			fieldset: 'meta',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'keywords',
			title: 'Keywords',
			description: 'Keywords for search engines',
			fieldset: 'meta',
			type: 'array',
			of: [{type: 'string'}],
			options: {
				layout: 'tags'
			},
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Navigation',
			name: 'navigation',
			description: 'Select pages or link for main navigation',
			fieldset: 'navigation',
			type: 'array',
			of: [
				{
					title: 'Internal Link',
					type: 'internalLink'
				},
				{
					title: 'External Link',
					type: 'externalLink'
				}
			]
		},
		{
			name: 'socialFields',
			type: 'socialFields',
			description: 'Social media',
			fieldset: 'social'
		}
	],
	preview: {
		select: {},
		prepare() {
			return {
				title: 'Global Settings'
			};
		}
	}
};
