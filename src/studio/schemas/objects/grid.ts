import {RiLayoutGridLine} from "react-icons/ri";
import {defineArrayMember, defineField, defineType} from "sanity";

const grid = defineType({
  name: "grid",
  type: "object",
  title: "Grid",
  description: "This is a simple grid component, all items are going to be equally wide",
  icon: RiLayoutGridLine,
  groups: [
    {
      name: "columns",
      title: "Columns",
    },
    {
      name: "items",
      title: "Items",
    },
  ],
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      name: "columns",
      title: "Columns",
      type: "columns",
      group: "columns",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      options: {
        layout: "list",
      },
      of: [
        defineArrayMember({
          type: "mainImage",
        }),
        defineArrayMember({
          type: "blockContent",
        }),
        defineArrayMember({
          type: "youtube",
        }),
      ],
      group: "items",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({title}: {title: string}) {
      return {
        title: `${title}`,
      };
    },
  },
});

export default grid;
