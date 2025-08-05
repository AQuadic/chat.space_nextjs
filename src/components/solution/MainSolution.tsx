import React from 'react'
import SolutionBrands from './SolutionBrands'
import Testimonials from '../general/Testimonials'
import DiscoverMore from '../general/DiscoverMore'
import SolutionHero from './SolutionHero'

const MainSolution = () => {
    return (
        <div>
            <SolutionHero />
            <SolutionBrands />
            <Testimonials />
            <DiscoverMore />
        </div>
    )
} 

export default MainSolution
