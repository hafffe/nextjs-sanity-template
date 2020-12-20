export interface SanityBlock {
	[key: string]: any;
	_type: 'block';
}

export type SanityReference<T> = {
	_type: 'reference';
	_key?: string;
	_ref: string;
};

export type SanityAsset = SanityReference<any>;
