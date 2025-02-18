import "~/styles/globals.css";
import {Analytics} from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import {draftMode} from "next/headers";
import {Suspense} from "react";
import {Footer, Header, MaxWidthWrapper} from "~/components/ui";
import {sanityFetch} from "~/lib/sanity/live";
import {siteSettingsQuery} from "~/lib/queries";

const VisualEditing = dynamic(() => import("~/components/visual-editing"));

const RootLayout = async ({children}: {children: React.ReactNode}) => {
  const {data: siteSettings} = await sanityFetch({query: siteSettingsQuery, params: {slug: "frontpage"}});
  const {isEnabled} = await draftMode();

  return (
    <>
      <Suspense>
        <Header siteSettings={siteSettings} />
      </Suspense>
      <MaxWidthWrapper className="flex flex-col pt-4 pb-8" type="main">
        <Suspense>{children}</Suspense>
      </MaxWidthWrapper>
      <Suspense>
        <Footer socialFields={siteSettings.socialFields} />
      </Suspense>
      <Analytics />
      {isEnabled && <VisualEditing />}
    </>
  );
};

export default RootLayout;
