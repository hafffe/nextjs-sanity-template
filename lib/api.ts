import {getClient} from './utils';
import {SiteSettings} from '../models/site-settings';
import {Page} from '../models/page';
import {Post} from '../models/post';
import {allPagesSlug, allPostSlug, page, pageDraft, post, postDraft, posts, siteSettings} from './queries';

export const fetchSiteSettings = async ({preview = false}: {preview: boolean}) => {
	const data = await getClient(preview).fetch<SiteSettings>(siteSettings);

	return data;
};

export const fetchPageBySlug = async ({slug, preview = false}: {slug?: string; preview: boolean}) => {
	if (typeof slug === 'undefined') {
		return {};
	}

	const query = preview ? page : pageDraft;
	const data = await getClient(preview).fetch<Page>(query, {
		slug
	});

	return data;
};

export const fetchAllPagesSlug = async ({preview = false}: {preview: boolean}) => {
	const data = await getClient(preview).fetch<string[]>(allPagesSlug);

	return data;
};

export const fetchPost = async ({slug, preview = false}: {slug?: string; preview: boolean}) => {
	if (typeof slug === 'undefined') {
		return {};
	}

	const query = preview ? postDraft : post;
	const data = await getClient(preview).fetch<Post>(query, {
		slug
	});

	return data;
};

export const fetchAllPostSlug = async ({preview = false}: {preview: boolean}) => {
	const data = await getClient(preview).fetch<string[]>(allPostSlug);

	return data;
};

export const fetchPosts = async ({limit = 10, preview = false}: {limit: number; preview: boolean}) => {
	const data = await getClient(preview).fetch<Post[]>(posts, {
		limit
	});

	return data;
};
