import React from 'react'
import Image from 'next/image'
import contact from '@/public/contact.webp'

export default function Page() {
    return (
        <>
            <div className='flex flex-row'>

                <div className='mx-36 mt-10'>
                    <h1 className='text-3xl font-semibold mb-2'>
                        Contact Us
                    </h1>

                    <p className='mb-3'>
                        We are available for questions, feedback, or
                        collaboration opportunities. Let us know how
                        we can help!
                    </p>

                    <p>
                        Fill out the form and we will surely contact you
                        as we are happy to help
                    </p>

                    <Image
                        className='mb-14'
                        src={contact}
                        width={500}
                        height={1200}
                        alt='contact-us'
                    />
                </div>

                <div>
                    <form
                        className='shadow-2xl pr-32 ml-20 pl-24 my-10 mx-10 border-2 rounded-4xl'
                        method='POST'
                        action='https://formspree.io/f/mdajgkwn'
                    >

                        <p className='pt-4'>Name</p>
                        <input
                            className='shadow-md px-10 py-1 rounded-2xl my-5'
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            required
                        />

                        <p>Email</p>
                        <input
                            className='shadow-md px-10 py-1 rounded-2xl my-5'
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            required
                        />

                        <p>Country</p>
                        <input
                            className='shadow-md px-10 py-1 rounded-2xl my-5'
                            type='text'
                            name='country'
                            placeholder='Your Country'
                            required
                        />

                        <p>Phone Number</p>
                        <input
                            className='shadow-md px-10 py-1 rounded-2xl my-5'
                            type='text'
                            name='phone'
                            placeholder='Your Phone Number'
                            required
                        />

                        <p>Whatsapp Number</p>
                        <input
                            className='shadow-md px-10 py-1 rounded-2xl my-5'
                            type='text'
                            name='whatsapp'
                            placeholder='Your Whatsapp Number'
                            
                        />

                        <p>Subject</p>
                        <input
                            className='shadow-md px-10 py-1 rounded-2xl my-5'
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            required
                        />

                        <p>Message</p>
                        <textarea
                            className='shadow-md px-10 py-1 rounded-2xl my-5'
                            name='message'
                            placeholder='Enter your Message'
                            cols={25}
                            rows={3}
                            required
                        ></textarea>

                        <br />

                        <button
                            type='submit'
                            className='bg-black text-white rounded-full hover:bg-gray-900 px-10 py-3 mt-2 mb-6'>
                                Send Message
                        </button>

                    </form>
                </div>

            </div>
        </>
    )
}

export const metadata = {
    title: "MyCourse - Contact Us",
    description: "Contact us for any issue related to our website",
};