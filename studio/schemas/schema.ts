import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import person from './documents/person';
import page from './documents/page';
import post from './documents/post';
import siteSettings from './documents/site-settings';

import columns from './objects/columns';
import externalLink from './objects/external-link';
import internalLink from './objects/internal-link';
import link from './objects/link';
import cell from './objects/cell';
import metaFields from './objects/meta';

import gridBlock from './modules/grid-block';
import imageBlock from './modules/image-block';
import simpleTextBlock from './objects/simple-text-block';
import socialFields from './objects/social-fields';
import textBlock from './modules/text-block';
import youtubeBlock from './modules/youtube-block';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		person,
		page,
		post,
		siteSettings,
		metaFields,
		columns,
		externalLink,
		internalLink,
		link,
		cell,
		gridBlock,
		imageBlock,
		simpleTextBlock,
		socialFields,
		textBlock,
		youtubeBlock
	])
});
