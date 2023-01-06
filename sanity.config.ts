import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {singletonPlugin} from './studio/plugins/singletonPlugin';
import {previewDocumentNode} from './studio/plugins/preview';
import {schemasTypes} from './studio/schemas';
import {structure} from './studio/structure';

export default defineConfig({
	projectId: 'mzxfialk',
	dataset: 'production',
	name: 'Studio',
	basePath: '/studio',
	schema: {
		types: schemasTypes
	},
	plugins: [
		deskTool({
			structure,
			defaultDocumentNode: previewDocumentNode()
		}),
		singletonPlugin({types: ['siteSettings']}),
		visionTool()
	]
});
