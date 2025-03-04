import {defineDocuments, defineLocations, type DocumentLocation, presentationTool} from "sanity/presentation";

const homeLocation = {
  title: "Home",
  href: "/",
} satisfies DocumentLocation;

const resolveHref = (documentType?: string, slug?: string): string | undefined => {
  switch (documentType) {
    case "post":
      return slug ? `/posts/${slug}` : undefined;
    case "page":
      return slug ? `/${slug}` : undefined;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
};

export const presentation = presentationTool({
  name: "editor",
  title: "Editor",
  previewUrl: {
    previewMode: {
      enable: "/api/draft-mode/enable",
    },
  },
  resolve: {
    mainDocuments: defineDocuments([
      {
        route: "/:slug",
        filter: `_type == "page" && slug.current == $slug || _id == $slug`,
      },
      {
        route: "/posts/:slug",
        filter: `_type == "post" && slug.current == $slug || _id == $slug`,
      },
    ]),
    locations: {
      siteSettings: defineLocations({
        locations: [homeLocation],
        message: "This document is used on all pages",
        tone: "positive",
      }),
      page: defineLocations({
        select: {
          title: "title",
          slug: "slug.current",
        },
        resolve: (doc) => ({
          locations: [
            {
              title: doc?.title || "Untitled",
              href: resolveHref("page", doc?.slug)!,
            },
          ],
        }),
      }),
      post: defineLocations({
        select: {
          title: "title",
          slug: "slug.current",
        },
        resolve: (doc) => ({
          locations: [
            {
              title: doc?.title || "Untitled",
              href: resolveHref("post", doc?.slug)!,
            },
            {
              title: "Home",
              href: "/",
            } satisfies DocumentLocation,
          ].filter(Boolean) as DocumentLocation[],
        }),
      }),
    },
  },
});
