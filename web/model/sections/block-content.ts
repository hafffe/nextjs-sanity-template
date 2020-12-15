import {Block} from '@sanity/types';

export interface BlockContent {
	_type: 'block';
	_key: string;
	textRaw: Block[];
}
