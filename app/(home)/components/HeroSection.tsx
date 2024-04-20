import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse lg:flex-row gap-14 lg:gap-0 items-center justify-between'>
        <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold'>
                Welcome to my page!
                <br/> <span className='underline underline-offset-8 decoration-green-500'>{"I'm Yunus"}</span>
            </h1>
            <p className='md:w-96 text-lg text-gray-300'>
                {"Based in Turkey, I'm a frontend developer who is excited about building modern web applications."}
            </p>
            <Link href={"mailto:usluyunusemre00@gmail.com"} className='inline-block group'>
                
            <Title text="Contact Me 📭" />

            </Link>  
        </div>
        <div>
            <div className='size-72 pt-4 pl-4 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 translate-x-8'>
                    <div className='size-32 rounded-2xl bg-green-500'></div> 
                    <div className='size-32 rounded-full bg-indigo-500'></div>
                </div>
                <div className='flex gap-3 -translate-x-8'>
                    <div className='size-32 rounded-2xl bg-indigo-500'></div>
                    <div className='size-32 rounded-full bg-green-500'></div>    
                </div>
                <div className='glow absolute top-[30%] right-1/2 -z-10'></div> 
            </div>
        </div>
    </div>
  )
}
