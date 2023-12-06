import type {Image as SanityImage} from "sanity";

export type Image = SanityImage & {
  _key: string;
  _type: "mainImage";
};
