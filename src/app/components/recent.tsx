import { Heebo } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import Recentpost from './recentpost'

const heebo = Heebo({subsets: ['latin']})

const Recent = () => {
  return (

    <div className='bg-recentBackground md:h-[502px] my-[66px] flex flex-col justify-between'>

      {/**Div One */}
     
      <div className='mx-auto w-[92%] md:w-[1030px] p-6 flex flex-col justify-between'>

        <div className='flex flex-row justify-between'>
          <h2 className={`${heebo.className} text-[22px] font-[500]`}>Recent Post</h2>
          <Link href={''} className={`${heebo.className} text-[22px] font-[500] text-myPink`}>View All</Link>
        </div>

        <div className='mt-[16px] space-y-3 md:space-y-0 flex flex-col md:flex-row justify-between'>
          <Recentpost />
          <Recentpost />
        </div>

      </div>


    </div>
  )
}

export default Recent
