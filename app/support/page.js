import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='flex'>
     {/* <div><Image src={null} width={200} height={200} alt='qrcode'/></div>*/}
     <div>
        <h3 className='text-3xl font-semibold mb-2'>Support us</h3>
        <p>Please Donate us for more motivation so that we will<br/>
      provide more information</p></div>
    </div>
  )
}
