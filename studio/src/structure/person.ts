import {StructureBuilder as S} from '@sanity/structure';
import {RiUserSmileLine} from 'react-icons/ri';

export const PersonMenuItem = S.listItem()
	.title('Persons')
	.icon(RiUserSmileLine)
	.child(S.documentTypeList('person').title('Persons').filter('_type == $type').params({type: 'person'}));
