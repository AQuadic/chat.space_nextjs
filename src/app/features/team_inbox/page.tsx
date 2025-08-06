import SharedTeamHero from '@/components/features/sharedTeam/SharedTeamHero'
import DiscoverMore from '@/components/general/DiscoverMore'
import Testimonials from '@/components/general/Testimonials'
import React from 'react'

const page = () => {
    return (
        <div>
            <SharedTeamHero />
            <Testimonials />
            <DiscoverMore />
        </div>
    )
}

export default page
