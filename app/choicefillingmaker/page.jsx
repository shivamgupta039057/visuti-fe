import ChoiceFillingSteps from '@/components/choicefillingmaker/ChoiceFillingSteps'
import ChoiceOfferSection from '@/components/choicefillingmaker/ChoiceOfferSection'
import CtaSection from '@/components/Home/CtaSection/CtaSection'
import MobileSection from '@/components/Home/mobileSection/MobileSection'
import Services from '@/components/Home/Services'
import FAQSection from '@/components/neetPredictor/FAQSection'
import HowToUseTextSection from '@/components/neetPredictor/HowToUseTextSection'
import NEETUGPredictor from '@/components/neetPredictor/NEETUGPredictor'
import PredictorFeatureneet from '@/components/neetPredictor/PredictorFeatureneet'
import WhatIsNeetPredictor from '@/components/neetPredictor/WhatIsNeetPredictor'
import React from 'react'

const page = () => {
  return (
    <div>
       <PredictorFeatureneet />
       <NEETUGPredictor/>
       <WhatIsNeetPredictor/>
       <ChoiceFillingSteps/>
       <CtaSection/>
       <ChoiceOfferSection/>
       <HowToUseTextSection/>
       <HowToUseTextSection/>
       <HowToUseTextSection/>
      <FAQSection/>
      <Services/>
      <MobileSection/>
       
    </div>
  )
}

export default page
