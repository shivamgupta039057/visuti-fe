import React from 'react'
import PredictorFeatureneet from './PredictorFeatureneet'
import NEETUGPredictor from './NEETUGPredictor'
import WhatIsNeetPredictor from './WhatIsNeetPredictor'
import CtaSection from '../Home/CtaSection/CtaSection'
import HowToUseSection from './HowToUseSection'
import AICollegePredictor from './AICollegePredictor'
import StuderVideo from '../Home/StudentVideoReview/StuderVideo'
import Testimonial from '../Home/Testimonial/Testimonial'
import Counter from '../Home/counter/Counter'
import Services from '../Home/Services'
import MobileSection from '../Home/mobileSection/MobileSection'
import NewHeader from './NewHeader'


const NeetPredictor = () => {
  return (
    <>
    {/* <NewHeader/> */}
    <PredictorFeatureneet />
    <NEETUGPredictor/>
    <WhatIsNeetPredictor/>
    <CtaSection/>
    <HowToUseSection/>
    <AICollegePredictor/>
    <StuderVideo/>
    <Testimonial />
    <Counter/>
    <Services/>
    
    <MobileSection/>
    </>
  )
}

export default NeetPredictor