import React from 'react';

const useViewport = (initalState?: number) => {
	const [width, setWidth] = React.useState(initalState ? initalState : Infinity);

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);

		setWidth(window.innerWidth);

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return {width};
};

export default useViewport;
