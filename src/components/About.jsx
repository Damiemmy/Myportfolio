import React from 'react'
import '../static/About.css'
import image from '../assets/aboutlogo.png'
import web from '../assets/web.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1 >About me</h1>
            <img src={image} alt='no image'/>
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={web} alt="no image" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an Experience FullStack Developer with over 3 years of professional experience</p>
                    <p>Frameworks i use for development</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Next JS </p><hr style={{width:"65%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"85%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"85%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Django</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Python</p><hr style={{width:"70%"}}/>
                    </div>
                </div>
            </div>
        </div>
    <div className="about-achievements">
        <div className="achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className='slash'></div>
        <div className="achievement">
            <h1>15+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <div className='slash'></div>
        <div className="achievement">
            <h1>25+</h1>
            <p> HAPPY CLIENT</p>
        </div>

    </div>

    </div>
  )
}

export default About