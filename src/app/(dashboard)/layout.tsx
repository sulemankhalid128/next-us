import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "My Next.js App",
  description: "A powerful Next.js application",
  openGraph: {
    title: "My Next.js App",
    description: "A powerful Next.js application",
    // url: "https://my-app.com",
    // images: [{ url: "/og-image.png" }],
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <h1>Header </h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
}
