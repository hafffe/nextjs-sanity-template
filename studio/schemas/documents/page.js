import slug from 'slugify';
import {RiPagesLine} from 'react-icons/ri';

export default {
	name: 'page',
	type: 'document',
	title: 'Pages',
	icon: RiPagesLine,
	fieldsets: [
		{
			name: 'meta',
			title: 'General',
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
			fieldset: 'meta',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'slug',
			title: 'Slug',
			description: 'Some frontends will require a slug to be set to be able to show the page',
			type: 'slug',
			options: {
				source: 'title',
				slugify: (input) => slug(input, {lower: true})
			},
			fieldset: 'meta',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'content',
			type: 'array',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
			fieldset: 'content',
			of: [{type: 'gridBlock'}, {type: 'imageBlock'}, {type: 'textBlock'}, {type: 'youtubeBlock'}]
		}
	],
	preview: {
		select: {
			title: 'title'
		},
		prepare({title}) {
			return {
				title: `${title}`
			};
		}
	}
};
