import React from 'react'
import SolutionTitleIcon from '../icons/solution/SolutionTitleIcon'

const SolutionTitle = () => {
    return (
        <section className='bg-[#A7F3D066]'>
            <div className='container flex items-center justify-center gap-4 py-12'>
                <SolutionTitleIcon />
                <h2 className='text-[#1F2937] md:text-[30px] text-base font-semibold'>Communicate better to support high quality education with WhatsApp</h2>
            </div>
        </section>
    )
}

export default SolutionTitle
