import type {Metadata} from "next";
import {loadPostQuery} from "~/lib/sanity/query/load-query";
import PageLayout from "~/components/pages/post";
import {urlForOpenGraphImage} from "~/lib/sanity/utils";
import {sanityFetch} from "~/lib/sanity/live";
import {allPostSlug, postQuery} from "~/lib/queries";

export const generateStaticParams = async () => {
  return await sanityFetch({query: allPostSlug, perspective: "published", stega: false});
};

export const generateMetadata = async ({params}: {params: {slug: string}}): Promise<Metadata> => {
  const {data: post} = await loadPostQuery({slug: params.slug});
  const ogImage = urlForOpenGraphImage(post.meta?.openGraphImage);

  return {
    title: post.meta?.metaTitle ?? post.title,
    description: post.meta?.metaDescription,
    icons: {
      icon: "/favicon/favicon.svg",
    },
    openGraph: {
      title: post.meta?.openGraphTitle,
      description: post.meta?.openGraphDescription,
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

const Page = async ({params}: {params: Promise<{slug: string}>}) => {
  const slug = (await params).slug;
  const data = await sanityFetch({query: postQuery});

  return <PageLayout data={data} />;
};

export default Page;
