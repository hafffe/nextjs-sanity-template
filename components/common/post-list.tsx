import Link from 'next/link';
import {format} from 'date-fns';
import {Box, Divider, Flex, Heading, Link as Li, Stack, Text, Tag, VStack} from '@chakra-ui/react';
import {Post} from '@/models/post';
import {BlockContent} from '@/components/sections';

type Props = {
	posts: Post[];
	layout: 'minimal' | 'original';
};

const PostList = ({posts, layout}: Props) => (
	<VStack align='stretch'>
		{posts.map((post) => {
			if (!post.slug?.current) {
				return null;
			}

			const keywords = post.keywords?.map((x) => (
				<Tag key={x} size='sm' borderRadius='none'>
					{x}
				</Tag>
			));

			if (layout === 'minimal') {
				return (
					<Flex key={post._id} direction='column' paddingBottom={2}>
						<Link passHref href='/posts/[slug]' as={`/posts/${post.slug.current}`}>
							<Li href={`/posts/${post.slug?.current}`}>
								<Heading as='h2' size='lg'>
									{post.title}
								</Heading>
							</Li>
						</Link>
						<Text fontSize='sm' paddingY={1}>
							{post.publishedAt && format(new Date(post.publishedAt), 'MMM dd, yyyy')}
						</Text>
					</Flex>
				);
			}

			return (
				<Flex key={post._id} direction='column' width='100%'>
					<Link passHref href='/posts/[slug]' as={`/posts/${post.slug.current}`}>
						<Li href={`/posts/${post.slug?.current}`}>
							<Heading as='h2' size='lg'>
								{post.title}
							</Heading>
						</Li>
					</Link>
					<Text fontSize='sm' paddingY={1}>
						{post.publishedAt && format(new Date(post.publishedAt), 'MMM dd, yyyy')}
					</Text>
					<Stack isInline spacing={4}>
						{keywords}
					</Stack>
					<Box paddingY={2}>{post?.excerpt && <BlockContent data={post.excerpt} />}</Box>
					<Divider />
				</Flex>
			);
		})}
	</VStack>
);

export default PostList;
