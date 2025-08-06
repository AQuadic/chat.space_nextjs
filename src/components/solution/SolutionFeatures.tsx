import React from 'react'
import SolutionCheck from '../icons/solution/SolutionCheck'
import Image from 'next/image'

const SolutionFeatures = () => {
    return (
        <section className='container py-[50px]'>
            <div className='flex md:flex-row flex-col items-center justify-between'>
                <div>
                    <h2 className='text-[#111827] md:text-4xl text-2xl font-semibold !font-Poppins mb-2.5'>Smarter Lead Management</h2>
                    <ul>
                        <li className='flex items-center gap-3 text-[#4B5563] text-base font-normal mt-3'>
                            <SolutionCheck />
                            Integrate with your existing CRM system
                        </li>
                        <li className='flex items-center gap-3 text-[#4B5563] text-base font-normal mt-3'>
                            <SolutionCheck />
                            Automate lead qualification and scoring
                        </li>
                        <li className='flex items-center gap-3 text-[#4B5563] text-base font-normal mt-3'>
                            <SolutionCheck />
                            Track conversion rates and optimize campaigns
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src='/images/solution/smarterlead.png' alt='image' width={440} height={440} />
                </div>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-between md:mt-0 mt-4'>
                <div>
                    <Image src='/images/solution/closemoresales.png' alt='image' width={440} height={440} />
                </div>
                <div>
                    <h2 className='text-[#111827] md:text-4xl text-2xl font-semibold !font-Poppins mb-2.5'>Close More Sales</h2>
                    <ul>
                        <li className='flex items-center gap-3 text-[#4B5563] text-base font-normal mt-3'>
                            <SolutionCheck />
                            Send rich media content including videos and documents
                        </li>
                        <li className='flex items-center gap-3 text-[#4B5563] text-base font-normal mt-3'>
                            <SolutionCheck />
                            Respond to inquiries within seconds
                        </li>
                        <li className='flex items-center gap-3 text-[#4B5563] text-base font-normal mt-3'>
                            <SolutionCheck />
                            Use templates for consistent messaging
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-between md:mt-0 mt-4'>
                <div>
                    <h2 className='text-[#111827] md:text-4xl text-2xl font-semibold !font-Poppins mb-2.5'>Better Learning Outcomes</h2>
                    <ul>
                        <li className='flex items-center gap-3 text-[#4B5563] text-base font-normal mt-3'>
                            <SolutionCheck />
                            Provide 24/7 student support and guidance
                        </li>
                        <li className='flex items-center gap-3 text-[#4B5563] text-base font-normal mt-3'>
                            <SolutionCheck />
                            Share study materials and resources instantly
                        </li>
                        <li className='flex items-center gap-3 text-[#4B5563] text-base font-normal mt-3'>
                            <SolutionCheck />
                            Improve exam results with personalized coaching
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src='/images/solution/betterlearning.png' alt='image' width={440} height={440} />
                </div>
            </div>
        </section>
    )
}

export default SolutionFeatures
