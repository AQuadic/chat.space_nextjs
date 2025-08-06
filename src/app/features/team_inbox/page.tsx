import SharedTeamCapabilities from '@/components/features/sharedTeam/SharedTeamCapabilities'
import SharedTeamHero from '@/components/features/sharedTeam/SharedTeamHero'
import SharedTeamManagement from '@/components/features/sharedTeam/SharedTeamManagement'
import DiscoverMore from '@/components/general/DiscoverMore'
import Testimonials from '@/components/general/Testimonials'
import React from 'react'

const page = () => {
    return (
        <div>
            <SharedTeamHero />
            <SharedTeamCapabilities />
            <SharedTeamManagement />
            <Testimonials />
            <DiscoverMore />
        </div>
    )
}

export default page
