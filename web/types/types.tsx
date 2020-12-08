export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
}

export interface RootQuery {
  __typename: 'RootQuery';
  Document: Maybe<Document>;
  Person: Maybe<Person>;
  Page: Maybe<Page>;
  Post: Maybe<Post>;
  SiteSettings: Maybe<SiteSettings>;
  SanityImageAsset: Maybe<SanityImageAsset>;
  SanityFileAsset: Maybe<SanityFileAsset>;
  allPerson: Array<Person>;
  allPage: Array<Page>;
  allPost: Array<Post>;
  allSiteSettings: Array<SiteSettings>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSanityFileAsset: Array<SanityFileAsset>;
}


export interface RootQueryDocumentArgs {
  id: Scalars['ID'];
}


export interface RootQueryPersonArgs {
  id: Scalars['ID'];
}


export interface RootQueryPageArgs {
  id: Scalars['ID'];
}


export interface RootQueryPostArgs {
  id: Scalars['ID'];
}


export interface RootQuerySiteSettingsArgs {
  id: Scalars['ID'];
}


export interface RootQuerySanityImageAssetArgs {
  id: Scalars['ID'];
}


export interface RootQuerySanityFileAssetArgs {
  id: Scalars['ID'];
}


export interface RootQueryAllPersonArgs {
  where: Maybe<PersonFilter>;
  sort: Maybe<Array<PersonSorting>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}


export interface RootQueryAllPageArgs {
  where: Maybe<PageFilter>;
  sort: Maybe<Array<PageSorting>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}


export interface RootQueryAllPostArgs {
  where: Maybe<PostFilter>;
  sort: Maybe<Array<PostSorting>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}


export interface RootQueryAllSiteSettingsArgs {
  where: Maybe<SiteSettingsFilter>;
  sort: Maybe<Array<SiteSettingsSorting>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}


export interface RootQueryAllSanityImageAssetArgs {
  where: Maybe<SanityImageAssetFilter>;
  sort: Maybe<Array<SanityImageAssetSorting>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}


export interface RootQueryAllSanityFileAssetArgs {
  where: Maybe<SanityFileAssetFilter>;
  sort: Maybe<Array<SanityFileAssetSorting>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}

/** A Sanity document */
export interface Document {
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
}


export interface Person extends Document {
  __typename: 'Person';
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  image: Maybe<Image>;
}

export interface Image {
  __typename: 'Image';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  asset: Maybe<SanityImageAsset>;
  hotspot: Maybe<SanityImageHotspot>;
  crop: Maybe<SanityImageCrop>;
}

export interface SanityImageAsset extends Document {
  __typename: 'SanityImageAsset';
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  originalFilename: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  sha1hash: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  assetId: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  metadata: Maybe<SanityImageMetadata>;
  source: Maybe<SanityAssetSourceData>;
}

export interface SanityImageMetadata {
  __typename: 'SanityImageMetadata';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  location: Maybe<Geopoint>;
  dimensions: Maybe<SanityImageDimensions>;
  palette: Maybe<SanityImagePalette>;
  lqip: Maybe<Scalars['String']>;
  hasAlpha: Maybe<Scalars['Boolean']>;
  isOpaque: Maybe<Scalars['Boolean']>;
}

export interface Geopoint {
  __typename: 'Geopoint';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  lat: Maybe<Scalars['Float']>;
  lng: Maybe<Scalars['Float']>;
  alt: Maybe<Scalars['Float']>;
}

export interface SanityImageDimensions {
  __typename: 'SanityImageDimensions';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
  aspectRatio: Maybe<Scalars['Float']>;
}

export interface SanityImagePalette {
  __typename: 'SanityImagePalette';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  darkMuted: Maybe<SanityImagePaletteSwatch>;
  lightVibrant: Maybe<SanityImagePaletteSwatch>;
  darkVibrant: Maybe<SanityImagePaletteSwatch>;
  vibrant: Maybe<SanityImagePaletteSwatch>;
  dominant: Maybe<SanityImagePaletteSwatch>;
  lightMuted: Maybe<SanityImagePaletteSwatch>;
  muted: Maybe<SanityImagePaletteSwatch>;
}

export interface SanityImagePaletteSwatch {
  __typename: 'SanityImagePaletteSwatch';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  background: Maybe<Scalars['String']>;
  foreground: Maybe<Scalars['String']>;
  population: Maybe<Scalars['Float']>;
  title: Maybe<Scalars['String']>;
}

export interface SanityAssetSourceData {
  __typename: 'SanityAssetSourceData';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url: Maybe<Scalars['String']>;
}

export interface SanityImageHotspot {
  __typename: 'SanityImageHotspot';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  x: Maybe<Scalars['Float']>;
  y: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
}

export interface SanityImageCrop {
  __typename: 'SanityImageCrop';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  top: Maybe<Scalars['Float']>;
  bottom: Maybe<Scalars['Float']>;
  left: Maybe<Scalars['Float']>;
  right: Maybe<Scalars['Float']>;
}

