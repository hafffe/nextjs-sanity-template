import {RiLinksLine} from 'react-icons/ri';

export default {
	title: 'URL',
	name: 'link',
	type: 'object',
	hidden: true,
	fields: [
		{
			title: 'URL',
			name: 'href',
			type: 'url',
			validation: (Rule: any) =>
				Rule.uri({
					allowRelative: true,
					scheme: ['https', 'http', 'mailto', 'tel']
				})
		}
	],
	blockEditor: {
		icon: RiLinksLine
	}
};
