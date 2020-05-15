export default {
	title: 'Internal Link',
	name: 'internalLink',
	type: 'object',
	hidden: true,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required()
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
	]
};
