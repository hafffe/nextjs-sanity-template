import {RiShareLine} from "react-icons/ri";
import {defineField} from "sanity";

const socialFields = defineField({
  title: "Social",
  name: "socialFields",
  type: "object",
  icon: RiShareLine,
  fields: [
    {
      name: "twitter",
      type: "url",
      title: "Twitter URL",
    },
    {
      name: "instagram",
      type: "url",
      title: "Instagram URL",
    },
    {
      name: "facebook",
      type: "url",
      title: "Facebook URL",
    },
  ],
});

export default socialFields;
