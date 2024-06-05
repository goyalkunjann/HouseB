import React from 'react'
import { CommonHeading } from '../../Heading/CommonHeading';
import bedroom from "../../../../../public/assets/images/bedroom.png";
import bathroom from "../../../../../public/assets/images/bathroom.png";
import kitchen from "../../../../../public/assets/images/kitchen.png";
import roomimage01 from "../../../../../public/assets/images/roomimage01.png";
import roomimage02 from "../../../../../public/assets/images/roomimage02.png"
import roomimage03 from "../../../../../public/assets/images/roomimage03.png"
import roomimage04 from "../../../../../public/assets/images/roomimage04.png"
import interior01 from "../../../../../public/assets/images/interior01.png"
import interior06 from "../../../../../public/assets/images/interior06.png"
import Image from 'next/image';

export const Gallery = () => {
    const list = [
        {
       title:  "Living room",
    //    image: bedroom
    },
    {
        title:  "Bedroom",
        // image: bedroom
    },
    { 
        title:  "Bathroom",
    //    image: bathroom
    },
    {
        title:  "Kitchen",
        // image: kitchen
    }
        
    ]
  return (
    <section id='gallery' className='flex flex-col gap-[20px] mt-[30px] justify-center lg:max-w-[1290px] mx-auto w-full'>
       <CommonHeading className="text-center">Our Gallery</CommonHeading>
       <div className='flex flex-col gap-[10px] lg:px-0 px-[20px]'>
        {/* <ul className='flex lg:gap-[20px] gap-[12px] justify-start'>
           {list.map((item, index) => (
            <li key={index}>
                 <span>{item.image}</span>
                 {item.title}</li>
           ))}
        </ul> */}
       
        <div className='w-full h-auto grid grid-rows-2 lg:gap-[20px] gap-[60px] mb-[15px]'>
        {/* row 1 */}
       <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[28px] gap-[14px]'>
            <div>
                <Image src={interior01} alt='Living room image' height={489}></Image>
            </div>
          <div className='grid grid-cols-2 lg:gap-[25px] gap-[14px]'>
            <div className='grid grid-rows-2 lg:gap-[30px] gap-[14px]'>
                 <Image src={roomimage01} alt='Living room image' width={300} className='h-full'></Image>
                 <Image src={roomimage02} alt='Living room image'  width={300} className='h-full'></Image>
            </div>
            <div className='grid grid-rows-2 lg:gap-[30px] gap-[14px]'>
            <Image src={roomimage03} alt='Living room image'  width={300} className='h-full'></Image>
            <Image src={roomimage04} alt='Living room image'  width={300} className='h-full'></Image>
            </div>
          </div>
       </div>

       {/* row 2 */}
       <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[28px] gap-[14px]'>
       <div className='grid grid-cols-2 lg:gap-[25px] gap-[14px]'>
            <div className='grid grid-rows-2 lg:gap-[30px] gap-[14px]'>
                 <Image src={roomimage01} alt='Living room image'  width={300} className='h-full'></Image>
                 <Image src={roomimage02} alt='Living room image'  width={300} className='h-full'></Image>
            </div>
            <div  className='grid grid-rows-2 lg:gap-[30px] gap-[14px]'>
            <Image src={roomimage03} alt='Living room image'  width={300} className='h-full'></Image>
            <Image src={roomimage04}  alt='Living room image' width={300} className='h-full'></Image>
            </div>
          </div>
            <div>
                <Image src={interior06} alt='Living room image' height={489} ></Image>
            </div>
          
       </div>
    </div>
        </div>
       
    </section>
  )
}
