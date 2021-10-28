import { RiYoutubeLine } from 'react-icons/ri';
import YouTube from 'react-youtube';

const Preview = ({ value }) => {
	const { url } = value;
	console.log('url', url);

	if (!value.url) {
		return 'Please enter a URL';
	}
};

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
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'autoPlay',
			type: 'boolean',
			title: 'Enable autoplay',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'muted',
			type: 'boolean',
			title: 'Muted',
			validation: (Rule: any) => Rule.required(),
		},
	],
	preview: {
		select: {
			url: 'url',
		},
		component: Preview,
	},
};
