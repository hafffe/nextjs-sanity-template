import type {Metadata} from "next";
import {loadPageWithPosts} from "~/lib/sanity/query/load-query";
import PageLayout from "~/components/pages/posts";
import {urlForOpenGraphImage} from "~/lib/sanity/utils";
import {sanityFetch} from "~/lib/sanity/live";
import {postsQuery} from "~/lib/queries";

export const generateMetadata = async (): Promise<Metadata> => {
  const data = await sanityFetch({query: postsQuery});
  const {page} = data;
  const ogImage = page && urlForOpenGraphImage(page.meta?.openGraphImage);

  if (!page) {
    return {
      title: "Posts",
      icons: {
        icon: "/favicon/favicon.svg",
      },
    };
  }

  return {
    title: page.meta?.metaTitle ?? page.title,
    description: page.meta?.metaDescription,
    icons: {
      icon: "/favicon/favicon.svg",
    },
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

const Page = async () => {
  const data = await sanityFetch({query: postsQuery});
  const params = {slug: "posts", limit: 20};

  return <PageLayout data={data} />;
};

export default Page;
