"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logout from "./Logout";
import PlaidLink from "./PlaidLink";

const Navbar = ({ user }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:block border-b border-gray-800 w-full sticky top-0 left-0 backdrop-blur-2xl z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer flex items-center">
            <Image src="/images/logo.png" width={64} height={64} alt="Logo" />
            <span className="font-semibold">JAT Banking</span>
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <PlaidLink user={user} variant="link" />
          {sidebarLinks.map((link) => {
            const isActive =
              pathname === link.route || pathname.startsWith(`${link.route}/`);
            return (
              <Link
                href={link.route}
                key={link.label}
                className={cn(
                  "sidebar-link hover:brightness-[2] transition duration-150",
                  { "bg-graybg": isActive }
                )}
              >
                <div className="relative size-5">
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
        </div>
        <Logout user={user} type="desktop" />
      </div>
    </nav>
  );
};

export default Navbar;
