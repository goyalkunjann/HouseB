import React from 'react'

export const TableSection = () => {
  return (
    <section className='mt-[80px] mb-[60px] lg:max-w-[1290px] h-auto p-[40px] mx-auto flex flex-col justify-center gap-[35px] items-center w-full bg-[#A46254]'>
    <h2 className={'text-white text-[23px] w-[370px] leading-[28px] text-center'}>We serve our customers better than others</h2>
     <div className='w-full h-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-[27px] gap-[60px]'>
         <div className='grid grid-rows-6 gap-[20px] text-[17px] leading-5 font-medium text-center'>
            <div className='bg-[white] text-[#A46254] py-[17px]'>House Banao</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>Secure Escrow Service</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>Premium Quality Assurance</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>Mobile App Monitoring</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>Transparent Pricing</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>Guaranteed On-Time Delivery</div>
         </div>
           
         <div className='grid grid-rows-6 gap-[20px] text-[17px] leading-5 font-medium text-center'>
            <div className='bg-[white] text-[#A46254] py-[17px]'>Contractors</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>Insecure Payments, Higher Risk</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>Improper Quality Checks</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>Remote Monitoring</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>Cost keeps increasing</div>
            <div className='bg-[#BD7565] text-[white] py-[17px]'>No guarantee on timely delivery</div>
         </div>

     </div>
  </section>
  )
}




