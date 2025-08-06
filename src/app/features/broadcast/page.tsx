import BroadcastCapabilities from '@/components/features/broadcast/BroadcastCapabilities'
import BroadcastFeatures from '@/components/features/broadcast/BroadcastFeatures'
import BroadcastHero from '@/components/features/broadcast/BroadcastHero'
import DiscoverMore from '@/components/general/DiscoverMore'
import Testimonials from '@/components/general/Testimonials'
import React from 'react'

const page = () => {
    return (
        <section>
            <BroadcastHero />
            <BroadcastCapabilities />
            <BroadcastFeatures />
            <Testimonials />
            <DiscoverMore />
        </section>
    )
}

export default page
