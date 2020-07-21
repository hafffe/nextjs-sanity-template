import React from 'react';
import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {GetStaticProps, GetStaticPaths} from 'next';
import {Badge, Flex, Heading, Stack, Text} from '@chakra-ui/core';
import {format} from 'date-fns';
import {v4 as uuidv4} from 'uuid';
import {renderBlocks} from '../../components/utils/render-blocks';
import {Layout, Image} from '../../components';
import {apiClient} from '../../lib/api';
import {SITE_SETTINGS, GET_POST, GET_POSTS_WITH_SLUG} from '../../lib/queries';
import {
	Post as PostType,
	GetPostQuery,
	GetAllPostsWithSlugQuery,
	SiteSettings,
	SiteSettingsQuery
} from '../../types/types';

type Props = {
	preview: boolean;
	post: PostType;
	siteSettings: SiteSettings;
};

const Post = ({post, siteSettings, preview}: Props) => {
	const router = useRouter();

	if (!router.isFallback && (!post || !post?.slug)) {
		return <ErrorPage statusCode={404} />;
	}

	const keywords = post.keywords?.map((x) => <Badge key={uuidv4()}>{x}</Badge>);

	return (
		<Layout preview={preview} siteSettings={siteSettings}>
			<Flex direction='column' width='100%'>
				<Heading>{post?.title}</Heading>
				<Stack isInline align='center' spacing={4} paddingY={2}>
					{post.author?.image?.asset && <Image avatar source={post.author.image.asset} />}
					<Stack isInline direction='column' paddingLeft={3}>
						{post.author?.name && <Text fontSize='sm'>Written by {post.author.name}</Text>}
						<Text fontSize='sm'>{post.publishedAt && format(new Date(post.publishedAt), 'MMMM dd, yyyy')}</Text>
					</Stack>
				</Stack>
				<Stack isInline paddingY={2}>
					{keywords}
				</Stack>
				{post?.content && renderBlocks(post.content)}
			</Flex>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async ({params, preview = false}) => {
	const {SiteSettings} = await apiClient<SiteSettingsQuery>(SITE_SETTINGS);
	const {allPost} = await apiClient<GetPostQuery>(GET_POST, {
		id: params?.slug?.toString()
	});

	const post = preview ? allPost.find((post) => post._id && post._id.includes('draft')) ?? allPost[0] : allPost[0];

	return {
		props: {
			preview,
			post,
			siteSettings: SiteSettings
		},
		unstable_revalidate: 1
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await apiClient<GetAllPostsWithSlugQuery>(GET_POSTS_WITH_SLUG);

	return {
		paths: data?.allPost?.map((post) => `/posts/${post?.slug?.current}`) || null,
		fallback: false
	};
};

export default Post;