export interface Page extends Document {
  __typename: 'Page';
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  /** Title of the page */
  title: Maybe<Scalars['String']>;
  slug: Maybe<Slug>;
  meta: Maybe<MetaFields>;
  content: Maybe<Array<Maybe<GridBlockOrImageBlockOrTextBlockOrYoutubeBlock>>>;
}

export interface Slug {
  __typename: 'Slug';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  current: Maybe<Scalars['String']>;
}

export interface MetaFields {
  __typename: 'MetaFields';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  metaTitle: Maybe<Scalars['String']>;
  metaDescription: Maybe<Scalars['String']>;
  openGraphImage: Maybe<Image>;
  openGraphTitle: Maybe<Scalars['String']>;
  openGraphDescription: Maybe<Scalars['String']>;
}

export type GridBlockOrImageBlockOrTextBlockOrYoutubeBlock = GridBlock | ImageBlock | TextBlock | YoutubeBlock;

export interface GridBlock {
  __typename: 'GridBlock';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  columns: Maybe<Columns>;
  items: Maybe<Array<Maybe<ImageBlockOrTextBlockOrYoutubeBlock>>>;
}

export interface Columns {
  __typename: 'Columns';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  /** Items per row for phone */
  small: Maybe<Scalars['String']>;
  /** Items per row for tablet */
  medium: Maybe<Scalars['String']>;
  /** Items per row for desktop */
  large: Maybe<Scalars['String']>;
}

export type ImageBlockOrTextBlockOrYoutubeBlock = ImageBlock | TextBlock | YoutubeBlock;

export interface ImageBlock {
  __typename: 'ImageBlock';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  /** Important for SEO and accessiblity. */
  alt: Maybe<Scalars['String']>;
  layout: Maybe<Scalars['String']>;
  asset: Maybe<SanityImageAsset>;
  hotspot: Maybe<SanityImageHotspot>;
  crop: Maybe<SanityImageCrop>;
}

export interface TextBlock {
  __typename: 'TextBlock';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  textRaw: Maybe<Scalars['JSON']>;
}


export interface YoutubeBlock {
  __typename: 'YoutubeBlock';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  autoPlay: Maybe<Scalars['Boolean']>;
  muted: Maybe<Scalars['Boolean']>;
}

export interface Post extends Document {
  __typename: 'Post';
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  /** Title of the page */
  title: Maybe<Scalars['String']>;
  slug: Maybe<Slug>;
  meta: Maybe<MetaFields>;
  /** Select author for post */
  author: Maybe<Person>;
  /** You can use this field to schedule post where you show them */
  publishedAt: Maybe<Scalars['DateTime']>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt: Maybe<SimpleTextBlock>;
  content: Maybe<Array<Maybe<GridBlockOrImageBlockOrTextBlockOrYoutubeBlock>>>;
}

export interface SimpleTextBlock {
  __typename: 'SimpleTextBlock';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  textRaw: Maybe<Scalars['JSON']>;
}

export interface SiteSettings extends Document {
  __typename: 'SiteSettings';
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  /** Title of the page */
  title: Maybe<Scalars['String']>;
  /** Description for search engines and social media. */
  description: Maybe<Scalars['String']>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
  navigation: Maybe<Array<Maybe<ExternalLinkOrInternalLink>>>;
  socialFields: Maybe<SocialFields>;
}

export type ExternalLinkOrInternalLink = ExternalLink | InternalLink;

export interface ExternalLink {
  __typename: 'ExternalLink';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  slug: Maybe<Slug>;
}

export interface InternalLink {
  __typename: 'InternalLink';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  link: Maybe<Page>;
}

export interface SocialFields {
  __typename: 'SocialFields';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  instagram: Maybe<Scalars['String']>;
  facebook: Maybe<Scalars['String']>;
}

export interface SanityFileAsset extends Document {
  __typename: 'SanityFileAsset';
  /** Document ID */
  _id: Maybe<Scalars['ID']>;
  /** Document type */
  _type: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev: Maybe<Scalars['String']>;
  _key: Maybe<Scalars['String']>;
  originalFilename: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  sha1hash: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  assetId: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  source: Maybe<SanityAssetSourceData>;
}

export interface PersonFilter {
  /** Apply filters on document level */
  _: Maybe<DocumentFilter>;
  _id: Maybe<IdFilter>;
  _type: Maybe<StringFilter>;
  _createdAt: Maybe<DatetimeFilter>;
  _updatedAt: Maybe<DatetimeFilter>;
  _rev: Maybe<StringFilter>;
  _key: Maybe<StringFilter>;
  name: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  phone: Maybe<StringFilter>;
  email: Maybe<StringFilter>;
  image: Maybe<ImageFilter>;
}

export interface DocumentFilter {
  /** All documents referencing the given document ID. */
  references: Maybe<Scalars['ID']>;
  /** All documents that are drafts. */
  is_draft: Maybe<Scalars['Boolean']>;
}

export interface IdFilter {
  /** Checks if the value is equal to the given input. */
  eq: Maybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq: Maybe<Scalars['ID']>;
  /** Checks if the value matches the given word/words. */
  matches: Maybe<Scalars['ID']>;
  in: Maybe<Array<Scalars['ID']>>;
  nin: Maybe<Array<Scalars['ID']>>;
}

