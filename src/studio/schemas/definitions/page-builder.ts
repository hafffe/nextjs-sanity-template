import {defineArrayMember, defineType} from "sanity";

export const pageBuilder = defineType({
  name: "pageBuilder",
  title: "Page builder",
  type: "array",
  options: {
    insertMenu: {
      views: [
        {
          name: "grid",
        },
      ],
    },
  },
  validation: (Rule) => Rule.required(),
  of: [
    defineArrayMember({type: "imageCard"}),
    defineArrayMember({type: "image"}),
    defineArrayMember({type: "richText"}),
    defineArrayMember({type: "youtube"}),
    defineArrayMember({type: "customUrl"}),
  ],
});
