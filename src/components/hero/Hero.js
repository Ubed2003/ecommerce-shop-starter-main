import {React, useState} from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import './style.css'
import image from './img/T-shirt.png'

const Hero = () => {
  const [currenSlide, setCurrentSlide] = useState(0)
  const data = [
    "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
,
  ];

  
  return (


    <section className= ''>
      <div className='relative w-full' >
      <div className=" slider  m-0 p-0  m-0 p-0  duration-500 transition-all w-full ">
        <img src={image} alt="" />
   
       
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
