import {PortableText} from "@portabletext/react";
import type {BlockContent as BlockContentType, SimpleBlockContent} from "~/lib/sanity/types";

const PostBody = ({content}: {content: BlockContentType | SimpleBlockContent}) => {
  if (!content?.text) {
    return null;
  }

  return (
    <div className={`max-w-2xl`}>
      <PortableText value={content.text} />
    </div>
  );
};

export default PostBody;
