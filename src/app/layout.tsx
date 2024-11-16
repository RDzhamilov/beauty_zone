import { Providers } from "@/components/shared";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BeautyZone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = null;

  // if (!session) {
  //   redirect("/auth");
  // }

  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/hair-salon.png" />
      </head>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
