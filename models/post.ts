import {SanityDocument, Slug} from '@sanity/types';
import {MetaFields} from './meta-fields';
import {PostSections} from './sections';
import {SimpleBlockContent} from './objects/simple-block-content';
import {Person} from './person';

export interface Post extends SanityDocument {
	_type: 'post';
	publishedAt: string;
	slug: Slug;
	author: Person;
	title: string;
	excerpt: SimpleBlockContent;
	keywords?: string[];
	meta?: MetaFields;
	content?: PostSections[];
}
