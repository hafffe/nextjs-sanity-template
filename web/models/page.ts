import {SanityDocument, Slug} from '@sanity/types';
import {MetaFields} from './meta-fields';
import {PageSections} from './sections';

export interface Page extends SanityDocument {
	slug: Slug;
	title: string;
	metaFields?: MetaFields;
	content?: PageSections[];
}
