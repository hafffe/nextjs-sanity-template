import S from '@sanity/desk-tool/structure-builder';
import {MdSettings} from 'react-icons/md';

const SiteSettings = S.listItem()
	.title('Global Settings')
	.icon(MdSettings)
	.child(S.editor().schemaType('siteSettings').documentId('siteSettings'));

export default () =>
	S.list()
		.title('Content')
		.items([
			SiteSettings,
			...S.documentTypeListItems().filter((listItem) => !['siteSettings'].includes(listItem.getId()))
		]);
