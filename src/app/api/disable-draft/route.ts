import {draftMode} from "next/headers";
import {type NextRequest, NextResponse} from "next/server";

export const runtime = "edge";

const handler = async (request: NextRequest) => {
  const {disable} = await draftMode();
  disable();
  const url = new URL(request.nextUrl);
  return NextResponse.redirect(new URL("/", url.origin));
};

export {handler as GET};
