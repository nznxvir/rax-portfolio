import React from 'react'

const Aboutme = () => {
    return (
        <div id='aboutme' className='flex flex-row w-auto h-screen justify-around text-[#EEEEEE] m-10'>
            <div className='flex  flex-col items-center justify-center '>
                <div className='flex flex-row gap-5 items-center justify-center'>
                    <h1 className=' font-extrabold lg:h-21 lg:text-6xl md:h-14 md:text-5xl  text-[#00ADB5]'>About</h1>
                    <h1 className=' font-extrabold lg:h-21 lg:text-6xl md:h-14 md:text-5xl  text-[#EEEEEE] '>Me</h1>
                </div>
                <p className='text-lg font-normal text-justify w-2xl leading-6' >Fresh graduate of Bachelor in Computer Sciense with a CGPA of 3.74 and hands-on experience in web-based systems, mobile application development and Microsoft Power tools development. Proficient in Java ,
                    SQL, JavaScript, Dart and Microsoft Power Product. Contribution in MSE teams during internship with Lam
                    Research provided various experience on manufacturing system in semiconductor industry. I am eager to
                    apply my skill by contribute to innovative projects and grow as professional.
                </p>
            </div>
            <div className=' flex w-0.5 h-3/4 bg-[#EEEEEE] m-auto ml-0 mr-0 rounded-3xl'></div>
            <div className='flex flex-col justify-evenly pt-10'>
                <div className=' m-10 space-y-2 w-230'>
                    <div className='flex justify-center items-center mb-10'>
                        <h2 className='font-bold text-4xl text-[#00ADB5]'>Work Experiance</h2>
                    </div>
                    <h3 className='text-2xl font-bold lora-font'>Manufacturing System Intern</h3>
                    <div className='flex flex-row justify-between'>
                        <h3 className='text-lg font-bold lora-font text-[#00ADB5]'>Lam Research International </h3>
                        <h3 className='text-xl font-extrabold lora-font text-[#00ADB5]'>OCT 2024 - MARCH 2025</h3>
                    </div>
                    <h3 className='text-lg font-bold lora-font '>Batu Kawan, Penang</h3>
                    <p className='text-md font-medium lora-font leading-6 text-justify mt-2'>
                        Contributed to PowerApp development project for manufacturing, including Daily Compliance Checklist
                        App and PM Status App to optimize workflows and enhance usability.<br />
                        Developed Power BI dashboard for real time data visualization for Material Handshake and Daily
                        Compliance Checklist projects. <br />
                        Developed web-based project for MSE records.<br />
                        Participated in new system execution and testing to ensure the functionality and improvement of developed solutions.<br />
                        Collaborated with cross-functional teams to analyze requirements, design solutions and improve systemefficiency
                    </p>
                </div>
                <div className=' m-10 space-y-2 w-230'>
                    <div className='flex justify-center items-center mb-10'>
                        <h2 className='font-bold text-4xl text-[#00ADB5]'>Education</h2>
                    </div>
                    <h3 className='text-2xl font-bold lora-font'>Bachelor of Computer Science (Hons.)</h3>
                    <div className='flex flex-row justify-between'>
                        <h3 className='text-lg font-bold lora-font text-[#00ADB5]'>Universiti Teknologi MARA </h3>
                        <h3 className='text-xl font-extrabold lora-font text-[#00ADB5]'>OCT 2021 - JAN 2025</h3>
                    </div>
                    <h3 className='text-lg font-bold lora-font '>Tapah Road, Perak</h3>
                    <p className='text-md font-medium lora-font leading-6 text-justify mt-2'>
                        Contributed to PowerApp development project for manufacturing, including Daily Compliance Checklist
                        App and PM Status App to optimize workflows and enhance usability.<br />
                        Developed Power BI dashboard for real time data visualization for Material Handshake and Daily
                        Compliance Checklist projects. <br />
                        Developed web-based project for MSE records.<br />
                        Participated in new system execution and testing to ensure the functionality and improvement of developed solutions.<br />
                        Collaborated with cross-functional teams to analyze requirements, design solutions and improve systemefficiency
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Aboutme
