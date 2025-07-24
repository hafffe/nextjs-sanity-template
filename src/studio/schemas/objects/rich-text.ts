import {ImageIcon, LinkIcon} from "lucide-react";
import {defineArrayMember, defineField, defineType} from "sanity";

const richTextMembers = [
  defineArrayMember({
    name: "block",
    type: "block",
    styles: [
      {title: "Normal", value: "normal"},
      {title: "H2", value: "h2"},
      {title: "H3", value: "h3"},
      {title: "H4", value: "h4"},
      {title: "H5", value: "h5"},
      {title: "H6", value: "h6"},
      {title: "Inline", value: "inline"},
    ],
    lists: [
      {title: "Numbered", value: "number"},
      {title: "Bullet", value: "bullet"},
    ],
    marks: {
      annotations: [
        {
          name: "customLink",
          type: "object",
          title: "Internal/External Link",
          icon: LinkIcon,
          options: {
            modal: {
              type: "dialog", // or 'popover', 'fullscreen'
              width: "medium", // 'small', 'medium', 'large', 'full'
            },
          },
          fields: [
            defineField({
              name: "customLink",
              type: "customUrl",
              options: {},
            }),
          ],
        },
      ],
      decorators: [
        {title: "Strong", value: "strong"},
        {title: "Emphasis", value: "em"},
        {title: "Code", value: "code"},
      ],
    },
  }),
  defineArrayMember({
    name: "image",
    title: "Image",
    type: "image",
    icon: ImageIcon,
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: "caption",
        type: "string",
        title: "Caption Text",
      }),
    ],
  }),
];

export const richText = defineType({
  name: "richText",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "text",
      type: "array",
      of: richTextMembers,
    }),
  ],
});
