'use client';

import {usePreview as _usePreview} from '~/lib/sanity/preview';
import {PageLayout} from '~/components/layout';
import type {Page} from '~/models/page';
import type {UsePreview} from 'next-sanity/preview';

type PageWithPosts = {
	page: Page;
};

type Props = {
	query: string;
	variables: Record<string, string | number>;
};

const usePreview: UsePreview<PageWithPosts> = _usePreview;

const Preview = ({query, variables}: Props) => {
	const data = usePreview(null, query, variables);

	return <PageLayout preview page={data.page} />;
};

export default Preview;
