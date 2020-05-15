import React from 'react';
import Link from 'next/link';
import {format} from 'date-fns';
import {v4 as uuidv4} from 'uuid';
import {Badge, Box, Flex, Heading, Link as Li, Stack, Text} from '@chakra-ui/core';
import {Post as PostType} from '../types/types';
import {TextBlock} from '.';

type Props = {
	allPost: PostType[];
	layout: 'minimal' | 'original';
};

const PostList: React.FunctionComponent<Props> = ({allPost, layout}) => (
	<Flex direction='column' width='100%'>
		{allPost.map((post) => {
			if (!post.slug?.current) {
				return null;
			}

			const key = uuidv4();

			const keywords = post.keywords?.map((x) => <Badge key={uuidv4()}>{x}</Badge>);

			if (layout === 'minimal') {
				return (
					<Flex key={post._id ?? key} direction='column' paddingBottom={2}>
						<Link passHref href='/post/[slug]' as={`/post/${post.slug.current}`}>
							<Li href={`/post/${post.slug?.current}`}>
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
				<Flex key={post._id ?? key} direction='column' paddingY={4} width='100%'>
					<Link passHref href='/post/[slug]' as={`/post/${post.slug.current}`}>
						<Li href={`/post/${post.slug?.current}`}>
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
					<Box paddingY={2}>{post?.excerpt && <TextBlock data={post.excerpt} />}</Box>
				</Flex>
			);
		})}
	</Flex>
);

export default PostList;
