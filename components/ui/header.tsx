import Link from "next/link";
import Image from "next/image";
import MainNavigation from "./main-navigation";
import type {SiteSettings} from "~/models/site-settings";

const Header = ({siteSettings}: {siteSettings: SiteSettings}) => {
  return (
    <header className="mx-auto max-w-5xl px-8 flex flex-row items-center h-16 border-b border-b-slate-200">
      <Link href="/">
        <Image src="/logo-3.svg" alt="logo" height={100} width={150} />
      </Link>
      <MainNavigation navigation={siteSettings.navigation} />
    </header>
  );
};

export default Header;