export interface StringFilter {
  /** Checks if the value is equal to the given input. */
  eq: Maybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq: Maybe<Scalars['String']>;
  /** Checks if the value matches the given word/words. */
  matches: Maybe<Scalars['String']>;
  in: Maybe<Array<Scalars['String']>>;
  nin: Maybe<Array<Scalars['String']>>;
}

export interface DatetimeFilter {
  /** Checks if the value is equal to the given input. */
  eq: Maybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: Maybe<Scalars['DateTime']>;
}

export interface ImageFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  asset: Maybe<SanityImageAssetFilter>;
  hotspot: Maybe<SanityImageHotspotFilter>;
  crop: Maybe<SanityImageCropFilter>;
}

export interface SanityImageAssetFilter {
  /** Apply filters on document level */
  _: Maybe<DocumentFilter>;
  _id: Maybe<IdFilter>;
  _type: Maybe<StringFilter>;
  _createdAt: Maybe<DatetimeFilter>;
  _updatedAt: Maybe<DatetimeFilter>;
  _rev: Maybe<StringFilter>;
  _key: Maybe<StringFilter>;
  originalFilename: Maybe<StringFilter>;
  label: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  description: Maybe<StringFilter>;
  sha1hash: Maybe<StringFilter>;
  extension: Maybe<StringFilter>;
  mimeType: Maybe<StringFilter>;
  size: Maybe<FloatFilter>;
  assetId: Maybe<StringFilter>;
  path: Maybe<StringFilter>;
  url: Maybe<StringFilter>;
  metadata: Maybe<SanityImageMetadataFilter>;
  source: Maybe<SanityAssetSourceDataFilter>;
}

export interface FloatFilter {
  /** Checks if the value is equal to the given input. */
  eq: Maybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: Maybe<Scalars['Float']>;
}

export interface SanityImageMetadataFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  location: Maybe<GeopointFilter>;
  dimensions: Maybe<SanityImageDimensionsFilter>;
  palette: Maybe<SanityImagePaletteFilter>;
  lqip: Maybe<StringFilter>;
  hasAlpha: Maybe<BooleanFilter>;
  isOpaque: Maybe<BooleanFilter>;
}

export interface GeopointFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  lat: Maybe<FloatFilter>;
  lng: Maybe<FloatFilter>;
  alt: Maybe<FloatFilter>;
}

export interface SanityImageDimensionsFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  height: Maybe<FloatFilter>;
  width: Maybe<FloatFilter>;
  aspectRatio: Maybe<FloatFilter>;
}

export interface SanityImagePaletteFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  darkMuted: Maybe<SanityImagePaletteSwatchFilter>;
  lightVibrant: Maybe<SanityImagePaletteSwatchFilter>;
  darkVibrant: Maybe<SanityImagePaletteSwatchFilter>;
  vibrant: Maybe<SanityImagePaletteSwatchFilter>;
  dominant: Maybe<SanityImagePaletteSwatchFilter>;
  lightMuted: Maybe<SanityImagePaletteSwatchFilter>;
  muted: Maybe<SanityImagePaletteSwatchFilter>;
}

export interface SanityImagePaletteSwatchFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  background: Maybe<StringFilter>;
  foreground: Maybe<StringFilter>;
  population: Maybe<FloatFilter>;
  title: Maybe<StringFilter>;
}

export interface BooleanFilter {
  /** Checks if the value is equal to the given input. */
  eq: Maybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq: Maybe<Scalars['Boolean']>;
}

export interface SanityAssetSourceDataFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  name: Maybe<StringFilter>;
  id: Maybe<StringFilter>;
  url: Maybe<StringFilter>;
}

export interface SanityImageHotspotFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  x: Maybe<FloatFilter>;
  y: Maybe<FloatFilter>;
  height: Maybe<FloatFilter>;
  width: Maybe<FloatFilter>;
}

export interface SanityImageCropFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  top: Maybe<FloatFilter>;
  bottom: Maybe<FloatFilter>;
  left: Maybe<FloatFilter>;
  right: Maybe<FloatFilter>;
}

export interface PersonSorting {
  _id: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  _createdAt: Maybe<SortOrder>;
  _updatedAt: Maybe<SortOrder>;
  _rev: Maybe<SortOrder>;
  _key: Maybe<SortOrder>;
  name: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
  phone: Maybe<SortOrder>;
  email: Maybe<SortOrder>;
  image: Maybe<ImageSorting>;
}

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export interface ImageSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  hotspot: Maybe<SanityImageHotspotSorting>;
  crop: Maybe<SanityImageCropSorting>;
}

export interface SanityImageHotspotSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  x: Maybe<SortOrder>;
  y: Maybe<SortOrder>;
  height: Maybe<SortOrder>;
  width: Maybe<SortOrder>;
}

export interface SanityImageCropSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  top: Maybe<SortOrder>;
  bottom: Maybe<SortOrder>;
  left: Maybe<SortOrder>;
  right: Maybe<SortOrder>;
}

