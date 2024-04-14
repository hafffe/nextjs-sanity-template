import {BlockContent} from "./block-content";
import {Grid} from "./grid";
import {Image} from "./image";
import {Spacer} from "./spacer";
import {Youtube} from "./youtube";
import {GoogleCalendar} from "./google-calendar";

export type Sections = BlockContent | Grid | Image | Spacer | Youtube | GoogleCalendar;
export type PageSections = BlockContent | Grid | Image | Spacer | Youtube | GoogleCalendar;
export type PostSections = BlockContent | Grid | Image | Youtube| GoogleCalendar;
