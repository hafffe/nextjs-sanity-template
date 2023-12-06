"use client";

import {type QueryResponseInitial} from "@sanity/react-loader";
import type {Post} from "~/models/post";

import PostPage from "~/components/pages/post";
import {useQuery} from "~/lib/sanity/query/use-query";
import {pageWithPostsQuery} from "~/lib/queries";

type Props = {
  initial: QueryResponseInitial<Post | null>;
};

const PostPagePreview = ({initial}: Props) => {
  const {data, encodeDataAttribute} = useQuery<Post | null>(pageWithPostsQuery, {}, {initial});

  return <PostPage data={data} encodeDataAttribute={encodeDataAttribute} />;
};
export default PostPagePreview;
