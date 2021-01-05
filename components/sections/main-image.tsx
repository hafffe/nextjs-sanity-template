import {Box, Image} from '@chakra-ui/react';
import {Image as MainImage} from '@/models/sections/image';
import {urlFor} from '@/lib/sanity';

type Props = {
	data: MainImage;
};

const ImageBlock = ({data}: Props) => {
	const url = data.asset && urlFor(data.asset).width(1200).auto('format').url();

	if (!url) {
		return null;
	}

	return (
		<Box marginY={2}>
			<Image src={url} alt={data?.alt ?? 'Image'} />
		</Box>
	);
};

export default ImageBlock;
