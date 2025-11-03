"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X, ChevronDown } from "lucide-react";

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/Blogs" },
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
      { name: "Product Listing & Management (Remote) ", href: "/Job/product_listing" },
      { name: "Email Marketing Assistant", href: "/Job/email_marketing" },
      { name: "Web Scraping Executive ", href: "/Job/web_scrap" },
      { name: "Data Verification Assistant ", href: "/Job/data_verification" },
      { name: "Marketplace Assistant", href: "/Job/market_place" },
      { name: "Client Onboarding Intern ", href: "/Job/client_onboard" },
      { name: "Catalog Coordinator", href: "/Job/catalog" },
      { name: "Social Media Executive", href: "/Job/social_media" },
    ],
  },
  {
    name: "Courses",
    href: "/courses/all_courses",
    submenu: [
      { name: "Online Ethical Hacking", href: "/courses/online_ethical_hacking" },
      { name: "Full Stack Development", href: "/courses/full-stake" },
      { name: "JavaScript Master Course", href: "/courses/javascript_master" },
      { name: "React.JS & Next.JS Course", href: "/courses/react_nextjs" },
      { name: "AWS Certified Developer ", href: "/courses/amazon" },
      { name: "Advanced Python for Data Science", href: "/courses/python_course" },
      { name: "UI/UX Design with Figma", href: "/courses/ui_ux_course" },
    ],
  },
  { name: "About Us", href: "#about" },
  {
    name: "T&C",
    href: "/terms&condition/terms&condition",
    submenu: [
      { name: "Contact-US", href: "/terms&condition/contact-us" },
      { name: "Cancle And Refund Policy ", href: "/terms&condition/cancle-refund-policy" },
      { name: "Shiping And Delivery ", href: "/terms&condition/shiping_delivery" },
      { name: "Privacy Policy", href: "/terms&condition/privacy-policy" },
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href) => {
    if (!mounted || !pathname) return false;
    if (!href || href.startsWith("#")) return false;
    
    // Exact match
    if (pathname === href) return true;
    
    // For parent routes with children (like /courses or /terms&condition)
    // Only match if pathname starts with href followed by /
    if (pathname.startsWith(href + "/")) return true;
    
    return false;
  };

  const hasActiveSubmenu = (submenu) => {
    if (!mounted || !submenu || !pathname) return false;
    return submenu.some((subItem) => !subItem.href.startsWith("#") && isActive(subItem.href));
  };

  // Get className strings
  const getNavLinkClass = (href, submenu) => {
    const baseClass = "text-gray-600 hover:text-indigo-600 transition duration-150 font-medium flex items-center py-2";
    const activeClass = "text-indigo-600 font-semibold";
    
    if (!mounted) return baseClass;
    
    const shouldBeActive = isActive(href) || hasActiveSubmenu(submenu);
    return shouldBeActive ? `${baseClass} ${activeClass}` : baseClass;
  };

  const getSubmenuLinkClass = (href) => {
    const baseClass = "block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-150";
    const activeClass = "bg-indigo-50 text-indigo-600 font-semibold";
    
    if (!mounted) return baseClass;
    
    return isActive(href) ? `${baseClass} ${activeClass}` : baseClass;
  };

  const getMobileNavLinkClass = (href) => {
    const baseClass = "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition";
    const activeClass = "text-indigo-600 bg-indigo-50 font-semibold";
    const inactiveClass = "text-gray-700";
    
    if (!mounted) return `${baseClass} ${inactiveClass}`;
    
    return isActive(href) ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  };

  const getMobileSubmenuContainerClass = (submenu) => {
    const baseClass = "flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition";
    const activeClass = "text-indigo-600 bg-indigo-50";
    const inactiveClass = "text-gray-700";
    
    if (!mounted) return `${baseClass} ${inactiveClass}`;
    
    return hasActiveSubmenu(submenu) ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  };

  const getMobileSubmenuLinkClass = (href) => {
    const baseClass = "block px-3 py-2 rounded-md text-sm font-regular hover:bg-indigo-100 transition";
    const activeClass = "bg-indigo-100 text-indigo-600 font-semibold";
    const inactiveClass = "text-gray-600";
    
    if (!mounted) return `${baseClass} ${inactiveClass}`;
    
    return isActive(href) ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-indigo-600">
              Elecalon<span className="text-gray-900"> Ecom</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="relative group flex items-center">
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    className={getNavLinkClass(item.href, item.submenu)}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:rotate-180" />}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={getNavLinkClass(item.href, item.submenu)}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:rotate-180" />}
                  </Link>
                )}

                {item.submenu && (
                  <div className="absolute top-full -left-2 mt-0 w-52 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 transform scale-95 group-hover:scale-100 origin-top z-50 border border-gray-100">
                    <div className="py-2">
                      {item.submenu.map((subItem) =>
                        subItem.href.startsWith("#") ? (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className={getSubmenuLinkClass(subItem.href)}
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={getSubmenuLinkClass(subItem.href)}
                          >
                            {subItem.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.name}>
                {item.submenu ? (
                  <div className="relative">
                    <div className={getMobileSubmenuContainerClass(item.submenu)}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenSubmenu(null);
                        }}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenSubmenu(openSubmenu === item.name ? null : item.name);
                        }}
                        className="p-2"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === item.name ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {openSubmenu === item.name && (
                      <div className="pl-6 pt-1 pb-2 space-y-1 bg-gray-50 border-l-2 border-indigo-200 rounded-b-md">
                        {item.submenu.map((subItem) =>
                          subItem.href.startsWith("#") ? (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className={getMobileSubmenuLinkClass(subItem.href)}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenSubmenu(null);
                              }}
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={getMobileSubmenuLinkClass(subItem.href)}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenSubmenu(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    className={getMobileNavLinkClass(item.href)}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setOpenSubmenu(null);
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={getMobileNavLinkClass(item.href)}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setOpenSubmenu(null);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}