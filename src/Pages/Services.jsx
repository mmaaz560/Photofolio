import React from 'react'
import { useGlobal } from '../context/AppContext'
import { datas } from '../data/datas'
import Innerdata from '../component/Innerdata'
import { Navbardata, socialIcons } from "../data/navbardata";
const Services = () => {
    const {colors} =useGlobal()
  return (
    <>
      <section className="w-full my-20 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">        
          {/* Heading */}
          <h1 className="text-5xl about-heading md:text-6xl leading-tight">
            Services
          </h1>
          {/* Description */}
          <p className={`${colors.text} text-lg md:text-xl max-w-2xl mx-auto leading-relaxed`}>
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
          </p>

          {/* Button */}
          <button className={`bg-[#4EC9B0] hover:bg-[#3aa894]  ${colors.text} px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg active:scale-95`}>
            AVAILABLE FOR HIRE
          </button>

        </div>
      </section>
       <div className="bg-gray-600 font-semibold gap-2 py-6 flex items-center w-full ps-15 h-4">
        <a href="/">Home</a>
        /
        <a href="/services">Services</a>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-12 px-20">
  {datas.map((item, index) => (
    <div key={index}
      className="bg-[#1d2332] p-10 hover:bg-[#4EC9B0] hover:transition-all duration-800 shadow-lg  " >
      <Innerdata {...item} />
    </div>
  ))}
</div>
<div className="my-5">
       <div className="flex items-center gap-3 mt-18">
       <div className="ps-20 text-gray-500 uppercase">
          pricing
       </div>
        <hr className="w-30 border-t border-[#4EC9B0]" />
     </div>
     <h1 className='about-heading text-4xl ps-20'>Check my adorable pricing</h1>
    </div>
    <div className="grid md:grid-cols-1 container w-[90%] mx-auto xl:grid-cols-2 gap-3">
      <div className="flex flex-col gap-3 px-3">
         <div className="flex items-center justify-between p-2">
          <h1 className="font-semibold">Portrait Photography</h1>
          <p className='text-[#4EC9B0]'>$160.00</p>
         </div>
          <hr className="w-full border-t border-dashed border-gray-400" />
         <div className="flex items-center justify-between p-2">
          <h1 className="font-semibold">Portrait Photography</h1>
          <p className='text-[#4EC9B0] ahout-heading'>$160.00</p>
         </div>
          <hr className="w-full border-t border-dashed border-gray-400" />
         <div className="flex items-center justify-between p-2">
          <h1 className="font-semibold">Portrait Photography</h1>
          <p className='text-[#4EC9B0] ahout-heading'>$160.00</p>
         </div>
          <hr className="w-full border-t border-dashed border-gray-400" />
      </div>
      <div className="flex flex-col gap-3 px-3">
         <div className="flex items-center justify-between p-2">
          <h1 className="font-semibold">Portrait Photography</h1>
          <p className='text-[#4EC9B0] ahout-heading'>$160.00</p>
         </div>
          <hr className="w-full border-t border-dashed border-gray-400" />
          <div className="flex items-center justify-between p-2">
          <h1 className="font-semibold">Portrait Photography</h1>
          <p className='text-[#4EC9B0] ahout-heading'>$160.00</p>
         </div>
        <hr className="w-full border-t border-dashed border-gray-400" />
         <div className="flex items-center justify-between p-2">
          <h1 className="font-semibold">Portrait Photography</h1>
          <p className='text-[#4EC9B0] ahout-heading'>$160.00</p>
         </div>
        <hr className="w-full border-t border-dashed border-gray-400" />
      </div>
    </div>
       <div className="my-5">
       <div className="flex items-center gap-3 mt-18">
       <div className="ps-20 text-gray-500 uppercase">
          Testimonials
       </div>
        <hr className="w-30 border-t border-[#4EC9B0]" />
     </div>
     <h1 className='about-heading text-3xl ps-20'>What they are saying</h1>
    </div>
     {/* footer */}
         <div className="footer bg-gray-800 text-center py-10">
            <p>© Copyright <span className="font-semibold">PhotoFolio</span> All Rights Reserved</p>
            <div className={`flex items-center ${colors.text} justify-center mt-2 gap-3`}>
              {socialIcons.map((item, index) => {
               return (
                <ul className="unstyled">
                  <li
                    key={index}
                    className="cursor-pointer text-gray-400 border border-gray-300 p-3 rounded-full hover:text-green-500 hover:border-green-400  duration-300"
                  >
                    {item.icon}
                  </li>
                  </ul>
                );
              })}
            </div>
            <p className="text-semibold text-sm mt-2">Designed by <a href="#" className="text-green-500 hover:text-green-600">BootstrapMade</a> </p>
         </div>
    </>
  )
}

export default Services