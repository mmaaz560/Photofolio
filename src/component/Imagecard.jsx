import React from "react";
import { FiMaximize2 } from "react-icons/fi";
import { ImLink } from "react-icons/im";
import { useGlobal } from "../context/AppContext";

const Imagecard = ({ id, image, name }) => {
  const {showmodel , setShowmodel , setimage} = useGlobal()
  return (
    <div className="rounded-md overflow-hidden relative group cursor-pointer">      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 duration-300 z-10 flex items-center justify-center gap-1 p-4">
      <ImLink />
      <FiMaximize2 onClick={()=>{setShowmodel(true); setimage({image,name})}} /> 

      </div>
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-65 object-cover group-hover:scale-110 duration-300"
      />
      
    </div>
  );
};

export default Imagecard;