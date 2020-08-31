import {StructureBuilder as S} from '@sanity/structure';
import {SiteSettings} from './global-settings';
import {PageMenuItem} from './pages';
import {PersonMenuItem} from './person';
import {PostMenuItem} from './posts';

const structure = () => S.list().title('Content').items([SiteSettings, PageMenuItem, PostMenuItem, PersonMenuItem]);

export default structure;
