import {GetStaticProps} from 'next';
import {Heading} from '@chakra-ui/react';
import Error from 'next/error';
import {useRouter} from 'next/router';
import {pageQuery, siteSettingsQuery, postsQuery} from '@/lib/queries';
import {sanityClient, usePreviewSubscription} from '@/lib/sanity';
import {SiteSettings} from '@/models/site-settings';
import {Page} from '@/models/page';
import {Post} from '@/models/post';
import {Layout, PostList} from '@/components/common';
import {RenderSection} from '@/components/utils';

type Props = {
	pageData: Page;
	posts: Post[];
	siteSettings: SiteSettings;
};

const Index = ({pageData, posts, siteSettings}: Props) => {
	const router = useRouter();

	const {data: page} = usePreviewSubscription(pageQuery, {
		params: {slug: pageData?.slug?.current},
		initialData: pageData,
		enabled: pageData && router.query.preview !== null
	});

	if ((!router.isFallback && !page?.slug) || !page) {
		return <Error statusCode={404} />;
	}

	return (
		<Layout meta={page?.meta} siteSettings={siteSettings}>
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}

			<Heading as='h2' size='lg' paddingY={4}>
				Recent articles
			</Heading>
			<PostList posts={posts} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const pageData = await sanityClient.fetch<Page>(pageQuery, {
		slug: 'frontpage'
	});

	const posts = await sanityClient.fetch<Post[]>(postsQuery, {
		limit: 2
	});

	if (!pageData) {
		return {
			notFound: true
		};
	}

	return {props: {siteSettings, pageData, posts}, revalidate: 60};
};

export default Index;
