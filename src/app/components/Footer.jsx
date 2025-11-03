import React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "./Navigation";


export default function Footer() {
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
  return (
    <>
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
                      NAV_ITEMS.find((item) => item.name === "courses")?.href ||
                      "/courses/all_courses"
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
    </>
  );
}