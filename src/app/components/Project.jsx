import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const projects = [
    {id: 1, title: 'MSE Web Dashboard', img: 'code4.png', desc: 'Lorem ipsum tut tutu'},
    {id: 2, title: 'Compliance App', img: 'code2.png', desc: 'Lorem ipsum tut tutu'},
    {id: 3, title: 'SEWA', img: 'code1.png', desc: 'Lorem ipsum tut tutu'},
    {id: 4, title: 'MSE Web Dashboard', img: 'code4.png', desc: 'Lorem ipsum tut tutu'},
]

const Project = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

      };

  return (
    /*<div className='flex items-center flex-col justify-center text-[#EEEEEE] w-screen h-screen'>
        <h1>Projects</h1>
    <div className='w-500 bg-[#EEEEEE20] p-20'>
      <Slider {...settings}>
        {projects.map((project) => (
          <div className='flex flex-col justify-between w-150 h-100 bg-[#EEEEEE] rounded-2xl'>
        <div>
        <img src='code2.png' alt='Code' className='size-40' />
        </div>
        <div className='flex flex-col w-auto h-100 items-start justify-between gap-2 bg-amber-100'>
            <h2>title</h2>
            <p>Loremfdwfwqfwq</p>
        </div>
    </div>
        ))}
      </Slider>
    </div>
  </div>*/
  <div className='flex flex-col bg-[#EEEEEE30] m-50 items-center'>
    <h1 className='font-extrabold lg:h-21 lg:text-6xl md:h-14 md:text-5xl text-[#00ADB5]'>My Projects</h1>
    <Slider className='w-' {...settings}>
        {projects.map((project) => (
          <div className='flex flex-col justify-between w-150 h-100 bg-[#EEEEEE] rounded-2xl'>
        <div>
        <img src='code2.png' alt='Code' className='size-40' />
        </div>
        <div className='flex flex-col w-auto h-100 items-start justify-between gap-2 bg-amber-100'>
            <h2>title</h2>
            <p>Loremfdwfwqfwq</p>
        </div>
    </div>
        ))}
      </Slider>
  </div>
  )
}

export default Project
