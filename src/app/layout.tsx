import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/cinematic/SmoothScrollProvider";
import { CustomCursor } from "@/components/cinematic/CustomCursor";
import { AudioToggle } from "@/components/cinematic/AudioToggle";
import { Navigation } from "@/components/cinematic/Navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mani Tyagi — Cinematic Storytelling Portfolio & Creative Developer",
  description: "An unforgettable interactive digital cinema experience showcasing Mani Tyagi's creative development, WebGL 3D graphics, Next.js architecture, and frontend mastery.",
  keywords: [
    "Mani Tyagi",
    "Creative Developer",
    "Frontend Architect",
    "Next.js Portfolio",
    "Awwwards Portfolio",
    "GSAP ScrollTrigger",
    "Three.js WebGL",
    "React 19",
    "Tailwind CSS"
  ],
  authors: [{ name: "Mani Tyagi" }],
  openGraph: {
    title: "Mani Tyagi — Creative Developer & Frontend Architect",
    description: "An interactive digital cinema experience built with Next.js, GSAP, and WebGL.",
    url: "https://manityagi.dev",
    siteName: "Mani Tyagi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mani Tyagi — Creative Developer & Frontend Architect",
    description: "An interactive digital cinema experience built with Next.js, GSAP, and WebGL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mani Tyagi",
    jobTitle: "Senior Creative Developer & Frontend Architect",
    url: "https://manityagi.dev",
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
      "https://x.com"
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "GSAP",
      "WebGL",
      "Cybersecurity",
      "Artificial Intelligence"
    ]
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-white selection:bg-cyan-500 selection:text-black`}
      >
        <SmoothScrollProvider>
          {/* Magnetic Cursor */}
          <CustomCursor />

          {/* Floating Audio Controls */}
          <AudioToggle />

          {/* Navigation Bar */}
          <Navigation />

          {/* Main Experience Content */}
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
