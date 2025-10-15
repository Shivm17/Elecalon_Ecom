import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elecalon Ecom",
  description: "Skip to main content. Skip to navigation. Elecalon Ecom · home · Web Scraping Services · Apply Now · Data entry Executive · Automation executive.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header/>
        {children}
      </body>
    </html>
  );
}
