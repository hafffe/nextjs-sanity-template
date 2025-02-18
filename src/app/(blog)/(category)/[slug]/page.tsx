import type {Metadata} from "next";
import {allPagesSlug, pageQuery} from "~/lib/sanity/queries";
import {sanityFetch} from "~/lib/sanity/live";
import {urlForOpenGraphImage} from "~/lib/sanity/utils";
import {RenderSection} from "~/components/sections";

export const generateStaticParams = async () => {
  return await sanityFetch({query: allPagesSlug, perspective: "published", stega: false});
};

export const generateMetadata = async ({params}: {params: Promise<{slug: string}>}): Promise<Metadata> => {
  const {data: page} = await sanityFetch({query: pageQuery});
  const ogImage = urlForOpenGraphImage(page?.meta?.openGraphImage);

  return {
    title: page?.meta?.metaTitle ?? page?.title,
    description: page?.meta?.metaDescription,
    icons: {
      icon: "/favicon/favicon.svg",
    },
    openGraph: {
      title: page?.meta?.openGraphTitle,
      description: page?.meta?.openGraphDescription,
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
  const {data} = await sanityFetch({query: pageQuery, params: {slug}});

  return (
    <>
      {data?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
    </>
  );
};

export default Page;
