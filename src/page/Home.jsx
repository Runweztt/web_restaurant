import React from 'react'
import HeroSection from '../components/HeroSection'
import News from '../components/News'
import CardSection from '../components/CardSection'
import MiniBookingSection from '../components/MiniBookingSection'
import MiniCard from '../components/MiniCard'
import Filter from '../components/Filter'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Filter/>
      <CardSection/>
      <MiniBookingSection/>
      <News/>
    </div>
  )
}

export default Home