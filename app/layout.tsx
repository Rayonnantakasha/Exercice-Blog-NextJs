import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rn akasha Blog",
  description: "Développeur Web FullStack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <header className="bg-red-100 p-4">
          <h1 className="text-4xl">Rn akasha Blog</h1>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-red-100 p-4">
          Rayonnant-Akasha
        </footer>
      </body>
    </html>
  );
}
