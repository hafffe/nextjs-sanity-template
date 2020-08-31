import {RiFileTextLine} from 'react-icons/ri';

export default {
	title: 'Text Section',
	name: 'textBlock',
	type: 'object',
	hidden: false,
	icon: RiFileTextLine,
	fields: [
		{
			name: 'text',
			title: 'Text',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
						{title: 'H4', value: 'h4'},
						{title: 'H5', value: 'h5'},
						{title: 'H6', value: 'h6'},
						{title: 'Quote', value: 'blockquote'},
						{title: 'Big Text', value: 'big'}
					],
					marks: {
						decorators: [
							{value: 'strong', title: 'Strong'},
							{value: 'italic', title: 'Italic'},
							{value: 'underline', title: 'Underline'},
							{value: 'code', title: 'Code'}
						],
						annotations: [{type: 'link'}]
					}
				}
			]
		}
	],
	preview: {
		prepare() {
			return {
				title: 'Text Section'
			};
		}
	}
};
