import React from 'react'
import Banner from './Banner'
import Certified from './Certified'
import Services from './Services'
// import LatestandNotifications from './LatestandNotifications/LatestandNotifications'
import Predictor from './predictor/Predictor'
import MbbsAbroad from './MbbsAbroad/MbbsAbroad'
import ChoiceFillingMaker from './ChoiceFillingMaker/ChoiceFillingMaker'
import StateCollege from './StatesCollege/StateCollege'
import CtaSection from './CtaSection/CtaSection'
import StuderVideo from './StudentVideoReview/StuderVideo'
import Testimonial from './Testimonial/Testimonial'
import Counter from './counter/Counter'
import WhyChoose from './WhychosseUs/WhyChoose'
import MobileSection from './mobileSection/MobileSection'
import LatestandNotifications from './LatestandNotifications/LatestandNotifications'

const HomePage = () => {
  return (
   <>
   <Banner />
   <Certified />
   <Services />
   <LatestandNotifications />
   <Predictor />
   <MbbsAbroad />
   <ChoiceFillingMaker />
   <StateCollege />
   <CtaSection />
   <StuderVideo />
   <Testimonial />
   <Counter />
   <WhyChoose />
   <MobileSection />

   </>
  )
}

export default HomePage