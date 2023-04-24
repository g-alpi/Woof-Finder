import React from 'react'
import HomePageHeader from '../../components/homePageHeader.jsx'
import AboutUs from '../../components/AboutUs.jsx'
import Sponsors from '../../components/Sponsors.jsx'

export default function Home() {
  return (
    <div>
      <HomePageHeader/>
      <AboutUs/>
      <Sponsors/>
    </div>
  )
}