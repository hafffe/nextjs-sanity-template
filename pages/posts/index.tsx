import {GetStaticProps} from 'next';
import Error from 'next/error';
import {useRouter} from 'next/router';
import {pageQuery, postsQuery, siteSettingsQuery} from '@/lib/queries';
import {sanityClient, usePreviewSubscription} from '@/lib/sanity';
import {Page as PageProps} from '@/models/page';
import {Post as PostProps} from '@/models/post';
import {SiteSettings} from '@/models/site-settings';
import {Layout, PostList} from '@/components/common';
import {RenderSection} from '@/components/utils';

type Props = {
	pageData: PageProps;
	posts: PostProps[];
	siteSettings: SiteSettings;
};

const Posts = ({pageData, posts, siteSettings}: Props) => {
	const router = useRouter();

	const {data: page} = usePreviewSubscription(pageQuery, {
		params: {slug: pageData?.slug?.current},
		initialData: pageData,
		enabled: pageData && router.query.preview !== null
	});

	if ((!router.isFallback && !page?.slug) || !page) {
		return <Error statusCode={404} />;
	}

	const meta = page?.meta ?? undefined;

	return (
		<Layout meta={meta} siteSettings={siteSettings}>
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
			<PostList posts={posts} layout='original' />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, {
		slug: 'posts'
	});

	const posts = await sanityClient.fetch<PostProps[]>(postsQuery, {
		limit: 5
	});

	return {
		props: {
			pageData,
			posts,
			siteSettings
		},
		revalidate: 60
	};
};

export default Posts;
