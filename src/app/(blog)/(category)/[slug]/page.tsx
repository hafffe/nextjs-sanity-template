import type {Metadata} from "next";
import {allPagesSlug, pageQuery} from "~/lib/sanity/queries";
import {sanityFetch} from "~/lib/sanity/live";
import {urlForOpenGraphImage} from "~/lib/sanity/utils";
import {RenderSection, Sections} from "~/components/sections";

export const generateStaticParams = async () => {
  const {data} = await sanityFetch({query: allPagesSlug, perspective: "published", stega: false});

  return data.map((page) => ({
    slug: page,
  }));
};

export const generateMetadata = async ({params}: {params: Promise<{slug: string}>}): Promise<Metadata> => {
  const slug = (await params).slug;
  const {data: page} = await sanityFetch({query: pageQuery, params: {slug}});
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
      {data?.content
        ?.filter(
          (section): section is Sections =>
            section !== null && typeof section === "object" && "_key" in section && Object.keys(section).length > 0,
        )
        .map((section) => {
          return <RenderSection key={section._key} section={section} />;
        })}
    </>
  );
};

export default Page;
