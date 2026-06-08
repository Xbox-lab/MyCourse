import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='bg-black text-white flex justify-between px-8 items-center h-14'>
        <div className='font-bold text-3xl'>MyCourse</div>
        <ul className='flex gap-15'>
            <Link href="/"><li className='hover:underline cursor-pointer'>Home</li></Link>
            <Link href="/about"><li className='hover:underline cursor-pointer'>About</li></Link>
            <Link href="/contact"><li className='hover:underline cursor-pointer'>Contact</li></Link>
            <Link href="/support"><li className='hover:underline cursor-pointer'>Support</li></Link>
        </ul>
      </nav>
    </div>
  )
}

