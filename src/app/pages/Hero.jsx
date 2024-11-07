import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import HeroSlider from '../components/HeroSlider'
import OurServices from '../components/OurServices'
import Bridal from '../components/Bridal'
import CustomerTree from '../components/CustomerTree'
import MeetOurOwner from '../components/MeetOurOwner'
import Testimonials from '../components/Testimonials'

export default function Hero() {
  return (
    <>
        <Header />
        <HeroSlider/>
        <OurServices/>
        <Bridal/>
        {/* <CustomerTree/> */}
        <MeetOurOwner/>
        <Testimonials/>
        <Footer/>
    </>
  )
}
