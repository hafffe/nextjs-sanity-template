import {BlockContent} from './block-content';
import {Grid} from './grid';
import {Image} from './image';
import {Spacer} from './spacer';
import {Youtube} from './youtube';

export type Sections = BlockContent | Grid | Image | Spacer | Youtube;
export type PageSections = BlockContent | Grid | Image | Spacer | Youtube;
export type PostSections = BlockContent | Grid | Image | Youtube;
