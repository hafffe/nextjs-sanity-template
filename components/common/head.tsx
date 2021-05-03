import NextHead from 'next/head';
import {DefaultSeo} from 'next-seo';
import SEO from '../../next-seo.config';

const Head = () => (
	<>
		<NextHead>
			<meta charSet='utf-8' />
			<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<link rel='icon' type='image/svg+xml' href='favicon.svg' />
			<link href='https://fonts.googleapis.com/css2?family=Work+Sans' rel='stylesheet' />
		</NextHead>
		<DefaultSeo {...SEO} />
	</>
);

export default Head;
