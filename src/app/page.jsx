'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Menu, X, Briefcase, BookOpen, Star, User, DollarSign, Clock, MapPin, Search, ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';

  

// --- Static Data Structure ---

const jobBoxes = [
    { type: 'Actively hiring', title: 'Email Marketing Assistant', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹21,000 – ₹30,000 / month', linkText: 'View details', detailsLink: 'https://www.elecalon.in/apply-now/email-marketing-assistant', imgUrl: 'https://placehold.co/50x50/3b82f6/ffffff?text=E' },
    { type: 'Actively hiring', title: 'Data Verification Assistant', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹18,500 – ₹25,000 / month', linkText: 'View details', detailsLink: 'https://www.elecalon.in/apply-now/data-verification-assistant', imgUrl: 'https://placehold.co/50x50/ef4444/ffffff?text=E' },
    { type: 'Actively hiring', title: 'Web Scraping Executive', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹18,000 – ₹23,000 / month', linkText: 'View details', detailsLink: 'https://www.elecalon.in/apply-now/web-scraping-speciallist', imgUrl: 'https://placehold.co/50x50/9ca3af/ffffff?text=E' },
    { type: 'Actively hiring', title: 'Product Listing Executive', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹18,000 – ₹23,000 / month', linkText: 'View details', detailsLink: 'https://www.elecalon.in/apply-now/product-listing-management-remote', imgUrl: 'https://placehold.co/50x50/6366f1/ffffff?text=E' },
    { type: 'Actively hiring', title: 'Social Media Executive', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹21,500 / month', linkText: 'Apply Now', detailsLink: 'https://www.elecalon.in/apply-now/social-media-ececultive', imgUrl: 'https://placehold.co/50x50/f97316/ffffff?text=E' },
    { type: 'Actively hiring', title: 'Automation Executive', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹17,000 / month', linkText: 'Apply Now', detailsLink: 'https://www.elecalon.in/apply-now/automation-executive', imgUrl: 'https://placehold.co/50x50/06b6d4/ffffff?text=E' },
    { type: 'Actively hiring', title: 'Catalog Coordinator', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹21,000 / month', linkText: 'Apply Now', detailsLink: 'https://www.elecalon.in/apply-now/catalog-coordinator', imgUrl: 'https://placehold.co/50x50/991b1b/ffffff?text=E' },
    { type: 'Actively hiring', title: 'Client Onboarding Intern', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹21,000 / month', linkText: 'Apply Now', detailsLink: 'https://www.elecalon.in/apply-now/client-onboarding-intern', imgUrl: 'https://placehold.co/50x50/10b981/ffffff?text=E' },
    { type: 'Actively hiring', title: 'Marketplace Assistant', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹19,000 / month', linkText: 'Apply Now', detailsLink: 'https://www.elecalon.in/apply-now/marketplace-assistant', imgUrl: 'https://placehold.co/50x50/14b8a6/ffffff?text=E' },
    { type: 'Actively hiring', title: 'Data Entry Executive', company: 'Elecalon Ecom (OPC) Pvt. Ltd.', location: 'Remote', salary: '₹20,000 / month', linkText: 'Apply Now', detailsLink: 'https://www.elecalon.in/apply-now/data-entry-executive', imgUrl: 'https://placehold.co/50x50/a855f7/ffffff?text=E' },
];

const courseCards = [
    { title: 'Full Stack Web Development', duration: '8 Weeks', students: '15,000+', price: '99', rating: 4.9, imgUrl: 'https://placehold.co/300x180/10b981/ffffff?text=FullStack' },
    { title: 'Data Science Bootcamp', duration: '12 Weeks', students: '12,000+', price: '149', rating: 4.7, imgUrl: 'https://placehold.co/300x180/3b82f6/ffffff?text=DataScience' },
    { title: 'Advanced React & Next.js', duration: '4 Weeks', students: '8,000+', price: '79', rating: 4.8, imgUrl: 'https://placehold.co/300x180/ef4444/ffffff?text=NextJS' },
    { title: 'Cloud Engineering with AWS', duration: '6 Weeks', students: '10,000+', price: '119', rating: 4.6, imgUrl: 'https://placehold.co/300x180/f97316/ffffff?text=AWS' },
    { title: 'UX/UI Design Masterclass', duration: '10 Weeks', students: '9,500+', price: '109', rating: 4.9, imgUrl: 'https://placehold.co/300x180/6366f1/ffffff?text=UX/UI' },
    { title: 'Python for Beginners', duration: '3 Weeks', students: '20,000+', price: '49', rating: 4.5, imgUrl: 'https://placehold.co/300x180/14b8a6/ffffff?text=Python' },
];

// --- NEW DATA STRUCTURE FOR PLACEMENT COURSES ---
const placementCourses = [
    { title: 'Full Stack Development', guarantee: 'Placement Guarantee', color: 'bg-green-500', listColor: 'text-green-500', features: ['6 months intensive training', '₹3-10 LPA placement', '1.08L+ opportunities'], link: 'https://example.com/fullstack' },
    { title: 'Financial Modelling', guarantee: 'Internship Guarantee', color: 'bg-indigo-500', listColor: 'text-indigo-500', features: ['4 months course', '₹40,000 total stipend', '7.4K+ opportunities'], link: 'https://example.com/financial' },
    { title: 'HR Management', guarantee: 'Job Guarantee', color: 'bg-pink-500', listColor: 'text-pink-500', features: ['3 months course', '₹3-10 LPA salary', '2.91L+ opportunities'], link: 'https://example.com/hr' },
    { title: 'Digital Marketing', guarantee: 'Job Guarantee', color: 'bg-emerald-500', listColor: 'text-emerald-500', features: ['5 months course', '₹3-10 LPA salary', '6.25L+ opportunities'], link: 'https://example.com/digital' },
    { title: 'UI/UX Design', guarantee: 'Internship Guarantee', color: 'bg-violet-500', listColor: 'text-violet-500', features: ['5 months course', '₹35,000 stipend', '10K+ opportunities'], link: 'https://example.com/uiux' },
    { title: 'Product Management', guarantee: 'Internship Guarantee', color: 'bg-cyan-500', listColor: 'text-cyan-500', features: ['5 months course', '₹35,000 stipend', '31K+ opportunities'], link: 'https://example.com/product' },
    { title: 'Supply Chain Logistics', guarantee: 'Job Guarantee', color: 'bg-emerald-500', listColor: 'text-emerald-500', features: ['2 months course', 'Upto ₹4.5 LPA salary', 'Amazon, Swiggy, Zepio etc.'], link: 'https://example.com/supplychain' },
    { title: 'Banking Sales', guarantee: 'Job Guarantee', color: 'bg-red-500', listColor: 'text-red-500', features: ['2 months course', 'Kotak, Axis, IDFC First etc.', '4.1K+ opportunities'], link: 'https://example.com/banking' },
];

// --- UPDATED TESTIMONIALS DATA ---
const testimonials = [
    { name: 'Amit Joshi', role: 'Placed in IBM', text: 'I was about to give up on my job search when I found Elecalon. Their personalized job recommendations matched me with perfect opportunities I wouldn\'t have found otherwise.', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Priya Gupta', role: 'Placed in Star Health', text: 'Elecalon guided me through the entire process when I had no idea about the corporate world. Their support helped me secure a great job offer.', avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Rahul Sharma', role: 'Placed in Flipkart', text: 'I landed my first internship from Elecalon. This platform has opportunities for every student and is a must-have for anyone looking to build their career.', avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Neha Kapoor', role: 'Placed in Amazon', text: 'Got my dream job at Amazon through Elecalon! I was from a non-tech background but their resources helped me learn the right skills and ace my interviews.', avatarUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'Vikram Patel', role: 'Placed in TCS', text: 'Elecalon\'s career guidance was invaluable. They helped me identify my strengths and match them with the right opportunities in the tech industry.', avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Ananya Reddy', role: 'Placed in Wipro', text: 'The interview preparation materials on Elecalon were exactly what I needed. I could practice real interview questions and gain confidence.', avatarUrl: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: 'Arjun Mehta', role: 'Placed in Infosys', text: 'As a fresher with no experience, I was struggling to get noticed. Elecalon\'s profile-building tools helped me showcase my skills effectively.', avatarUrl: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: 'Divya Nair', role: 'Placed in HCL', text: 'Elecalon\'s skill assessment tests helped me identify my weak areas. I could then focus my learning and eventually land a job at a top IT company.', avatarUrl: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { name: 'Rohit Verma', role: 'Placed in Accenture', text: 'The resume builder on Elecalon is fantastic! It helped me create a professional resume that got me multiple interview calls within weeks.', avatarUrl: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { name: 'Shreya Malhotra', role: 'Placed in Cognizant', text: 'Elecalon\'s mock interview feature was a game-changer for me. Practicing with their AI tool helped me overcome my nervousness.', avatarUrl: 'https://randomuser.me/api/portraits/women/10.jpg' },
];

// --- Reusable Carousel Component with Drag and Dot Logic (omitted for brevity, assume content is the same) ---

const Carousel = ({ items, renderItem, id, autoScrollInterval = 3000, isTestimonialDots = false }) => {
    const containerRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    // Define consistent gap value (24px for Tailwind gap-x-6)
    const GAP_X_PX = 24; 

    const cards = containerRef.current ? Array.from(containerRef.current.children) : [];
    // Calculate card width including the gap for accurate scrolling/snapping
    // Card width for JobBox/CourseCard/PlacementCard is min-w-[280px] or min-w-[320px] + GAP_X_PX
    // Determine card width dynamically or use a fallback based on the component type
    const cardWidth = cards.length > 0 ? cards[0].offsetWidth + GAP_X_PX : 280 + GAP_X_PX; 

    const totalItems = items.length;
    // const totalPages = totalItems; // Not strictly needed

    // Calculate the current active index based on scroll position
    const updateActiveIndex = useCallback(() => {
        if (containerRef.current && cardWidth > 0) {
            const currentScroll = containerRef.current.scrollLeft;
            
            // Determine which card is most visible / centered
            let index = Math.round(currentScroll / cardWidth);

            // Special handling for the non-testimonial carousels on desktop where multiple items are visible
            if (!isTestimonialDots) {
                 index = Math.floor(currentScroll / cardWidth);
            }
            
            setActiveIndex(Math.max(0, Math.min(index, totalItems - 1)));
        }
    }, [cardWidth, totalItems, isTestimonialDots]);

    // Handle manual scroll (for touch/mouse drag)
    const handleScroll = () => {
        updateActiveIndex();
    };

    // Auto-Scroll Logic (only for the hero testimonials and main testimonials)
    const startAutoScroll = useCallback(() => {
        // Only auto-scroll the designated carousels
        if (id !== 'hero-testimonials' && id !== 'testimonial-dots-carousel') return;

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (containerRef.current) {
                const currentScroll = containerRef.current.scrollLeft;
                const nextScroll = currentScroll + cardWidth;
                const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;

                let targetScroll;
                if (nextScroll >= maxScroll) {
                    // Loop back to the start (smoothly)
                    targetScroll = 0;
                } else {
                    targetScroll = currentScroll + cardWidth;
                }

                containerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
            }
        }, autoScrollInterval);
    }, [id, cardWidth, autoScrollInterval]);

    const stopAutoScroll = useCallback(() => {
        clearInterval(intervalRef.current);
        clearTimeout(timeoutRef.current);
    }, []);

    const restartAutoScrollAfterDelay = useCallback(() => {
        stopAutoScroll();
        // Only restart auto-scroll for designated carousels
        if (id === 'hero-testimonials' || id === 'testimonial-dots-carousel') {
             timeoutRef.current = setTimeout(startAutoScroll, 5000); // 5 seconds delay before restarting
        }
    }, [stopAutoScroll, startAutoScroll, id]);


    // Mouse/Touch Drag Handlers
    const startDrag = (e) => {
        const pageX = e.pageX || e.touches?.[0]?.pageX;
        if (!pageX || !containerRef.current) return;

        setIsDown(true);
        containerRef.current.classList.add('active-drag');
        // Subtract the padding of the container to get relative position
        const rect = containerRef.current.getBoundingClientRect();
        setStartX(pageX - rect.left); 
        setScrollLeft(containerRef.current.scrollLeft);
        stopAutoScroll();
    };

    const endDrag = () => {
        setIsDown(false);
        if (containerRef.current) {
            containerRef.current.classList.remove('active-drag');
            // Allow the inertia of native scroll to finish before restarting auto-scroll
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
        const walk = (x - startX) * 1.5; // Drag sensitivity
        containerRef.current.scrollLeft = scrollLeft - walk;
        updateActiveIndex();
    };

    // Dot Click Handler
    const handleDotClick = (index) => {
        stopAutoScroll();
        if (containerRef.current && cardWidth > 0) {
            // Scroll to the exact position of the item (index * cardWidth, where cardWidth includes the gap)
            containerRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
            setActiveIndex(index);
            restartAutoScrollAfterDelay();
        }
    };

    // Effect for setup and cleanup
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
            startAutoScroll();
        }

        return () => {
            stopAutoScroll();
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll, startAutoScroll, stopAutoScroll]);


    // Navigation Buttons
    const scroll = (direction) => {
        stopAutoScroll();
        if (containerRef.current && cardWidth > 0) {
            const currentScroll = containerRef.current.scrollLeft;
            const scrollDistance = cardWidth;
            let targetScroll = currentScroll + (direction === 'next' ? scrollDistance : -scrollDistance);

            // Ensure we don't scroll past boundaries
            const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
            targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

            containerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
            // updateActiveIndex will be called by the 'scroll' event listener
            restartAutoScrollAfterDelay();
        }
    };


    // Determine the number of dots needed. For full carousels, it's total items.
    const dotCount = totalItems;
    const dotsArray = Array.from({ length: dotCount }, (_, i) => i);


    return (
        // Wrapper div for arrow visibility on hover
        <div className={`relative group ${id === 'jobContainer' || id === 'courses-carousel1' || id === 'courses-carousel-placement' ? 'max-w-7xl mx-auto' : ''}`}>
            <div
                id={id}
                ref={containerRef}
                // *** Retained: Added gap-x-6 and responsive padding (px-4) to prevent items sticking to the edge ***
                className="flex overflow-x-scroll no-scrollbar swipe-container touch-pan-x cursor-grab gap-x-6 px-4 md:px-0"
                onMouseDown={startDrag}
                onMouseLeave={endDrag}
                onMouseUp={endDrag}
                onMouseMove={drag}
                onTouchStart={startDrag}
                onTouchEnd={endDrag}
                onTouchMove={drag}
            >
                {/* Custom styling for drag feedback */}
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
                        scroll-snap-type: none; /* Disable snap while dragging */
                    }
                    /* Ensure items snap correctly */
                    .carousel-item-snap {
                        scroll-snap-align: start;
                        flex-shrink: 0;
                    }
                    /* Ensure the parent sections don't apply padding that overlaps the new carousel padding */
                    #jobs > div, #courses-1 > div, #courses-2 > div, #placement-courses > div {
                        padding-left: 0;
                        padding-right: 0;
                    }
                `}</style>

                {items.map((item, index) => (
                    // Card wrapper to ensure flex-shrink and snap works correctly
                    <div key={index} className="carousel-item-snap">
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows for non-hero carousels - Ensuring they are present */}
            {id !== 'hero-testimonials' && (
                <>
                    <button
                        onClick={() => scroll('prev')}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition duration-300 hidden md:block"
                        aria-label="Previous slide"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                        onClick={() => scroll('next')}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition duration-300 hidden md:block"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="w-5 h-5 text-gray-700" />
                    </button>
                </>
            )}


            {/* Dots Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
                {dotsArray.map((_, index) => (
                    <button
                        key={index}
                        // Scroll to the start of the item (index * cardWidth)
                        onClick={() => handleDotClick(index)} 
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            // Check if the current scroll position is close enough to the card's starting position
                            activeIndex === index 
                                ? 'bg-indigo-600'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// --- Reusable Card Components (Updated TestimonialCard) ---
const JobBox = ({ job }) => (
    // Card width fixed to prevent issues with carousel calculation. Using flex-col justify-between for link positioning.
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 min-w-[280px] w-72 md:w-80 border border-gray-100 flex flex-col justify-between">
        
        {/* Badge & Logo (using the company initial 'E' for Elecalon) */}
        <div className="flex justify-between items-start mb-4">
            {/* Actively hiring badge */}
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-700">
                {job.type}
            </span>
            <img 
                src={job.imgUrl} 
                alt={job.company} 
                className="w-10 h-10 rounded-full object-cover shadow-sm" 
                onError={(e) => e.target.src = 'https://placehold.co/40x40/9ca3af/ffffff?text=E'} 
            />
        </div>
        
        {/* Job Details */}
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{job.company}</p>
            
            {/* Location */}
            <div className="flex items-center text-sm text-gray-700 font-medium mb-3">
                <MapPin className="w-4 h-4 mr-1 text-indigo-500" />
                <span>{job.location}</span>
            </div>
            
            {/* Salary - Styled similarly to the original HTML snippet */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mb-5">
                <DollarSign className="w-5 h-5 text-green-600 inline mr-2" />
                <span className="font-bold text-lg text-green-700">{job.salary}</span>
            </div>
        </div>
        
        {/* Link Button - Ensuring the correct text is used */}
        <a 
            href={job.detailsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="job-link w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold shadow-md mt-auto"
        >
            {job.linkText}
        </a>
    </div>
);

const CourseCard = ({ course }) => (
    // Card width fixed to prevent issues with carousel calculation
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 min-w-[280px] w-full md:w-80 overflow-hidden border border-gray-100">
        <img src={course.imgUrl} alt={course.title} className="w-full h-40 object-cover" onError={(e) => e.target.src = 'https://placehold.co/300x160/cccccc/333333?text=Course+Image'} />
        <div className="p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-3">{course.title}</h3>
            <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-indigo-500" />
                    <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                    <User className="w-4 h-4 mr-1 text-indigo-500" />
                    <span>{course.students}</span>
                </div>
            </div>
            {/* <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="text-2xl font-extrabold text-indigo-600">${course.price}</div>
                <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-500 mr-1" />
                    <span className="text-sm font-semibold text-gray-600">{course.rating}</span>
                </div>
            </div> */}
            <div className="pt-4 border-t border-gray-100 border-dashed mt-auto">
            <a 
                href={course.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`w-full text-center inline-block text-white px-5 py-2 rounded-lg transition duration-300 font-semibold shadow-md text-sm bg-blue-600 hover:opacity-90`}
            >
                Know more →
            </a>
        </div>
        </div>
    </div>
);

const TestimonialCard = ({ testimonial }) => (
    // Adjusted width to be slightly larger for better presentation of the new content
    <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 min-w-[320px] w-full md:w-[450px] mx-auto flex flex-col justify-between h-full">
        {/* Quote Icon and Text */}
        <div>
            {/* Removed the Star icon as it wasn't in the new structure */}
            <p className="text-gray-700 text-base italic leading-relaxed mb-6">
                "{testimonial.text}"
            </p>
        </div>

        {/* Profile Info */}
        <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
            <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4 shadow-md"
                onError={(e) => e.target.src = 'https://placehold.co/48x48/9ca3af/ffffff?text=U'}
            />
            <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                {/* Updated role/placement line styling */}
                <p className="text-sm text-indigo-600 font-medium">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

// --- NEW PLACEMENT COURSE CARD COMPONENT ---
const PlacementCourseCard = ({ course }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 min-w-[280px] w-72 md:w-80 overflow-hidden border border-gray-100 p-5 flex flex-col justify-between">
        <div>
            {/* Guarantee Badge */}
            <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${course.color} inline-block mb-4`}>
                ✓ {course.guarantee}
            </span>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">{course.title}</h3>
            
            {/* Feature List */}
            <ul className="space-y-3 mb-6">
                {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600 text-sm">
                        <span className={`w-5 h-5 mr-2 flex-shrink-0 ${course.listColor}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        {/* Link Button */}
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


// --- Main Application Component ---

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State to manage which mobile submenu is open (stores the name of the menu item)
    const [openSubmenu, setOpenSubmenu] = useState(null); 

    // Use a slice of the NEW testimonials array for the hero section
    const heroTestimonials = testimonials.slice(0, 2);

    return (
        <div className="min-h-screen bg-gray-50 font-inter">


            <main>
                {/* Hero Section */}
                <section id="home" className="pt-16 pb-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-indigo-600 font-semibold uppercase tracking-wider mb-2 block">Your Future Starts Now</span>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                                Find Your <span className="text-indigo-600">Dream Career</span> Today
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Explore thousands of job opportunities and premium courses tailored to elevate your professional journey.
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
                                <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-200">
                                    Search Jobs
                                </button>
                            </form>
                            <div className="flex items-center space-x-4">
                                <p className="text-sm font-medium text-gray-700">Trusted by:</p>
                                <div className="flex -space-x-2">
                                    {['G', 'N', 'A'].map((text, i) => (
                                        <img key={i} src={`https://placehold.co/32x32/${['3b82f6', 'ef4444', '9ca3af'][i]}/ffffff?text=${text}`} alt={`Company ${text}`} className="w-8 h-8 rounded-full border-2 border-white" />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">+10k companies</span>
                            </div>
                        </div>

                        {/* Hero Testimonials Carousel */}
                        <div className="relative p-6 bg-indigo-50 rounded-2xl shadow-inner md:ml-12 overflow-hidden">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Success Stories</h3>
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
                        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">Top Job Categories</h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Find opportunities in fast-growing sectors. Scroll and swipe to explore.
                        </p>
                    </div>
                    {/* Carousel is now outside the padded container to use full width and its own padding */}
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
                                    <img src="https://placehold.co/600x400/818cf8/ffffff?text=Professional+Training" alt="Team working" className="w-full h-full object-cover opacity-80" />
                                </div>
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-2xl flex items-center space-x-3">
                                    <Briefcase className="w-8 h-8 text-indigo-600" />
                                    <span className="text-xl font-bold text-indigo-600">95% Success Rate</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose Our Platform?</h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    We provide comprehensive resources, cutting-edge courses, and direct connections to top-tier employers, ensuring your career progression is seamless and rapid.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="p-2 bg-indigo-100 rounded-full mr-4 mt-1">
                                            <Star className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-xl">Verified Jobs</h3>
                                            <p className="text-gray-600 text-base">Every job posting is manually reviewed to ensure quality and legitimacy.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="p-2 bg-indigo-100 rounded-full mr-4 mt-1">
                                            <BookOpen className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-xl">Expert-Led Courses</h3>
                                            <p className="text-gray-600 text-base">Learn from industry veterans with hands-on projects and certifications.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg">
                                    Start Learning Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Carousel 1 */}
                <section id="courses-1" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">Popular Development Courses</h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Master the skills in demand with our most enrolled technology courses.
                        </p>
                    </div>
                    {/* Carousel is now outside the padded container to use full width and its own padding */}
                    <Carousel
                        items={courseCards}
                        renderItem={(course) => <CourseCard course={course} />}
                        id="courses-carousel1"
                        autoScrollInterval={0}
                    />
                </section>
                
                {/* NEW PLACEMENT GUARANTEE SECTION */}
                <section id="courses-2" className="pt-0 pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-1">EIecalon Ecom Private Limited</h2>
                            <p className="text-xl font-semibold text-indigo-600 mt-0">Placement Guarantee Courses</p>
                        </div>
                        {/* Guarantee Banner */}
                        <div className="bg-indigo-600 text-white p-6 rounded-xl mb-12 mx-auto max-w-6xl shadow-xl">
                            <div className="flex flex-wrap justify-center gap-6">
                                <div className="flex items-center text-sm sm:text-base font-medium">
                                    <span className="bg-white text-indigo-600 w-5 h-5 rounded-full flex items-center justify-center mr-2 font-bold flex-shrink-0">✓</span>
                                    Get 100% refund if not hired
                                </div>
                                <div className="flex items-center text-sm sm:text-base font-medium">
                                    <span className="bg-white text-indigo-600 w-5 h-5 rounded-full flex items-center justify-center mr-2 font-bold flex-shrink-0">✓</span>
                                    Become job ready in 3-6 months
                                </div>
                                <div className="flex items-center text-sm sm:text-base font-medium">
                                    <span className="bg-white text-indigo-600 w-5 h-5 rounded-full flex items-center justify-center mr-2 font-bold flex-shrink-0">✓</span>
                                    1000+ hiring partners
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Placement Courses Carousel */}
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
                        {/* New Title and Subtitle */}
                        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">2854+ successful placements - Read their stories</h2>
                        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Go-to platform for students and freshers
                        </p>
                    </div>
                    <Carousel
                        items={testimonials}
                        renderItem={(testimonial) => <TestimonialCard testimonial={testimonial} />}
                        id="testimonial-dots-carousel"
                        autoScrollInterval={5000} // Custom interval for this one
                        isTestimonialDots={true} // Single item per slide
                    />
                </section>
                
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-8">
                        <div className="col-span-2 md:col-span-1">
                            <span className="text-2xl font-extrabold text-indigo-400">Elecalon<span className="text-white"> Ecom</span></span>
                            <p className="text-sm text-gray-400 mt-4">Elevating careers, one step at a time.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {['Jobs', 'Courses', 'Pricing', 'Blog'].map(link => (
                                    <li key={link}><a href={`#${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-indigo-400 transition">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-200 mb-4">Support</h4>
                            <ul className="space-y-2">
                                {['FAQ', 'Help Center', 'Contact Us', 'Privacy Policy'].map(link => (
                                    <li key={link}><a href={`${link.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 hover:text-indigo-400 transition">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="font-semibold text-gray-200 mb-4">Contact</h4>
                            <p className="text-sm text-gray-400"> Af 12 Gallops Arcade, Krishnanagar Patan , Gujarat, India, 384265. </p>
                            <p className="text-sm text-gray-400">elecalonecom@gmail.com</p>
                            <div className="flex space-x-3 mt-4">
                                {/* Placeholder for social media icons */}
                                <a href="#" className="text-gray-400 hover:text-indigo-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.238 2.585 7.893 6.305 9.475v-6.79h-2.31v-2.685h2.31v-2.03c0-2.28 1.365-3.538 3.468-3.538 1.002 0 2.05.178 2.05.178v2.26h-1.146c-1.135 0-1.488.704-1.488 1.428v1.71h2.553l-.407 2.685h-2.146v6.79C19.415 19.893 22 16.238 22 12c0-5.523-4.477-10-10-10z"/></svg></a>
                                <a href="#" className="text-gray-400 hover:text-indigo-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.28 6.746c-.615.272-1.272.454-1.96.536.708-.425 1.256-1.096 1.51-1.9-1.295.767-2.736 1.32-4.267 1.616-1.22-.84-2.956-1.36-4.795-1.36-3.64 0-6.59 2.95-6.59 6.59 0 .515.058 1.018.17 1.498-5.474-.275-10.32-2.895-13.565-6.878-.567.97-.893 2.1-.893 3.308 0 2.287 1.168 4.295 2.943 5.475-.54-.015-1.045-.165-1.487-.41v.08c0 3.2 2.275 5.877 5.29 6.488-.553.15-1.13.23-1.724.23-.42 0-.825-.04-1.22-.115 1.51 4.16 5.88 7.195 11.07 7.275-2.26 1.77-5.11 2.825-8.203 2.825-.536 0-1.055-.03-1.56-.095C2.686 21.05 6.07 22 9.61 22c11.53 0 17.84-9.55 17.84-17.84 0-.272-.008-.54-.016-.807.828-.6 1.547-1.35 2.115-2.22z"/></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-sm text-gray-500">
                        &copy; 2024 Elecalon Ecom. All rights reserved. Designed for the immersive editor.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;