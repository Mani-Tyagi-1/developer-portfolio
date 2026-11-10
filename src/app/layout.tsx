import type { Metadata } from "next";
import "./globals.css";
import { CommandNavbar } from "@/components/navigation/CommandNavbar";

export const metadata: Metadata = {
  title: "Mani Tyagi — Full Stack Engineer | Scalable Admin Engines & Web Platforms",
  description: "Full Stack Developer with 1.5+ years of experience using Next.js, TypeScript, Node.js, and MongoDB. Owning admin architectures, fine-grained RBAC, and payment pipelines serving 100K+ users at Vedic Vaibhav.",
  keywords: [
    "Mani Tyagi",
    "Full Stack Engineer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "RBAC Architecture",
    "Transactional Webhooks",
    "Core Web Vitals",
    "Vedic Vaibhav"
  ],
  authors: [{ name: "Mani Tyagi" }],
  openGraph: {
    title: "Mani Tyagi — Full Stack Engineer",
    description: "Architecting high-reliability admin engines, transactional webhooks, and scalable Next.js platforms serving 100K+ users.",
    url: "https://manityagi.dev",
    siteName: "Mani Tyagi Engineering Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mani Tyagi — Full Stack Engineer",
    description: "Architecting high-reliability admin engines, transactional webhooks, and scalable Next.js platforms.",
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
    jobTitle: "Full Stack Engineer",
    url: "https://manityagi.dev",
    sameAs: [
      "https://github.com",
      "https://linkedin.com"
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "RBAC",
      "Webhooks",
      "Core Web Vitals"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased bg-[#09090B] text-[#FAFAFA] font-sans selection:bg-zinc-800 selection:text-zinc-100"
      >
        {/* Sticky Command-Bar Navigation */}
        <CommandNavbar />

        {/* Main Content Area */}
        <main className="relative z-10 w-full">{children}</main>
      </body>
    </html>
  );
}
