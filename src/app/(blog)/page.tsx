import type {Metadata} from "next";
import {pageWithPostsQuery} from "~/lib/sanity/queries";
import {sanityFetch} from "~/lib/sanity/live";
import {Heading} from "~/components/ui";
import {PostList} from "~/components/shared";
import {RenderSection} from "~/components/sections";

import {urlForOpenGraphImage} from "~/lib/sanity/utils";

export const generateMetadata = async (): Promise<Metadata> => {
  const {data} = await sanityFetch({query: pageWithPostsQuery, params: {slug: "frontpage", limit: 2}});

  const {page} = data;
  // @ts-expect-error - @TODO update @sanity/image-url types so it's compatible
  const ogImage = urlForOpenGraphImage(page.meta?.openGraphImage);

  return {
    title: page?.meta?.metaTitle ?? page?.title,
    icons: {
      icon: "/favicon/favicon.svg",
    },
    description: page?.meta?.metaDescription,
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

const IndexRoute = async () => {
  const params = {slug: "frontpage", limit: 2};
  const {data} = await sanityFetch({query: pageWithPostsQuery, params: params});

  const {page, posts} = data ?? {};

  return (
    <>
      {page?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}
      <Heading level="h2" weight="semibold" className="py-8">
        Recent articles
      </Heading>
      {posts && <PostList posts={posts} />}
    </>
  );
};

export default IndexRoute;
