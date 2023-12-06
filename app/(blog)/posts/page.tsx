import type {Metadata} from "next";
import dynamic from "next/dynamic";
import {loadPageWithPosts} from "~/lib/sanity/query/load-query";
import PageLayout from "~/components/pages/posts";
import {urlForOpenGraphImage} from "~/lib/sanity/utils";
import {draftModeEnabled} from "~/lib/draft-mode";

const PagePreview = dynamic(() => import("~/components/pages/posts/preview"));

export const generateMetadata = async (): Promise<Metadata> => {
  const {data} = await loadPageWithPosts({slug: "posts", limit: 20});
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
  const isEnabled = draftModeEnabled();
  const initialData = await loadPageWithPosts({slug: "posts", limit: 20});
  const params = {slug: "posts", limit: 20};

  if (isEnabled) {
    return <PagePreview initial={initialData} params={params} />;
  }

  return <PageLayout data={initialData.data} />;
};

export default Page;
