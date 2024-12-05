import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between">
      <div className="relative w-full hidden lg:flex">
        <Image
          src="/images/layoutimage.webp"
          fill
          style={{
            objectFit: "cover",
          }}
          alt="Shopping image"
        />
      </div>
      {children}
    </main>
  );
}
