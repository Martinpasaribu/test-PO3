import React from 'react'

import { 
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
    FaInstagramSquare,

} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div> 
            <h1 className=" w-full text-3xl font-bold text-[#05386b]"> Martin Pasaribu</h1>
            <p className=" py-4 "> Mari mebangun teknologi yang terbarukan untuk keberlanusangan hidup </p>
            <div className='flex justify-between md:w-[75%] my-6 '>
            
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />

            </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
           <div>
                <h6  className="font-medium text-2xl  text-[#edf5e1]]"> Solusi</h6>
                <ul> 
                  <li  className="py-2 text-sm font-bold text-[#05386b] "> Analytics</li>
                  <li className="py-2 text-sm font-bold text-[#05386b]"> Commerce</li>
                  <li className="py-2 text-sm font-bold text-[#05386b]"> Insights</li>
                  <li className="py-2 text-sm font-bold text-[#05386b]"> Education</li>  
                </ul>
            </div> 

            <div>
            <h6  className="font-medium text-2xl  text-[#edf5e1]]"> Company</h6>
            <ul> 
              <li  className="py-2 text-sm font-bold text-[#05386b] "> About</li>
              <li className="py-2 text-sm font-bold text-[#05386b]"> Blog</li>
              <li className="py-2 text-sm font-bold text-[#05386b]"> Jobs</li>
              <li className="py-2 text-sm font-bold text-[#05386b]"> Press</li>  
            </ul>
        </div> 
            <div>
            <h6  className="font-medium text-2xl  text-[#edf5e1]]"> Legal</h6>
            <ul> 
            <li  className="py-2 text-sm font-bold text-[#05386b] "> Claim</li>
            <li className="py-2 text-sm font-bold text-[#05386b]"> Policy</li>
            <li className="py-2 text-sm font-bold text-[#05386b]"> Terms</li>
            <li className="py-2 text-sm font-bold text-[#05386b]"> Education</li>  
            </ul>
        </div>

            <div>
            <h6  className="font-medium text-2xl  text-[#edf5e1]]"> Support</h6>
            <ul> 
            <li  className="py-2 text-sm font-bold text-[#05386b] "> Pricing</li>
            <li className="py-2 text-sm font-bold text-[#05386b]"> Documention</li>
            <li className="py-2 text-sm font-bold text-[#05386b]"> Guides</li>
            <li className="py-2 text-sm font-bold text-[#05386b]"> API Status</li>  
            </ul>
        </div> 
         </div>
    
    </div>
  )
}

export default Footer