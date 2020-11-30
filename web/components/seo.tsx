import {NextSeo} from 'next-seo';
import {useRouter} from 'next/router';
import {MetaFields} from '../types/types';
import {urlFor} from '../lib/utils';
import SEO from '../next-seo.config';

type Props = {
	meta?: MetaFields;
	fallbackMeta?: {
		title?: string;
		description?: string;
	};
};

const Seo = ({meta, fallbackMeta}: Props) => {
	const router = useRouter();
	const title = meta?.metaTitle ?? fallbackMeta?.title ?? SEO.title;
	const description = meta?.metaDescription ?? fallbackMeta?.title ?? SEO.description;
	const url = `${SEO.openGraph.url}${router.asPath.replace('/', '')}`;
	const openGraphTitle = meta?.openGraphTitle ?? fallbackMeta?.title ?? SEO.title;
	const openGraphDescription = meta?.openGraphDescription ?? fallbackMeta?.description ?? SEO.description;
	const imageUrl =
		(meta?.openGraphImage?.asset?._id && urlFor(meta.openGraphImage.asset._id).auto('format').url()) ??
		SEO.openGraph.images[0].url;

	return (
		<NextSeo
			title={title}
			description={description}
			canonical={url}
			openGraph={{
				url,
				title: openGraphTitle,
				description: openGraphDescription,
				images: [
					{
						url: imageUrl,
						alt: description,
						width: 1280,
						height: 720
					}
				]
			}}
		/>
	);
};

export default Seo;
