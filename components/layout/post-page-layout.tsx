import type {Post} from '~/models/post';
import {Date, Heading, Tag} from '~/components/ui';
import {RenderSection} from '~/components/sections';

const PostPage = ({post, preview = false}: {post: Post; preview?: boolean}) => {
	const keywords = post.keywords?.map((tag) => <Tag key={tag}>{tag}</Tag>);

	if (preview && !post) {
		return <Heading level='h2'>Loading…</Heading>;
	}

	return (
		<article>
			<div className='pb-2'>
				<Heading level='h2'>{post.title}</Heading>
				<div className='flex flex-row items-center'>
					{post.publishedAt && <Date publishedAt={post.publishedAt} />}
					<div className='flex flex-row'>{keywords}</div>
				</div>
			</div>
			{post?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
		</article>
	);
};

export default PostPage;
