import CourseIframe from "../CourseIframe";

export async function generateMetadata({ params }) {
  const { slug } = params;

  // Define SEO per course
  // app/courses/[slug]/metadata.js

  const courseMetadata = {
    all_courses: {
      title: "All Job-Oriented Courses | Elecalon",
      description:
        "Explore all job-oriented and professional training courses offered by Elecalon. From Python, Full Stack Development, and Digital Marketing to UI/UX Design and Ethical Hacking — all with placement assistance.",
      keywords: [
        "job oriented courses in india",
        "Elecalon Ecom job courses",
        "courses with placement guarantee",
        "career ready courses",
        "training program for freshers",
        "IT skill development institute",
        "best online learning for students",
        "courses after graduation",
        "courses after 12th for job",
        "affordable career courses online",
        "top courses for students 2025",
        "online education for career growth",
        "career development platform india",
        "job training and placement",
      ],
      openGraph: {
        title: "All Job-Oriented Courses | Elecalon",
        description:
          "Browse all career-focused and placement-supported courses by Elecalon. Learn online and get job-ready for 2025 and beyond.",
        url: "https://elecalon-ecom.vercel.app/courses",
        siteName: "Elecalon",
        type: "website",
        images: [
          {
            url: "https://elecalon-ecom.vercel.app/images/courses-banner.jpg",
            width: 1200,
            height: 630,
            alt: "Elecalon Courses Overview",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "All Job-Oriented Courses | Elecalon",
        description:
          "Discover Elecalon’s complete list of job-oriented and placement-ready courses. Learn and get hired!",
        images: ["https://elecalon.com/images/courses-banner.jpg"],
      },
    },
    // ======== EXISTING COURSES ======== //
    online_ethical_hacking: {
      title: "Online Ethical Hacking Course | Elecalon",
      description:
        "Learn advanced ethical hacking techniques with placement assistance. Become a certified cybersecurity professional through Elecalon's expert-led online program.",
      keywords: [
        "ethical hacking course",
        "cybersecurity training india",
        "learn hacking online",
        "ethical hacking certification",
        "job oriented cybersecurity course",
      ],
    },
    "full-stake": {
      title: "Full Stack Development Course | Elecalon",
      description:
        "Master frontend and backend development with Elecalon's full stack developer program. Includes placement support and live project experience.",
      keywords: [
        "full stack development course",
        "mern stack training",
        "frontend backend course",
        "developer course india",
        "job ready developer program",
      ],
    },
    javascript_master: {
      title: "JavaScript Master Course | Elecalon",
      description:
        "Become a JavaScript expert. Learn ES6, DOM manipulation, APIs, and frameworks with Elecalon's hands-on JS training program.",
      keywords: [
        "javascript course",
        "learn javascript",
        "frontend course",
        "js training with placement",
        "modern javascript 2025",
      ],
    },
    react_nextjs: {
      title: "React & Next.js Course | Elecalon",
      description:
        "Master React and Next.js for high-performance web development. Build real-world projects with Elecalon’s job-oriented training.",
      keywords: [
        "react course",
        "nextjs course",
        "frontend development training",
        "react developer course",
        "react nextjs bootcamp india",
      ],
    },
    amazon: {
      title: "AWS Certified Developer Course | Elecalon",
      description:
        "Prepare for AWS certification with Elecalon. Learn cloud computing, EC2, S3, and DevOps practices with hands-on labs and job assistance.",
      keywords: [
        "aws course",
        "cloud computing training",
        "amazon web services certification",
        "aws developer training india",
        "devops and cloud course",
      ],
    },
    python_course: {
      title: "Advanced Python for Data Science | Elecalon",
      description:
        "Learn Python for Data Analysis, Machine Learning, and AI. Get job-ready with Elecalon’s expert-guided data science course.",
      keywords: [
        "python course",
        "data science training",
        "machine learning with python",
        "python for beginners",
        "data analytics course india",
      ],
    },
    ui_ux_course: {
      title: "UI/UX Design Course with Figma | Elecalon",
      description:
        "Learn UI/UX Design using Figma. Build user-friendly designs, prototypes, and design systems with Elecalon’s placement-supported course.",
      keywords: [
        "ui ux design course",
        "figma training",
        "user experience design india",
        "design course with placement",
        "ux prototyping course",
      ],
    },

    // ======== NEW COURSES ======== //
    courses_after_12th: {
      title: "Courses After 12th for Job | Elecalon",
      description:
        "Discover top job-oriented courses after 12th to kickstart your career. Learn practical skills with Elecalon’s industry-aligned training programs.",
      keywords: [
        "courses after 12th for job",
        "career courses after 12th",
        "job oriented courses for students",
        "vocational training india",
        "best courses after 12th",
      ],
    },
    courses_after_graduation: {
      title: "Courses After Graduation with Placement | Elecalon",
      description:
        "Explore job-ready courses after graduation with guaranteed placement assistance. Elecalon helps graduates upskill and get hired fast.",
      keywords: [
        "courses after graduation",
        "placement courses for graduates",
        "career training after college",
        "post graduation job courses",
        "job oriented programs for graduates",
      ],
    },
    online_learning_students: {
      title: "Best Online Learning for Students | Elecalon",
      description:
        "Learn online with Elecalon’s interactive and career-focused courses. Flexible, affordable, and designed to help students succeed.",
      keywords: [
        "online learning platform",
        "best e-learning for students",
        "elearning courses india",
        "career courses online",
        "online education india",
      ],
    },
    career_development_platform: {
      title: "Career Development Platform India | Elecalon",
      description:
        "Elecalon is India’s leading career development platform offering job-oriented courses and skill-based programs for youth.",
      keywords: [
        "career development platform india",
        "skill development programs",
        "career ready courses",
        "job placement institute india",
        "career growth training",
      ],
    },
    job_after_graduation: {
      title: "How to Get Job After Graduation | Elecalon",
      description:
        "Find the best way to get a job after graduation. Elecalon offers skill-building and placement-supported programs for freshers.",
      keywords: [
        "how to get job after graduation",
        "job placement for graduates",
        "training program for freshers",
        "career tips for students",
        "job opportunities after graduation",
      ],
    },
    training_for_freshers: {
      title: "Training Program for Freshers | Elecalon",
      description:
        "Get hands-on training and guaranteed job support with Elecalon’s professional programs designed for fresh graduates.",
      keywords: [
        "training program for freshers",
        "fresher job courses india",
        "career training institute",
        "job oriented fresher training",
        "placement program for freshers",
      ],
    },
    career_ready_courses: {
      title: "Career Ready Courses | Elecalon",
      description:
        "Build in-demand skills with Elecalon’s career-ready courses. Learn IT, marketing, data science, and more with job assistance.",
      keywords: [
        "career ready courses",
        "job oriented training india",
        "career growth courses",
        "professional skill courses",
        "short term placement programs",
      ],
    },
    affordable_career_courses: {
      title: "Affordable Career Courses Online | Elecalon",
      description:
        "Join affordable and high-quality online courses by Elecalon. Learn practical skills and get placement-ready without breaking your budget.",
      keywords: [
        "affordable career courses",
        "low cost online training",
        "budget friendly job courses",
        "cheap online education india",
        "career growth programs online",
      ],
    },
    top_courses_2025: {
      title: "Top Courses for Students 2025 | Elecalon",
      description:
        "Check out the top trending courses for 2025. Elecalon offers modern career programs designed for student success and placement.",
      keywords: [
        "top courses 2025",
        "best courses for students",
        "career programs 2025",
        "job ready skills 2025",
        "future proof courses india",
      ],
    },
    online_education_growth: {
      title: "Online Education for Career Growth | Elecalon",
      description:
        "Advance your career with Elecalon’s online education platform. Learn anywhere, anytime, and achieve professional success.",
      keywords: [
        "online education for career growth",
        "career development online",
        "online learning india",
        "career advancement courses",
        "job oriented online training",
      ],
    },
  };

  const defaultSEO = {
    title: "Courses | Elecalon",
    description:
      "Explore job-oriented courses with placement assistance at Elecalon.",
    keywords: "job oriented courses, placement courses, Elecalon",
  };

  const data = courseMetadata[slug] || defaultSEO;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
  };
}

export default function CoursePage() {
  return <CourseIframe />;
}
