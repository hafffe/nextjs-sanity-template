import type {Metadata} from "next";
import dynamic from "next/dynamic";
import {draftModeEnabled} from "~/lib/draft-mode";
import {loadPageQuery} from "~/lib/sanity/query/load-query";
import PageLayout from "~/components/pages/category";
import {generateCategorySlugs} from "~/lib/sanity/query/generate-slugs";
import {urlForOpenGraphImage} from "~/lib/sanity/utils";

const PagePreview = dynamic(() => import("~/components/pages/category/preview"));

export const generateStaticParams = async () => {
  return await generateCategorySlugs();
};

export const generateMetadata = async ({params}: {params: {slug: string}}): Promise<Metadata> => {
  const {data: page} = await loadPageQuery({slug: params.slug});
  const ogImage = urlForOpenGraphImage(page.meta?.openGraphImage);

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

const Page = async ({params}: {params: {slug: string}}) => {
  const isEnabled = draftModeEnabled();
  const initialData = await loadPageQuery({slug: params.slug});

  if (isEnabled) {
    return <PagePreview initial={initialData} />;
  }

  return <PageLayout data={initialData.data} />;
};

export default Page;
