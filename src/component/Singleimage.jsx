import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import { useGlobal } from '../context/AppContext'
import { images } from '../data/images'

const Singleimage = () => {
    const {showmodel , setShowmodel , image } = useGlobal()
    const [number , setnumber] = useState(0)

    useEffect(()=>{
      setnumber(image.id - 1 || 0)
    }, [image])

  return (
    <>
     <div className={`fixed ${showmodel ? 'flex' : 'hidden'} top-0 w-full min-h-screen z-400  items-center justify-center  bg-black/70 `}>
        <IoCloseSharp onClick={()=>setShowmodel(false)} className='absolute top-5 right-5 text-3xl  cursor-pointer  font-semibold'/>
        <FaChevronRight onClick={()=>setnumber(number + 1)} className='absolute top-[50%] cursor-pointer select-none  right-5 text-2xl font-semibold'/>
        <FaChevronLeft onClick={()=>setnumber(number - 1)} className='absolute top-[50%]  cursor-pointer left-5 text-2xl select-none  font-semibold'/>
       <div className="w-[60%] h-full">
         <img src={images[number]?.image || null} className="w-full h-[90vh]" alt="png" />
         <div className="bg-gray-600 h-[10vh] p-3 ">
            {images[number]?.name}
         </div>
       </div>
     </div>
    </>
  )
}

export default Singleimage