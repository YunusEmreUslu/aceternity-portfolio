import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

export default function page() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='w-4/5 mx-auto p-5 overflow-hidden'>
        <Navbar />
        <HeroSection />
      </div>
    </div>
  )
}
