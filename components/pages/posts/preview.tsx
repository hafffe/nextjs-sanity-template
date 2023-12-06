"use client";

import {type QueryResponseInitial} from "@sanity/react-loader";
import type {Page} from "~/models/page";
import type {Post} from "~/models/post";

import HomePage from "~/components/pages/home";
import {useQuery} from "~/lib/sanity/query/use-query";
import {pageWithPostsQuery} from "~/lib/queries";

type PageWithPosts = {
  page: Page;
  posts: Post[];
};

type Props = {
  initial: QueryResponseInitial<PageWithPosts | null>;
  params: {
    slug: string;
    limit: number;
  };
};

const HomepagePreview = ({initial, params}: Props) => {
  const {data, encodeDataAttribute} = useQuery<PageWithPosts | null>(pageWithPostsQuery, params, {initial});

  return <HomePage data={data} encodeDataAttribute={encodeDataAttribute} />;
};
export default HomepagePreview;
