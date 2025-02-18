import {client} from "~/lib/sanity/client";
import {defineEnableDraftMode} from "next-sanity/draft-mode";

export const {GET} = defineEnableDraftMode({
  client: client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
  }),
});
