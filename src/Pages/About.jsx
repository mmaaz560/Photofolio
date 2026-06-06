import React from 'react'
import { useGlobal } from '../context/AppContext'
import { SlArrowRight } from 'react-icons/sl'
import { Navbardata, socialIcons } from "../data/navbardata";
const About = () => {
    const {colors} = useGlobal()
  return (
    <>
        <section className="w-full my-20 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6">        
          {/* Heading */}
          <h1 className="text-5xl about-heading md:text-6xl leading-tight">
            About
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
        <a href="/about">About</a>
      </div>
      <div className={` ${colors.text}container mx-auto w-[80%]  mt-15 grid lg:grid-cols-1 xl:grid-cols-2`}>
        <img src="https://bootstrapmade.com/content/demo/PhotoFolio/assets/img/profile-img.jpg" className="w-[75%] mx-auto right-0" alt="" />
        <div className="space-y-2 ">
            <h1 className="text-2xl font-semibold about-heading">UI/UX DesiProfessional Photographer from New Yorkgner & Web Developer.</h1>
            <p className='mt-5'><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
            <div className=" md:flex mt-5 gap-4">
              <ul className="unstyled space-y-3">
                 <li className="flex items-center gap-1">
                   <SlArrowRight className="text-sm text-[#4EC9B0]" />
                   <span><span className="font-semibold">Birthday:</span> January 1, 1990</span>
                 </li>
               
                 <li className="flex items-center gap-1">
                   <SlArrowRight className="text-sm text-[#4EC9B0]" />
                   <span><span className="font-semibold">Website:</span> www.example.com</span>
                 </li>
               
                 <li className="flex items-center gap-1">
                   <SlArrowRight className="text-sm text-[#4EC9B0]" />
                   <span><span className="font-semibold">Phone:</span> +123 456 7890</span>
                 </li>
               
                 <li className="flex items-center gap-1">
                   <SlArrowRight className="text-sm text-[#4EC9B0]" />
                   <span><span className="font-semibold">City:</span> New York, USA</span>
                 </li>
              </ul>
               
              <ul className="unstyled space-y-3">
                 <li className="flex items-center gap-1">
                   <SlArrowRight className="text-sm text-[#4EC9B0]" />
                   <span><span className="font-semibold">Age:</span> 30</span>
                 </li>
               
                 <li className="flex items-center gap-1">
                   <SlArrowRight className="text-sm text-[#4EC9B0]" />
                   <span><span className="font-semibold">Degree:</span> Master</span>
                 </li>
               
                 <li className="flex items-center gap-1">
                   <SlArrowRight className="text-sm text-[#4EC9B0]" />
                   <span><span className="font-semibold">Email:</span> email@example.com</span>
                 </li>
               
                 <li className="flex items-center gap-1">
                   <SlArrowRight className="text-sm text-[#4EC9B0]" />
                   <span><span className="font-semibold">Freelance:</span> Available</span>
                 </li>
               </ul>
            </div>
            <p className="mt-8">
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p>
        <p className="mt-8">
          Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.
        </p>
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

export default About