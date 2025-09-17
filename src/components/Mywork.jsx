import '../static/Mywork.css'
import React from 'react'
import image from '../assets/aboutlogo.png'
import mywork1 from "../assets/ecommerce/Buyit.jpg"
import mywork2 from "../assets/ecommerce/Blog.jpg"
import mywork3 from "../assets/ecommerce/color.jpg"
import mywork4 from "../assets/ecommerce/accordian.jpg"
import mywork5 from "../assets/ecommerce/star-rating.jpg"
import mywork6 from "../assets/ecommerce/Calculator.jpg"
import mywork7 from "../assets/ecommerce/EcommerceApi.jpg"
import { FaArrowRight } from 'react-icons/fa'

const Mywork = () => {
    const FullStackList=[
        {
            "id":1,
            "name":"Ecommerce Site",
            "img":mywork1,
            "link":'https://buyit-wymc.onrender.com/'
        },
        {
            "id":2,
            "name":"Blog Site",
            "img":mywork2,
            "link":'https://damiemmy.github.io/DAMISAPROJECT1-ACCORDIAN-/'
        },
    ]
    const ReactComponents=[
        {
            "id":1,
            "name":"Color Generator",
            "img":mywork3,
            "link":'https://damiemmy.github.io/COLORGENERATOR/'
        },
        {
            "id":2,
            "name":"Blog Accordian",
            "img":mywork4,
            "link":'https://damiemmy.github.io/DAMISAPROJECT1-ACCORDIAN-/'
        },
        {
            "id":3,
            "name":"Star Rating",
            "img":mywork5,
            "link":'https://damiemmy.github.io/DAMISAPROJECT-STAR-RATING-/'
        },
        {
            "id":4,
            "name":"Calculator",
            "img":mywork6,
            "link":'https://damiemmy.github.io/Calculator/'
        },
    ]
    const ApiEndpoint=[
        {
            "id":1,
            "name":"Ecommerce Api Endpoints",
            "img":mywork7,
            "link":'https://backend-ecommerce-store-1.onrender.com/'
        },

    ]
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My latest work </h1>
            <img src={image} alt='no image'/>
        </div>
        <h1 className='text-3xl pb-5'>Full-Stack(Django/React/Django RestFramework)</h1>
        <div className="mywork-container mb-5">
            {FullStackList.map((work)=>(
                <a href={work.link}>
                    <div className='mywork-format' key={work.id}>
                        <img className="mb-3" src={work.img}/>
                        <h1>{work.name}</h1>
                    </div>
                </a>
                
            ))}
        </div>
        <h1 className='text-3xl pb-5'>React Components(Projects)</h1>
        <div className="mywork-container">
            {ReactComponents.map((work)=>(
                <a href={work.link}>
                    <div className='mywork-format' key={work.id}>
                        <img className="mb-3" src={work.img}/>
                        <h1>{work.name}</h1>
                    </div>
                </a>
                
            ))}
        </div>
        <h1 className='text-3xl pb-5'>RestFul Api's(Django)</h1>
        <div className="mywork-container">
            {ApiEndpoint.map((work)=>(
                <a href={work.link}>
                    <div className='mywork-format' key={work.id}>
                        <img className="mb-3" src={work.img}/>
                        <h1>{work.name}</h1>
                    </div>
                </a>
                
            ))}
        </div>
        <div className='showmore-format'>
                <button className='mywork-showmore'>Show More<FaArrowRight/></button>       
        </div>
    </div>
  )
}

export default Mywork