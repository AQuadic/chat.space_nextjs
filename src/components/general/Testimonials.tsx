'use client';

import { TestimonialsData } from '@/constants/TestimonialsData';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <section className="w-full pt-12 pb-[72px] bg-[#FFFEED]">
            <div className="container">
                <h1 className="text-[#111827] text-4xl font-bold text-center">
                    Over 14,000 Customers Worldwide
                </h1>
                <p className="text-[#4B5563] text-[22px] leading-7 font-normal mt-[18px] text-center">
                    What our customers across 180+ countries say about us.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-[42px]">
                    {TestimonialsData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="w-[385px] py-9 bg-[#FFFFFF] rounded-3xl px-[22px] pt-7"
                            style={{ boxShadow: '0px 0px 2px 0px #00000040' }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Image src={item.rate} alt="rate" width={108} height={24} />
                            <Image
                                src="/images/testimonials/quotes.svg"
                                alt="quotes"
                                width={28}
                                height={25}
                                className="mt-[18px]"
                            />
                            <h2 className="text-[#000000] text-sm font-normal mt-[18px] capitalize leading-[200%]">
                                &quot;{item.review}&quot;
                            </h2>
                            <div className="mt-4 flex items-center gap-[14px]">
                                <Image
                                    src={item.clientImage}
                                    alt="client"
                                    width={56}
                                    height={56}
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="text-[#000000] text-base font-semibold">{item.clientName}</h3>
                                    <p className="text-[#5A5A5A] text-sm font-normal mt-1">{item.clientJob}</p>
                                    <p className="text-[#589F55] text-sm font-semibold mt-1">{item.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
