import {RiShareLine} from 'react-icons/ri';
import {defineField} from 'sanity';

const socialFields = defineField({
	title: 'Social',
	name: 'socialFields',
	type: 'object',
	icon: RiShareLine,
	fields: [
		{
			name: 'twitter',
			type: 'url',
			title: 'Twitter URL',
			validation: (Rule) => Rule.uri({scheme: ['https']})
		},
		{
			name: 'instagram',
			type: 'url',
			title: 'Instagram URL',
			validation: (Rule) => Rule.uri({scheme: ['https']})
		},
		{
			name: 'facebook',
			type: 'url',
			title: 'Facebook URL',
			validation: (Rule) => Rule.uri({scheme: ['https']})
		}
	]
});

export default socialFields;
