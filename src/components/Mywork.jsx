import '../static/Mywork.css'
import React from 'react'
import image from '../assets/aboutlogo.png'
import mywork1 from "../assets/images/portfolio-img.jpg"
import mywork2 from "../assets/images/Blog.jpg"
import mywork3 from "../assets/images/color.jpg"
import mywork4 from "../assets/images/accordian.jpg"
import mywork5 from "../assets/images/star-rating.jpg"
import mywork6 from "../assets/images/Calculator.jpg"
import mywork7 from "../assets/images/EcommerceApi.jpg"
import mywork8 from "../assets/images/BlogApi.jpg"
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
            "link":'https://new9ja.onrender.com'
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
        {
            "id":2,
            "name":"Blog9ja Api Endpoints",
            "img":mywork8,
            "link":'https://backend-blog-app-8cul.onrender.com'
        },

    ]
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My latest work </h1>
            <img src={image} alt='no image'/>
        </div>
        <h1 className='text-3xl mb-10'>Full Stack (Django/React)</h1>
        <div className="mywork-container mb-15">
            {FullStackList.map((work)=>(
                <a href={work.link}>
                    <div className='mywork-format' key={work.id}>
                        <img className="mb-3" src={work.img}/>
                        <h1>{work.name}</h1>
                    </div>
                </a>
                
            ))}
        </div>
        <h1 className='text-3xl mb-10'>React Components(Projects)</h1>
        <div className="mywork-container mb-15">
            {ReactComponents.map((work)=>(
                <a href={work.link}>
                    <div className='mywork-format mb-10' key={work.id}>
                        <img className="mb-3" src={work.img}/>
                        <h1>{work.name}</h1>
                    </div>
                </a>
                
            ))}
        </div>
        <h1 className='text-3xl mb-10'>RestFul Api's(Django)</h1>
        <div className="mywork-container mb-15">
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