export interface PageFilter {
  /** Apply filters on document level */
  _: Maybe<DocumentFilter>;
  _id: Maybe<IdFilter>;
  _type: Maybe<StringFilter>;
  _createdAt: Maybe<DatetimeFilter>;
  _updatedAt: Maybe<DatetimeFilter>;
  _rev: Maybe<StringFilter>;
  _key: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  slug: Maybe<SlugFilter>;
  meta: Maybe<MetaFieldsFilter>;
}

export interface SlugFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  current: Maybe<StringFilter>;
}

export interface MetaFieldsFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  metaTitle: Maybe<StringFilter>;
  metaDescription: Maybe<StringFilter>;
  openGraphImage: Maybe<ImageFilter>;
  openGraphTitle: Maybe<StringFilter>;
  openGraphDescription: Maybe<StringFilter>;
}

export interface PageSorting {
  _id: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  _createdAt: Maybe<SortOrder>;
  _updatedAt: Maybe<SortOrder>;
  _rev: Maybe<SortOrder>;
  _key: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
  slug: Maybe<SlugSorting>;
  meta: Maybe<MetaFieldsSorting>;
}

export interface SlugSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  current: Maybe<SortOrder>;
}

export interface MetaFieldsSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  metaTitle: Maybe<SortOrder>;
  metaDescription: Maybe<SortOrder>;
  openGraphImage: Maybe<ImageSorting>;
  openGraphTitle: Maybe<SortOrder>;
  openGraphDescription: Maybe<SortOrder>;
}

export interface PostFilter {
  /** Apply filters on document level */
  _: Maybe<DocumentFilter>;
  _id: Maybe<IdFilter>;
  _type: Maybe<StringFilter>;
  _createdAt: Maybe<DatetimeFilter>;
  _updatedAt: Maybe<DatetimeFilter>;
  _rev: Maybe<StringFilter>;
  _key: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  slug: Maybe<SlugFilter>;
  meta: Maybe<MetaFieldsFilter>;
  author: Maybe<PersonFilter>;
  publishedAt: Maybe<DatetimeFilter>;
  excerpt: Maybe<SimpleTextBlockFilter>;
}

export interface SimpleTextBlockFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
}

export interface PostSorting {
  _id: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  _createdAt: Maybe<SortOrder>;
  _updatedAt: Maybe<SortOrder>;
  _rev: Maybe<SortOrder>;
  _key: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
  slug: Maybe<SlugSorting>;
  meta: Maybe<MetaFieldsSorting>;
  publishedAt: Maybe<SortOrder>;
  excerpt: Maybe<SimpleTextBlockSorting>;
}

export interface SimpleTextBlockSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
}

export interface SiteSettingsFilter {
  /** Apply filters on document level */
  _: Maybe<DocumentFilter>;
  _id: Maybe<IdFilter>;
  _type: Maybe<StringFilter>;
  _createdAt: Maybe<DatetimeFilter>;
  _updatedAt: Maybe<DatetimeFilter>;
  _rev: Maybe<StringFilter>;
  _key: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  description: Maybe<StringFilter>;
  socialFields: Maybe<SocialFieldsFilter>;
}

export interface SocialFieldsFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  twitter: Maybe<StringFilter>;
  instagram: Maybe<StringFilter>;
  facebook: Maybe<StringFilter>;
}

export interface SiteSettingsSorting {
  _id: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  _createdAt: Maybe<SortOrder>;
  _updatedAt: Maybe<SortOrder>;
  _rev: Maybe<SortOrder>;
  _key: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
  description: Maybe<SortOrder>;
  socialFields: Maybe<SocialFieldsSorting>;
}

export interface SocialFieldsSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  twitter: Maybe<SortOrder>;
  instagram: Maybe<SortOrder>;
  facebook: Maybe<SortOrder>;
}

export interface SanityImageAssetSorting {
  _id: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  _createdAt: Maybe<SortOrder>;
  _updatedAt: Maybe<SortOrder>;
  _rev: Maybe<SortOrder>;
  _key: Maybe<SortOrder>;
  originalFilename: Maybe<SortOrder>;
  label: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
  description: Maybe<SortOrder>;
  sha1hash: Maybe<SortOrder>;
  extension: Maybe<SortOrder>;
  mimeType: Maybe<SortOrder>;
  size: Maybe<SortOrder>;
  assetId: Maybe<SortOrder>;
  path: Maybe<SortOrder>;
  url: Maybe<SortOrder>;
  metadata: Maybe<SanityImageMetadataSorting>;
  source: Maybe<SanityAssetSourceDataSorting>;
}

export interface SanityImageMetadataSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  location: Maybe<GeopointSorting>;
  dimensions: Maybe<SanityImageDimensionsSorting>;
  palette: Maybe<SanityImagePaletteSorting>;
  lqip: Maybe<SortOrder>;
  hasAlpha: Maybe<SortOrder>;
  isOpaque: Maybe<SortOrder>;
}

