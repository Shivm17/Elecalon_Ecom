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
  title: "Job-Oriented Courses in India | 100% Placement Training | Elecalon",
  description:
    "Elecalon offers job-oriented courses in India with 100% placement assistance. Learn industry-ready skills and get hired through our certified professional training programs.",
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
    "online learning platform",
    "best e-learning website india","elearning courses with certificate",
    "education website with placement",
    "student training institute",
    "skill up courses for youth",
    "vocational training in india",
    "career building institute",
    "IT education company india",
     "how to get job without experience",
      "best courses to get a job fast",
      "online course that guarantees placement",
      "which course is best for IT jobs",
      "training programs that help you get job",
      "best online platform for freshers",
      "how to start career in IT field",
      "job oriented short term courses after 12th",
      "how to get placed after college",
      "best job ready course for beginners",
      "web scraping service for startups",
      "data scraping for business leads",
      "affordable placement training course"
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
