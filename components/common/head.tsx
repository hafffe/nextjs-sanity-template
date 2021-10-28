import {DefaultSeo} from 'next-seo';
import SEO from '../../next-seo.config';

const Head = () => (
	<>
		<DefaultSeo {...SEO} />
	</>
);

export default Head;
