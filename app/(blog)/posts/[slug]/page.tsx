import {previewData} from 'next/headers';
import {postQuery} from '~/lib/queries';
import {sanityClient} from '~/lib/sanity/client';
import {PostPageLayout} from '~/components/layout';
import {PreviewSuspense, PostPreview} from '~/components/previews';
import type {Post} from '~/models/post';

const PostRoute = async ({params}: {params: {slug: string}}) => {
	console.log('params.slug', params.slug);
	const post = await sanityClient.fetch<Post>(postQuery, {
		slug: params.slug
	});

	if (!post) {
		console.log('no post', post);
	}

	console.log('post', post.title);
	if (previewData()) {
		return (
			<PreviewSuspense fallback={<PostPageLayout post={post} />}>
				<PostPreview query={postQuery} variables={{slug: params.slug}} />
			</PreviewSuspense>
		);
	}

	return <PostPageLayout post={post} />;
};

export default PostRoute;
