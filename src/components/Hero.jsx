import React from 'react'
import "../static/Hero.css"
import image from '../assets/web.jpg'
import PDF from '../assets/Damisa.pdf'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='w-[200px] h-[200px] rounded-full'src={image} alt='no image'/>
        <h1><span>I'm Damisa Emmanuel, </span>a frontend developer based in Nigeria.</h1>
        <p>I am a Frontend Developer From Abuja,Nigeria with 3 years of Experience,i build Landing Pages and redesign Figma Designs to a react Components </p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect with Me</div>
            <div className='hero-myresume'> <a href={PDF} download>my resume</a></div>
        </div>
    </div>
  )
}

export default Hero