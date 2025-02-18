import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";

import {visionTool} from "@sanity/vision";
import {singletonPlugin} from "./src/studio/plugins/singletonPlugin";
import {presentationTool} from "sanity/presentation";
import {schemasTypes} from "./src/studio/schemas";
import {structure} from "./src/studio/structure";
import {locate} from "./src/studio/plugins/locate";

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
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    singletonPlugin({types: ["siteSettings"]}),
    visionTool(),
  ],
});
