import React from 'react'
import { Heebo } from 'next/font/google'

const heebo = Heebo({subsets: ['latin']})

const Recentpost = () => {
  return (
    <div className="w-[100%] md:w-[483px] h-[356px] bg-white flex items-center">
      <div className="w-[100%] p-4 md:w-[391px] h-[286px] m-auto flex flex-col items-start justify-between">
        <h2 className={`${heebo.className}text-[20px] md:text-[26px] font-[700]`}>
          Making a design system from scratch
        </h2>
        <div className="w-[100%] md:w-[301px] h-[42px] flex items-center justify-between">
          <p
            className={`${heebo.className}text-[16px] md:text-[18px] font-[400] text-black/70`}
          >
            12 Feb 2020
          </p>
          <p className="text-[16px] md:text-[18px] font-[400] text-black/70">|</p>
          <p
            className={`${heebo.className}text-[16px] md:text-[18px] font-[400]  text-black/70`}
          >
            Design , Pattern
          </p>
        </div>
        <p className={`${heebo.className}text-[16px] font-[400] `}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default Recentpost
