import person from "./documents/person";
import page from "./documents/page";
import post from "./documents/post";
import siteSettings from "./documents/site-settings";

import columns from "./objects/columns";
import externalLink from "./objects/external-link";
import internalLink from "./objects/internal-link";
import link from "./objects/link";
import metaFields from "./objects/meta";
import socialFields from "./objects/social-fields";
import simpleBlockContent from "./objects/simple-block-content";
import blockContent from "./objects/block-content";
import grid from "./objects/grid";
import mainImage from "./objects/main-image";
import youtube from "./objects/youtube";

export const schemasTypes = [
  person,
  page,
  post,
  siteSettings,
  metaFields,
  columns,
  externalLink,
  internalLink,
  link,
  simpleBlockContent,
  grid,
  mainImage,
  socialFields,
  blockContent,
  youtube,
];
