import { type StructureResolver } from 'sanity/desk'

import {RiPagesLine} from 'react-icons/ri';

export const PageMenuItem = (S: any): StructureResolver => S.listItem()
	.title('Pages')
	.icon(RiPagesLine)
	.child(S.documentTypeList('page').title('Pages').filter('_type == $type').params({type: 'page'}));
