import {GetStaticProps} from 'next';
import Error from 'next/error';
import {useRouter} from 'next/router';
import {format} from 'date-fns';
import {Avatar, Heading, Stack, Tag, Text} from '@chakra-ui/react';
import {postQuery, siteSettingsQuery, allPostSlug} from '@/lib/queries';
import {sanityClient, usePreviewSubscription, urlFor} from '@/lib/sanity';
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

	const meta = post?.meta ?? undefined;
	const avatar =
		(post.author.image.asset && urlFor(post.author.image.asset).width(200).auto('format').url()) || undefined;
	const keywords = post.keywords?.map((x) => (
		<Tag key={x} size='sm' borderRadius='none'>
			{x}
		</Tag>
	));

	return (
		<Layout meta={meta} siteSettings={siteSettings}>
			<Stack>
				<Heading as='h2' size='2xl' marginBottom={6}>
					{post.title}
				</Heading>
				<Stack isInline spacing={3} align='center'>
					<Avatar size='sm' name={post.author?.name} src={avatar} />
					<Text fontSize='sm'>Written by {post.author?.name}</Text>
					<Text fontSize='sm'>{post.publishedAt && format(new Date(post.publishedAt), 'MMMM dd, yyyy')}</Text>
				</Stack>
				<Stack isInline spacing={6} marginBottom={6}>
					{keywords}
				</Stack>
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
