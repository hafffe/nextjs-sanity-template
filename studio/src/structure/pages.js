import S from '@sanity/desk-tool/structure-builder';
import {RiPagesLine} from 'react-icons/ri';

export const PageMenuItem = S.listItem()
	.title('Pages')
	.icon(RiPagesLine)
	.child(
		S.documentTypeList('page')
			.title('Pages')
			.menuItems(S.documentTypeList('page').getMenuItems())
			.filter('_type == $type')
			.params({type: 'page'})
	);
