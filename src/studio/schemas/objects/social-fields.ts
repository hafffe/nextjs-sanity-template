import {RiShareLine} from "react-icons/ri";
import {defineField, defineType} from "sanity";

export const socialFields = defineType({
  title: "Social",
  name: "socialFields",
  type: "object",
  icon: RiShareLine,
  fields: [
    defineField({
      name: "x",
      type: "url",
      title: "X URL",
    }),
    defineField({
      name: "instagram",
      type: "url",
      title: "Instagram URL",
    }),
    defineField({
      name: "facebook",
      type: "url",
      title: "Facebook URL",
    }),
    defineField({
      name: "youtube",
      type: "url",
      title: "YouTube URL",
    }),
  ],
});
