import {RiCheckboxIndeterminateLine} from 'react-icons/ri';

export default {
	name: 'spacer',
	type: 'object',
	title: 'Spacer',
	hidden: true,
	description: 'An empty block to create space between sections',
	icon: RiCheckboxIndeterminateLine,
	fields: [
		{
			name: 'size',
			title: 'Size',
			type: 'string',
			options: {
				list: [
					{title: 'Small', value: 'small'},
					{title: 'Medium', value: 'medium'},
					{title: 'Large', value: 'large'},
					{title: 'X-Large', value: 'xlarge'}
				],
				layout: 'radio'
			}
		}
	],
	preview: {
		select: {
			title: 'size'
		},
		prepare({title}: {title: string}) {
			return {
				title: `Spacer ${title.charAt(0).toUpperCase() + title.slice(1)}`
			};
		}
	}
};
