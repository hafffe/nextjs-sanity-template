"use client";

import {type QueryResponseInitial} from "@sanity/react-loader";
import type {Page} from "~/models/page";

import CategoryPage from "~/components/pages/category";
import {useQuery} from "~/lib/sanity/query/use-query";
import {pageWithPostsQuery} from "~/lib/queries";

type Props = {
  initial: QueryResponseInitial<Page | null>;
};

const CategoryPagePreview = ({initial}: Props) => {
  const {data, encodeDataAttribute} = useQuery<Page | null>(pageWithPostsQuery, {}, {initial});

  return <CategoryPage data={data} encodeDataAttribute={encodeDataAttribute} />;
};
export default CategoryPagePreview;
