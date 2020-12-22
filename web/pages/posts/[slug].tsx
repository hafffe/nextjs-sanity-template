import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {GetStaticProps, GetStaticPaths} from 'next';
import {Avatar, Badge, Flex, Heading, Stack, Text} from '@chakra-ui/react';
import {format} from 'date-fns';
import {v4 as uuidv4} from 'uuid';
import {SiteSettings} from '@/models/site-settings';
import {Post as PostProps} from '@/models/post';
import {renderBlocks} from '@/components/utils/render-blocks';
import {Layout} from '../../components';
import {fetchAllPostSlug, fetchPost, fetchSiteSettings} from '@/lib/api';
import {urlFor} from '@/lib/utils';

type Props = {
	preview: boolean;
	post: PostProps;
	siteSettings: SiteSettings;
};

const Post = ({post, siteSettings, preview}: Props) => {
	const router = useRouter();

	if (!router.isFallback && (!post || !post?.slug)) {
		return <ErrorPage statusCode={404} />;
	}

	const meta = post?.meta ?? undefined;
	const avatar =
		(post.author.image.asset && urlFor(post.author.image.asset).width(200).auto('format').url()) || undefined;
	const keywords = post.keywords?.map((x) => <Badge key={uuidv4()}>{x}</Badge>);

	return (
		<Layout preview={preview} meta={meta} siteSettings={siteSettings}>
			<Flex direction='column' width='100%'>
				<Heading>{post.title}</Heading>
				<Stack isInline align='center' spacing={4} paddingY={2}>
					<Avatar name={post.author?.name} src={avatar} />
					<Stack isInline direction='column' paddingLeft={3}>
						<Text fontSize='sm'>Written by {post.author?.name}</Text>
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
	const siteSettings = await fetchSiteSettings({preview});
	const post = await fetchPost({
		slug: params?.slug?.toString(),
		preview
	});

	return {
		props: {
			preview,
			post,
			siteSettings
		},
		revalidate: 1
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await fetchAllPostSlug({preview: false});
	const paths = data.map((slug) => ({params: {slug}}));

	return {
		paths,
		fallback: false
	};
};

export default Post;
