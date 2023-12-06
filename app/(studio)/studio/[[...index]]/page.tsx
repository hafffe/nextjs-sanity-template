import Studio from "./studio";

export const dynamic = "force-static";

export {metadata} from "next-sanity/studio/metadata";
export {viewport} from "next-sanity/studio/viewport";

export default function StudioPage() {
  return <Studio />;
}
