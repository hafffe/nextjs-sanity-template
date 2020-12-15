import {SanityDocument, Slug} from '@sanity/types';
import {MetaFields} from './meta-fields';
import {Spacer} from './sections/spacer';

export interface Page extends SanityDocument {
	slug: Slug;
	title: string;
	metaFields?: MetaFields;
	content?: Spacer;
}
