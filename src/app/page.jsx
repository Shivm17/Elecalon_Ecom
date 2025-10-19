"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Menu,
  X,
  Briefcase,
  BookOpen,
  Star,
  User,
  DollarSign,
  Clock,
  MapPin,
  Search,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import Header from "./components/Header";

// --- Navigation Items (Shared between Header and Footer) ---
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  {
    name: "Web Scraping Services",
    href: "/webScrap",
  },
  {
    name: "Apply Now",
    href: "/ApplyNow",
    submenu: [
      { name: "Data entry Executive", href: "/Job/data_entry" },
      { name: "Automation executive", href: "/Job/automation" },
      {
        name: "Product Listing & Management (Remote)",
        href: "/Job/product_listing",
      },
      { name: "Email Marketing Assistant", href: "/Job/email_marketing" },
      { name: "Web Scraping Executive", href: "/Job/web_scrap" },
      { name: "Data Verification Assistant", href: "/Job/data_verification" },
      { name: "Marketplace Assistant", href: "/Job/market_place" },
      { name: "Client Onboarding Intern", href: "/Job/client_onboard" },
      { name: "Catalog Coordinator", href: "/Job/catalog" },
      { name: "Social Media Executive", href: "/Job/social_media" },
    ],
  },
  {
    name: "Courses",
    href: "/cources/all_courses",
    submenu: [
      {
        name: "Online Ethical Hacking",
        href: "/cources/online_ethical_hacking",
      },
      { name: "Full Stack Development", href: "/cources/full-stake" },
    ],
  },
  { name: "About Us", href: "#about" },
  {
    name: "T&C",
    href: "/terms&condition/terms&condition",
    submenu: [
      { name: "Contact Us", href: "/terms&condition/contact-us" },
      {
        name: "Cancel and Refund Policy",
        href: "/terms&condition/cancle-refund-policy",
      },
      {
        name: "Shipping And Delivery",
        href: "/terms&condition/shiping_delivery",
      },
      { name: "Privacy Policy", href: "/terms&condition/privacy-policy" },
    ],
  },
];

// --- Static Data Structure ---
const jobBoxes = [
  {
    type: "Actively hiring",
    title: "Email Marketing Assistant",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹21,000 – ₹30,000 / month",
    linkText: "View details",
    detailsLink: "/Job/market_place",
    imgUrl: "https://placehold.co/50x50/3b82f6/ffffff?text=E",
  },
  {
    type: "Actively hiring",
    title: "Data Verification Assistant",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹18,500 – ₹25,000 / month",
    linkText: "View details",
    detailsLink: "/Job/data_verification",
    imgUrl: "https://placehold.co/50x50/ef4444/ffffff?text=E",
  },
  {
    type: "Actively hiring",
    title: "Web Scraping Executive",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹18,000 – ₹23,000 / month",
    linkText: "View details",
    detailsLink: "/Job/web_scrap",
    imgUrl: "https://placehold.co/50x50/9ca3af/ffffff?text=E",
  },
  {
    type: "Actively hiring",
    title: "Product Listing Executive",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹18,000 – ₹23,000 / month",
    linkText: "View details",
    detailsLink: "/Job/product_listing",
    imgUrl: "https://placehold.co/50x50/6366f1/ffffff?text=E",
  },
  {
    type: "Actively hiring",
    title: "Social Media Executive",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹21,500 / month",
    linkText: "Apply Now",
    detailsLink: "/Job/social_media",
    imgUrl: "https://placehold.co/50x50/f97316/ffffff?text=E",
  },
  {
    type: "Actively hiring",
    title: "Automation Executive",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹17,000 / month",
    linkText: "Apply Now",
    detailsLink: "/Job/automation",
    imgUrl: "https://placehold.co/50x50/06b6d4/ffffff?text=E",
  },
  {
    type: "Actively hiring",
    title: "Catalog Coordinator",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹21,000 / month",
    linkText: "Apply Now",
    detailsLink: "/Job/catalog",
    imgUrl: "https://placehold.co/50x50/991b1b/ffffff?text=E",
  },
  {
    type: "Actively hiring",
    title: "Client Onboarding Intern",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹21,000 / month",
    linkText: "Apply Now",
    detailsLink: "/Job/client_onboard",
    imgUrl: "https://placehold.co/50x50/10b981/ffffff?text=E",
  },
  {
    type: "Actively hiring",
    title: "Marketplace Assistant",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹19,000 / month",
    linkText: "Apply Now",
    detailsLink: "/Job/market_place",
    imgUrl: "https://placehold.co/50x50/14b8a6/ffffff?text=E",
  },
  {
    type: "Actively hiring",
    title: "Data Entry Executive",
    company: "Elecalon Ecom (OPC) Pvt. Ltd.",
    location: "Remote",
    salary: "₹20,000 / month",
    linkText: "Apply Now",
    detailsLink: "/Job/data_entry",
    imgUrl: "https://placehold.co/50x50/a855f7/ffffff?text=E",
  },
];

