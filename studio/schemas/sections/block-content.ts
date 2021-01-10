import {RiFileTextLine} from 'react-icons/ri';
import {AiOutlineItalic} from 'react-icons/ai';
import CenterText from '../../src/components/block-content/centered-styles';

export default {
	title: 'Block Content',
	name: 'blockContent',
	description: 'Text Block',
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
						{
							title: 'Normal Center',
							value: 'normal+center',
							blockEditor: {
								render: CenterText
							}
						},
						{
							title: 'H1 Center',
							value: 'h1+center',
							blockEditor: {
								render: CenterText
							}
						},
						{
							title: 'H2 Center',
							value: 'h2+center',
							blockEditor: {
								render: CenterText
							}
						},
						{
							title: 'H3 Center',
							value: 'h3+center',
							blockEditor: {
								render: CenterText
							}
						},
						{
							title: 'H4 Center',
							value: 'h4+center',
							blockEditor: {
								render: CenterText
							}
						},
						{
							title: 'H5 Center',
							value: 'h5+center',
							blockEditor: {
								render: CenterText
							}
						},
						{
							title: 'H6 Center',
							value: 'h6+center',
							blockEditor: {
								render: CenterText
							}
						},
						{title: 'Quote', value: 'blockquote'}
					],
					marks: {
						decorators: [
							{value: 'strong', title: 'Strong'},
							{
								value: 'italic',
								title: 'Italic',
								blockEditor: {
									icon: AiOutlineItalic
								}
							},
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
