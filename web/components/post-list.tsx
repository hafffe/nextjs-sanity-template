import Link from 'next/link';
import {format} from 'date-fns';
import {v4 as uuidv4} from 'uuid';
import {Badge, Box, Flex, Heading, Link as Li, Stack, Text} from '@chakra-ui/react';
import {Post} from '@models/post';
import {BlockContent} from '.';

type Props = {
	posts: Post[];
	layout: 'minimal' | 'original';
};

const PostList = ({posts, layout}: Props) => (
	<Flex direction='column' width='100%'>
		{posts.map((post) => {
			if (!post.slug?.current) {
				return null;
			}

			const key = uuidv4();

			const keywords = post.keywords?.map((x) => <Badge key={uuidv4()}>{x}</Badge>);

			if (layout === 'minimal') {
				return (
					<Flex key={post._id ?? key} direction='column' paddingBottom={2}>
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
				<Flex key={post._id ?? key} direction='column' paddingBottom={2} width='100%'>
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
				</Flex>
			);
		})}
	</Flex>
);

export default PostList;
