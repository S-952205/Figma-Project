import React from 'react'
import { Heebo } from 'next/font/google'
import Image from 'next/image'

const heebo = Heebo({ subsets: ['latin'] })

const Feature2 = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row space-x-8'>

    {/*first column */}
    <div className='mt-[26px] w-[100%] ml-[20px] md:ml-[0px] md:w-[246px] h-[180px]'>
      <Image
        alt='feat2'
        src={'/assets/rect32.png'}
        width={246}
        height={180}
        className='rounded-[6px]'

      />
    </div>

    {/*second column */}
    <div className=''>
      <div className='mt-[26px] w-[100%] md:w-[663px] flex flex-col justify-between space-y-2'>
        <h2 className={`${heebo.className} font-[700] text-[21px] md:text-[30px]`}>Designing Dashboards</h2>

        <div className='flex items-center space-x-6'>
          <p className={`${heebo.className} w-[68px] h-[24px] rounded-[50px] font-[700] text-[18px] text-center bg-myPink text-white`}>2020</p>
          <p className={`${heebo.className} font-[400] text-[20px] text-black/60`}>Dashboard</p>
        </div>


        <p className={`${heebo.className} font-[300] text-[18px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</p>
      </div>
    </div>
  </div>
       
  
  )
}

export default Feature2
