import S from '@sanity/desk-tool/structure-builder';
import {RiSettings5Line} from 'react-icons/ri';

export const SiteSettings = S.listItem()
	.title('Global Settings')
	.icon(RiSettings5Line)
	.child(S.editor().schemaType('siteSettings').documentId('siteSettings'));
