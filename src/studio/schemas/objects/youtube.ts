import {RiYoutubeLine} from "react-icons/ri";
import {defineField, defineType} from "sanity";

const youtube = defineType({
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  icon: RiYoutubeLine,
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "YouTube video URL",
      validation: (Rule) => Rule.required().uri({scheme: ["http", "https"]}),
    }),
    defineField({
      name: "autoPlay",
      type: "boolean",
      title: "Enable autoplay",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "muted",
      type: "boolean",
      title: "Muted",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default youtube;
