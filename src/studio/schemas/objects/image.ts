import {ImageIcon} from "lucide-react";
import {defineField, defineType} from "sanity";

export const image = defineType({
  name: "Image",
  title: "Image",
  description: "Image",
  type: "image",
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      title: "Alternative text",
      type: "string",
      description: "Important for SEO and accessiblity.",
      validation: (Rule) => Rule.error("You have to fill out the alternative text.").required(),
    }),
  ],
  preview: {
    select: {
      title: "alt",
      media: "asset",
    },
    prepare({media, title}) {
      return {
        media,
        title,
      };
    },
  },
});
