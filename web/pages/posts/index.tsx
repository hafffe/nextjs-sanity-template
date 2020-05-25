import React from 'react';
import {GetStaticProps} from 'next';
import {apiClient} from '../../lib/api';
import {SITE_SETTINGS, GET_POSTS} from '../../lib/queries';
import {PostListQuery, Post as PostType, SiteSettings, SiteSettingsQuery} from '../../types/types';
import {Layout, PostList} from '../../components';

type Props = {
	preview: boolean;
	allPost: PostType[];
	siteSettings: SiteSettings;
};

const Posts = ({allPost, siteSettings, preview}: Props) => (
	<Layout siteSettings={siteSettings} preview={preview}>
		<PostList allPost={allPost} layout='original' />
	</Layout>
);

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
	const {SiteSettings} = await apiClient<SiteSettingsQuery>(SITE_SETTINGS);
	const {allPost} = await apiClient<PostListQuery>(GET_POSTS, {
		limit: 20
	});

	return {props: {allPost, siteSettings: SiteSettings, preview}};
};

export default Posts;
