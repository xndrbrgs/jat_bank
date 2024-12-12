import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  // console.log("Logged In User in RootLayout:", loggedIn);
  if (!loggedIn) {
    console.warn("Redirecting due to null user...");
    redirect("/sign-in");
  }

  return (
    <main className="font-poppins h-screen max-h-screen mx-auto min-[1800px]:max-w-[1536px] min-[1800px]:border-x border-x border-gray-800 relative">
      <div className="flex size-full flex-col">
        <Navbar user={loggedIn} />
        <div className="flex justify-between items-center md:hidden py-2 pr-4 border-b border-gray-800">
          <Image
            src="/images/logo.svg"
            width={64}
            height={64}
            alt="Menu Icon"
            className="fill-white"
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
