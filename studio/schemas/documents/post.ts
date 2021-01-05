import slug from 'slugify';
import {format} from 'date-fns';
import {RiArticleLine} from 'react-icons/ri';

export default {
	name: 'post',
	type: 'document',
	title: 'Posts',
	icon: RiArticleLine,
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
			name: 'excerpt',
			title: 'Excerpt',
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
			name: 'author',
			title: 'Author',
			type: 'reference',
			description: 'Select author for post',
			to: [{type: 'person'}],
			fieldset: 'meta',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			description: 'You can use this field to schedule post where you show them',
			type: 'datetime',
			fieldset: 'meta',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'keywords',
			type: 'array',
			title: 'Keywords',
			description: 'Tags for your post',
			fieldset: 'meta',
			of: [{type: 'string'}],
			options: {
				layout: 'tags'
			},
			validation: (Rule: any) => Rule.unique()
		},
		{
			name: 'excerpt',
			type: 'simpleBlockContent',
			title: 'Excerpt',
			description: 'This ends up on summary pages, when people share your post in social media.',
			fieldset: 'excerpt',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'content',
			type: 'array',
			title: 'Content',
			description: 'Add, edit, and reorder sections with content',
			fieldset: 'content',
			of: [{type: 'grid'}, {type: 'mainImage'}, {type: 'blockContent'}, {type: 'spacer'}, {type: 'youtube'}]
		}
	],
	initialValue: () => ({
		publishedAt: new Date().toISOString()
	}),
	preview: {
		select: {
			title: 'title',
			publishedAt: 'publishedAt'
		},
		prepare({title, publishedAt}: {title: string; publishedAt: string}) {
			return {
				title: `${title}`,
				subtitle: format(new Date(publishedAt), 'MMM dd yyyy HH:mm')
			};
		}
	}
};
