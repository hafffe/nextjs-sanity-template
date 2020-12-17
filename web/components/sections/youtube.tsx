import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import {Youtube as YoutubeType} from '@/models/sections/youtube';

type Props = {
	data: YoutubeType;
};

const YoutubeBlock = ({data}: Props) => {
	if (!data.url) {
		return null;
	}

	const options = {
		playerVars: {
			autoplay: data.autoPlay ? (1 as const) : (0 as const),
			mute: data.muted ? (1 as const) : (0 as const)
		}
	};

	const id = getYouTubeId(data.url)?.toString();

	return <YouTube videoId={id} opts={options} containerClassName='youtubeContainer' />;
};

export default YoutubeBlock;
