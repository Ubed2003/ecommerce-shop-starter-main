import {React, useState} from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import './style.css'


const Hero = () => {
  const [currenSlide, setCurrentSlide] = useState(0)
  const data = [
    "https://images.pexels.com/photos/5746087/pexels-photo-5746087.jpeg?auto=compress&cs=tinysrgb&w=1366",
    "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
  ];
  const prevSlide = () =>{
    setCurrentSlide(currenSlide === 0 ? 2 : (prev) => prev - 1)
  }
  const nextSlide = () =>{
    setCurrentSlide(currenSlide === 2 ? 0 : (prev) => prev + 1)

  }
  return (


    <section className= ''>
      <div className='relative slider' >
      <div className="  flex m-0 p-0 bg-cover m-0 p-0 "style={{transform:`translateX(-${currenSlide * 100}vw) `}}>
        <img className="w-screen " src={data[0]} alt="" />
        <img className="" src={data[1 ]} alt="" />
        <img className="" src={data[2]} alt="" />
       
        </div>
        <div className="icons absolute w-[100px] m-auto right-0 left-0 flex bottom-[10px] gap-3  ">
          <div >
          <FaArrowLeft className="icon w-[50px] h-[50px] rounded-sm border-white divide-solid border-2 "onClick={prevSlide}/>

          </div>
          <div   >
          <FaArrowRight className="icon w-[50px] h-[50px] rounded-sm border-white divide-solid border-2"onClick={nextSlide} />

        

        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
