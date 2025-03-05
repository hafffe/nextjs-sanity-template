import {defineField, defineType} from "sanity";

const link = defineType({
  title: "URL",
  name: "link",
  type: "object",
  fields: [
    defineField({
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    }),
  ],
});

export default link;
