import NextHead from 'next/head';
import {DefaultSeo} from 'next-seo';
import SEO from '../../next-seo.config';

const Head = () => (
	<>
		<NextHead>
			<meta content='width=device-width, initial-scale=1' name='viewport' />
		</NextHead>
		<DefaultSeo {...SEO} />
	</>
);

export default Head;
