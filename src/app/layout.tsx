import type { Metadata } from "next";
import { Space_Grotesk, Spline_Sans_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dave Dominic Goze | Portfolio",
  description: "Portfolio and CV website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${splineMono.variable} h-full antialiased`}
    >
      <body className="min-h-full text-[color:var(--fg)]">
        <NextTopLoader
          color="#166534"
          initialPosition={0.08}
          height={4}
          showSpinner={false}
        />
        <div className="app-wrapper flex flex-col min-h-screen relative z-0 overflow-x-hidden">
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
