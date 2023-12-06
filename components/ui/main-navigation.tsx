"use client";

import type {InternalLink} from "~/models/objects/internal-link";
import type {ExternalLink} from "~/models/objects/external-link";
import {useLockedBody, useEventListener} from "usehooks-ts";
import Link from "next/link";
import {useState} from "react";
import {HiBars3} from "react-icons/hi2";
import {cn} from "~/lib/utils";

type Props = {
  navigation?: Array<InternalLink | ExternalLink>;
};

const resolveLink = (item: InternalLink | ExternalLink) => {
  if (item._type === "externalLink" && item.slug?.current) {
    return {
      type: item._type,
      key: item._key,
      title: item.title,
      url: item.slug.current,
    };
  }

  if (item._type === "internalLink" && item.link?.slug?.current) {
    return {
      type: item._type,
      key: item._key,
      title: item.title,
      url: item.link.slug.current === "frontpage" ? "/" : `/${item.link.slug.current}`,
    };
  }

  return null;
};

const MainNavigation = ({navigation}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocked] = useLockedBody(false);

  const toggleOpenState = () => {
    setIsOpen(!isOpen);
    setLocked(!isOpen);
  };

  const handleResize = () => {
    if (isOpen && window.innerWidth > 768) {
      setIsOpen(false);
      setLocked(false);
    }
  };

  useEventListener("resize", handleResize);

  if (!navigation) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-between py-4 md:py-0 px-4 text-lg bg-white ml-auto">
      <button className="block ml-auto md:hidden" onClick={toggleOpenState}>
        <HiBars3 />
      </button>
      <div className={cn("w-full md:flex md:items-center md:w-auto", isOpen ? "block fixed inset-0 top-16" : "hidden")}>
        <nav className="relative bg-white drop-shadow-md md:drop-shadow-none rounded-sm flex-col md:flex md:flex-row w-full px-4 py-4">
          {navigation.map((item) => {
            const link = resolveLink(item);

            if (!link || !link.url || !link.title) {
              return null;
            }

            if (link.type === "internalLink") {
              return (
                <Link
                  key={link.key}
                  href={link.url}
                  className="flex w-full items-center px-2 py-1 text-base font-medium hover:underline"
                >
                  {link.title}
                </Link>
              );
            }

            return (
              <Link
                key={link.key}
                href={link.url}
                className="flex w-full items-center px-2 py-1 text-base font-medium hover:underline"
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
