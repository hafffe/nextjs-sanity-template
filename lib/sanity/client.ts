import {createClient} from "@sanity/client/stega";
import {apiVersion, dataset, projectId, revalidateSecret, studioUrl} from "./api-constants";

export const client = createClient({
  dataset,
  projectId,
  useCdn: revalidateSecret ? false : true,
  perspective: "published",
  apiVersion,
  stega: {
    studioUrl,
  },
});
