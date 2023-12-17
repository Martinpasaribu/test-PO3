import React from 'react'
import Me1 from '../assets/me1.jpg';

const Kerja = () => {
  return (

    <div className=' w-full bg-[#05386b] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'> 
        <img className='w-[500px] mx-auto my-4' src={Me1} alt='/' />
            <div className='flex flex-col justify-center'> 
            <p className='text-[#edf5e1] font-bold text-3xl '> Developer Website </p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Mengembangkan Website yang menarik </h1>
            <p>  Lorem ipsum dolor sit amet </p>
            <button className='bg-[#5cd895] text-[#05386b] w-[200px] rounded-md font-bold my-6 md:mx-0 mx-auto py-3'> Ayo Cari Tau</button>
            </div>
        </div>
    </div>

  )
}

export default Kerja