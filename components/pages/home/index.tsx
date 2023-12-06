import type {EncodeDataAttributeCallback} from "@sanity/react-loader";
import {Heading} from "~/components/ui";
import {PostList} from "~/components/shared";
import {RenderSection} from "~/components/sections";
import type {Page} from "~/models/page";
import type {Post} from "~/models/post";

type Props = {
  data: {
    page: Page;
    posts: Post[];
  } | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
};

const HomePage = ({data}: Props) => {
  const {page, posts} = data ?? {};

  return (
    <>
      {page?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
      <Heading level="h2" weight="semibold" className="py-8">
        Recent articles
      </Heading>
      {posts && <PostList posts={posts} />}
    </>
  );
};

export default HomePage;
