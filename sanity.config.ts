import {defineConfig} from "sanity";
import {visionTool} from "@sanity/vision";
import {schemasTypes} from "./src/studio/schemas";
import {structure} from "./src/studio/plugins/structure";
import {presentation} from "./src/studio/plugins/presentation";
import {singletonPlugin} from "./src/studio/plugins/singleton";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  name: "Studio",
  basePath: "/studio",
  schema: {
    types: schemasTypes,
  },
  plugins: [structure, presentation, singletonPlugin({types: ["siteSettings"]}), visionTool()],
});
