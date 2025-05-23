"use client";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import type {Youtube as YoutubeType} from "~/lib/sanity/types";

type Props = {
  data: YoutubeType;
};

const YoutubeBlock = ({data}: Props) => {
  if (!data.url) {
    return null;
  }

  const options = {
    playerVars: {
      autoplay: data.autoPlay ? (1 as const) : (0 as const),
      mute: data.muted ? (1 as const) : (0 as const),
    },
  };

  const id = getYouTubeId(data.url)?.toString();

  return <YouTube videoId={id} opts={options} className="youtubeContainer" />;
};

export default YoutubeBlock;
