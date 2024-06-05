'use client'
import React from 'react'
import { CommonButton } from '../Button/CommonButton'
import { HeroSectionButton } from '../Button/HeroSectionButton'
import { useDispatch } from 'react-redux'
import { SCREENS } from '../Utils/CustomModal/Modal'
import { toggleModal } from '../../store/slice/slice'



export const HeroSectionContent = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      toggleModal({
        screen: SCREENS.LEAD_POPUP,
        visible: true,
      })
    );
  }
  


  return (
   <>
     <section className='lg:max-w-[1290px] w-full mx-auto h-auto absolute  top-[32%] left-0 right-0'>
     <div className=' flex flex-col lg:w-[500px] w-full pl-[34px] '>
            <div className=' flex flex-col w-[330px] gap-[10px]  text-[40px] font-semibold leading-[37px]'>
                <h1 className='text-black '>Construct your </h1>
                <h1 className='text-[#A46254]'>Dream Home</h1>
           </div>
           <p className='text-[15px] leading-[24px] lg:w-[377px] w-[230px] font-medium mt-[8px] mb-[30px]'>Hassle free Interiors and Construction from start to finish.</p>
           <CommonButton onclick={handleClick}>Start your construction</CommonButton>
           <div className='flex items-center text-[12px] leading-[17px] gap-[12px] mt-[10px] font-medium'>
               Popular: 
              <HeroSectionButton onclick={handleClick} title={"Interior designing"} />
              <HeroSectionButton onclick={handleClick} title={"End to end construction"}/>
           </div>
      </div>
     </section>
   </>
  )
}
