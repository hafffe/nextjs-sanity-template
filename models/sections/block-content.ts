import {SanityBlock} from '../utils';

export interface BlockContent {
	_type: 'blockContent';
	_key: string;
	text?: SanityBlock[];
}
