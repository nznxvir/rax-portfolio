'use client';
import React from 'react'
import { FiInstagram, FiYoutube, FiHome, FiPhone, FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <footer className='flex flex-col p-15 items-center justify-between text-[#EEEEEE] gap-8 '>
            <div className='flex flex-row justify-between items-center gap-15'>
                <div className='flex flex-row items-center gap-2 text-md hover:text-[#00ADB5] hover:cursor-pointer'>
                    <FiHome />
                    <span className='font-light '>Home</span>
                </div>
                <div className='flex flex-row items-center gap-2 text-md hover:text-[#00ADB5] hover:cursor-pointer'>
                    <FiUser />
                    <span className='font-light '>About me</span>
                </div>
                <div className='flex flex-row items-center gap-2 text-md hover:text-[#00ADB5] hover:cursor-pointer'>
                    <FiPhone />
                    <span className='font-light '>Contact </span>
                </div>
            </div>
            <div className=' flex flex-row justify-between items-center gap-5'>
                <button onClick={() => window.open('https://www.linkedin.com/in/najminazhanzainurin', '_blank', 'noopener,noreferrer')}  className='flex items-center justify-center size-10 bg-[#eeeeee18] rounded-full text-xl hover:bg-[#00ADB5] hover:cursor-pointer '>
                    <FaLinkedin />
                </button>
                <button  onClick={() => window.open('https://www.instagram.com/nznxavir', '_blank', 'noopener,noreferrer')}className='flex items-center justify-center size-10 bg-[#eeeeee18] rounded-full text-xl hover:bg-[#00ADB5] hover:cursor-pointer'>
                    <FiInstagram />
                </button>
                <button onClick={() => window.open('https://www.instagram.com/nznxavir', '_blank', 'noopener,noreferrer')} className='flex items-center justify-center size-10 bg-[#eeeeee18] rounded-full text-xl hover:bg-[#00ADB5] hover:cursor-pointer'>
                    <FaXTwitter />
                </button>
                <button className='flex items-center justify-center size-10 bg-[#eeeeee18] rounded-full text-xl hover:bg-[#00ADB5] hover:cursor-pointer'>
                    <FiYoutube />
                </button>
            </div>
            <div className='flex items-end justify-end text-center font-extralight text-lg text-[#EEEEEE]'>
                Terms of Service - Privacy Policy
            </div>
        </footer>
    )
}

export default Contact
