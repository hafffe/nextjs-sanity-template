import React from 'react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import {YoutubeBlock as YoutubeBlockProps} from '../types/types';

type Props = {
	data: YoutubeBlockProps;
};

const YoutubeBlock: React.FunctionComponent<Props> = ({data}) => {
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
