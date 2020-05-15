export default {
	title: 'Simple Text Block',
	name: 'simpleTextBlock',
	type: 'object',
	fields: [
		{
			name: 'text',
			title: 'Text',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					styles: [{title: 'Normal', value: 'normal'}],
					marks: {
						decorators: [
							{value: 'strong', title: 'Strong'},
							{value: 'italic', title: 'Italic'},
							{value: 'underline', title: 'Underline'}
						],
						annotations: [{type: 'link'}]
					}
				}
			]
		}
	]
};
