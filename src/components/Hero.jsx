import React from 'react'
// import Typed from 'react-typed';
import logo from '../assets/Logo_main.png';
import TypeIt from "typeit-react";


;
const Hero = () => {
  return (
    <div className="text-white">
    
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='md:text-xl text-[#05386b] font-bold p-2' > Welcome To My Website</p>
        
        <img className='sm:hidden max-w-[150px] mx-auto' src={logo} alt='/' />
        <h1 className='invisible sm:visible md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'> Mar-Tec</h1>
            <div className='flex justify-center items-center flex-col sm:flex-row'>
                <p className=' md:text-xl sm:text-2xl text-sm  font-bold mr-2'> Fast, Flexible Use </p>  
              


                
                <div className="App sm:text-xl text-[#379683] s font-bold text-sm" >
                  
                <TypeIt option={{ loop:true}} 
                getBeforeInit={(instance) => {
                    instance

                        .type(" Data Analis " )
                        .pause(750)
                        .move(-13)
                        .pause(500)
                        .type("Web Development&nbsp;")
                        .pause(750)
                        .move(13)
                        .pause(500)
                        .type("Embbeded System")
            
                    // Remember to return it!
                    return instance;
                    }}
                />
            
                  </div>
            
            </div>
            <p className='md:text-xl sm:text-1xl invisible sm:visible font-bold text-gray-500'> Mengembangkan Ilmu Teknologi yang ada sekarang dengan cara berfikir Komputasional</p>
            <button className='bg-[#05386b]  text-[#edf5e1] w-[200px] rounded-md font-bold my-6 mx-auto py-3'> Ayo Mulai</button>
            </div>
    </div>
  )
}

export default Hero