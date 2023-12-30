import {draftMode} from "next/headers";

export const draftModeEnabled = () => {
  const isEnabled = draftMode().isEnabled;

  return isEnabled;
};
