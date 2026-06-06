import React from "react";
import { images } from "../data/images";
import Imagecard from "../component/Imagecard";
import Singleimage from "../component/Singleimage";
import { useGlobal } from "../context/AppContext";

const Home = () => {
    const {colors} = useGlobal()
  return (
    <>
    <Singleimage/>
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">        
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            I'm <span className="name">Jenny Wilson</span>
            <br />
            A Professional Photographer
            <br />
            From New York City
          </h1>
          {/* Description */}
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Blanditiis praesentium aliquam illum tempore incidunt
            debitis dolorem magni est deserunt sed qui libero.
            Qui voluptas amet.
          </p>

          {/* Button */}
          <button className={`bg-[#10826b] hover:bg-[#0a6151] ${colors.text} px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg active:scale-95`}>
            AVAILABLE FOR HIRE
          </button>

        </div>
      </section>

      {/* Images Section */}
      <section className={`container mx-auto px-4 py-10 1`}>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          
          {images.map((item, index) => {
            return <Imagecard {...item} key={index}/>;
          })}

        </div>

      </section>
    </>
  );
};

export default Home;