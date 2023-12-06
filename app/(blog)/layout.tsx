import "~/styles/globals.css";
import {Analytics} from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import {Suspense} from "react";
import {Footer, Header, MaxWidthWrapper} from "~/components/ui";
import {loadSiteSettings} from "~/lib/sanity/query/load-query";
import {draftModeEnabled} from "~/lib/draft-mode";

const VisualEditing = dynamic(() => import("~/components/visual-editing"));

const RootLayout = async ({children}: {children: React.ReactNode}) => {
  const {data: siteSettings} = await loadSiteSettings();
  const isEnabled = draftModeEnabled();

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
