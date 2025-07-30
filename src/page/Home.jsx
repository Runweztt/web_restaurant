import React from 'react'
import HeroSection from '../components/HeroSection'
import News from '../components/News'
import CardSection from '../components/CardSection'
import MiniBookingSection from '../components/MiniBookingSection'
import MiniCard from '../components/MiniCard'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CardSection/>
      <MiniBookingSection/>
      <News/>
    </div>
  )
}

export default Home