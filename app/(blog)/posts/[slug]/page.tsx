import type {Metadata} from 'next';
import {previewData} from 'next/headers';
import {postQuery, postsQuery} from '~/lib/queries';
import {sanityClient, urlForImage} from '~/lib/sanity/client';
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

export const generateMetadata = async ({params}: {params: {slug: string}}): Promise<Metadata> => {
	const post = await sanityClient.fetch<Post>(postQuery, {
		slug: params.slug
	});

	const ogImage =
		(post.meta?.openGraphImage &&
			urlForImage(post.meta.openGraphImage).width(800).height(600).fit('crop').url()) ??
		'';

	return {
		title: post.meta?.metaTitle ?? post.title,
		description: post.meta?.metaDescription,
		icons: {
			icon: '/favicon/favicon.svg'
		},
		openGraph: {
			title: post.meta?.openGraphTitle,
			description: post.meta?.openGraphDescription,
			images: [
				{
					url: ogImage,
					width: 800,
					height: 600
				}
			]
		}
	};
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
