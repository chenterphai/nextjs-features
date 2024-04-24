'use client'


import CoverSection from '@/components/Cover'
import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const About = () => {



    return (
        <>
            <CoverSection >
                <div className='container-primary'>
                    <div className='mb-10'>
                        <h1 className='text-4xl md:text-5xl text-white font-medium text-center md:text-left mb-8'>
                            We make your
                        </h1>
                        <h1 className='text-center md:text-left text-4xl md:text-5xl text-white font-medium'>business
                            <span className='text-sky-500 text-3xl md:text-4xl px-3 rounded-lg uppercase font-medium bg-white ml-2'>better</span>
                        </h1>
                    </div>

                    <div className='flex items-center justify-center md:justify-start'>
                        <div>
                            <Link
                                href={'/services'}
                                className='bg-primary transition-all group text-base md:text-xl text-center text-white pr-1 pl-5 py-3 rounded-md flex items-center hover:pr-5 active:scale-95'
                            >
                                Find Your Needs
                                <FaArrowRight size={16}
                                    className='opacity-0 group-hover:opacity-100 group-hover:ml-5 transition-all duration-150 ease-in-out'
                                />
                            </Link>
                        </div>
                    </div>

                </div>
            </CoverSection>

            <div className='container-primary py-10'>
                <div className="row">
                    <div className="col-md-12">
                        <h1
                            className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary font-medium'
                        >About</h1>
                        <p className='text-sm md:text-base text-gray-400'>
                            NYT Technology
                        </p>
                        <p className='text-sm md:text-base text-gray-500 mt-8 font-light'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quisquam debitis dolorum voluptatum consequuntur explicabo. Esse omnis cumque suscipit alias perspiciatis, eaque velit adipisci tenetur expedita quasi! Ratione, veniam rem!
                        </p>
                        <p className='mt-8 text-sm md:text-base text-sky-900'>
                            Our mission is to empower businesses with cutting-edge technology solutions, seamlessly integrating innovation and expertise to drive sustainable growth and success. We strive to be a trusted partner, delivering tailored IT services that optimize efficiency, enhance productivity, and ensure security. With a commitment to excellence and customer satisfaction, we aim to exceed expectations, foster long-term relationships, and become the catalyst for our clients digital transformation journeys.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About