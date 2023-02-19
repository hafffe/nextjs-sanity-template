import {previewData} from 'next/headers';
import {postQuery, postsQuery} from '~/lib/queries';
import {sanityClient} from '~/lib/sanity/client';
import {PostPageLayout} from '~/components/layout';
import {PreviewSuspense, PostPreview} from '~/components/previews';
import type {Post} from '~/models/post';

export const generateStaticParams = async () => {
	const postsData = await sanityClient.fetch<Post[]>(postsQuery, {
		limit: 100
	});

	return postsData.map((post) => ({
		slug: post.slug.current
	}));
};

const PostRoute = async ({params}: {params: {slug: string}}) => {
	const post = await sanityClient.fetch<Post>(postQuery, {
		slug: params.slug
	});

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
