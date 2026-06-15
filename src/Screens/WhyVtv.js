import React from 'react'
import { Hero } from '../components/WhyVTV/Hero'
import { WhyVtvEnergy } from '../components/WhyVTV/WhyVtvEnergy'
import { AboutVtv } from '../components/WhyVTV/AboutVtv'
import { TabSec } from '../components/WhyVTV/TabSec'
import { MeetOurTeam } from '../components/MainHome/MeetOurTeam'
import { Inquiries } from '../components/ContactSupport/Inquiries'

export const WhyVtv = () => {
  return (
    <>
    <Hero />
    <WhyVtvEnergy />
    <AboutVtv />
    <TabSec />  
    <MeetOurTeam />
    <Inquiries />
    </>
  )
}
