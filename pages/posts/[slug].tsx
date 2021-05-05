import {GetStaticProps} from 'next';
import Error from 'next/error';
import {useRouter} from 'next/router';
import {format} from 'date-fns';
import {Box, Heading, HStack, Stack, Tag, Text} from '@chakra-ui/react';
import {postQuery, siteSettingsQuery, allPostSlug} from '@/lib/queries';
import {sanityClient, usePreviewSubscription} from '@/lib/sanity';
import {Post as PostProps} from '@/models/post';
import {SiteSettings} from '@/models/site-settings';
import {Layout} from '@/components/common';
import {RenderSection} from '@/components/utils';

type Props = {
	postData: PostProps;
	siteSettings: SiteSettings;
};

const Post = ({postData, siteSettings}: Props) => {
	const router = useRouter();

	const {data: post} = usePreviewSubscription(postQuery, {
		params: {slug: postData?.slug?.current},
		initialData: postData,
		enabled: postData && router.query.preview !== null
	});

	if ((!router.isFallback && !post?.slug) || !post) {
		return <Error statusCode={404} />;
	}

	const keywords = post.keywords?.map((x) => (
		<Tag key={x} variant='outline' colorScheme='gray' size='sm'>
			{x}
		</Tag>
	));

	return (
		<Layout meta={post?.meta} siteSettings={siteSettings} width={960}>
			<Stack>
				<Heading as='h2' size='2xl'>
					{post.title}
				</Heading>
				<Box>
					<Stack paddingBottom={2} direction='row'>
						<Text fontSize='sm'>Written by {post.author?.name}</Text>
						<Text fontSize='sm'>{post.publishedAt && format(new Date(post.publishedAt), 'MMM dd, yyyy')}</Text>
					</Stack>
					<HStack>{keywords}</HStack>
				</Box>
				{post?.content?.map((section) => {
					if (!section || Object.keys(section).length === 0) {
						return null;
					}

					return <RenderSection key={section._key} section={section} />;
				})}
			</Stack>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({params}) => {
	const slug = params?.slug?.toString();
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const postData = await sanityClient.fetch<PostProps>(postQuery, {
		slug
	});

	return {
		props: {
			postData,
			siteSettings
		},
		revalidate: 60
	};
};

export const getStaticPaths = async () => {
	const data = await sanityClient.fetch<string[]>(allPostSlug);
	const paths = data.map((slug) => ({params: {slug}}));

	return {
		paths,
		fallback: true
	};
};

export default Post;