const courseCards = [
  {
    id: 1,
    title: "Modern JavaScript Masterclass",
    duration: "40 hours",
    students: "12,500 enrolled",
    imgUrl: "/Gemini_Generated_Image_7fqwjr7fqwjr7fqw.png",
    link: "#js",
    themeColor: "text-purple-600",
    buttonClass: "bg-purple-600 hover:bg-purple-700",
  },
  {
    id: 2,
    title: "React & Next.js Development",
    duration: "65 hours",
    students: "9,800 enrolled",
    imgUrl: "/Gemini_Generated_Image_7uft9w7uft9w7uft.png",
    link: "#react",
    themeColor: "text-sky-500",
    buttonClass: "bg-sky-600 hover:bg-sky-700",
  },
  {
    id: 3,
    title: "AWS Certified Developer - Associate",
    duration: "50 hours",
    students: "15,200 enrolled",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yeVqYt3l8EHC5HpqOrF8yT13ssL_nJGjDQ&s",
    link: "#aws",
    themeColor: "text-amber-500",
    buttonClass: "bg-amber-600 hover:bg-amber-700",
  },
  {
    id: 4,
    title: "Advanced Python for Data Science",
    duration: "70 hours",
    students: "11,000 enrolled",
    imgUrl:
      "https://img.freepik.com/free-vector/data-concept-illustration-idea-collecting-analysing-using_613284-1574.jpg",
    link: "#python",
    themeColor: "text-emerald-500",
    buttonClass: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    id: 5,
    title: "UI/UX Design with Figma",
    duration: "30 hours",
    students: "8,900 enrolled",
    imgUrl:
      "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69534.jpg",
    link: "#figma",
    themeColor: "text-pink-500",
    buttonClass: "bg-pink-600 hover:bg-pink-700",
  },
];

