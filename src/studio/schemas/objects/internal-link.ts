import {RiLinksLine} from "react-icons/ri";
import {defineField, defineType} from "sanity";

const internalLink = defineType({
  title: "Internal Link",
  name: "internalLink",
  type: "object",
  icon: RiLinksLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "reference",
      to: [
        {
          type: "page",
        },
      ],
    }),
  ],
});

export default internalLink;
