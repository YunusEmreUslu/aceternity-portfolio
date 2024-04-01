import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {

  const socials = [
    {
        link: "https://www.linkedin.com/in/yunus-emre-uslu/",
        label: "Linkedin",
        Icon: SiLinkedin,
    },
    {
        link: "https://github.com/YunusEmreUslu",
        label: "Github",
        Icon: SiGithub ,
    }
  ];
    
  return (
    <nav className='py-10 flex justify-between items-center'>

        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Yunus  ˗ˏˋ ★ ˎˊ˗</h1>

        <div className='flex items-center gap-7'>
            {socials.map((social, index)=>{
                const Icon = social.Icon;
                return <Link href={social.link} key={index} aria-label={social.label}>
                    <Icon className='size-5 hover:scale-125 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}
