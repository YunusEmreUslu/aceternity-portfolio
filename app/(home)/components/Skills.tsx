"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiReact, SiNextdotjs, SiTailwindcss, SiGit, SiCss3, SiHtml5, SiJavascript, SiTypescript, SiVite, SiPostgresql, SiFirebase } from 'react-icons/si'

export default function Skills() {

  const skills = [
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "TailwindCSS",
      Icon: SiTailwindcss,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "React.js",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Vite",
      Icon: SiVite,
    },
  ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title 
      text="Skills 👤"
      className='flex flex-col items-center justify-center -rotate-6'
      />
      <HoverEffect items={skills} />
    </div>
  );
}
