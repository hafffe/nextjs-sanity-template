import type {Post} from "~/models/post";
import {Date, Heading, Tag} from "~/components/ui";
import {RenderSection} from "~/components/sections";
import type {EncodeDataAttributeCallback} from "@sanity/react-loader";

type Props = {
  data: Post | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
};

const PostPage = ({data}: Props) => {
  if (!data) {
    return;
  }

  const keywords = data?.keywords?.map((tag) => <Tag key={tag}>{tag}</Tag>);

  return (
    <article>
      <div className="pb-2">
        <Heading level="h2">{data.title}</Heading>
        <div className="flex flex-row items-center">
          {data.publishedAt && <Date publishedAt={data.publishedAt} />}
          <div className="flex flex-row">{keywords}</div>
        </div>
      </div>
      {data?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
    </article>
  );
};

export default PostPage;
