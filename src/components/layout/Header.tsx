'use client'

import { NavLinks } from '@/constants/NavLinks'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }


    const overlayVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    }

    const menuItemVariants = {
        closed: {
            x: 50,
            opacity: 0
        },
        open: {
            x: 0,
            opacity: 1
        }
    }

    const containerVariants = {
        closed: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    return (
        <>
            <header className='w-full h-[94px] bg-[#FFFFFFF2] flex items-center justify-between container z-50'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src='/images/header/logo.svg' alt='logo' width={177.8} height={36.5} />
                </motion.div>
                
                <motion.div 
                    className='hidden lg:flex items-center gap-10'
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
                        >
                            <Link href='/' className='text-[#374151] text-base font-normal px-6 cursor-pointer'>{item.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className='hidden lg:flex w-[158px] h-10 bg-[#00C58E] rounded-[8px] text-[#FFFFFF] text-base font-medium items-center justify-center cursor-pointer'
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Start Free Trial
                </motion.div>

                <motion.button 
                    className='lg:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center relative'
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span 
                        className='w-6 h-0.5 bg-[#374151] absolute'
                        animate={{
                            rotate: isSidebarOpen ? 45 : 0,
                            y: isSidebarOpen ? 0 : -4,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                    <motion.span 
                        className='w-6 h-0.5 bg-[#374151] absolute'
                        animate={{
                            opacity: isSidebarOpen ? 0 : 1,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                    <motion.span 
                        className='w-6 h-0.5 bg-[#374151] absolute'
                        animate={{
                            rotate: isSidebarOpen ? -45 : 0,
                            y: isSidebarOpen ? 0 : 4,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                </motion.button>
            </header>

            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div 
                        className='fixed inset-0 bg-black/50 z-[55] lg:hidden'
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
                        className='fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-[60] lg:hidden'
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <motion.div 
                            className='flex items-center justify-between p-6 border-b border-gray-200'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Image src='/images/header/logo.svg' alt='logo' width={140} height={28} />
                            <motion.button 
                                onClick={closeSidebar}
                                className='w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700'
                                aria-label="Close menu"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </motion.button>
                        </motion.div>

                        <motion.nav 
                            className='px-6 py-4'
                            variants={containerVariants}
                            initial="closed"
                            animate="open"
                        >
                            <ul className='space-y-4'>
                                {NavLinks.map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        variants={menuItemVariants}
                                        whileHover={{ x: 10, backgroundColor: 'rgba(243, 244, 246, 0.5)' }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <a 
                                            href="#" 
                                            className='block text-[#374151] text-base font-normal py-3 px-2 rounded-md transition-colors duration-200'
                                            onClick={closeSidebar}
                                        >
                                            {item.title}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>

                        <motion.div 
                            className='px-6 py-4 border-t border-gray-200 mt-auto'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div 
                                className='w-full h-10 bg-[#00C58E] rounded-[8px] text-[#FFFFFF] text-base font-medium flex items-center justify-center cursor-pointer'
                                whileHover={{ scale: 1.02, backgroundColor: '#00B084' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Free Trial
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header