import {RiShareLine} from "react-icons/ri";
import {defineField, defineType} from "sanity";

const socialFields = defineType({
  title: "Social",
  name: "socialFields",
  type: "object",
  icon: RiShareLine,
  fields: [
    defineField({
      name: "twitter",
      type: "url",
      title: "Twitter URL",
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

export default socialFields;
