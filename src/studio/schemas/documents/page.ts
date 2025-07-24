import {RiPagesLine} from "react-icons/ri";
import {defineField, defineType} from "sanity";
import slug from "slugify";

const page = defineType({
  name: "page",
  type: "document",
  title: "Pages",
  icon: RiPagesLine,
  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "meta",
      title: "Meta infomation",
    },
    {
      name: "content",
      title: "Content",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the page",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Some frontends will require a slug to be set to be able to show the page",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) => slug(input, {lower: true}),
      },
      group: "general",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "metaFields",
      title: "Meta",
      name: "meta",
      group: "meta",
    }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "pageBuilder",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const {title} = selection;

      return {
        title: `${title}`,
      };
    },
  },
});

export default page;
