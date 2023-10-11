import React from 'react';
import pic1 from '../../assets/banner1.jpg';
import pic2 from '../../assets/banner2.jpg';
import pic3 from '../../assets/banner3.jpg';

const Slider = () => {
    return (
        <div className='md:mx-10 my-5 relative'>
{/* <div className="overlay absolute inset-0 bg-black opacity-50"></div> */}
            <div className="carousel w-full h-96 md:h-screen">
              
    <div id="slide1" className="carousel-item relative w-full">
    <img src={pic1} className="w-full" />
    <div className="overlay absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
      
    </div>
   
   </div> 
    <div id="slide2" className="carousel-item relative w-full">
    <img src={pic2} className="w-full" />
     <div className="overlay absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
    <img src={pic3} className="w-full" />
     <div className="overlay absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    </div> 
   
   
            </div>

            

           <div className='top-20 lg:top-44  text-white md:text-gray-400 font-bold absolute md:top-40 md:left-52 text-center mx-auto justify-center'>
           <h1 className='text-2xl mx-auto text-center text-white md:text-white md:text-7xl font-bold'>Creative Thinking & Innovation</h1>
           <p className='text-center text-[12px] items-center lg:text-2xl my-4 text-white mx-auto justify-center ml-4'>Proactively utilize open-source users for process-centric total linkage. <br />
          Energistically reinvent web-enabled initiatives with premium<br />
          processes. Proactively drive.</p>
          <div className='flex gap-5 text-center items-center justify-center my-5 '>
            <button className='btn btn-success text-white'>See Programs</button>
            <button className='btn btn-success text-white'>Learn More</button>
          </div>
           </div>
        </div>
    );
};

export default Slider;