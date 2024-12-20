"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Logout";
import PlaidLink from "./PlaidLink";

function MobileNav({ user }: MobileNavProps) {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[16.5rem]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="Hamburger Menu Icon"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="border-l border-gray-800 backdrop-blur-xl flex flex-col justify-between">
          <SheetTitle></SheetTitle>
          <span className="flex flex-col gap-y-9">
            <PlaidLink user={user} variant="link" />
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.route ||
                pathname.startsWith(`${link.route}/`);
              return (
                <Link
                  href={link.route}
                  key={link.label}
                  className={cn(
                    "sidebar-link hover:brightness-[2] transition duration-150",
                    { "bg-graybg": isActive }
                  )}
                >
                  <div className="relative size-6">
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      fill
                      className={cn({ "brightness-[2] invert-0": isActive })}
                    />
                  </div>
                  <p>{link.label}</p>
                </Link>
              );
            })}
          </span>
          <Footer user={user} type="mobile" />
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
