import React from 'react'
import HeroAbout from '../Components/About/HeroAbout'
import StatsAbout from '../Components/About/StatsAbout'
import Teams from '../Components/About/Teams'
import Servicse from '../Components/About/Servicse'

function About() {
  return (
    <div>
      <HeroAbout />
      <StatsAbout />
      <Teams />
      <Servicse />
    </div>
  )
}

export default About