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
import gridBlock from './objects/grid-block';
import imageBlock from './objects/image-block';
import simpleTextBlock from './objects/simple-text-block';
import socialFields from './objects/social-fields';
import textBlock from './objects/text-block';
import youtubeBlock from './objects/youtube-block';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		person,
		page,
		post,
		siteSettings,
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
