import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigacija } from "./components/navigacija";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <header className="bg-indigo-950 text-white p-3  text-center">
          {/* <p>Header sekcija - Zastita na Web-u</p> */}
          <Navigacija/>
        </header>

        {children}

        <footer className="bg-indigo-950 text-white p-3  text-center">
          <p>&copy; Univerzitet Singidunum</p>
        </footer>
      </body>
    </html>
  );
}
