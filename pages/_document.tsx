import {ColorModeScript} from '@chakra-ui/react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
	render = () => (
		<Html lang='en'>
			<Head>
				<meta charSet='utf-8' />
				<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
				<link rel='icon' type='image/svg+xml' href='favicon.svg' />
				<link href='https://fonts.googleapis.com/css2?family=Work+Sans&display=optional' rel='stylesheet' />
			</Head>
			<body>
				<ColorModeScript />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
