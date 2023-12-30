import {Image as ImageType} from "~/models/sections/image";
import {Image} from "~/components/shared";

type Props = {
  data: ImageType;
  width?: number;
  height?: number;
};

const MainImage = ({data, width = 1152, height = 740}: Props) => <Image data={data} width={width} height={height} />;

export default MainImage;
