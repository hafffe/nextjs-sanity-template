import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision';
import { singletonPlugin } from './src/singletonPlugin';
import { schemas } from './schemas'
import {structure, defaultDocumentNode} from './src/structure'
export default defineConfig({
	//projectId: "mzxfialk",
	projectId: "kh2fp3g7",
	//dataset: "staging",
	dataset: 'production',
	name: "Studio",
	basePath: "/studio",
	schema: {
		types: schemas
	},
	plugins: [deskTool({
		structure,
		defaultDocumentNode
	}), singletonPlugin(['siteSettings']),visionTool()]
})
