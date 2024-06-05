import React from 'react'
import interior01 from '../../../../../../public/assets/images/interior01.png';
import interior02 from '../../../../../../public/assets/images/interior02.png';
import interior03 from '../../../../../../public/assets/images/interior03.png';
import interior04 from '../../../../../../public/assets/images/interior04.png';
import interior05 from '../../../../../../public/assets/images/interior05.png';
import interior06 from '../../../../../../public/assets/images/interior06.png';
import Image from 'next/image';

export const Gallery = () => {
  return (
    <div className='w-full h-auto grid grid-rows-2 gap-[20px] my-[28px] lg:px-0 px-[20px]'>
        {/* row 1 */}
       <div className='grid lg:grid-cols-2 grid-cols-1 gap-[28px]'>
            <div>
                <Image src={interior01} alt='Interior design image' height={489}></Image>
            </div>
          <div className='grid grid-cols-2 gap-[25px]'>
            <Image src={interior02} alt='Interior design image'></Image>
            <Image src={interior03} alt='Interior design image'></Image>
          </div>
       </div>

       {/* row 2 */}
       <div className='grid lg:grid-cols-2 grid-cols-1 gap-[28px]'>
       <div className='grid grid-cols-2 gap-[25px]'>
            <Image src={interior04} alt='Interior design image'></Image>
            <Image src={interior05} alt='Interior design image'></Image>
          </div>
            <div>
                <Image src={interior06} alt='Interior design image'></Image>
            </div>
          
       </div>
    </div>
  )
}
