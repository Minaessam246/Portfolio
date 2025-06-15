
"use client"
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import "../globals.css"

import Contact from '../contact/page';
import About from "./../about/page";
import Projects from "./../projects/page";
export default function Home() {
   
    
  
    return (

    <>
    <div className="flex  justify-around items-center flex-wrap ">
 <div className='home flex flex-col md:w-[600px] lg:w-[800px] lg:m-9  justify-center align-center '> <h1 className="bg-gradient-to-r  text-transparent to-blue-950  from-primary bg-clip-text sm:text-8xl lg:text-9xl text-left  hel font-bold">Hello I,am  </h1><TypeAnimation className='text-white hel sm:text-7xl lg:text-9xl  font-bold'
      sequence={[
        'Mina Essam',  
        1000, 
        'Front-end Developer',
        2000,
        'Mina Essam',  
        2000, 
      
        () => {
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={0}
      style={{  display: 'inline-block',  }}
    />
    
    <div className="flex homebtns justify-between w-96  items-center">
  <a href="#contact" className=' py-0 mt-2 px-11 but1 flex justify-center items-center  h-14 rounded-full   bg-gradient-to-br from-blue-700 to-primary text-lg text-white'>Hire Me</a>
  
<a 
  class="inline-block w-full but2 sm:w-fit rounded-full border-4 border-blue-700 hover:bg-slate-800 text-white mt-3" 
  href="\Mina Essam.pdf" 
  download>
  <span class="block bg-[#121212] hover:bg-slate-800 rounded-full px-7 py-3">
    Download CV
  </span>
</a>

</div>
    </div>
    <div className=' w-[450px] h-[450px] flex justify-center sm:mt-0  lg:mt-10 mr-5  rounded-full mina'>
    <img
        src="/person-playing-3d-video-games-device.jpg" 
        alt="mmm"
        className="w-[350px] h-[350px] hidden xl:flex rounded-full mt-12 object-cover "/></div>
      
</div>

   <hr className='border-slate-600 mt-5 2xl:hidden' />
    <div id='about' className='' >
<About/>
    </div>
     <div id='projects' >
<Projects/>
    </div>
     <div id='contact' className='' >
<Contact/>
    </div>
   
    </>
  )
}
