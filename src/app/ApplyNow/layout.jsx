import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apply Now | Job Openings at Elecalon",
    description:
      "Explore Elecalon’s latest job opportunities with guaranteed placement support. Apply now and kickstart your IT career with practical training programs.",
    keywords: [
      "job oriented courses in india",
      "courses with 100% placement guarantee",
      "placement guarantee training program",
      "best placement courses in india",
      "professional job courses after graduation",
      "courses for freshers to get a job",
      "career oriented courses 2025",
      "online courses with job support",
      "skill development training programs",
      "IT courses with placement assistance",
      "top training institute for placement",
      "learn and get hired courses",
      "online career training institute",
      "certified placement courses",
      "short term courses with job opportunities",
    ],
  openGraph: {
    title: "Job-Oriented Courses in India | Elecalon",
    description:
      "Join Elecalon’s 100% placement guarantee programs and get job-ready with skill development training.",
    url: "https://elecalon-ecom.vercel.app",
    siteName: "Elecalon",
    images: [
      {
        url: "https://elecalon-ecom.vercel.app/og_image.png",
        width: 1200,
        height: 630,
        alt: "Elecalon Job-Oriented Courses",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://elecalon-ecom.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </div>
  );
}
