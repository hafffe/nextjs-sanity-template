import {Grid, ImageBlock, TextBlock, YouTubeBlock} from '.';
import {GridBlockOrImageBlockOrTextBlockOrYoutubeBlock} from '../types/types';

const blocks = ({block}: {block: GridBlockOrImageBlockOrTextBlockOrYoutubeBlock}) => {
	switch (block.__typename) {
		case 'TextBlock':
			return <TextBlock data={block} />;
		case 'GridBlock':
			return <Grid data={block} />;
		case 'ImageBlock':
			return <ImageBlock data={block} />;
		case 'YoutubeBlock':
			return <YouTubeBlock data={block} />;
		default:
			console.log('Block is undefined and not rendered');
			return null;
	}
};

export default blocks;
