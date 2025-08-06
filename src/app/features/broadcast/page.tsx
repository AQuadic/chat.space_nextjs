import BroadcastHero from '@/components/features/broadcast/BroadcastHero'
import DiscoverMore from '@/components/general/DiscoverMore'
import Testimonials from '@/components/general/Testimonials'
import React from 'react'

const page = () => {
    return (
        <section>
            <BroadcastHero />
            <Testimonials />
            <DiscoverMore />
        </section>
    )
}

export default page
