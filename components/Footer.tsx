import { logOutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logOutAccount();

    if (loggedOut) router.push("/sign-in");
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-400 ">{user?.name[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <span className="text-sm truncate font-normal">{user?.name}</span>
        <span className="text-sm truncate text-gray-400">{user?.email}</span>
      </div>
      <div
        className="footer_image hover:brightness-[2] transition duration-150"
        onClick={handleLogOut}
      >
        <Image src="icons/logout.svg" fill alt="Logout Button" />
      </div>
    </footer>
  );
};

export default Footer;
