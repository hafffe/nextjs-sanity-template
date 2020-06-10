import S from '@sanity/desk-tool/structure-builder';
import {RiSettings5Line} from 'react-icons/ri';

const SiteSettings = S.listItem()
	.title('Global Settings')
	.icon(RiSettings5Line)
	.child(S.editor().schemaType('siteSettings').documentId('siteSettings'));

const structure = () =>
	S.list()
		.title('Content')
		.items([
			SiteSettings,
			...S.documentTypeListItems().filter((listItem) => !['siteSettings'].includes(listItem.getId()))
		]);

export default structure;
