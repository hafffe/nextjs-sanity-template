import {RiShareLine} from "react-icons/ri";
import {defineField, defineType} from "sanity";

const meta = defineType({
  title: "Meta Information",
  name: "metaFields",
  type: "object",
  icon: RiShareLine,
  groups: [
    {
      name: "opengraph",
      title: "Open Graph Protocol",
    },
  ],
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title (Overrides to default title)",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    }),
    defineField({
      name: "openGraphImage",
      title: "Open Graph Image",
      type: "image",
      description: "Ideal size for open graph images is 1200 x 600",
      options: {
        hotspot: true,
      },
      group: "opengraph",
    }),
    defineField({
      name: "openGraphTitle",
      title: "Open Graph Title",
      type: "string",
      group: "opengraph",
    }),
    defineField({
      name: "openGraphDescription",
      title: "Open Graph Description",
      type: "text",
      group: "opengraph",
    }),
  ],
});

export default meta;
