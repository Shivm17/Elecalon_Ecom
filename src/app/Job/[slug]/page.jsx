import { jobData } from "../JobsData";
import JobIframe from "../JobIframe";

// ✅ Server-side: metadata generation
export async function generateMetadata({ params }) {
  const { slug } = params;
  const job = jobData.find((j) => j.slug === slug);

  if (!job) {
    return {
      title: "Job Not Found | Elecalon",
      description: "The requested job listing could not be found.",
      keywords: ["job openings", "career opportunities", "Elecalon"],
    };
  }

  return {
    title: job.title,
    description: job.description,
    keywords: job.keywords,
    openGraph: {
      title: job.title,
      description: job.description,
      url: `https://elecalon.com/Job/${job.slug}`,
      siteName: "Elecalon",
      type: "article",
      images: [
        {
          url: "https://elecalon.com/images/jobs-banner.jpg",
          width: 1200,
          height: 630,
          alt: job.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: job.title,
      description: job.description,
      images: ["https://elecalon.com/images/jobs-banner.jpg"],
    },
  };
}

// ✅ Default export (renders client component)
export default function JobDetailPage({ params }) {
  const { slug } = params;
  return <JobIframe slug={slug} />;
}
