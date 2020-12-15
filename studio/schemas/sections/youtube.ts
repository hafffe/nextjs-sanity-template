import {RiYoutubeLine} from 'react-icons/ri';

export default {
	name: 'youtube',
	type: 'object',
	title: 'YouTube Embed',
	icon: RiYoutubeLine,
	fields: [
		{
			name: 'url',
			type: 'url',
			title: 'YouTube video URL',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'autoPlay',
			type: 'boolean',
			title: 'Enable autoplay',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'muted',
			type: 'boolean',
			title: 'Muted',
			validation: (Rule: any) => Rule.required()
		}
	]
};
