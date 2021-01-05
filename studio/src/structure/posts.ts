import {StructureBuilder as S} from '@sanity/structure';
import {RiArticleLine} from 'react-icons/ri';

export const PostMenuItem = S.listItem()
	.title('Posts')
	.icon(RiArticleLine)
	.child(S.documentTypeList('post').title('Posts').filter('_type == $type').params({type: 'post'}));
