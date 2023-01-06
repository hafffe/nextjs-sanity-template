'use client';

import {definePreview} from 'next-sanity/preview';
import type {UsePreview} from 'next-sanity/preview';
import {config} from './client';

const onPublicAccessOnly = () => {
	throw new Error(`Unable to load preview as you're not logged in`);
};

export const usePreview: UsePreview = definePreview({
	projectId: config.projectId,
	dataset: config.dataset,
	onPublicAccessOnly
});
