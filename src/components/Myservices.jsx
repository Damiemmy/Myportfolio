import '../static/Myservices.css'
import React from 'react'
import image from '../assets/aboutlogo.png'
import { FaArrowRight } from 'react-icons/fa';

const Myservices = () => {
    const ServicesList=[
        {
        "id":1,
        "no":"01",
        "Title":"Responsive Website Design & Development",
        "Description":"I will design and develop a fully responsive, mobile-friendly website using modern frontend technologies like HTML, CSS, JavaScript, and frameworks like React or Next.js. Your website will look great on all devices."
    },
        {
        "id":2,
        "no":"02",
        "Title":"  Custom UI Development from Figma/PSD",
        "Description":"Have a design in Figma, Adobe XD, or PSD? I’ll convert your design into a pixel-perfect, fully functional frontend using HTML, Tailwind CSS, React, or any preferred stack."
    },
        {
        "id":3,
        "no":"03",
        "Title":"Landing Page Creation",
        "Description":"Need a high-converting landing page for your product or service? I will create a sleek, fast-loading landing page that grabs attention and drives conversions."
    },
        {
        "id":4,
        "no":"04",
        "Title":". Tailwind CSS Integration and Styling",
        "Description":"I will style your entire frontend using Tailwind CSS, ensuring consistency, responsiveness, and clean utility-first code."
    },
        {
        "id":5,
        "no":"05",
        "Title":"E-Commerce Frontend (React + Tailwind)",
        "Description":"I will develop a complete e-commerce frontend with product listings, cart functionality, and user-friendly design, ready to connect with your backend or Shopify/WooCommerce."
    },
        {
        "id":6,
        "no":"06",
        "Title":" Blog or News Frontend Design",
        "Description":"I will design and build a modern blog or news website frontend, including pagination, post previews, category filters, and search functionality."
    },
        {
        "id":7,
        "no":"07",
        "Title":" . Single Page Application (SPA) Development",
        "Description":"I will build modern, fast, and scalable SPAs using React.js or Next.js, with reusable components and optimized architecture."
    },
        {
        "id":8,
        "no":"08",
        "Title":" Frontend Bug Fixing and Optimization",
        "Description":"Facing layout issues or broken components? I’ll troubleshoot and fix your frontend bugs, optimize your styles, and enhance website speed and SEO performance."
    },
        {
        "id":9,
        "no":"09",
        "Title":"  Website Redesign or UI Revamp",
        "Description":"Is your site outdated or not user-friendly? I will revamp your existing website with a modern design, better UX, and optimized performance."
    },
        {
        "id":10,
        "no":"10",
        "Title":"Frontend Development with API Integration",
        "Description":"If you're a beginner developer or team needing frontend guidance, I offer mentorship sessions, code reviews, and personalized help with HTML, CSS, JavaScript, React, or Tailwind."
    },


    ]
  return (
    <div className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
            <img src={image} alt='no image'/>
        </div>
        <div className='services-container'>
        {ServicesList.map((service)=>(
            <div className='services-format'key={service.id}>
                <h2>{service.no}</h2> 
                <h1>{service.Title}</h1> 
                <p>{service.Description}</p>
                    <button className='read-more-btn'>Read More<FaArrowRight/></button>

            </div>
        ))}

        </div>
    </div>
  )
}

export default Myservices