import slug from 'slugify';
import {RiPagesLine} from 'react-icons/ri';

export default {
	name: 'page',
	type: 'document',
	title: 'Pages',
	icon: RiPagesLine,
	fieldsets: [
		{
			name: 'general',
			title: 'General',
			options: {
				collapsible: true,
				collapsed: true
			}
		},
		{
			name: 'meta',
			title: 'Meta infomation',
			options: {
				collapsible: true,
				collapsed: true
			}
		},
		{
			name: 'content',
			title: 'Content',
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
			fieldset: 'general',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'slug',
			title: 'Slug',
			description: 'Some frontends will require a slug to be set to be able to show the page',
			type: 'slug',
			options: {
				source: 'title',
				slugify: (input: string) => slug(input, {lower: true})
			},
			fieldset: 'general',
			validation: (Rule: any) => Rule.required()
		},
		{
			type: 'metaFields',
			name: 'meta',
			fieldset: 'meta'
		},
		{
			name: 'content',
			type: 'array',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
			fieldset: 'content',
			of: [{type: 'grid'}, {type: 'mainImage'}, {type: 'blockContent'}, {type: 'spacer'}, {type: 'youtube'}]
		}
	],
	preview: {
		select: {
			title: 'title'
		},
		prepare({title}: {title: string}) {
			return {
				title: `${title}`
			};
		}
	}
};