export interface GeopointSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  lat: Maybe<SortOrder>;
  lng: Maybe<SortOrder>;
  alt: Maybe<SortOrder>;
}

export interface SanityImageDimensionsSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  height: Maybe<SortOrder>;
  width: Maybe<SortOrder>;
  aspectRatio: Maybe<SortOrder>;
}

export interface SanityImagePaletteSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  darkMuted: Maybe<SanityImagePaletteSwatchSorting>;
  lightVibrant: Maybe<SanityImagePaletteSwatchSorting>;
  darkVibrant: Maybe<SanityImagePaletteSwatchSorting>;
  vibrant: Maybe<SanityImagePaletteSwatchSorting>;
  dominant: Maybe<SanityImagePaletteSwatchSorting>;
  lightMuted: Maybe<SanityImagePaletteSwatchSorting>;
  muted: Maybe<SanityImagePaletteSwatchSorting>;
}

export interface SanityImagePaletteSwatchSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  background: Maybe<SortOrder>;
  foreground: Maybe<SortOrder>;
  population: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
}

export interface SanityAssetSourceDataSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  name: Maybe<SortOrder>;
  id: Maybe<SortOrder>;
  url: Maybe<SortOrder>;
}

export interface SanityFileAssetFilter {
  /** Apply filters on document level */
  _: Maybe<DocumentFilter>;
  _id: Maybe<IdFilter>;
  _type: Maybe<StringFilter>;
  _createdAt: Maybe<DatetimeFilter>;
  _updatedAt: Maybe<DatetimeFilter>;
  _rev: Maybe<StringFilter>;
  _key: Maybe<StringFilter>;
  originalFilename: Maybe<StringFilter>;
  label: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  description: Maybe<StringFilter>;
  sha1hash: Maybe<StringFilter>;
  extension: Maybe<StringFilter>;
  mimeType: Maybe<StringFilter>;
  size: Maybe<FloatFilter>;
  assetId: Maybe<StringFilter>;
  path: Maybe<StringFilter>;
  url: Maybe<StringFilter>;
  source: Maybe<SanityAssetSourceDataFilter>;
}

export interface SanityFileAssetSorting {
  _id: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  _createdAt: Maybe<SortOrder>;
  _updatedAt: Maybe<SortOrder>;
  _rev: Maybe<SortOrder>;
  _key: Maybe<SortOrder>;
  originalFilename: Maybe<SortOrder>;
  label: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
  description: Maybe<SortOrder>;
  sha1hash: Maybe<SortOrder>;
  extension: Maybe<SortOrder>;
  mimeType: Maybe<SortOrder>;
  size: Maybe<SortOrder>;
  assetId: Maybe<SortOrder>;
  path: Maybe<SortOrder>;
  url: Maybe<SortOrder>;
  source: Maybe<SanityAssetSourceDataSorting>;
}

export interface File {
  __typename: 'File';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  asset: Maybe<SanityFileAsset>;
}

export interface Block {
  __typename: 'Block';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  children: Maybe<Array<Maybe<Span>>>;
  style: Maybe<Scalars['String']>;
  list: Maybe<Scalars['String']>;
}

export interface Span {
  __typename: 'Span';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  marks: Maybe<Array<Maybe<Scalars['String']>>>;
  text: Maybe<Scalars['String']>;
}

export interface Link {
  __typename: 'Link';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  href: Maybe<Scalars['String']>;
}

export interface Cell {
  __typename: 'Cell';
  _key: Maybe<Scalars['String']>;
  _type: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  image: Maybe<Image>;
  /** Important for SEO and accessiblity. */
  alt: Maybe<Scalars['String']>;
  text: Maybe<TextBlock>;
}

export interface IntFilter {
  /** Checks if the value is equal to the given input. */
  eq: Maybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: Maybe<Scalars['Int']>;
}

export interface DateFilter {
  /** Checks if the value is equal to the given input. */
  eq: Maybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte: Maybe<Scalars['Date']>;
}


export interface FileFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  asset: Maybe<SanityFileAssetFilter>;
}

export interface ColumnsFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  small: Maybe<StringFilter>;
  medium: Maybe<StringFilter>;
  large: Maybe<StringFilter>;
}

export interface ExternalLinkFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  slug: Maybe<SlugFilter>;
}

export interface InternalLinkFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  link: Maybe<PageFilter>;
}

export interface LinkFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  href: Maybe<StringFilter>;
}

export interface CellFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  image: Maybe<ImageFilter>;
  alt: Maybe<StringFilter>;
  text: Maybe<TextBlockFilter>;
}

export interface TextBlockFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
}

export interface GridBlockFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  title: Maybe<StringFilter>;
  columns: Maybe<ColumnsFilter>;
}

export interface ImageBlockFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  alt: Maybe<StringFilter>;
  layout: Maybe<StringFilter>;
  asset: Maybe<SanityImageAssetFilter>;
  hotspot: Maybe<SanityImageHotspotFilter>;
  crop: Maybe<SanityImageCropFilter>;
}

