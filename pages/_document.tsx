import {ColorModeScript} from '@chakra-ui/react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
	render = () => (
		<Html lang='en'>
			<Head>
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
