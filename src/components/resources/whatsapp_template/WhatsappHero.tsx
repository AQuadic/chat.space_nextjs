'use client'

import { SetStateAction, useState } from 'react';
import Credit from '@/components/icons/features/Credit';
import Image from 'next/image';

const WhatsappHero = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageSelect = (language: SetStateAction<string>) => {
        setSelectedLanguage(language);
    };

    return (
        <section className='container flex md:flex-row flex-col justify-between gap-8 xl:gap-0 pt-[50px] pb-8'>
            <div>
                <h1 className='text-[#111827] md:text-5xl text-4xl font-semibold leading-[1.2] capitalize'>
                    Festive Messaging <br />Made Easier!<br />
                </h1>
                <p className='text-[#4B5563] text-xl leading-[150%] font-normal capitalize mt-8'>
                    Access Ready-to-use WhatsApp Templates to boost <br /> conversions and engagement
                </p>
                <div
                    className='w-[201px] h-[60px] bg-[#22C55E] rounded-full flex items-center justify-center mt-12'
                    style={{ boxShadow: '0px 10px 15px 0px #0000001A' }}
                >
                    <p className='text-[#FFFFFF] text-lg font-semibold'>Free 7 Day Trial</p>
                </div>
                <div className='mt-6 flex flex-wrap items-center md:gap-6 gap-2'>
                    <div className='flex items-center'>
                        <Image src='/images/testimonials/rate.png' alt='stars' width={90} height={24} />
                        <p className='text-[#4B5563] text-sm font-normal leading-[200%]'>4.7/5 on G2</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Credit />
                        <p className='text-[#4B5563] text-sm font-normal leading-[200%]'>
                            No credit card required
                        </p>
                    </div>
                </div>
                <div className='mt-[88px] flex flex-wrap xl:gap-1 gap-4'>
                    <div
                        className={`px-6 py-2.5 text-sm font-semibold rounded-full cursor-pointer ${
                            selectedLanguage === 'English'
                                ? 'text-white bg-[#111827]'
                                : 'text-[#374151] bg-[#F3F4F6]'
                        }`}
                        onClick={() => handleLanguageSelect('English')}
                    >
                        English
                    </div>
                    <div
                        className={`px-6 py-2.5 text-sm font-semibold rounded-full cursor-pointer ${
                            selectedLanguage === 'Hindi'
                                ? 'text-white bg-[#111827]'
                                : 'text-[#374151] bg-[#F3F4F6]'
                        }`}
                        onClick={() => handleLanguageSelect('Hindi')}
                    >
                        Hindi
                    </div>
                    <div
                        className={`px-6 py-2.5 text-sm font-semibold rounded-full cursor-pointer ${
                            selectedLanguage === 'Spanish'
                                ? 'text-white bg-[#111827]'
                                : 'text-[#374151] bg-[#F3F4F6]'
                        }`}
                        onClick={() => handleLanguageSelect('Spanish')}
                    >
                        Spanish
                    </div>
                    <div
                        className={`px-6 py-2.5 text-sm font-semibold rounded-full cursor-pointer ${
                            selectedLanguage === 'Portuguese'
                                ? 'text-white bg-[#111827]'
                                : 'text-[#374151] bg-[#F3F4F6]'
                        }`}
                        onClick={() => handleLanguageSelect('Portuguese')}
                    >
                        Portuguese
                    </div>
                    <div
                        className={`px-6 py-2.5 text-sm font-semibold rounded-full cursor-pointer ${
                            selectedLanguage === 'Bahasa'
                                ? 'text-white bg-[#111827]'
                                : 'text-[#374151] bg-[#F3F4F6]'
                        }`}
                        onClick={() => handleLanguageSelect('Bahasa')}
                    >
                        Bahasa
                    </div>
                    <div
                        className={`px-6 py-2.5 text-sm font-semibold rounded-full cursor-pointer ${
                            selectedLanguage === 'Arabic'
                                ? 'text-white bg-[#111827]'
                                : 'text-[#374151] bg-[#F3F4F6]'
                        }`}
                        onClick={() => handleLanguageSelect('Arabic')}
                    >
                        Arabic
                    </div>
                </div>
            </div>
            <div className='relative'>
                <Image src='/images/solution/solutionHero.png' alt='hero' width={588} height={392} className='z-10' />
                <Image
                    src='/images/solution/blueFrame.png'
                    alt='blue frame'
                    width={572}
                    height={394}
                    className='md:block hidden absolute top-8 left-12 -z-10'
                />
            </div>
        </section>
    );
};

export default WhatsappHero;
