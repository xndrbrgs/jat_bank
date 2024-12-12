import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t w-full border-gray-800 p-8">
      <div className="flex space-x-1 text-gray-400 text-sm">
        <span>Built by</span>
        <Link href="/">
          <span className="underline">Maxjoy Studio.</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
