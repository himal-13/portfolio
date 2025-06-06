import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "h13",
  description: "Himal Bhusal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="4KUodLWWsksHy-kR73qMsEpYEbVQdiwqrXqZmBXr3jg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
