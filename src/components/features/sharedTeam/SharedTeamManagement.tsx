import React from 'react'
import organizedTeams from '../../../../public/images/features/organizeTeams.png'
import manageContacts from '../../../../public/images/features/manageContacts.png'
import engage from '../../../../public/images/features/engage.png'
import Image from 'next/image'
const SharedTeamManagement = () => {
    return (
        <section className='container'>
            <h2 className='text-[#111827] md:text-4xl text-2xl font-semibold text-center capitalize leading-[1.2] !font-Poppins'>Effortless management of customer and <br />prospect communication</h2>
            <div className='flex md:flex-row flex-col items-center justify-between mt-[58px]'>
                <div>
                    <h3 className='text-[#111827] md:text-4xl text-2xl font-semibold leading-[1.2] capitalize'>Organize users and teams</h3>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize'>Assign chats by user, team, or shift (day/night) for <br /> optimal workflow management.</p>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize'>Enable team collaboration for complete transparency across <br /> all customer interactions.</p>
                </div>
                <Image src={organizedTeams} alt='teams' />
            </div>

            <div className='flex md:flex-row flex-col items-center justify-between'>
                <Image src={manageContacts} alt='teams' />
                <div>
                    <h3 className='text-[#111827] md:text-4xl text-2xl font-semibold leading-[1.2] capitalize'>Manage Contacts</h3>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize'>Scalable contact management with support for import/ <br />export via CSV files.</p>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize'>Tag contacts into categories like &quot;VIP&quot; for personalized service.</p>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize'>Better insights via comprehensive analytics and <br /> detailed reporting.</p>
                </div>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-between mt-[58px]'>
                <div>
                    <h3 className='text-[#111827] md:text-4xl text-2xl font-semibold leading-[1.2] capitalize'>Engage, Sell and Support</h3>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize'>See complete messages and conversation threads in <br /> one unified view.</p>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize'>Personalize user interactions for enhanced customer <br /> experience.</p>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize'>Support and update customers through <br /> seamless conversations.</p>
                </div>
                <Image src={engage} alt='teams' />
            </div>
        </section>
    )
}

export default SharedTeamManagement
