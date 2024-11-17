import { Navbar, Providers } from "@/components/shared";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/hair-salon.png" />
      </head>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
        <Navbar />
      </body>
    </html>
  );
}