export interface YoutubeBlockFilter {
  _key: Maybe<StringFilter>;
  _type: Maybe<StringFilter>;
  url: Maybe<StringFilter>;
  autoPlay: Maybe<BooleanFilter>;
  muted: Maybe<BooleanFilter>;
}

export interface FileSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
}

export interface ColumnsSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  small: Maybe<SortOrder>;
  medium: Maybe<SortOrder>;
  large: Maybe<SortOrder>;
}

export interface ExternalLinkSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
  slug: Maybe<SlugSorting>;
}

export interface InternalLinkSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
}

export interface LinkSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  href: Maybe<SortOrder>;
}

export interface CellSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
  image: Maybe<ImageSorting>;
  alt: Maybe<SortOrder>;
  text: Maybe<TextBlockSorting>;
}

export interface TextBlockSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
}

export interface GridBlockSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  title: Maybe<SortOrder>;
  columns: Maybe<ColumnsSorting>;
}

export interface ImageBlockSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  alt: Maybe<SortOrder>;
  layout: Maybe<SortOrder>;
  hotspot: Maybe<SanityImageHotspotSorting>;
  crop: Maybe<SanityImageCropSorting>;
}

export interface YoutubeBlockSorting {
  _key: Maybe<SortOrder>;
  _type: Maybe<SortOrder>;
  url: Maybe<SortOrder>;
  autoPlay: Maybe<SortOrder>;
  muted: Maybe<SortOrder>;
}

export type SiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSettingsQuery = (
  { __typename: 'RootQuery' }
  & { SiteSettings: Maybe<(
    { __typename: 'SiteSettings' }
    & Pick<SiteSettings, 'title' | 'description' | 'keywords'>
    & { navigation: Maybe<Array<Maybe<(
      { __typename: 'ExternalLink' }
      & Pick<ExternalLink, 'title'>
      & { slug: Maybe<(
        { __typename: 'Slug' }
        & Pick<Slug, 'current'>
      )> }
    ) | (
      { __typename: 'InternalLink' }
      & Pick<InternalLink, 'title'>
      & { link: Maybe<(
        { __typename: 'Page' }
        & { slug: Maybe<(
          { __typename: 'Slug' }
          & Pick<Slug, 'current'>
        )> }
      )> }
    )>>>, socialFields: Maybe<(
      { __typename: 'SocialFields' }
      & Pick<SocialFields, 'twitter' | 'instagram' | 'facebook'>
    )> }
  )> }
);

export type PageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageQuery = (
  { __typename: 'RootQuery' }
  & { allPage: Array<(
    { __typename: 'Page' }
    & Pick<Page, '_key' | '_type' | '_id' | 'title'>
    & { slug: Maybe<(
      { __typename: 'Slug' }
      & Pick<Slug, 'current'>
    )>, meta: Maybe<(
      { __typename: 'MetaFields' }
      & Pick<MetaFields, 'metaTitle' | 'metaDescription' | 'openGraphTitle' | 'openGraphDescription'>
      & { openGraphImage: Maybe<(
        { __typename: 'Image' }
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
        )> }
      )> }
    )>, content: Maybe<Array<Maybe<(
      { __typename: 'GridBlock' }
      & Pick<GridBlock, '_key' | '_type'>
      & { columns: Maybe<(
        { __typename: 'Columns' }
        & Pick<Columns, 'small' | 'medium' | 'large'>
      )>, items: Maybe<Array<Maybe<(
        { __typename: 'ImageBlock' }
        & Pick<ImageBlock, '_key' | '_type' | 'alt'>
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
          & { metadata: Maybe<(
            { __typename: 'SanityImageMetadata' }
            & { dimensions: Maybe<(
              { __typename: 'SanityImageDimensions' }
              & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
            )> }
          )> }
        )> }
      ) | (
        { __typename: 'TextBlock' }
        & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
      ) | (
        { __typename: 'YoutubeBlock' }
        & Pick<YoutubeBlock, '_key' | '_type' | 'url' | 'autoPlay' | 'muted'>
      )>>> }
    ) | (
      { __typename: 'ImageBlock' }
      & Pick<ImageBlock, '_key' | '_type' | 'alt'>
      & { asset: Maybe<(
        { __typename: 'SanityImageAsset' }
        & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
        & { metadata: Maybe<(
          { __typename: 'SanityImageMetadata' }
          & { dimensions: Maybe<(
            { __typename: 'SanityImageDimensions' }
            & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
          )> }
        )> }
      )> }
    ) | (
      { __typename: 'TextBlock' }
      & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
    ) | (
      { __typename: 'YoutubeBlock' }
      & Pick<YoutubeBlock, '_key' | '_type' | 'url' | 'autoPlay' | 'muted'>
    )>>> }
  )> }
);

