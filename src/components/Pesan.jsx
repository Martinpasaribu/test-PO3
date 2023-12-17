import React from 'react'

const Pesan = () => {
  return (

    <div className="w-full py-16 text-[#05386b] px-4">
        <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3"> 
            <div className=' lg:col-span-2 my-4'> 
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Ingin Tips & Trick </h1>
                <p> Masuk Atau Kirim Pesan untuk mengetahui kabar terbaru</p>
            </div>
            <div className="my-4"> 
                <div className=" flex flex-col sm:flex-row items-center justify-between w-full"> 
                    <input className="p-3 flex w-full rounded-md text-[[#05386b]" type='email' placeholder='Masukan Email'/>
                    <button className='bg-[#05386b] text-[#5cd895] w-[200px] rounded-md font-bold ml-4 my-6 px-6 py-3'>Kirim</button> 
                </div>
                <p>Kami peduli dengan keamanan data anda. Baca   <span className='text-[#edf5e1] font-bold'>Privacy Policy </span> Kami</p>
            </div>
        </div>
    </div>
  )
}

export default Pesan 