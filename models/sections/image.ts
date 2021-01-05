import {SanityAsset} from '../utils';

export interface Image {
	_type: 'mainImage';
	_key: string;
	alt: string;
	asset: SanityAsset;
}
