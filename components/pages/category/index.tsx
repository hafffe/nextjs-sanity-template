import type {EncodeDataAttributeCallback} from "@sanity/react-loader";
import {RenderSection} from "~/components/sections";
import type {Page} from "~/models/page";

type Props = {
  data: Page | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
};

const CategoryPage = ({data}: Props) => {
  return (
    <>
      {data?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
    </>
  );
};

export default CategoryPage;
