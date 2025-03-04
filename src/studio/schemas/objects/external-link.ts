import {RiExternalLinkLine} from "react-icons/ri";
import {defineField, defineType} from "sanity";

const externalLink = defineType({
  title: "External Link",
  name: "externalLink",
  type: "object",
  icon: RiExternalLinkLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Add external link",
    }),
  ],
});

export default externalLink;
