
import Counter from '@/components/Home/counter/Counter'
import BundleCards from '@/components/neetpredictor/BundleCards'
import NeetAboutPage from '@/components/neetpredictor/NeetAboutPage'
import NeetBenefitsSection from '@/components/neetpredictor/NeetBenefitsSection'
import NeetStepsGuide from '@/components/neetpredictor/NeetHowToUse'
import NeetPredictorBanner from '@/components/neetpredictor/NeetPredictorBanner'
import NeetPredictorGuide from '@/components/neetpredictor/NeetPredictorGuide'
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