const placementCourses = [
  {
    title: "Full Stack Development",
    guarantee: "Placement Guarantee",
    color: "bg-green-500",
    listColor: "text-green-500",
    features: [
      "6 months intensive training",
      "₹3-10 LPA placement",
      "1.08L+ opportunities",
    ],
    link: "https://example.com/fullstack",
  },
  {
    title: "Financial Modelling",
    guarantee: "Internship Guarantee",
    color: "bg-indigo-500",
    listColor: "text-indigo-500",
    features: [
      "4 months course",
      "₹40,000 total stipend",
      "7.4K+ opportunities",
    ],
    link: "https://example.com/financial",
  },
  {
    title: "HR Management",
    guarantee: "Job Guarantee",
    color: "bg-pink-500",
    listColor: "text-pink-500",
    features: ["3 months course", "₹3-10 LPA salary", "2.91L+ opportunities"],
    link: "https://example.com/hr",
  },
  {
    title: "Digital Marketing",
    guarantee: "Job Guarantee",
    color: "bg-emerald-500",
    listColor: "text-emerald-500",
    features: ["5 months course", "₹3-10 LPA salary", "6.25L+ opportunities"],
    link: "https://example.com/digital",
  },
  {
    title: "UI/UX Design",
    guarantee: "Internship Guarantee",
    color: "bg-violet-500",
    listColor: "text-violet-500",
    features: ["5 months course", "₹35,000 stipend", "10K+ opportunities"],
    link: "https://example.com/uiux",
  },
  {
    title: "Product Management",
    guarantee: "Internship Guarantee",
    color: "bg-cyan-500",
    listColor: "text-cyan-500",
    features: ["5 months course", "₹35,000 stipend", "31K+ opportunities"],
    link: "https://example.com/product",
  },
  {
    title: "Supply Chain Logistics",
    guarantee: "Job Guarantee",
    color: "bg-emerald-500",
    listColor: "text-emerald-500",
    features: [
      "2 months course",
      "Upto ₹4.5 LPA salary",
      "Amazon, Swiggy, Zepio etc.",
    ],
    link: "https://example.com/supplychain",
  },
  {
    title: "Banking Sales",
    guarantee: "Job Guarantee",
    color: "bg-red-500",
    listColor: "text-red-500",
    features: [
      "2 months course",
      "Kotak, Axis, IDFC First etc.",
      "4.1K+ opportunities",
    ],
    link: "https://example.com/banking",
  },
];

const testimonials = [
  {
    name: "Amit Joshi",
    role: "Placed in IBM",
    text: "I was about to give up on my job search when I found Elecalon. Their personalized job recommendations matched me with perfect opportunities I wouldn't have found otherwise.",
    avatarUrl:
      "https://img.freepik.com/free-photo/smiley-man-posing-medium-shot_23-2149915893.jpg",
  },
  {
    name: "Priya Gupta",
    role: "Placed in Star Health",
    text: "Elecalon guided me through the entire process when I had no idea about the corporate world. Their support helped me secure a great job offer.",
    avatarUrl:
      "https://img.freepik.com/free-photo/woman_53876-71214.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Placed in Flipkart",
    text: "I landed my first internship from Elecalon. This platform has opportunities for every student and is a must-have for anyone looking to build their career.",
    avatarUrl:
      "https://img.freepik.com/free-photo/indian-business-man-with-crossed-arm-dark-wall_231208-2668.jpg",
  },
  {
    name: "Neha Kapoor",
    role: "Placed in Amazon",
    text: "Got my dream job at Amazon through Elecalon! I was from a non-tech background but their resources helped me learn the right skills and ace my interviews.",
    avatarUrl:
      "https://img.freepik.com/free-photo/happy-pretty-young-woman-posing-camera-park_1262-20239.jpg",
  },
  {
    name: "Vikram Patel",
    role: "Placed in TCS",
    text: "Elecalon's career guidance was invaluable. They helped me identify my strengths and match them with the right opportunities in the tech industry.",
    avatarUrl:
      "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg",
  },
  {
    name: "Ananya Reddy",
    role: "Placed in Wipro",
    text: "The interview preparation materials on Elecalon were exactly what I needed. I could practice real interview questions and gain confidence.",
    avatarUrl:
      "https://img.freepik.com/free-photo/close-up-portrait-indian-hindu-girl-traditional-violet-saree-posed-street_627829-12971.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Placed in Infosys",
    text: "As a fresher with no experience, I was struggling to get noticed. Elecalon's profile-building tools helped me showcase my skills effectively.",
    avatarUrl:
      "https://img.freepik.com/free-photo/front-view-indian-man-posing-studio_23-2150692695.jpg",
  },
  {
    name: "Divya Nair",
    role: "Placed in HCL",
    text: "Elecalon's skill assessment tests helped me identify my weak areas. I could then focus my learning and eventually land a job at a top IT company.",
    avatarUrl:
      "https://img.freepik.com/free-photo/close-up-cheerful-young-woman-looking-camera_1262-4777.jpg",
  },
  {
    name: "Rohit Verma",
    role: "Placed in Accenture",
    text: "The resume builder on Elecalon is fantastic! It helped me create a professional resume that got me multiple interview calls within weeks.",
    avatarUrl:
      "https://img.freepik.com/free-photo/portrait-young-indian-businessman-student-sitting-with-pen_1262-17490.jpg",
  },
  {
    name: "Shreya Malhotra",
    role: "Placed in Cognizant",
    text: "Elecalon's mock interview feature was a game-changer for me. Practicing with their AI tool helped me overcome my nervousness.",
    avatarUrl:
      "https://img.freepik.com/free-photo/young-girl-smiling-close-up_1187-1999.jpg",
  },
];

