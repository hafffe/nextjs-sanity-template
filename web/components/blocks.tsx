import {BlockContent, Grid, MainImage, Spacer, YouTube} from '.';
import {PageSections} from '@/models/sections';

const SectionBlocks = ({block}: {block: PageSections}) => {
	switch (block._type) {
		case 'blockContent':
			return <BlockContent data={block} />;
		case 'grid':
			return <Grid data={block} />;
		case 'mainImage':
			return <MainImage data={block} />;
		case 'youtube':
			return <YouTube data={block} />;
		case 'spacer':
			return <Spacer data={block} />;
		default:
			console.log('Block is undefined and not rendered');
			return null;
	}
};

export default SectionBlocks;
