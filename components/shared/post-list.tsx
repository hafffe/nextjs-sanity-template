import Link from 'next/link';
import {Heading, Date, Tag} from '~/components/ui';
import PostBody from './post-body';
import PostImage from './image';
import type {Post} from '~/models/post';

type Props = {
	posts: Post[];
};

const PostList = ({posts}: Props) => (
	<div className='flex-col'>
		<div className='grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-1'>
			{posts.map((post) => {
				if (!post.slug?.current) {
					return null;
				}

				const keywords = post.keywords?.map((tag) => <Tag key={tag}>{tag}</Tag>);

				return (
					<Link key={post._id} href={`/posts/${post.slug.current}`}>
						<article>
							<div className='flex-col'>
								{post.featuredImage && <PostImage data={post.featuredImage} width={600} height={450} />}
								<Heading level='h2'>{post.title}</Heading>
								<div className='flex flex-row items-center'>
									{post.publishedAt && <Date publishedAt={post.publishedAt} />}
									<div className='flex flex-row'>{keywords}</div>
								</div>
								{post?.excerpt && <PostBody content={post.excerpt} />}
							</div>
						</article>
					</Link>
				);
			})}
		</div>
	</div>
);

export default PostList;
