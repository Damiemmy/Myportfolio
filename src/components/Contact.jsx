import React from 'react';
import "../static/Contact.css"
import image from '../assets/aboutlogo.png'
import { BsMailbox } from "react-icons/bs"
import { FaLocationArrow } from "react-icons/fa"
import { BsPhone } from "react-icons/bs"
import emailjs from 'emailjs-com';
import { useRef } from "react"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_a5vmcc5',     // 🔁 Replace with your actual Service ID
      'template_rnzj3qr',    // 🔁 Replace with your Template ID
      form.current,
      'HQ8KkPkCY8x4MEMJe'      // 🔁 Replace with your Public Key
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      form.current.reset(); // Optional: clear the form
    })
    .catch((error) => {
      console.error(error.text);
      alert("Oops! Something went wrong.");
    });}
  return (
    <div className="w-full flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mx-auto">
        <div style={{paddingBottom:'20px'}} className="flex flex-col relative w-full text-white justify-center pb-10 items-center ">
            <h1 className='text-white text-5xl md:text-6xl '>contact</h1>
            <img className='absolute top-4 right-31 z-[-1] md:top-4 md:right-[50%]' src={image} alt="" />
        </div> 
        <div className="md:grid mt-5 md:grid-cols-2  grid-cols-1">
            <div className="p-2 w-full flex flex-col items-start gap-4">
                <h1 style={{ background: 'linear-gradient(47deg, #DF8908 -5.09%, #B415FF 106.28%)', WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', }} className='text-white text-3xl font-bold'>Let's talk</h1>
                <p className='text-left'>I am currently avaliable to take on new projects,so feel free to contact me about anything that you want me to work on.YOu can Contact anytime.</p>
                <div className="flex flex-col gap-5 mb-10">
                    <div className="flex gap-2 items-center">
                        <FaEnvelope/><p>damisaemmanuel778@gmail.com</p>
                    </div>
                    <div className="flex gap-2 items-center">
                    <FaPhoneAlt/><p>+2347043777486</p>
                        
                    </div>
                    <div className="flex gap-2 items-center">
                       <FaMapMarkerAlt/><p>Apo Mechanic Abuja, Nigeria</p>
                    </div>
                </div>
            </div>
                <form ref={form} onSubmit={sendEmail} className="p-2 flex flex-col gap-2 w-full items-left  text-left ">
                    <label className='text-[#daddda] text-[18px]' htmlFor="">Your Name</label>
                    <input type='text' className='border-none text-[#0f0f0f]  bg-[#a59f9f] rounded-md px-2 py-3' placeholder="Enter your name" name='name'/>
                    <label className='text-[#daddda] text-[18px]' htmlFor=''>Your Email</label>
                    <input type='email' className='border-none text-[#0f0f0f]  bg-[#a59f9f] rounded-md px-2 py-3' placeholder="Enter your Email" name='email'/>
                    <label className='text-[#daddda] text-[18px]' htmlFor="">Write your message here</label>
                    <textarea name='message' className='border-none h-30 text-[#0f0f0f] bg-[#a59f9f] rounded-md px-2 py-3' rows='8' placeholder="Enter your message"></textarea>
                    <button style={{background:'linear-gradient(270deg,#DF8908 -5.09%, #B415FF 106.28%'}} type="submit" className="border py-2 md:w-[35%] md:px-3 px-1 w-[45%] text-md my-3 text-white rounded-md">Submit now</button>
                </form>
        </div>
    </div>
  )
}

export default Contact