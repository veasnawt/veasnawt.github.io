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
  title: "Veasna | Software Developer & Systems Builder",
  description: "Selected work by Veasna (@veasnawt): VOS kernel research, Pinly, VCut, VBoard, VIcons, and the separate Veasna OS Universe desktop prototype.",
  keywords: ["Veasna", "veasnawt", "VOS", "Operating System", "Pinly", "VCut", "VBoard", "VIcons", "Open Source", "Software Developer"],
  authors: [{ name: "Veasna", url: "https://veasnawt.com" }],
  metadataBase: new URL("https://veasnawt.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Veasna | Software Developer & Systems Builder",
    description: "From kernel research to published apps and open-source tools. Selected projects by Veasna.",
    url: "https://veasnawt.com",
    siteName: "veasnawt.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Veasna | Software Developer & Systems Builder",
    description: "Systems research, published apps, and open-source tools by Veasna (@veasnawt).",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var p=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";var t=s||p;document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
