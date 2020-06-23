import S from '@sanity/desk-tool/structure-builder';
import {RiUserSmileLine} from 'react-icons/ri';

export const PersonMenuItem = S.listItem()
	.title('Persons')
	.icon(RiUserSmileLine)
	.child(
		S.documentTypeList('person')
			.title('Persons')
			.menuItems(S.documentTypeList('person').getMenuItems())
			.filter('_type == $type')
			.params({type: 'person'})
	);
