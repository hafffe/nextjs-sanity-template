import {chakra, Box} from '@chakra-ui/react';
import NextImage from 'next/image';
import {useNextSanityImage} from 'next-sanity-image';
import {Image as MainImage} from '@/models/sections/image';
import {urlFor, sanityClient} from '@/lib/sanity';

type Props = {
	data: MainImage;
	width?: number;
	height?: number;
};

const ImageBlock = ({data, width = 1152, height = 740}: Props) => {
	const url = data.asset && urlFor(data.asset).width(width).height(height).auto('format').url();
	const imageProps = useNextSanityImage(sanityClient, data.asset);

	if (!url) {
		return null;
	}

	const Image = chakra(NextImage, {
		shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'layout'].includes(prop)
	});

	return (
		<Box marginY={2}>
			<Image
				{...imageProps}
				alt={data?.alt ?? 'Image'}
				borderRadius='md'
				width={width}
				height={height}
				layout='intrinsic'
			/>
		</Box>
	);
};

export default ImageBlock;
