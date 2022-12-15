import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {singletonPlugin} from './src/singletonPlugin';
import {schemasTypes} from './schemas';
import {structure, defaultDocumentNode} from './src/structure';

export default defineConfig({
	projectId: 'mzxfialk',
	dataset: 'staging',
	name: 'Studio',
	basePath: '/studio',
	schema: {
		types: schemasTypes
	},
	plugins: [
		deskTool({
			structure,
			defaultDocumentNode
		}),
		singletonPlugin({types: ['siteSettings']}),
		visionTool()
	]
});
