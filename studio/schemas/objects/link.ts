import {RiLinksLine} from 'react-icons/ri';

const link = {
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

export default link;
