import {RiFileTextLine} from "react-icons/ri";
import {defineField, defineType} from "sanity";

const simpleBlockContent = defineType({
  title: "Simple Block Content",
  name: "simpleBlockContent",
  description: "Simple text block",
  type: "object",
  icon: RiFileTextLine,
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{title: "Normal", value: "normal"}],
          marks: {
            decorators: [
              {value: "strong", title: "Strong"},
              {value: "em", title: "Italic"},
              {value: "underline", title: "Underline"},
            ],
            annotations: [{type: "link"}],
          },
        },
      ],
    }),
  ],
});

export default simpleBlockContent;
