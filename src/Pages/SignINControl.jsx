import { ComplianceSection } from '@/Components/ComplianceSection'
import { HowSignWorks } from '@/Components/HowSignWorks'
import { QrSignInCTA } from '@/Components/QrSignInCTA'
import { WhatYouGet } from '@/Components/WhatYouGet'
import React from 'react'

const SignINControl = () => {
  return (
   <>
   <QrSignInCTA/>
   <WhatYouGet/>
   <HowSignWorks/>
   <ComplianceSection/>

   </>
  )
}

export default SignINControl