export type GetPagePreviewQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPagePreviewQuery = (
  { __typename: 'RootQuery' }
  & { allPage: Array<(
    { __typename: 'Page' }
    & Pick<Page, '_key' | '_type' | '_id' | 'title'>
    & { slug: Maybe<(
      { __typename: 'Slug' }
      & Pick<Slug, 'current'>
    )>, meta: Maybe<(
      { __typename: 'MetaFields' }
      & Pick<MetaFields, 'metaTitle' | 'metaDescription' | 'openGraphTitle' | 'openGraphDescription'>
      & { openGraphImage: Maybe<(
        { __typename: 'Image' }
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
        )> }
      )> }
    )>, content: Maybe<Array<Maybe<(
      { __typename: 'GridBlock' }
      & Pick<GridBlock, '_key' | '_type'>
      & { columns: Maybe<(
        { __typename: 'Columns' }
        & Pick<Columns, 'small' | 'medium' | 'large'>
      )>, items: Maybe<Array<Maybe<(
        { __typename: 'ImageBlock' }
        & Pick<ImageBlock, '_key' | '_type' | 'alt'>
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
          & { metadata: Maybe<(
            { __typename: 'SanityImageMetadata' }
            & { dimensions: Maybe<(
              { __typename: 'SanityImageDimensions' }
              & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
            )> }
          )> }
        )> }
      ) | (
        { __typename: 'TextBlock' }
        & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
      ) | (
        { __typename: 'YoutubeBlock' }
        & Pick<YoutubeBlock, '_key' | '_type' | 'url' | 'autoPlay' | 'muted'>
      )>>> }
    ) | (
      { __typename: 'ImageBlock' }
      & Pick<ImageBlock, '_key' | '_type' | 'alt'>
      & { asset: Maybe<(
        { __typename: 'SanityImageAsset' }
        & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
        & { metadata: Maybe<(
          { __typename: 'SanityImageMetadata' }
          & { dimensions: Maybe<(
            { __typename: 'SanityImageDimensions' }
            & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
          )> }
        )> }
      )> }
    ) | (
      { __typename: 'TextBlock' }
      & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
    ) | (
      { __typename: 'YoutubeBlock' }
      & Pick<YoutubeBlock, '_key' | '_type' | 'url' | 'autoPlay' | 'muted'>
    )>>> }
  )> }
);

export type PostListQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type PostListQuery = (
  { __typename: 'RootQuery' }
  & { allPost: Array<(
    { __typename: 'Post' }
    & Pick<Post, '_key' | '_type' | '_id' | 'title' | 'publishedAt'>
    & { excerpt: Maybe<(
      { __typename: 'SimpleTextBlock' }
      & Pick<SimpleTextBlock, '_key' | '_type' | 'textRaw'>
    )>, slug: Maybe<(
      { __typename: 'Slug' }
      & Pick<Slug, 'current'>
    )>, author: Maybe<(
      { __typename: 'Person' }
      & Pick<Person, 'name'>
    )>, content: Maybe<Array<Maybe<(
      { __typename: 'GridBlock' }
      & Pick<GridBlock, '_key' | '_type'>
      & { columns: Maybe<(
        { __typename: 'Columns' }
        & Pick<Columns, 'small' | 'medium' | 'large'>
      )>, items: Maybe<Array<Maybe<(
        { __typename: 'ImageBlock' }
        & Pick<ImageBlock, '_key' | '_type' | 'alt'>
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
          & { metadata: Maybe<(
            { __typename: 'SanityImageMetadata' }
            & { dimensions: Maybe<(
              { __typename: 'SanityImageDimensions' }
              & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
            )> }
          )> }
        )> }
      ) | (
        { __typename: 'TextBlock' }
        & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
      ) | (
        { __typename: 'YoutubeBlock' }
        & Pick<YoutubeBlock, '_key' | '_type' | 'url' | 'autoPlay' | 'muted'>
      )>>> }
    ) | (
      { __typename: 'ImageBlock' }
      & Pick<ImageBlock, '_key' | '_type' | 'alt'>
      & { asset: Maybe<(
        { __typename: 'SanityImageAsset' }
        & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
        & { metadata: Maybe<(
          { __typename: 'SanityImageMetadata' }
          & { dimensions: Maybe<(
            { __typename: 'SanityImageDimensions' }
            & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
          )> }
        )> }
      )> }
    ) | (
      { __typename: 'TextBlock' }
      & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
    ) | (
      { __typename: 'YoutubeBlock' }
      & Pick<YoutubeBlock, '_key' | '_type' | 'url' | 'autoPlay' | 'muted'>
    )>>> }
  )> }
);

