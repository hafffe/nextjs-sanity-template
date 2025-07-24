import {type DocumentLocation, defineDocuments, defineLocations, presentationTool} from "sanity/presentation";

const homeLocation = {
  title: "Home",
  href: "/",
} satisfies DocumentLocation;

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
        resolve: (document) => {
          if (!(document?.title && document?.slug)) {
            return;
          }

          if (document.slug === "/") {
            return {
              locations: [
                {
                  title: document.title,
                  href: "/",
                },
              ],
            };
          }

          return {
            locations: [
              {
                title: document.title,
                href: `/${document.slug}`,
              },
            ],
          };
        },
      }),
      post: defineLocations({
        select: {
          title: "title",
          slug: "slug.current",
        },
        resolve: (document) => {
          if (!(document?.title && document?.slug)) {
            return;
          }

          return {
            locations: [
              {
                title: document.title,
                href: `/post/${document.slug}`,
              },
            ],
          };
        },
      }),
    },
  },
});
