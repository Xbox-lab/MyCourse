import React from 'react'
import Image from 'next/image'
import About from '@/public/About.jpg'

export default function page() {
  return (
    <>
    <div className='flex flex-row items-center mx-auto'>
    <div className='my-5 h-max mx-2 flex-col'>
      <h1 className='font-bold text-7xl underline my-5'>About Us</h1>
      <p className='text-2xl font-medium my-8 mx-2'>Welcome to MyCourse, where we are dedicated to bring
        best courses and tutorial directly to our website. our mission<br />
        is to provide Good courses that help everyday in life. We are proud<br />
        to serve a growing community of customers who value sustainability,
        innovation, and exceptional design.</p>
    </div>

    <div className='my-5  mx-2 flex-col'>
        <Image width='900' height='1200' quality={200} src={About} alt='About us'/>
    </div>
    </div>
    </>
  )
}

export const metadata = {
  title: "MyCourse - About Us",
  description: "About us",
};