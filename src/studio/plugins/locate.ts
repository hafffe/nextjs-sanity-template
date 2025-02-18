import type {DocumentLocationResolver} from "sanity/presentation";
import {map} from "rxjs";

export const locate: DocumentLocationResolver = (params, context) => {
  if (params.type === "post") {
    return null;
  }

  if (params.type === "page") {
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      params,
      {perspective: "previewDrafts"}, // returns a draft article if it exists
    );

    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null;
        }

        return {
          locations: [
            {
              title: doc.title || "Untitled",
              href: `/${doc.slug.current}`,
            },
            {
              title: "Posts",
              href: "/",
            },
          ],
        };
      }),
    );
  }

  if (params.type === "post") {
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      params,
      {perspective: "previewDrafts"}, // returns a draft article if it exists
    );

    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null;
        }

        return {
          locations: [
            {
              title: doc.title || "Untitled",
              href: `/posts/${doc.slug.current}`,
            },
            {
              title: "Posts",
              href: "/",
            },
          ],
        };
      }),
    );
  }

  return null;
};
