import {BlockContent, Grid, MainImage, Youtube} from "~/components/sections";

export type Sections =
  | {
      _key: string;
      _type: "grid";
    }
  | {
      _key: string;
      _type: "blockContent";
    }
  | {
      _key: string;
      _type: "mainImage";
    }
  | {
      _key: string;
      _type: "youtube";
    };

const RenderSection = ({section}: {section: Sections}) => {
  switch (section._type) {
    case "blockContent":
      return <BlockContent data={section} />;
    case "grid":
      return <Grid data={section} />;
    case "mainImage":
      return <MainImage data={section} />;
    case "youtube":
      return <Youtube data={section} />;
    default:
      console.warn(`Section couldn't be rendered`);

      if (process.env.NODE_ENV !== "production") {
        return <pre>{JSON.stringify(section, null, 2)}</pre>;
      }

      return null;
  }
};

export default RenderSection;
