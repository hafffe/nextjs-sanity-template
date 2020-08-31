import {StructureBuilder as S} from '@sanity/structure';
import {RiSettings5Line} from 'react-icons/ri';

export const SiteSettings = S.listItem()
	.title('Global Settings')
	.icon(RiSettings5Line)
	.child(S.editor().schemaType('siteSettings').documentId('siteSettings'));
