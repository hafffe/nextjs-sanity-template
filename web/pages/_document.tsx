import React from 'react';
import {ColorModeScript} from '@chakra-ui/react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
	render = () => (
		<Html lang='en'>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap'
					rel='stylesheet'
				/>
				<link rel='icon' type='image/svg+xml' href='favicon.svg' />
			</Head>
			<body>
				<ColorModeScript />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
