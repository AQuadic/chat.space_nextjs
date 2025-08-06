import React from 'react'
import SolutionBrands from './SolutionBrands'
import Testimonials from '../general/Testimonials'
import DiscoverMore from '../general/DiscoverMore'
import SolutionHero from './SolutionHero'
import SolutionCapabilities from './SolutionCapabilities'
import SolutionTitle from './SolutionTitle'
import SolutionFeatures from './SolutionFeatures'

const MainSolution = () => {
    return (
        <div>
            <SolutionHero />
            <SolutionBrands />
            <SolutionCapabilities />
            <SolutionTitle />
            <SolutionFeatures />
            <Testimonials />
            <DiscoverMore />
        </div>
    )
} 

export default MainSolution
