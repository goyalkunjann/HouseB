'use client'
import React from 'react'

export const CommonButton = ( {children, onclick = () => { }} ) => {
  const handleClick = () => {
    if (onclick) {
      onclick();
    }
  }
  return (
      <button className='rounded-full shadow-md py-[15px] px-[40px] text-white bg-[#A46254] text-[20px] leading-[10px] w-fit  mb-[10px]'  onClick={handleClick}>{children}</button>
 )
}



