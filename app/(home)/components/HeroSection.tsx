import Link from 'next/link'
import React from 'react'

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
                <div>
                <h1 className='text-3xl font-bold group-hover:text-green-500 transition-all'>Contact Me 📭</h1>
                <div className='w-40 h-2 bg-green-500 rounded-full'></div>
                <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
                </div>
            </Link>  
        </div>
        <div>
            <div className='size-72 pt-4 pl-4 space-y-3 -rotate-[30deg]'>
                <div className='flex gap-3 translate-x-8'>
                    <div className='size-32 rounded-2xl bg-green-500'></div> 
                    <div className='size-32 rounded-full bg-indigo-500'></div>
                </div>
                <div className='flex gap-3 -translate-x-8'>
                    <div className='size-32 rounded-2xl bg-indigo-500'></div>
                    <div className='size-32 rounded-full bg-green-500'></div> 
                </div>
            </div>
        </div>
    </div>
  )
}
