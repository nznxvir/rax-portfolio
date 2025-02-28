import React from 'react'
import { FaPaperPlane } from "react-icons/fa";

const Ideas = () => {
    return (
        <div id='idea' className='flex flex-row items-center h-screen text-[#EEEEEE]  bg-custom bg-cover bg-center m-10 gap-40 justify-center'>
            <div className='flex flex-col'>
                <div className='flex flex-col '>
                    <h1 className='font-extrabold lg:h-21 lg:text-6xl md:h-14 md:text-5xl text-[#00ADB5]'>Got a project in</h1>
                    <h1 className='font-extrabold lg:h-21 lg:text-6xl md:h-14 md:text-5xl text-[#EEEEEE]'>mind ?</h1>
                </div>
                <div className='flex '>
                    <img src='code4.png' alt='Code' className='size-80 ml-auto' />
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className=' flex flex-col'>
                    <div className='flex flex-row gap-10'>
                        <div className='flex flex-col gap-2 items-start'>
                            <h2 className='text-lg font-bold lora-font '>Your name</h2>
                            <input type='text' placeholder='Name' className='p-3 pl-5 pr-5 w-70 rounded-xl focus:outline-none bg-[#393E4680]'  />
                        </div>
                        <div className='flex flex-col gap-2 items-start'>
                            <h2 className='text-lg font-bold lora-font '>Your email</h2>
                            <input type='email' placeholder='Email' className='p-3 pl-5 pr-5 w-70 rounded-xl focus:outline-none bg-[#393E4680]'  />
                        </div>
            
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg font-bold lora-font '>Your message</h2>
                    <textarea placeholder='Message' className='w-150 h-70 p-5 bg-[#393E4680] rounded-2xl focus:outline-none text-lg'  />
                </div>
                <div className='flex flex-row p-2 pl-5 pr-5 w-fit items-center gap-2 bg-[#00ADB5] rounded-4xl text-[16px] font-semibold hover:cursor-pointer hover:bg-[#559397]'>
                    <p>Send Message</p>
                    <FaPaperPlane />
                </div>
            </div>
        </div>
    )
}

export default Ideas
