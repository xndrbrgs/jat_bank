"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Footer from "./Logout";
import Logout from "./Logout";

const Navbar = ({ user }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <nav className="border-b border-gray-800 w-full">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer flex items-center">
            <Image src="/images/logo.png" width={64} height={64} alt="Logo" />
            <span className="font-semibold">JAT Banking</span>
          </Link>
        </div>
        <div className="flex flex-row">
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
