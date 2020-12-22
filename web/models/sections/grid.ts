import {Image} from './image';
import {BlockContent} from './block-content';
import {Youtube} from './youtube';

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
	items?: Array<Image | BlockContent | Youtube>;
}
