import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import {visionTool} from "@sanity/vision";
import {singletonPlugin} from "./studio/plugins/singletonPlugin";
import {presentationTool} from "sanity/presentation";
import {schemasTypes} from "./studio/schemas";
import {structure} from "./studio/structure";
import {locate} from "./studio/plugins/locate";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  name: "Studio",
  basePath: "/studio",
  schema: {
    types: schemasTypes,
  },
  plugins: [
    deskTool({
      structure,
    }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    singletonPlugin({types: ["siteSettings"]}),
    visionTool(),
  ],
});
