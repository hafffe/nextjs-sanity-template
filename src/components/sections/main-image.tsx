import type {MainImage as MainImageType} from "~/lib/sanity/types";
import {Image} from "~/components/shared";

type Props = {
  data: MainImageType;
  width?: number;
  height?: number;
};

// eslint-disable-next-line jsx-a11y/alt-text
const MainImage = ({data, width = 1152, height = 740}: Props) => <Image data={data} width={width} height={height} />;

export default MainImage;
