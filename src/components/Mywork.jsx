import '../static/Mywork.css'
import React from 'react'
import image from '../assets/aboutlogo.png'
import mywork1 from "../assets/ecommerce/ecommerce1.jpg"
import mywork2 from "../assets/ecommerce/ecommerce2.jpg"
import mywork3 from "../assets/ecommerce/ecommerce3.jpg"
import mywork4 from "../assets/ecommerce/ecommerce4.jpg"
import mywork5 from "../assets/ecommerce/ecommerce5.jpg"
import mywork6 from "../assets/ecommerce/ecommerce6.jpg"
import { FaArrowRight } from 'react-icons/fa'

const Mywork = () => {
    const MyworkList=[
        {
            "id":1,
            "name":"Web Design",
            "img":mywork1
        },
        {
            "id":2,
            "name":"Web Design",
            "img":mywork2
        },
        {
            "id":3,
            "name":"Web Design",
            "img":mywork3
        },
        {
            "id":4,
            "name":"Web Design",
            "img":mywork4
        },
        {
            "id":5,
            "name":"Web Design",
            "img":mywork5
        },
        {
            "id":6,
            "name":"Web Design",
            "img":mywork6
        }
       
    ]
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={image} alt='no image'/>
        </div>
        <div className="mywork-container">
            {MyworkList.map((work)=>(
                <div className='mywork-format' key={work.id}>
                    <h1>{work.name}</h1>
                    <img src={work.img}/>
                </div>
                
            ))}
        </div>
        <div className='showmore-format'>
                <button className='mywork-showmore'>Show More<FaArrowRight/></button>       
        </div>
    </div>
  )
}

export default Mywork