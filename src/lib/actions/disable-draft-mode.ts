"use server";

import {draftMode} from "next/headers";

export const disableDraftMode = async () => {
  await Promise.allSettled([
    (await draftMode()).disable(),
    // Simulate a delay to show the loading state
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]);
};
