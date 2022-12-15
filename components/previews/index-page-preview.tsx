'use client';

import {usePreview as _usePreview} from '~/lib/sanity/preview';
import {IndexPageLayout} from '~/components/layout';
import type {Page} from '~/models/page';
import type {Post} from '~/models/post';
import type {UsePreview} from 'next-sanity/preview';

type PageWithPosts = {
	page: Page;
	posts: Post[];
};

type Props = {
	query: string;
	variables: Record<string, string | number>;
};

const usePreview: UsePreview<PageWithPosts> = _usePreview;

const Preview = ({query, variables}: Props) => {
	const data = usePreview(null, query, variables);

	return <IndexPageLayout preview page={data.page} posts={data.posts} />;
};

export default Preview;
