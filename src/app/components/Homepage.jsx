import React from 'react'
import { FiDownload } from "react-icons/fi";


const Homepage = () => {
    return (
        <div id='home' className='relative text-[#EEEEEE] w-screen h-screen'>
            <div className='flex flex-col items-start lg:w-2xl md:w-lg space-y-4 absolute lg:top-35 lg:left-100 md:top-30 md:left-40  '>
                <h1 className=' font-extrabold lg:h-21 lg:text-7xl md:h-14 md:text-5xl  text-[#00ADB5] typing-effect'>Hello, I'm Najmi</h1>
                <p className='text-lg font-normal text-justify '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi ipsa eos eligendi, dicta temporibus sit hic fugit ab quo sint sequi commodi error facere doloremque! Eligendi beatae doloremque voluptas!</p>
            </div>
            <img src='code1.png' alt='Code' className='absolute lg:right-90 lg:top-60 lg:size-110 md:right-30 md:top-75 md:size-80 '/>
            <img src='code3.png' alt='Code' className='absolute lg:size-70 lg:left-40 lg:top-45 md:size-55 md:left-0 md:top-45'/>
            <div className='flex flex-row items-center  gap-5 absolute lg:top-95 lg:left-100 md:top-90 md:left-40'>
                <button className='flex p-3 w-30 justify-center items-center bg-[#00ADB5] rounded-4xl text-[16px] font-semibold hover:cursor-pointer hover:bg-[#559397]'>
                    Hire Me
                </button>
                <div className='flex flex-row p-3 items-center gap-2 bg-[#00ADB5] rounded-4xl text-[16px] font-semibold hover:cursor-pointer hover:bg-[#559397]'>
                    <p>Download CV</p>
                    <FiDownload  />
                </div>
            </div>
        </div>
       /* <div className="relative text-[#EEEEEE] w-screen h-screen flex items-center ">
        <div className="flex flex-col items-start space-y-4 absolute top-10 md:top-20 lg:top-35 lg:left-100  ">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#00ADB5]">
            Hello, I'm Najmi
          </h1>
          <p className="text-lg md:text-xl max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-[#00ADB5] rounded-lg text-white font-semibold hover:bg-[#5959397]">
              Hire Me
            </button>
            <button className="px-4 py-2 flex items-center bg-[#00ADB5] rounded-lg text-white font-semibold hover:bg-[#5959397]">
              Download CV <FiDownload className="ml-2" />
            </button>
          </div>
        </div>
  

        <div className="absolute bottom-0 right-0 hidden md:block">
          <img src="code1.png" alt="Code Illustration" className="w-60 md:w-80 lg:w-96" />
        </div>
      </div>*/
        
    );
}

export default Homepage
