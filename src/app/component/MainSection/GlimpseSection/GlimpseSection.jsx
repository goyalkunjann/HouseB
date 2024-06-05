import React from 'react'
import { CommonHeading } from '../../Heading/CommonHeading';
import glimpse01 from "../../../../../public/assets/images/glimpse01.png";
import glimpse02 from "../../../../../public/assets/images/glimpse02.png";
import glimpse03 from "../../../../../public/assets/images/glimpse03.png";
import Image from 'next/image';

export const GlimpseSection = () => {
  const data =[
    {icon: glimpse01, altText: 'Modern 4BHK penthouse', title: 'Modern 4BHK penthouse, Bangalore'},
    {icon: glimpse02, altText: 'Contemporary 3BHK penthouse', title: 'Contemporary 3BHK penthouse, Delhi'},
    {icon: glimpse03, altText: 'Elegant 2BHK flat', title: 'Elegant 2BHK flat, Noida'},
  ]
  return (
   <section  className='flex flex-col gap-[20px] lg:max-w-[1290px] w-full mx-auto mb-[30px]'>
     <CommonHeading className={"lg:text-start text-center"}>Get a glimpse of Housebanao homes</CommonHeading>
     <div className='flex  items-center justify-between lg:flex-row flex-col gap-[26px] lg:gap-0  lg:px-0 px-[20px]'>
     {data.map((item, index) => (
         <div className='relative flex items-center flex-col shadow-xl onhoverCards' key={index}>
         <Image src= {item.icon} height={350} alt={item.altText}/>
         <p className='absolute bottom-0 font-semibold drop-shadow-md  bg-black bg-opacity-50 text-white w-full text-center py-[20px] opacity-0' >{item.title}</p>
        </div>
     ))}
        
     </div>
   </section>
  )
}
