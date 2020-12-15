import {SanityImageAsset} from '@sanity/asset-utils';

export interface Grid {
	_type: 'grid';
	_key: string;
	title: string;
	columns: {
		_type: 'columns';
		small: string;
		medium: string;
		large: string;
	};
	items: any;
}
