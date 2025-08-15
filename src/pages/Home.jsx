import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import ServiceSection from '../components/ServiceSection'
// import ThoughtAndConnect from '../components/ThoughtAndConnect'
import OwnerCard from '../components/ThoughtAndConnect'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <WhyChooseUs/>
    <ServiceSection/>
   <OwnerCard/>
    </>
  )
}

export default Home