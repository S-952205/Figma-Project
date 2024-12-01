import { Heebo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const heebo = Heebo({subsets: ['latin']})

const Hero = () => {
  return (
    <div className='mx-auto w-[95%] my-[66px] p-6 md:w-[1030px] md:h-[308px]
     flex flex-col-reverse md:flex-row items-center justify-between'>

        {/**Text div */}
        <div className='md:w-[521px] h-[305px] flex flex-col justify-evenly md:justify-between items-start'>

          <h1 className={`${heebo.className} font-[900] text-[30px] md:text-[48px] text-myBlack`}>
          Hi, I am John, <br/>
          Creative Technologist
          </h1>

          <p className={`${heebo.className} font-[400] text-[16px] text-myBlack`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

          <button className={`${heebo.className} w-[205px] h-[50] font-[500]
              text-[18px] bg-myPink text-white rounded-sm shadow-md shadow-black/60`}>
                Download Resume</button>

        </div>

        {/**Image div */}
        <div className='relative w-[292] h-[299]'>
            <Image
             alt='hero'
             src={'/assets/hero-elipse.png'}
             width={292}
             height={299}
            />

            {/**Elipse under image*/}
            <div className='bg-heroelipse w-[292] h-[299] rounded-full absolute -z-10 top-2 right-2'/>
        </div>
    </div>
  )
}

export default Hero
