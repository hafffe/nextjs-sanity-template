import type {Metadata} from "next";
import {urlForOpenGraphImage} from "~/lib/sanity/utils";
import {sanityFetch} from "~/lib/sanity/live";
import {pageQuery, postsQuery} from "~/lib/sanity/queries";
import {RenderSection, Sections} from "~/components/sections";
import PostList from "~/components/shared/post-list";

const params = {slug: "posts", limit: 20};

export const generateMetadata = async (): Promise<Metadata> => {
  const {data: page} = await sanityFetch({query: pageQuery, params});
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
  const [{data: page}, {data: posts}] = await Promise.all([
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
      {posts && <PostList posts={posts} />}
    </>
  );
};

export default Page;
