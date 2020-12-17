import type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanitySlug,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanitySlug,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
};

/**
 * Persons
 *
 *
 */
export interface Person extends SanityDocument {
  _type: "person";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Job title — `string`
   *
   *
   */
  title?: string;

  /**
   * Phone — `string`
   *
   *
   */
  phone?: string;

  /**
   * email — `email`
   *
   *
   */
  email?: Email;

  /**
   * Image — `image`
   *
   *
   */
  image?: { _type: "image"; asset: SanityAsset };
}

/**
 * Pages
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   * Title of the page
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Some frontends will require a slug to be set to be able to show the page
   */
  slug?: SanitySlug;

  /**
   * meta — `metaFields`
   *
   *
   */
  meta?: MetaFields;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<Grid | MainImage | BlockContent | Spacer | Youtube>;
}

/**
 * Posts
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   * Title of the page
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Some frontends will require a slug to be set to be able to show the page
   */
  slug?: SanitySlug;

  /**
   * meta — `metaFields`
   *
   *
   */
  meta?: MetaFields;

  /**
   * Author — `reference`
   *
   * Select author for post
   */
  author?: SanityReference<Person>;

  /**
   * Published at — `datetime`
   *
   * You can use this field to schedule post where you show them
   */
  publishedAt?: string;

  /**
   * Keywords — `array`
   *
   * Tags for your post
   */
  keywords?: Array<string>;

  /**
   * Excerpt — `simpleBlockContent`
   *
   * This ends up on summary pages, when people share your post in social media.
   */
  excerpt?: SimpleBlockContent;

  /**
   * Content — `array`
   *
   * Add, edit, and reorder sections with content
   */
  content?: Array<Grid | MainImage | BlockContent | Youtube>;
}

/**
 * Site Settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";

  /**
   * Title — `string`
   *
   * Title of the page
   */
  title?: string;

  /**
   * Description — `text`
   *
   * Description for search engines and social media.
   */
  description?: string;

  /**
   * Navigation — `array`
   *
   * Select pages or link for main navigation
   */
  navigation?: Array<InternalLink | ExternalLink>;

  /**
   * socialFields — `socialFields`
   *
   * Social media
   */
  socialFields?: SocialFields;
}

export type MetaFields = {
  _type: "metaFields";
  /**
   * Meta Title (Overrides to default title) — `string`
   *
   *
   */
  metaTitle?: string;

  /**
   * Meta Description — `string`
   *
   *
   */
  metaDescription?: string;

  /**
   * Open Graph Image — `image`
   *
   * Ideal size for open graph images is 1200 x 600
   */
  openGraphImage?: { _type: "image"; asset: SanityAsset };

  /**
   * Open Graph Title — `string`
   *
   *
   */
  openGraphTitle?: string;

  /**
   * Open Graph Description — `text`
   *
   *
   */
  openGraphDescription?: string;
};

export type Columns = {
  _type: "columns";
  /**
   * Small screens — `string`
   *
   * Items per row for phone
   */
  small?: "1" | "2" | "3" | "4";

  /**
   * Medium screens — `string`
   *
   * Items per row for tablet
   */
  medium?: "1" | "2" | "3" | "4";

  /**
   * Large screens — `string`
   *
   * Items per row for desktop
   */
  large?: "1" | "2" | "3" | "4";
};

export type ExternalLink = {
  _type: "externalLink";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * There is no `link` validation on this so please type accurate urls with https://, mailto:, tel: etc.
   */
  slug?: SanitySlug;
};

export type InternalLink = {
  _type: "internalLink";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Link — `reference`
   *
   *
   */
  link?: SanityReference<Page>;
};

export type Link = {
  _type: "link";
  /**
   * URL — `url`
   *
   *
   */
  href?: string;
};

export type SimpleBlockContent = {
  _type: "simpleBlockContent";
  /**
   * Text — `array`
   *
   *
   */
  text?: Array<SanityBlock>;
};

export type Grid = {
  _type: "grid";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Columns — `columns`
   *
   *
   */
  columns?: Columns;

  /**
   * Items — `array`
   *
   *
   */
  items?: Array<MainImage | BlockContent | Youtube>;
};


export type MainImage = {
  _type: "image";
  asset: SanityAsset;
  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type SocialFields = {
  _type: "socialFields";
  /**
   * Twitter URL — `url`
   *
   *
   */
  twitter?: string;

  /**
   * Instagram URL — `url`
   *
   *
   */
  instagram?: string;

  /**
   * Facebook URL — `url`
   *
   *
   */
  facebook?: string;
};

export type BlockContent = {
  _type: "blockContent";
  /**
   * Text — `array`
   *
   *
   */
  text?: Array<SanityBlock>;
};

export type Spacer = {
  _type: "spacer";
  /**
   * Size — `string`
   *
   *
   */
  size?: "small" | "medium" | "large" | "xlarge";
};

export type Youtube = {
  _type: "youtube";
  /**
   * YouTube video URL — `url`
   *
   *
   */
  url?: string;

  /**
   * Enable autoplay — `boolean`
   *
   *
   */
  autoPlay?: boolean;

  /**
   * Muted — `boolean`
   *
   *
   */
  muted?: boolean;
};

export type Documents = Person | Page | Post | SiteSettings;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 *
 * Interface merging may help for the time being:
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
 */
interface Email {}
