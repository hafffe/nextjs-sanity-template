import {Columns2} from "lucide-react";
import {defineField, defineType} from "sanity";

export const imageCard = defineType({
  name: "imageCard",
  type: "object",
  title: "Image Card",
  icon: Columns2,
  fields: [
    defineField({
      name: "title",
      title: "Card Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Card text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Card Image",
      type: "image",
      description: "Add an image or illustration for this card",
    }),
    defineField({
      name: "url",
      title: "Link URL",
      type: "customUrl",
    }),
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      media: "image",
      externalUrl: "url.external",
      urlType: "url.type",
      internalUrl: "url.internal.slug.current",
      openInNewTab: "url.openInNewTab",
    },
    prepare: ({title, description, media, externalUrl, urlType, internalUrl, openInNewTab}) => {
      const url = urlType === "external" ? externalUrl : internalUrl;
      const newTabIndicator = openInNewTab ? " ↗" : "";
      const truncatedUrl = url?.length > 30 ? `${url.substring(0, 30)}...` : url;
      const truncatedDesc = description?.length > 50 ? `${description.substring(0, 50)}...` : description;

      return {
        title: title || "Untitled Card",
        subtitle: truncatedDesc + (url ? ` • ${truncatedUrl}${newTabIndicator}` : ""),
        media,
      };
    },
  },
});
