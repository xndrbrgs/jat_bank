"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";

function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Logo" />
        </Link>
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
        USER
      </nav>
      <Footer user={user} type='desktop' />
    </section>
  );
}

export default Sidebar;
