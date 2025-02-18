import Link from "next/link";
import Image from "next/image";
import MainNavigation from "./main-navigation";
import type {SiteSettingsQueryResult} from "~/lib/sanity/types";

type SiteSettings = SiteSettingsQueryResult;

const Header = ({siteSettings}: {siteSettings: SiteSettings}) => {
  return (
    <header className="mx-auto max-w-5xl px-8 flex flex-row items-center h-16 border-b border-b-slate-200">
      <Link href="/">
        <Image src="/logo-3.svg" alt="logo" height={100} width={150} />
      </Link>
      {siteSettings?.navigation && <MainNavigation navigation={siteSettings.navigation} />}
    </header>
  );
};

export default Header;
