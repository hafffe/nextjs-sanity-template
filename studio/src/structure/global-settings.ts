
import {RiSettings5Line} from 'react-icons/ri';
import { StructureResolver } from 'sanity/desk';

export const SiteSettings = (S: any): StructureResolver => S.listItem()
	.title('Global Settings')
	.icon(RiSettings5Line)
	.child(S.editor().schemaType('siteSettings').documentId('siteSettings'));
