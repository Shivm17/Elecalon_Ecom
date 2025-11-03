export const metadata = {
  title: "Elecalon Ecom Blog | Job-Oriented, Technical, and Career Growth Articles",
  description:
    "Explore Elecalon Ecom’s blog featuring job-oriented training insights, placement tips, technical learning guides, web scraping tutorials, and success stories for students and professionals in India.",
  keywords: [
    // Career / Job-Oriented Blogs
    "job oriented courses",
    "100% placement",
    "training after graduation",
    "IT jobs for freshers",
    "skill-based jobs",
    "career training programs",
    "online training",
    "placement courses",
    "career platform India",
    "courses after graduation",
    "job-ready programs",
    "courses after 12th",
    "job training",
    "skill development",

    // Technical / Learning Blogs
    "full stack course",
    "web development training",
    "programming courses",
    "coding for beginners",
    "python course",
    "programming job training",
    "data analytics course",
    "job-oriented training",
    "digital marketing course",
    "online certification",

    // Placement & Success Tips
    "placement interview",
    "job preparation tips",
    "fresher jobs",
    "job openings 2025",
    "placement guarantee",
    "job training",
    "success stories",
    "training institute",
    "job tips",
    "fresher mistakes",
    "job search advice",

    // Web Scraping & Services Blogs
    "web scraping services",
    "data extraction company",
    "ecommerce data scraping",
    "web scraping India",
    "data scraping company",
    "business automation",
    "web automation",
    "scraping developer",
  ],
  openGraph: {
    title: "Elecalon Ecom Blog | Learn. Grow. Get Placed.",
    description:
      "Discover job-oriented training, web scraping insights, and success stories from Elecalon Ecom. Learn the skills that get you hired.",
    url: "https://elecalon-ecom.vercel.app/blog",
    siteName: "Elecalon Ecom",
    images: [
      {
        url: "/images/elecalon-blog-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Elecalon Ecom Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elecalon Ecom Blog | Learn. Grow. Get Placed.",
    description:
      "Job-oriented courses, placement tips, and learning guides for students & professionals in India.",
    images: ["/images/elecalon-blog-banner.jpg"],
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
