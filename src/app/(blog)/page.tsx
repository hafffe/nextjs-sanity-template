import type {Metadata} from "next";
import {pageQuery, pageWithPostsQuery, postsQuery} from "~/lib/sanity/queries";
import {sanityFetch} from "~/lib/sanity/live";
import {Heading} from "~/components/ui";
import {PostList} from "~/components/shared";
import {RenderSection, type Sections} from "~/components/sections";

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
  const [{data: page}, {data: posts}] = await await Promise.all([
    sanityFetch({query: pageQuery, params: params}),
    sanityFetch({query: postsQuery, params}),
  ]);

  return (
    <>
      {page?.content
        ?.filter(
          (section): section is Sections =>
            section !== null && typeof section === "object" && "_key" in section && Object.keys(section).length > 0,
        )
        .map((section) => {
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
