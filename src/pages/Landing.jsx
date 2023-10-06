import React from 'react'
import { HomeSection } from '../components/HomeSection/HomeSection'
import { MoovingTape } from '../components/MoovingTape/MoovingTape'
import { ProjectSection } from '../components/ProjectSection/ProjectSection'
import { AboutSection } from '../components/AboutSection/AboutSection'

export const Landing = () => {
  return (
    <>
    <HomeSection />
    <MoovingTape />
    <ProjectSection />
    <AboutSection />
    </>
  )
}
