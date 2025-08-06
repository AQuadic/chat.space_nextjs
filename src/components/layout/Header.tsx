"use client";

import { NavLinks } from "@/constants/NavLinks";
import Image from "next/image";
import React, { useState,useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Broadcast from "../icons/header/Broadcast";
import SharedTeam from "../icons/header/SharedTeam";
import CustomNotifications from "../icons/header/CustomNotifications";
import Phone from "../icons/header/Phone";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

   const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="w-full md:h-[94px] h-14 bg-[#FFFFFFF2] flex items-center justify-between container z-50 border-b border-[#F3F4F6]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/header/logo.svg"
            alt="logo"
            width={177.8}
            height={36.5}
          />
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center gap-10"
          ref={dropdownRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {NavLinks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative">
              {item.subLinks ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className={`text-base font-normal px-6 cursor-pointer focus:outline-none ${
                      pathname.startsWith(item.path)
                        ? "text-[#00C58E] font-semibold"
                        : "text-[#374151]"
                    }`}
                  >
                    {item.title}
                  </button>

                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      key="dropdown"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full -left-20 mt-2 w-72 bg-white shadow-md rounded-xl py-2 z-50"
                    >
                      {item.subLinks.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.path}
                          className={`flex items-center gap-2 px-2 py-3 text-[#374151] hover:bg-[#E8F5E8] hover:text-[#15803D] rounded-[8px] mx-4 text-base font-medium transition-all duration-200 ${
                            pathname === sub.path
                              ? "bg-[#E6F9F4] text-[#00C58E] font-semibold"
                              : ""
                          }`}
                        >
                          {subIdx === 0 && <span><Broadcast /></span>}
                          {subIdx === 1 && <span><SharedTeam /></span>}
                          {subIdx === 2 && <span><CustomNotifications /></span>}
                          {subIdx === 3 && <span><Phone /></span>}
                          <span>{sub.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.path}
                  className={`text-base font-normal px-6 cursor-pointer ${
                    pathname === item.path
                      ? "text-[#00C58E] font-semibold"
                      : "text-[#374151]"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hidden lg:flex w-[158px] h-10 bg-[#00C58E] rounded-[8px] text-[#FFFFFF] text-base font-medium items-center justify-center cursor-pointer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Free Trial
        </motion.div>

        <motion.button
          className="lg:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center relative"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-[#374151] absolute"
            animate={{
              rotate: isSidebarOpen ? 45 : 0,
              y: isSidebarOpen ? 0 : -4,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#374151] absolute"
            animate={{
              opacity: isSidebarOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[#374151] absolute"
            animate={{
              rotate: isSidebarOpen ? -45 : 0,
              y: isSidebarOpen ? 0 : 4,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </header>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-[60] lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="flex items-center justify-between p-6 border-b border-gray-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Image
                src="/images/header/logo.svg"
                alt="logo"
                width={140}
                height={28}
              />
              <motion.button
                onClick={closeSidebar}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </motion.div>

            <motion.nav
              className="px-6 py-4"
              variants={containerVariants}
              initial="closed"
              animate="open"
            >
              <ul className="space-y-4">
                {NavLinks.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={menuItemVariants}
                    className="w-full"
                  >
                    {item.subLinks ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveMobileDropdown(
                              activeMobileDropdown === item.title ? null : item.title
                            )
                          }
                          className={`flex justify-between items-center w-full text-base font-normal py-3 px-2 rounded-md transition-colors duration-200 ${
                            pathname.startsWith(item.path)
                              ? "text-[#00C58E] font-semibold"
                              : "text-[#374151]"
                          }`}
                        >
                          <span>{item.title}</span>
                          <svg
                            className={`w-4 h-4 transform transition-transform duration-300 ${
                              activeMobileDropdown === item.title ? "rotate-90" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        <AnimatePresence initial={false}>
                          {activeMobileDropdown === item.title && (
                            <motion.div
                              key="submenu"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden ml-4"
                            >
                              <ul className="mt-2 space-y-2">
                                {item.subLinks.map((sub, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      href={sub.path}
                                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                                        pathname === sub.path
                                          ? "bg-[#E6F9F4] text-[#00C58E] font-semibold"
                                          : "text-[#374151] hover:bg-[#F3F4F6]"
                                      }`}
                                      onClick={closeSidebar}
                                    >
                                      {subIdx === 0 && <Broadcast />}
                                      {subIdx === 1 && <SharedTeam />}
                                      {subIdx === 2 && <CustomNotifications />}
                                      {subIdx === 3 && <Phone />}
                                      <span>{sub.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={closeSidebar}
                        className={`block text-base font-normal py-3 px-2 rounded-md transition-colors duration-200 ${
                          pathname === item.path
                            ? "text-[#00C58E] font-semibold"
                            : "text-[#374151]"
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              className="px-6 py-4 border-t border-gray-200 mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="w-full h-10 bg-[#00C58E] rounded-[8px] text-[#FFFFFF] text-base font-medium flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.02, backgroundColor: "#00B084" }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
