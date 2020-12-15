import {RiLayoutGridLine} from 'react-icons/ri';

export default {
	name: 'grid',
	type: 'object',
	title: 'Grid',
	hidden: true,
	description: 'This is a simple grid component, all items are going to be equally wide',
	icon: RiLayoutGridLine,
	fieldsets: [
		{
			name: 'columns',
			title: 'Columns',
			options: {
				collapsible: true,
				collapsed: false
			}
		},
		{
			name: 'items',
			title: 'Items',
			options: {
				collapsible: true,
				collapsed: false
			}
		}
	],
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string'
		},
		{
			name: 'columns',
			title: 'Columns',
			type: 'columns',
			fieldset: 'columns'
		},
		{
			name: 'items',
			title: 'Items',
			fieldset: 'items',
			type: 'array',
			options: {
				layout: 'grid'
			},
			of: [{type: 'mainImage'}, {type: 'blockContent'}, {type: 'youtube'}]
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
