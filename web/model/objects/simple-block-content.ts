import {Block} from '@sanity/types';

export interface SimpleBlockContent {
	_type: 'block';
	_key: string;
	textRaw: Block[];
}
