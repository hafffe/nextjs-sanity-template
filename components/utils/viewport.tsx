import {useEffect, useState} from 'react';

const useViewport = (initalState?: number) => {
	const [width, setWidth] = useState(initalState ? initalState : Number.POSITIVE_INFINITY);

	useEffect(() => {
		const handleWindowResize = () => {
			setWidth(window.innerWidth);
		};

		setWidth(window.innerWidth);

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return {width};
};

export default useViewport;
