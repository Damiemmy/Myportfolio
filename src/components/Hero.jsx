import React from 'react'
import "../static/Hero.css"
import image from '../assets/web.jpg'
import PDF from '../assets/Damisa.pdf'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='w-[200px] h-[200px] rounded-full'src={image} alt='no image'/>
        <h1><span>I'm Damisa Emmanuel, </span>a Full-Stack developer based in Nigeria.</h1>
        <p>I am a Full-Stack Developer from Abuja, Nigeria with 3 years of experience. I’m dedicated to building robust solutions, solving real-world challenges, and prioritizing client satisfaction while delivering secure web applications </p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect with Me</div>
            <div className='hero-myresume'> <a href={PDF} download>my resume</a></div>
        </div>
    </div>
  )
}

export default Hero