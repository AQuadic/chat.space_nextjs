import BroadcastCapabilities from '@/components/features/broadcast/BroadcastCapabilities'
import BroadcastHero from '@/components/features/broadcast/BroadcastHero'
import DiscoverMore from '@/components/general/DiscoverMore'
import Testimonials from '@/components/general/Testimonials'
import React from 'react'

const page = () => {
    return (
        <section>
            <BroadcastHero />
            <BroadcastCapabilities />
            <Testimonials />
            <DiscoverMore />
        </section>
    )
}

export default page
