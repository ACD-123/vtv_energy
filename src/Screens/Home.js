import React from 'react'
import { Hero } from '../components/Home/Hero'
import { SecondSection } from '../components/Home/SecondSection'
import { OurSolarWork } from '../components/Home/OurSolarWork'
import { Ordinary } from '../components/Home/Ordinary'
import { Cultivate } from '../components/Home/Cultivate'
import { Inquiries } from '../components/Home/Inquiries'

export const Home = () => {
  return (
    <>
    <Hero />
    <SecondSection />
    <OurSolarWork />
    <Ordinary />
    <Cultivate />
    <Inquiries />
    </>
  )
}
