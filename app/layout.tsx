import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080503",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://narasusgold.com"),
  title: "NARASU'S GOLD | Rich Coffee. Golden Moments.",
  description:
    "Experience the rich aroma and smooth character of Narasu's Gold Freeze Dried Coffee through a cinematic coffee experience.",
  keywords: [
    "Narasu's Gold",
    "Freeze Dried Coffee",
    "Premium Indian Coffee",
    "Instant Coffee",
    "Salem Coffee",
    "Luxury Coffee",
    "Aroma Coffee",
  ],
  authors: [{ name: "Narasu's Coffee Company" }],
  openGraph: {
    title: "NARASU'S GOLD | Rich Coffee. Golden Moments.",
    description:
      "Experience the rich aroma and smooth character of Narasu's Gold Freeze Dried Coffee through a cinematic coffee experience.",
    url: "https://narasusgold.com",
    siteName: "Narasu's Gold",
    images: [
      {
        url: "/images/coffee/120.webp",
        width: 1920,
        height: 1080,
        alt: "Narasu's Gold Freeze Dried Coffee Jar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NARASU'S GOLD | Rich Coffee. Golden Moments.",
    description:
      "Experience the rich aroma and smooth character of Narasu's Gold Freeze Dried Coffee through a cinematic coffee experience.",
    images: ["/images/coffee/120.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} font-sans bg-[#080503] text-[#F4E3C1] selection:bg-[#B87532] selection:text-white overflow-x-hidden min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
