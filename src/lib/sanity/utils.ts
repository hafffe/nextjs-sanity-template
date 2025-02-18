import createImageUrlBuilder from "@sanity/image-url";
import {dataset, projectId} from "./api-constants";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlForImage = (source: any | undefined) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder?.image(source).auto("format").fit("max");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlForOpenGraphImage = (image: any | undefined) => {
  return urlForImage(image)?.width(1200).height(627).fit("crop").url();
};
