import {RiLayoutColumnLine} from "react-icons/ri";
import {defineType, defineField} from "sanity";

const columns = defineType({
  name: "columns",
  title: "Columns",
  type: "object",
  description: "Items per row",
  validation: (Rule) => Rule.required(),
  icon: RiLayoutColumnLine,
  fields: [
    defineField({
      title: "Small screens",
      name: "small",
      type: "string",
      description: "Items per row for phone",
      options: {
        list: [
          {
            title: "1 columns",
            value: "1",
          },
          {
            title: "2 columns",
            value: "2",
          },
          {
            title: "3 columns",
            value: "3",
          },
          {
            title: "4 columns",
            value: "4",
          },
        ],
      },
    }),
    defineField({
      title: "Medium screens",
      name: "medium",
      type: "string",
      description: "Items per row for tablet",
      options: {
        list: [
          {
            title: "1 columns",
            value: "1",
          },
          {
            title: "2 columns",
            value: "2",
          },
          {
            title: "3 columns",
            value: "3",
          },
          {
            title: "4 columns",
            value: "4",
          },
        ],
      },
    }),
    defineField({
      title: "Large screens",
      name: "large",
      type: "string",
      description: "Items per row for desktop",
      options: {
        list: [
          {
            title: "1 columns",
            value: "1",
          },
          {
            title: "2 columns",
            value: "2",
          },
          {
            title: "3 columns",
            value: "3",
          },
          {
            title: "4 columns",
            value: "4",
          },
        ],
      },
    }),
  ],
});

export default columns;
