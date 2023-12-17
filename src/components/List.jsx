import React from 'react'
import Cs1 from '../assets/cm1.jpg'
import prt from '../assets/prt.png'




  
const List = () => {

    const redirectToLink = () => {
        // Ganti URL berikut dengan URL yang ingin Anda tuju
        window.location.href = 'https://portofolio-martin12.vercel.app/';
      }
      
  return (

    <div className="w-full py-[10rem] px-4 bg-[#05386b]"> 
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8  " >
            <div className="w-full shadow-xl flex bg-[#5cd895] flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">  
                <img className="w-40 mx-auto mt-[-3rem] bg-white" src={prt} all="/" />
                <h2 className="text-2xl font-bold text-center py-8"> Web Portofolio  </h2>
                <p className=" text-center text-4xl font-bold ">500 K </p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8"> Html </p>
                    <p className="py-2 border-b mx-8 "> Css </p>
                    <p className="py-2 border-b mx-8 "> Java </p>
                </div>
                <button  onClick={redirectToLink} className='bg-[#05386b] text-[#5cd895] w-[200px] rounded-md font-bold my-6  mx-auto py-3'   > Ayo Lihat</button>
            </div>
            <div className="w-full shadow-xl flex bg-[#5cd895] flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">  
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Cs1} all="/" />
                <h2 className="text-2xl font-bold text-center py-8"> Web Portofolio  </h2>
                <p className=" text-center text-4xl font-bold ">500 K </p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8"> Html </p>
                    <p className="py-2 border-b mx-8 "> Css </p>
                    <p className="py-2 border-b mx-8 "> Java </p>
                </div>
                
                <button className='bg-[#05386b] text-[#5cd895] w-[200px] rounded-md font-bold my-6  mx-auto py-3' href='https://portofolio-martin12.vercel.app/'> Ayo Lihat</button>
            </div>

            <div className="w-full shadow-xl flex bg-[#5cd895] flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">  
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Cs1} all="/" />
                <h2 className="text-2xl font-bold text-center py-8"> Web Portofolio  </h2>
                <p className=" text-center text-4xl font-bold ">500 K </p>
                <div className="text-center font-medium">
                    <p className="py-2 border-b mx-8 mt-8"> Html </p>
                    <p className="py-2 border-b mx-8 "> Css </p>
                    <p className="py-2 border-b mx-8 "> Java </p>
                </div>
                <button className='bg-[#05386b] text-[#5cd895] w-[200px] rounded-md font-bold my-6  mx-auto py-3' href='https://portofolio-martin12.vercel.app/'> Ayo Lihat</button>
           </div>
        </div> 

    </div>
    
    )
}

export default List