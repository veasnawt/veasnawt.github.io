import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veasna | Software Engineer & Systems Developer",
  description:
    "Personal engineering hub and project portfolio for Veasna (@veasnawt). Systems architecture, 2D game loops, desktop simulators, and modern web applications.",
  keywords: [
    "Veasna",
    "veasnawt",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "Game Engine",
    "Veasna OS",
    "Loom RPG",
    "VBoard",
  ],
  authors: [{ name: "Veasna", url: "https://veasnawt.github.io" }],
  metadataBase: new URL("https://veasnawt.github.io"),
  openGraph: {
    title: "Veasna | Software Engineer & Systems Developer",
    description:
      "Personal engineering hub and project portfolio for Veasna (@veasnawt).",
    url: "https://veasnawt.github.io",
    siteName: "veasnawt.github.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veasna | Software Engineer & Systems Developer",
    description:
      "Personal engineering hub and project portfolio for Veasna (@veasnawt).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body id="top">{children}</body>
    </html>
  );
}
