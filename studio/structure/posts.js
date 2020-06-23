import S from '@sanity/desk-tool/structure-builder';
import {RiArticleLine} from 'react-icons/ri';

export const PostMenuItem = S.listItem()
	.title('Posts')
	.icon(RiArticleLine)
	.child(
		S.documentTypeList('post')
			.title('Posts')
			.menuItems(S.documentTypeList('post').getMenuItems())
			.filter('_type == $type')
			.params({type: 'post'})
	);
