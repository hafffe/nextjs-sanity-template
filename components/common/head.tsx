import NextHead from 'next/head';
import {DefaultSeo} from 'next-seo';
import {GoogleFonts} from 'next-google-fonts';
import SEO from '../../next-seo.config';

const Head = () => (
	<>
		<NextHead>
			<meta charSet='utf-8' />
			<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<link rel='icon' type='image/svg+xml' href='favicon.svg' />
		</NextHead>
		<DefaultSeo {...SEO} />
		<GoogleFonts href='https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap' />
	</>
);

export default Head;
