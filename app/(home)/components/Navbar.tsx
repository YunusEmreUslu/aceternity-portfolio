import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";
import { cn } from '@/lib/utils';

export default function Navbar({className}:{className?:string}) {

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
      <nav className={cn(
      "py-10 flex justify-between items-center",
       className
      )}
      >
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>ᯓ Yunus</h1>

        <div className='flex items-center gap-8'>
            {socials.map((social, index)=>{
                const Icon = social.Icon;
                return <Link target="_blank" href={social.link} key={index} aria-label={social.label}>
                    <Icon className='size-6 hover:scale-125 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}
