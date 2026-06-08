import React from 'react'
import Image from 'next/image'
import WebDev from  '@/public/WebDev.avif'

export default function page() {
    return (
        <>
            <div className='mb-6'>
                <h1 className='text-6xl font-semibold text-center'>Courses</h1>
            </div>

          
                     
            <div className='flex ml-5'>
               <div className='mb-4 border-2 px-2.5 py-2.5 shadow-3xl rounded-3xl'>
                 <Image className='rounded-2xl' src={WebDev} width={300} height={1200}  alt='sigma web devlopment'/>
                 <h1 className='font-medium text-2xl mt-2'>Sigma Web Development</h1>
                 <p className='text-gray-700'>Learn Html ,CSS ,MongoDb, NextJS.....</p>
              </div>   
            </div>         
        </>
    )
}
