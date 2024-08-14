import React from 'react'
import BannerComponent from '../Layout/BannerComponent.jsx'
import DescriptionComponent from '../Layout/DescriptionComponent.jsx'
import './About.scss'

function About() {
  return (
    <>
      <BannerComponent />
      <div className='about_content'>
      <DescriptionComponent />
      <DescriptionComponent />
      <DescriptionComponent />
      <DescriptionComponent />
      </div>
    </>
  )
}

export default About
