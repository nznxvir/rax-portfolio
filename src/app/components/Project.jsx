import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

 const projects = [
  {
    id: 1, title: 'MSE Web Dashboard', img: 'proj1.png', desc: `Contributed to PowerApp development project for manufacturing, including Daily Compliance Checklist App and PM Status App to optimize workflows and enhance usability.
Developed Power BI dashboard for real time data visualization for Material Handshake and Daily Compliance Checklist projects.
Developed web-based project for MSE records.
Participated in new system execution and testing to ensure the functionality and improvement of developed solutions.
Collaborated with cross-functional teams to analyze requirements, design solutions and improve system efficiency`, languages: ['JavaScript', 'CSS', 'HTML']
  },
  { id: 2, title: 'Compliance App', img: 'proj2.png', desc: 'Lorem ipsum tut tutu', languages: ['JavaScript', 'CSS', 'HTML'] },
  { id: 3, title: 'SEWA', img: 'code1.png', desc: 'Lorem ipsum tut tutu', languages: ['JavaScript', 'CSS', 'HTML'] },
  { id: 4, title: 'MSE Web Dashboard', img: 'code4.png', desc: 'Lorem ipsum tut tutu', languages: ['JavaScript', 'CSS', 'HTML'] },
] 

const Project = () => {


  /* Carousel Setting */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

  };

  return (
    <div id='proj' className='flex flex-col items-center w-full h-screen p-10 pt-30 text-white '>
      <h1 className='font-extrabold lg:h-21 lg:text-6xl md:h-14 md:text-5xl mb-10 text-[#00ADB5]'>My Projects</h1>
      <div className=' bg-[#EEEEEE30] w-3/4 h-3/4 p-10 rounded-2xl'>
        <Slider className='w-' {...settings}>
          {projects.map((project) => (
            <div className='flex flex-col items-start gap-3 bg-[#222831] rounded-xl '>
              <div className=" h-40 bg-cover rounded-t-xl "
                style={{ backgroundImage: `url(${project.img})` }}>
              </div>
              <div className='flex flex-col gap-2 p-5'>
                <h2 className='text-2xl font-bold lora-font' >{project.title}</h2>
                <div className='flex flex-wrap gap-2'>
                  {project.languages.map((lang, index) => (
                    <span key={index} className='bg-[#00ADB5]  text-white px-2 py-1 text-xs rounded-xl'>
                      {lang}
                    </span>
                  ))}
                </div>
                <p>{project.desc}</p>
              </div>
            </div>

          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Project


/* <div className="w-full h-60 bg-cover bg-center "
  style={{ backgroundImage: `url(${project.img})` }}> 
        </div> */
