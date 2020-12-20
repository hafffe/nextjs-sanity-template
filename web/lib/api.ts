import {client} from './utils';
import {SiteSettings} from '../models/site-settings';
import {Page} from '../models/page';
import {Post} from '../models/post';
import {allPagesSlug, allPostSlug, pageById, pageBySlug, post, posts, siteSettings} from './queries';

export const fetchSiteSettings = async () => {
	const data = await client.fetch<SiteSettings>(siteSettings);
	return data;
};

export const fetchPageById = async (id: string, preview?: boolean) => {
	const data = await client.fetch<Page>(pageById, {
		id
	});

	return data;
};

export const fetchPageBySlug = async (slug?: string, preview?: boolean) => {
	if (typeof slug === 'undefined') {
		return null;
	}

	const data = await client.fetch<Page>(pageBySlug, {
		slug
	});

	return data;
};

export const fetchAllPagesSlug = async () => {
	const data = await client.fetch<string[]>(allPagesSlug);

	return data;
};

export const fetchPost = async (slug?: string, preview?: boolean) => {
	if (typeof slug === 'undefined') {
		return null;
	}

	const data = await client.fetch<Post>(post, {
		slug
	});

	return data;
};

export const fetchAllPostSlug = async () => {
	const data = await client.fetch<string[]>(allPostSlug);

	return data;
};

export const fetchPosts = async (limit: number, preview?: boolean) => {
	const data = await client.fetch<Post[]>(posts, {
		limit
	});

	return data;
};
