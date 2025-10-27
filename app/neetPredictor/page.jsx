
import Counter from '@/components/Home/counter/Counter'
import BundleCards from '@/components/neetPredictor/BundleCards'
import NeetAboutPage from '@/components/neetPredictor/NeetAboutPage'
import NeetBenefitsSection from '@/components/neetPredictor/NeetBenefitsSection'
import NeetStepsGuide from '@/components/neetPredictor/NeetHowToUse'
import NeetPredictorBanner from '@/components/neetPredictor/NeetPredictorBanner'
import NeetPredictorGuide from '@/components/neetPredictor/NeetPredictorGuide'
import React from 'react'

const page = () => {
  return (
    <>
    <NeetPredictorBanner />
    <NeetAboutPage />
    <NeetStepsGuide />
    <Counter />
    <NeetBenefitsSection />
    <BundleCards />
    <NeetPredictorGuide />
    <NeetPredictorGuide />
    <NeetPredictorGuide />
    <NeetPredictorGuide />

    </>
  )
}

export default page