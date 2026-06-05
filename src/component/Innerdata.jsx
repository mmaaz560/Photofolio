import React from 'react'
import { FaHeartbeat } from 'react-icons/fa'

const Innerdata = ({ icon: Icon, head, para }) => {
  return (
    <>
      <div className=" py-2 space-y-3">
         <Icon className="text-6xl hover:bg-white hover:text-[#4EC9B0] rounded-full bg-[#4EC9B0] border p-4"/>
         <h1 className="text-xl font-bold">{head}</h1>
         <p className="text-lg">{para}</p>
      </div>
    </>
  )
}

export default Innerdata