export type GetPostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostQuery = (
  { __typename: 'RootQuery' }
  & { allPost: Array<(
    { __typename: 'Post' }
    & Pick<Post, '_key' | '_type' | '_id' | 'title' | 'publishedAt' | 'keywords'>
    & { slug: Maybe<(
      { __typename: 'Slug' }
      & Pick<Slug, 'current'>
    )>, meta: Maybe<(
      { __typename: 'MetaFields' }
      & Pick<MetaFields, 'metaTitle' | 'metaDescription' | 'openGraphTitle' | 'openGraphDescription'>
      & { openGraphImage: Maybe<(
        { __typename: 'Image' }
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
        )> }
      )> }
    )>, author: Maybe<(
      { __typename: 'Person' }
      & Pick<Person, 'name'>
      & { image: Maybe<(
        { __typename: 'Image' }
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_type' | '_id' | 'assetId'>
        )> }
      )> }
    )>, content: Maybe<Array<Maybe<(
      { __typename: 'GridBlock' }
      & Pick<GridBlock, '_key' | '_type'>
      & { columns: Maybe<(
        { __typename: 'Columns' }
        & Pick<Columns, 'small' | 'medium' | 'large'>
      )>, items: Maybe<Array<Maybe<(
        { __typename: 'ImageBlock' }
        & Pick<ImageBlock, '_key' | '_type' | 'alt'>
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
          & { metadata: Maybe<(
            { __typename: 'SanityImageMetadata' }
            & { dimensions: Maybe<(
              { __typename: 'SanityImageDimensions' }
              & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
            )> }
          )> }
        )> }
      ) | (
        { __typename: 'TextBlock' }
        & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
      ) | (
        { __typename: 'YoutubeBlock' }
        & Pick<YoutubeBlock, '_key' | '_type' | 'url' | 'autoPlay' | 'muted'>
      )>>> }
    ) | (
      { __typename: 'ImageBlock' }
      & Pick<ImageBlock, '_key' | '_type' | 'alt'>
      & { asset: Maybe<(
        { __typename: 'SanityImageAsset' }
        & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
        & { metadata: Maybe<(
          { __typename: 'SanityImageMetadata' }
          & { dimensions: Maybe<(
            { __typename: 'SanityImageDimensions' }
            & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
          )> }
        )> }
      )> }
    ) | (
      { __typename: 'TextBlock' }
      & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
    ) | (
      { __typename: 'YoutubeBlock' }
      & Pick<YoutubeBlock, '_key' | '_type' | 'url' | 'autoPlay' | 'muted'>
    )>>> }
  )> }
);

export type GetPostPreviewQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostPreviewQuery = (
  { __typename: 'RootQuery' }
  & { allPost: Array<(
    { __typename: 'Post' }
    & Pick<Post, '_key' | '_type' | '_id' | 'title' | 'publishedAt' | 'keywords'>
    & { excerpt: Maybe<(
      { __typename: 'SimpleTextBlock' }
      & Pick<SimpleTextBlock, '_key' | '_type' | 'textRaw'>
    )>, slug: Maybe<(
      { __typename: 'Slug' }
      & Pick<Slug, 'current'>
    )>, meta: Maybe<(
      { __typename: 'MetaFields' }
      & Pick<MetaFields, 'metaTitle' | 'metaDescription' | 'openGraphTitle' | 'openGraphDescription'>
      & { openGraphImage: Maybe<(
        { __typename: 'Image' }
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
        )> }
      )> }
    )>, author: Maybe<(
      { __typename: 'Person' }
      & Pick<Person, 'name'>
    )>, content: Maybe<Array<Maybe<(
      { __typename: 'GridBlock' }
      & Pick<GridBlock, '_key' | '_type'>
      & { columns: Maybe<(
        { __typename: 'Columns' }
        & Pick<Columns, 'small' | 'medium' | 'large'>
      )>, items: Maybe<Array<Maybe<(
        { __typename: 'ImageBlock' }
        & Pick<ImageBlock, '_key' | '_type' | 'alt'>
        & { asset: Maybe<(
          { __typename: 'SanityImageAsset' }
          & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
          & { metadata: Maybe<(
            { __typename: 'SanityImageMetadata' }
            & { dimensions: Maybe<(
              { __typename: 'SanityImageDimensions' }
              & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
            )> }
          )> }
        )> }
      ) | (
        { __typename: 'TextBlock' }
        & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
      ) | (
        { __typename: 'YoutubeBlock' }
        & Pick<YoutubeBlock, '_key' | '_type' | 'url' | 'autoPlay' | 'muted'>
      )>>> }
    ) | (
      { __typename: 'ImageBlock' }
      & Pick<ImageBlock, '_key' | '_type' | 'alt'>
      & { asset: Maybe<(
        { __typename: 'SanityImageAsset' }
        & Pick<SanityImageAsset, '_id' | '_type' | 'assetId'>
        & { metadata: Maybe<(
          { __typename: 'SanityImageMetadata' }
          & { dimensions: Maybe<(
            { __typename: 'SanityImageDimensions' }
            & Pick<SanityImageDimensions, 'aspectRatio' | 'height' | 'width'>
          )> }
        )> }
      )> }
    ) | (
      { __typename: 'TextBlock' }
      & Pick<TextBlock, '_key' | '_type' | 'textRaw'>
    ) | { __typename: 'YoutubeBlock' }>>> }
  )> }
);

export type GetAllPostsWithSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsWithSlugQuery = (
  { __typename: 'RootQuery' }
  & { allPost: Array<(
    { __typename: 'Post' }
    & { slug: Maybe<(
      { __typename: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);

export type GetAllPagesWithSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPagesWithSlugQuery = (
  { __typename: 'RootQuery' }
  & { allPage: Array<(
    { __typename: 'Page' }
    & { slug: Maybe<(
      { __typename: 'Slug' }
      & Pick<Slug, 'current'>
    )> }
  )> }
);
