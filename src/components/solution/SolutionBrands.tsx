'use client';

import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const SolutionBrands = () => {
    return (
        <section className="container flex flex-col items-center py-12">
        <h2 className="text-[#000000] md:text-4xl text-xl font-semibold leading-[100%] font-Poppins">
            Assisting Educational Institutions in Emerging Markets on Their Journey
        </h2>
        <p className="text-[#5A5A5A] md:text-xl font-normal leading-[150%] mt-2.5 md:text-center">
            From startups to Fortune 500 companies, businesses trust Chati Space to power <br /> their customer communications
        </p>

        <div className="w-full mt-14 overflow-hidden">
            <Marquee gradient={false} speed={50} pauseOnHover={true}>
            <Image src="/images/home/Visa.svg" width={120} height={120} alt="Visa" className="mx-10" />
            <Image src="/images/home/huawei.svg" width={112} height={103} alt="Huawei" className="mx-10" />
            <Image src="/images/home/amazon.svg" width={173} height={53} alt="Amazon" className="mx-10" />
            <Image src="/images/home/shopify.svg" width={213} height={91} alt="Shopify" className="mx-10" />
            <Image src="/images/home/mercedes.svg" width={150} height={134} alt="Mercedes" className="mx-10" />
            <Image src="/images/home/bmw.svg" width={103} height={104} alt="BMW" className="mx-10" />
            </Marquee>
        </div>
        </section>
    );
};

export default SolutionBrands;
