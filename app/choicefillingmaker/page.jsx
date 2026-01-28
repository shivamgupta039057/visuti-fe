import ChoiceFillingSteps from '@/components/choicefillingmaker/ChoiceFillingSteps'
import ChoiceOfferSection from '@/components/choicefillingmaker/ChoiceOfferSection'
import CtaSection from '@/components/Home/CtaSection/CtaSection'
import MobileSection from '@/components/Home/mobileSection/MobileSection'
import Services from '@/components/Home/Services'
import FAQSection from '@/components/neetpredictor/FAQSection'
import HowToUseTextSection from '@/components/neetpredictor/HowToUseTextSection'
import NEETUGPredictor from '@/components/neetpredictor/NEETUGPredictor'
import PredictorFeatureneet from '@/components/neetpredictor/PredictorFeatureneet'
import WhatIsNeetPredictor from '@/components/neetpredictor/WhatIsNeetPredictor'
import React from 'react'

const page = () => {
  return (
    <div>
      <PredictorFeatureneet />
      <NEETUGPredictor />
      <WhatIsNeetPredictor />
      <ChoiceFillingSteps />
      <CtaSection />
      <ChoiceOfferSection />
      <HowToUseTextSection />
      <HowToUseTextSection />
      <HowToUseTextSection />
      <FAQSection />
      <Services />
      <MobileSection />

    </div>
  )
}

export default page
