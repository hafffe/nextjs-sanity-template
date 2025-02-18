import type {Metadata} from "next";
import {urlForOpenGraphImage} from "~/lib/sanity/utils";
import {sanityFetch} from "~/lib/sanity/live";
import {allPostSlugQuery, postQuery} from "~/lib/sanity/queries";
import {Date, Heading, Tag} from "~/components/ui";
import {RenderSection} from "~/components/sections";

export const generateStaticParams = async () => {
  const {data} = await sanityFetch({query: allPostSlugQuery, perspective: "published", stega: false});
  return data;
};

export const generateMetadata = async ({params}: {params: Promise<{slug: string}>}): Promise<Metadata> => {
  const slug = (await params).slug;
  const {data: post} = await sanityFetch({query: postQuery, params: {slug}});
  const ogImage = urlForOpenGraphImage(post?.meta?.openGraphImage);

  return {
    title: post?.meta?.metaTitle ?? post?.title,
    description: post?.meta?.metaDescription,
    icons: {
      icon: "/favicon/favicon.svg",
    },
    openGraph: {
      title: post?.meta?.openGraphTitle,
      description: post?.meta?.openGraphDescription,
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
  const {data} = await sanityFetch({query: postQuery, params: {slug}});

  if (!data) {
    return;
  }

  const keywords = data?.keywords?.map((tag) => <Tag key={tag}>{tag}</Tag>);

  return (
    <article>
      <div className="pb-2">
        <Heading level="h2">{data.title}</Heading>
        <div className="flex flex-row items-center">
          {data.publishedAt && <Date publishedAt={data.publishedAt} />}
          <div className="flex flex-row">{keywords}</div>
        </div>
      </div>
      {data?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
    </article>
  );
};

export default Page;
