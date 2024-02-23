import React from 'react'
import { Hero } from '../components/MainHome/Hero'
import { EngineeringServices } from '../components/MainHome/EngineeringServices'
import { CounterSec } from '../components/MainHome/CounterSec'
import { VtvEnergy } from '../components/MainHome/VtvEnergy'
import { AboutVtv } from '../components/MainHome/AboutVtv'
import { MeetOurTeam } from '../components/MainHome/MeetOurTeam'
import { FeatureProjects } from '../components/MainHome/FeatureProjects'
import { WhyVTVEnergy } from '../components/MainHome/WhyVTVEnergy'
import { Inquiries } from '../components/ContactSupport/Inquiries'

export const MainHome = () => {
  return (
    <>
    <Hero />
    <EngineeringServices />
    <CounterSec />
    <VtvEnergy />
    <AboutVtv />
    <MeetOurTeam  />
    <FeatureProjects />
    <WhyVTVEnergy />
    <Inquiries />
    </>
  )
}
