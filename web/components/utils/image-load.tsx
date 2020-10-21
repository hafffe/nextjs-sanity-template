import React, {useState, useEffect} from 'react';
import {Image as Img} from '@chakra-ui/core';

type Props = {
	src: string;
	placeholder: string;
	alt: string;
};

const ImageLoad = React.memo(({src, placeholder, alt}: Props) => {
	const [loading, setLoading] = useState(true);
	const [currentSrc, updateSrc] = useState(placeholder);

	useEffect(() => {
		const imageToLoad = new Image();
		imageToLoad.src = src;
		imageToLoad.addEventListener('load', () => {
			// Timeout for debug
			setTimeout(() => {
				setLoading(false);
				updateSrc(src);
			}, 2000);
		});
	}, [src]);

	return (
		<Img
			src={currentSrc}
			fallbackSrc={currentSrc}
			alt={alt}
			style={{
				width: loading ? '100%' : '',
				opacity: loading ? 0.5 : 1,
				transition: 'opacity .15s linear'
			}}
		/>
	);
});

export default ImageLoad;
