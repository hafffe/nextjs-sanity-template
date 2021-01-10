import {GetStaticProps} from 'next';
import {Flex, Divider, Heading, Icon, Link as ChakraLink} from '@chakra-ui/react';
import Error from 'next/error';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {RiArrowRightLine} from 'react-icons/ri';
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

	const meta = page?.meta ?? undefined;

	return (
		<Layout meta={meta} siteSettings={siteSettings}>
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
			<Divider />
			<Flex direction='row' paddingY={8}>
				<Heading as='h2' size='xl' paddingBottom={2}>
					Recent articles
				</Heading>
				<Link passHref href='/posts/'>
					<ChakraLink marginLeft='auto' whiteSpace='nowrap'>
						All Articles <Icon as={RiArrowRightLine} />
					</ChakraLink>
				</Link>
			</Flex>
			<PostList layout='minimal' posts={posts} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const pageData = await sanityClient.fetch<Page>(pageQuery, {
		slug: 'frontpage'
	});

	const posts = await sanityClient.fetch<Post[]>(postsQuery, {
		limit: 5
	});

	if (!pageData) {
		return {
			notFound: true
		};
	}

	return {props: {siteSettings, pageData, posts}, revalidate: 60};
};

export default Index;
