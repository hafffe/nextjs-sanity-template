import type {Metadata} from "next";
import {urlForOpenGraphImage} from "~/lib/sanity/utils";
import {sanityFetch} from "~/lib/sanity/live";
import {pageWithPostsQuery} from "~/lib/sanity/queries";
import {RenderSection} from "~/components/sections";
import PostList from "~/components/shared/post-list";

const params = {slug: "posts", limit: 20};

export const generateMetadata = async (): Promise<Metadata> => {
  const {data} = await sanityFetch({query: pageWithPostsQuery, params});

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
  const {data} = await sanityFetch({query: pageWithPostsQuery, params});
  const {page, posts} = data;

  return (
    <>
      {page?.content?.map((section) => {
        if (!section || Object.keys(section).length === 0) {
          return null;
        }

        return <RenderSection key={section._key} section={section} />;
      })}

      {posts && <PostList posts={posts} />}
    </>
  );
};

export default Page;
