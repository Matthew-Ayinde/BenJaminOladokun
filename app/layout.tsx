import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Benjamen Oladokun - Entrepreneur, Builder, Innovator",
  description: "Visionary entrepreneur, strategist, and builder passionate about reshaping industries and empowering people across Africa and emerging markets. Co-founder of Shekel Mobility, Forbes Business Council Member, and Global Entrepreneurship Award recipient.",
  keywords: [
    "Benjamen Oladokun",
    "entrepreneur",
    "fintech",
    "mobility",
    "Africa",
    "Y Combinator",
    "Shekel Mobility",
    "innovation",
    "technology",
    "Forbes Business Council",
    "Harambean Fellow",
    "Global Impact Business Community",
    "GIBC",
    "speaking",
    "thought leadership"
  ],
  authors: [{ name: "Benjamen Oladokun" }],
  creator: "Benjamen Oladokun",
  publisher: "Benjamen Oladokun",
  openGraph: {
    title: "Benjamen Oladokun - Entrepreneur, Builder, Innovator",
    description: "Visionary entrepreneur, strategist, and builder passionate about reshaping industries and empowering people across Africa and emerging markets.",
    type: "website",
    locale: "en_US",
    siteName: "Benjamen Oladokun Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamen Oladokun - Entrepreneur, Builder, Innovator",
    description: "Visionary entrepreneur, strategist, and builder passionate about reshaping industries and empowering people across Africa and emerging markets.",
    creator: "@benjamenoladokun",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
