export interface SanityBlock {
	[key: string]: any;
	_type: 'block' | 'image';
}

export type SanityReference<_T> = {
	_type: 'reference';
	_key?: string;
	_ref: string;
};

export type SanityAsset = SanityReference<any>;
