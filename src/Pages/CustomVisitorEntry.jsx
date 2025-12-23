import { FlowsIntroductionSection } from '@/Components/FlowsIntroductionSection'
import { SignInSegmentsSection } from '@/Components/SignInSegmentsSection'
import { VisitorFlowsSection } from '@/Components/VisitorFlowsSection'
import React from 'react'

export const CustomVisitorEntry = () => {
  return (
    <>

     <VisitorFlowsSection/>
     <FlowsIntroductionSection/>
     <SignInSegmentsSection/>

    </>
  )
}
