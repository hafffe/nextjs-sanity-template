import {StructureBuilder as S} from '@sanity/structure';
import {SiteSettings} from './global-settings';
import {PageMenuItem} from './pages';
import {PersonMenuItem} from './person';
import {PostMenuItem} from './posts';
import PostPreview from '../components/previews/post/post-preview';
import PagePreview from '../components/previews/page/page-preview';

const structure = () => S.list().title('Content').items([SiteSettings, PageMenuItem, PostMenuItem, PersonMenuItem]);

export const getDefaultDocumentNode = (props: any) => {
	/**
	 * Here you can define fallback views for document types without
	 * a structure definition for the document node. If you want different
	 * fallbacks for different types, or document values (e.g. if there is a slug present)
	 * you can set up that logic in here too.
	 * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
	 */
	const {schemaType} = props;

	if (schemaType === 'post') {
		return S.document().views([S.view.form(), S.view.component(PostPreview).title('Preview Post')]);
	}

	if (schemaType === 'page') {
		return S.document().views([S.view.form(), S.view.component(PagePreview).title('Preview Page')]);
	}

	return S.document().views([S.view.form()]);
};

export default structure;
