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
			name: 'meta',
			title: 'General',
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
			fieldset: 'meta',
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
			fieldset: 'meta',
			validation: (Rule: any) => Rule.required()
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
			fieldset: 'meta'
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
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'excerpt',
			type: 'simpleTextBlock',
			title: 'Excerpt',
			description: 'This ends up on summary pages, on Google, when people share your 	post in social media.',
			fieldset: 'excerpt'
		},
		{
			name: 'content',
			type: 'array',
			title: 'Content',
			description: 'Add, edit, and reorder sections with content',
			fieldset: 'content',
			of: [{type: 'gridBlock'}, {type: 'imageBlock'}, {type: 'textBlock'}, {type: 'youtubeBlock'}]
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
		prepare({title, publishedAt}: any) {
			return {
				title: `${title}`,
				subtitle: format(new Date(publishedAt), 'MMM dd yyyy HH:mm')
			};
		}
	}
};
