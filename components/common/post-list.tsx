import NextLink from 'next/link';
import {Flex, Grid, Heading, HStack, LinkBox, LinkOverlay, Text} from '@chakra-ui/react';
import {Post} from '@/models/post';
import {BlockContent, MainImage} from '@/components/sections';
import {Date} from '.';

type Props = {
	posts: Post[];
};

const PostList = ({posts}: Props) => (
	<Flex direction='column'>
		<Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={{base: 4, md: 6}}>
			{posts.map((post) => {
				if (!post.slug?.current) {
					return null;
				}

				const keywords = post.keywords?.map((x) => (
					<Text key={x} fontSize='sm' paddingY={1}>
						{x}
					</Text>
				));

				return (
					<LinkBox key={post._id} as='article'>
						<Flex direction='column' width='100%'>
							{post.featuredImage && <MainImage data={post.featuredImage} width={600} height={450} />}
							<NextLink passHref href='/posts/[slug]' as={`/posts/${post.slug.current}`}>
								<LinkOverlay href={`/posts/${post.slug?.current}`}>
									<Heading as='h2' size='lg'>
										{post.title}
									</Heading>
								</LinkOverlay>
							</NextLink>
							<HStack paddingBottom={2}>
								{post.publishedAt && <Date publishedAt={post.publishedAt} />}
								<HStack>{keywords}</HStack>
							</HStack>
							{post?.excerpt && <BlockContent data={post.excerpt} />}
						</Flex>
					</LinkBox>
				);
			})}
		</Grid>
	</Flex>
);

export default PostList;
