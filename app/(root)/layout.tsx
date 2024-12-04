import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Alex", lastName: "Borges" };

  return (
    <main className="font-poppins flex h-screen mx-auto max-w-[96rem] min-w-[112.5rem]">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout flex justify-between md:hidden">
          <Image src="/icons/logo.svg" width={30} height={30} alt="Menu Icon" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
