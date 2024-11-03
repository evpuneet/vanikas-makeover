import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import HeroSlider from '../components/HeroSlider'
import OurServices from '../components/OurServices'
import Bridal from '../components/Bridal'
import CustomerTree from '../components/CustomerTree'

export default function Hero() {
  return (
    <>
        <Header />
        <HeroSlider/>
        <OurServices/>
        <Bridal/>
        <CustomerTree/>
        <Footer/>
    </>
  )
}
