import {draftMode} from "next/headers";
import {NextRequest, NextResponse} from "next/server";

export const runtime = "edge";

const handler = (request: NextRequest) => {
  draftMode().disable();
  const url = new URL(request.nextUrl);
  return NextResponse.redirect(new URL("/", url.origin));
};

export {handler as GET};