// --- Reusable Link Component ---
const NavLink = ({ href, children, className = "", onClick }) => {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

// --- Carousel Component ---
const Carousel = ({
  items,
  renderItem,
  id,
  autoScrollInterval = 3000,
  isTestimonialDots = false,
}) => {
  const containerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const GAP_X_PX = 24;

  const cards = containerRef.current
    ? Array.from(containerRef.current.children)
    : [];
  const cardWidth =
    cards.length > 0 ? cards[0].offsetWidth + GAP_X_PX : 280 + GAP_X_PX;

  const totalItems = items.length;

  const updateActiveIndex = useCallback(() => {
    if (containerRef.current && cardWidth > 0) {
      const currentScroll = containerRef.current.scrollLeft;
      let index = Math.round(currentScroll / cardWidth);
      if (!isTestimonialDots) {
        index = Math.floor(currentScroll / cardWidth);
      }
      setActiveIndex(Math.max(0, Math.min(index, totalItems - 1)));
    }
  }, [cardWidth, totalItems, isTestimonialDots]);

  const handleScroll = () => {
    updateActiveIndex();
  };

  const startAutoScroll = useCallback(() => {
    if (id !== "hero-testimonials" && id !== "testimonial-dots-carousel")
      return;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (containerRef.current) {
        const currentScroll = containerRef.current.scrollLeft;
        const nextScroll = currentScroll + cardWidth;
        const maxScroll =
          containerRef.current.scrollWidth - containerRef.current.clientWidth;

        let targetScroll;
        if (nextScroll >= maxScroll) {
          targetScroll = 0;
        } else {
          targetScroll = currentScroll + cardWidth;
        }

        containerRef.current.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    }, autoScrollInterval);
  }, [id, cardWidth, autoScrollInterval]);

  const stopAutoScroll = useCallback(() => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
  }, []);

  const restartAutoScrollAfterDelay = useCallback(() => {
    stopAutoScroll();
    if (id === "hero-testimonials" || id === "testimonial-dots-carousel") {
      timeoutRef.current = setTimeout(startAutoScroll, 5000);
    }
  }, [stopAutoScroll, startAutoScroll, id]);

  const startDrag = (e) => {
    const pageX = e.pageX || e.touches?.[0]?.pageX;
    if (!pageX || !containerRef.current) return;

    setIsDown(true);
    containerRef.current.classList.add("active-drag");
    const rect = containerRef.current.getBoundingClientRect();
    setStartX(pageX - rect.left);
    setScrollLeft(containerRef.current.scrollLeft);
    stopAutoScroll();
  };

  const endDrag = () => {
    setIsDown(false);
    if (containerRef.current) {
      containerRef.current.classList.remove("active-drag");
      restartAutoScrollAfterDelay();
    }
  };

  const drag = (e) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const pageX = e.pageX || e.touches?.[0]?.pageX;
    if (!pageX) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = pageX - rect.left;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
    updateActiveIndex();
  };

  const handleDotClick = (index) => {
    stopAutoScroll();
    if (containerRef.current && cardWidth > 0) {
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
      restartAutoScrollAfterDelay();
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      startAutoScroll();
    }

    return () => {
      stopAutoScroll();
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll, startAutoScroll, stopAutoScroll]);

  const scroll = (direction) => {
    stopAutoScroll();
    if (containerRef.current && cardWidth > 0) {
      const currentScroll = containerRef.current.scrollLeft;
      const scrollDistance = cardWidth;
      let targetScroll =
        currentScroll +
        (direction === "next" ? scrollDistance : -scrollDistance);

      const maxScroll =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

      containerRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
      restartAutoScrollAfterDelay();
    }
  };

  const dotCount = totalItems;
  const dotsArray = Array.from({ length: dotCount }, (_, i) => i);

  return (
    <div
      className={`relative group ${
        id === "jobContainer" ||
        id === "courses-carousel1" ||
        id === "courses-carousel-placement"
          ? "max-w-7xl mx-auto"
          : ""
      }`}
    >
      <div
        id={id}
        ref={containerRef}
        className="flex overflow-x-scroll no-scrollbar swipe-container touch-pan-x cursor-grab gap-x-6 px-4 md:px-0"
        onMouseDown={startDrag}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
        onMouseMove={drag}
        onTouchStart={startDrag}
        onTouchEnd={endDrag}
        onTouchMove={drag}
      >
        <style jsx="true">{`
          .swipe-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
            scroll-snap-type: x mandatory;
          }
          .swipe-container::-webkit-scrollbar {
            display: none;
          }
          .active-drag {
            cursor: grabbing;
            scroll-snap-type: none;
          }
          .carousel-item-snap {
            scroll-snap-align: start;
            flex-shrink: 0;
          }
        `}</style>

        {items.map((item, index) => (
          <div key={index} className="carousel-item-snap">
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {id !== "hero-testimonials" && (
        <>
          <button
            onClick={() => scroll("prev")}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition duration-300 hidden md:block"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("next")}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition duration-300 hidden md:block"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </>
      )}

      <div className="flex justify-center mt-6 space-x-2">
        {dotsArray.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeIndex === index
                ? "bg-indigo-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Card Components ---
const JobBox = ({ job }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 min-w-[280px] w-72 md:w-80 border border-gray-100 flex flex-col justify-between">
    <div className="flex justify-between items-start mb-4">
      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-700">
        {job.type}
      </span>
      <img
        src={job.imgUrl}
        alt={job.company}
        className="w-10 h-10 rounded-full object-cover shadow-sm"
        onError={(e) =>
          (e.target.src = "https://placehold.co/40x40/9ca3af/ffffff?text=E")
        }
      />
    </div>

    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
      <p className="text-sm text-gray-500 mb-1">{job.company}</p>

      <div className="flex items-center text-sm text-gray-700 font-medium mb-3">
        <MapPin className="w-4 h-4 mr-1 text-indigo-500" />
        <span>{job.location}</span>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mb-5">
        <span className="font-bold text-lg text-gray-700">{job.salary}</span>
      </div>
    </div>

    <a
      href={job.detailsLink}
      rel="noopener noreferrer"
      className="job-link w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold shadow-md mt-auto"
    >
      {job.linkText}
    </a>
  </div>
);

const CourseCard = ({ course }) => (
  <div className="flex-shrink-0 min-w-[280px] w-[90vw] sm:w-[320px] md:w-80 h-full">
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-500 ease-in-out h-full flex flex-col border border-gray-100">
      <div className="relative h-44 overflow-hidden">
        <img
          src={course.imgUrl}
          alt={course.title}
          className="w-full h-full object-cover transition duration-500 group-hover:opacity-90"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/320x176/6366f1/ffffff?text=Course+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-gray-900 mb-2 leading-snug">
          {course.title}
        </h3>

        <div className="flex items-center text-sm text-gray-500 mb-5 space-x-6">
          <div className="flex items-center font-medium">
            <Clock className={`w-4 h-4 mr-2 ${course.themeColor}`} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center font-medium">
            <User className={`w-4 h-4 mr-2 ${course.themeColor}`} />
            <span>{course.students}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full text-center inline-flex justify-center items-center text-white px-6 py-3 rounded-xl transition duration-300 font-bold shadow-lg ${course.buttonClass} transform active:scale-95`}
          >
            Enroll Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-xl border border-gray-100 w-[calc(100vw-3rem)] max-w-[340px] sm:max-w-[380px] md:max-w-[450px] mx-auto flex flex-col justify-between h-full">
    <div>
      <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-4 sm:mb-6">
        "{testimonial.text}"
      </p>
    </div>

    <div className="flex items-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
      <img
        src={testimonial.avatarUrl}
        alt={testimonial.name}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 shadow-md flex-shrink-0"
        onError={(e) =>
          (e.target.src = "https://placehold.co/48x48/9ca3af/ffffff?text=U")
        }
      />
      <div className="min-w-0">
        <p className="font-bold text-gray-800 text-sm sm:text-base truncate">
          {testimonial.name}
        </p>
        <p className="text-xs sm:text-sm text-indigo-600 font-medium truncate">
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

const PlacementCourseCard = ({ course }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 min-w-[280px] w-72 md:w-80 overflow-hidden border border-gray-100 p-5 flex flex-col justify-between">
    <div>
      <span
        className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${course.color} inline-block mb-4`}
      >
        ✓ {course.guarantee}
      </span>

      <h3 className="text-xl font-bold text-gray-800 mb-4">{course.title}</h3>

      <ul className="space-y-3 mb-6">
        {course.features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-600 text-sm">
            <span className={`w-5 h-5 mr-2 flex-shrink-0 ${course.listColor}`}>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="pt-4 border-t border-gray-100 border-dashed mt-auto">
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full text-center inline-block text-white px-5 py-2 rounded-lg transition duration-300 font-semibold shadow-md text-sm ${course.color} hover:opacity-90`}
      >
        Know more →
      </a>
    </div>
  </div>
);

// --- Header Component ---


// --- Main Application Component ---
const App = () => {
  const heroTestimonials = testimonials.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* <Header /> */}

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-16 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-indigo-600 font-semibold uppercase tracking-wider mb-2 block">
                Your Future Starts Now
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Find Your <span className="text-indigo-600">Dream Career</span>{" "}
                Today
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Explore thousands of job opportunities and premium courses
                tailored to elevate your professional journey.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search job title or keyword..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-200"
                >
                  Search Jobs
                </button>
              </form>
              <div className="flex items-center space-x-4">
                <p className="text-sm font-medium text-gray-700">
                  Trusted by:
                </p>
                <div className="flex -space-x-2">
                  {["G", "N", "A"].map((text, i) => (
                    <img
                      key={i}
                      src={`https://placehold.co/32x32/${
                        ["3b82f6", "ef4444", "9ca3af"][i]
                      }/ffffff?text=${text}`}
                      alt={`Company ${text}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">+10k companies</span>
              </div>
            </div>

            <div className="relative p-6 bg-indigo-50 rounded-2xl shadow-inner md:ml-12 overflow-hidden">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Success Stories
              </h3>
              <Carousel
                items={heroTestimonials}
                renderItem={(item) => <TestimonialCard testimonial={item} />}
                id="hero-testimonials"
                autoScrollInterval={4000}
                isTestimonialDots={true}
              />
            </div>
          </div>
        </section>

        {/* Job Categories Section */}
        <section id="jobs" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
              Top Job Categories
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Find opportunities in fast-growing sectors. Scroll and swipe to
              explore.
            </p>
          </div>
          <Carousel
            items={jobBoxes}
            renderItem={(job) => <JobBox job={job} />}
            id="jobContainer"
            autoScrollInterval={0}
          />
        </section>

        {/* Why Choose Us / About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-full h-80 bg-indigo-100 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="/Gemini_Generated_Image_qbps7yqbps7yqbps.png"
                    alt="Team working"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-2xl flex items-center space-x-3">
                  <Briefcase className="w-8 h-8 text-indigo-600" />
                  <span className="text-xl font-bold text-indigo-600">
                    95% Success Rate
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                  Why Choose Our Platform?
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  We provide comprehensive resources, cutting-edge courses, and
                  direct connections to top-tier employers, ensuring your
                  career progression is seamless and rapid.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-full mr-4 mt-1">
                      <Star className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xl">
                        Verified Jobs
                      </h3>
                      <p className="text-gray-600 text-base">
                        Every job posting is manually reviewed to ensure quality
                        and legitimacy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-full mr-4 mt-1">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-xl">
                        Expert-Led Courses
                      </h3>
                      <p className="text-gray-600 text-base">
                        Learn from industry veterans with hands-on projects and
                        certifications.
                      </p>
                    </div>
                  </div>
                </div>
                <a href="/ApplyNow">
                  <button className="mt-8 bg-indigo-600 cursor-pointer text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg">
                    Start Learning Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Course Carousel 1 */}
        <section id="courses-1" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-4 tracking-tight">
              Popular Development Courses
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Master the skills in demand. Explore our most enrolled, job-ready
              technology courses for 2024.
            </p>
          </div>
          <Carousel
            items={courseCards}
            renderItem={(course) => <CourseCard course={course} />}
            id="courses-carousel1"
            autoScrollInterval={0}
          />

          <div className="mt-8 text-center text-gray-500 text-sm md:hidden">
            ← Scroll horizontally to see more →
          </div>
        </section>

        {/* Placement Guarantee Section */}
        <section id="courses-2" className="pt-0 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-1">
                Elecalon Ecom Private Limited
              </h2>
              <p className="text-xl font-semibold text-indigo-600 mt-0">
                Placement Guarantee Courses
              </p>
            </div>
            <div className="bg-indigo-600 text-white p-6 rounded-xl mb-12 mx-auto max-w-6xl shadow-xl">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center text-sm sm:text-base font-medium">
                  <span className="bg-white text-indigo-600 w-5 h-5 rounded-full flex items-center justify-center mr-2 font-bold flex-shrink-0">
                    ✓
                  </span>
                  Get 100% refund if not hired
                </div>
                <div className="flex items-center text-sm sm:text-base font-medium">
                  <span className="bg-white text-indigo-600 w-5 h-5 rounded-full flex items-center justify-center mr-2 font-bold flex-shrink-0">
                    ✓
                  </span>
                  Become job ready in 3-6 months
                </div>
                <div className="flex items-center text-sm sm:text-base font-medium">
                  <span className="bg-white text-indigo-600 w-5 h-5 rounded-full flex items-center justify-center mr-2 font-bold flex-shrink-0">
                    ✓
                  </span>
                  1000+ hiring partners
                </div>
              </div>
            </div>
          </div>

          <Carousel
            items={placementCourses}
            renderItem={(course) => <PlacementCourseCard course={course} />}
            id="courses-carousel-placement"
            autoScrollInterval={0}
          />
        </section>

        {/* Main Testimonials Section */}
        <section id="testimonials" className="py-20 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
              2854+ successful placements - Read their stories
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Go-to platform for students and freshers
            </p>
          </div>
          <Carousel
            items={testimonials}
            renderItem={(testimonial) => (
              <TestimonialCard testimonial={testimonial} />
            )}
            id="testimonial-dots-carousel"
            autoScrollInterval={5000}
            isTestimonialDots={true}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <a href="/">
                <span className="text-2xl font-extrabold text-indigo-400 cursor-pointer">
                  Elecalon<span className="text-white"> Ecom</span>
                </span>
              </a>
              <p className="text-sm text-gray-400 mt-4">
                Elevating careers, one step at a time.
              </p>
            </div>

            {/* Quick Links - Main Navigation */}
            <div>
              <h4 className="font-semibold text-gray-200 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_ITEMS.filter((item) => !item.submenu).map((item) => (
                  <li key={item.name}>
                    <NavLink
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-indigo-400 transition"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply For Jobs - From Apply Now Submenu */}
            <div>
              <h4 className="font-semibold text-gray-200 mb-4">
                Apply For Jobs
              </h4>
              <ul className="space-y-2">
                {NAV_ITEMS.find((item) => item.name === "Apply Now")
                  ?.submenu?.slice(0, 5)
                  .map((subItem) => (
                    <li key={subItem.name}>
                      <NavLink
                        href={subItem.href}
                        className="text-sm text-gray-400 hover:text-indigo-400 transition"
                      >
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Courses - From Courses Submenu */}
            <div>
              <h4 className="font-semibold text-gray-200 mb-4">Our Courses</h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    href={
                      NAV_ITEMS.find((item) => item.name === "Courses")?.href ||
                      "/cources/all_courses"
                    }
                    className="text-sm text-gray-400 hover:text-indigo-400 transition"
                  >
                    All Courses
                  </NavLink>
                </li>
                {NAV_ITEMS.find((item) => item.name === "Courses")?.submenu?.map(
                  (subItem) => (
                    <li key={subItem.name}>
                      <NavLink
                        href={subItem.href}
                        className="text-sm text-gray-400 hover:text-indigo-400 transition"
                      >
                        {subItem.name}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legal & Support - From T&C Submenu */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-gray-200 mb-4">
                Legal & Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    href={
                      NAV_ITEMS.find((item) => item.name === "T&C")?.href ||
                      "/terms&condition/terms&condition"
                    }
                    className="text-sm text-gray-400 hover:text-indigo-400 transition"
                  >
                    Terms & Conditions
                  </NavLink>
                </li>
                {NAV_ITEMS.find((item) => item.name === "T&C")?.submenu?.map(
                  (subItem) => (
                    <li key={subItem.name}>
                      <NavLink
                        href={subItem.href}
                        className="text-sm text-gray-400 hover:text-indigo-400 transition"
                      >
                        {subItem.name}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Section - Contact & Copyright */}
          <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-semibold text-gray-200 mb-2">Contact Us</h4>
              <p className="text-sm text-gray-400">
                Af 12 Gallops Arcade, Krishnanagar Patan, Gujarat, India,
                384265
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Email: elecalonecom@gmail.com
              </p>
              <div className="flex space-x-3 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.238 2.585 7.893 6.305 9.475v-6.79h-2.31v-2.685h2.31v-2.03c0-2.28 1.365-3.538 3.468-3.538 1.002 0 2.05.178 2.05.178v2.26h-1.146c-1.135 0-1.488.704-1.488 1.428v1.71h2.553l-.407 2.685h-2.146v6.79C19.415 19.893 22 16.238 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.28 6.746c-.615.272-1.272.454-1.96.536.708-.425 1.256-1.096 1.51-1.9-1.295.767-2.736 1.32-4.267 1.616-1.22-.84-2.956-1.36-4.795-1.36-3.64 0-6.59 2.95-6.59 6.59 0 .515.058 1.018.17 1.498-5.474-.275-10.32-2.895-13.565-6.878-.567.97-.893 2.1-.893 3.308 0 2.287 1.168 4.295 2.943 5.475-.54-.015-1.045-.165-1.487-.41v.08c0 3.2 2.275 5.877 5.29 6.488-.553.15-1.13.23-1.724.23-.42 0-.825-.04-1.22-.115 1.51 4.16 5.88 7.195 11.07 7.275-2.26 1.77-5.11 2.825-8.203 2.825-.536 0-1.055-.03-1.56-.095C2.686 21.05 6.07 22 9.61 22c11.53 0 17.84-9.55 17.84-17.84 0-.272-.008-.54-.016-.807.828-.6 1.547-1.35 2.115-2.22z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">
                &copy; 2024 Elecalon Ecom. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;