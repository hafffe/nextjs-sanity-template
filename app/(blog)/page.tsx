import type {Metadata} from "next";
import HomePage from "~/components/pages/home";
import {pageWithPostsQuery} from "~/lib/queries";
import {sanityFetch} from "~/lib/sanity/live";

import {urlForOpenGraphImage} from "~/lib/sanity/utils";

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await sanityFetch({query: pageWithPostsQuery, params: {slug: "frontpage", limit: 2}});

  const page = data;
  const ogImage = urlForOpenGraphImage(page.meta?.openGraphImage);

  return {
    title: page.meta?.metaTitle ?? page.title,
    icons: {
      icon: "/favicon/favicon.svg",
    },
    description: page.meta?.metaDescription,
    openGraph: {
      title: page.meta?.openGraphTitle,
      description: page.meta?.openGraphDescription,
      images: [
        {
          url: ogImage ?? "",
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

const IndexRoute = async () => {
  const data = await sanityFetch({query: pageWithPostsQuery, params: {slug: "frontpage", limit: 2}});
  const params = {slug: "frontpage", limit: 2};

  return <HomePage data={data} />;
};

export default IndexRoute;
