'use client'
import Components from '@/components/Components'
import Course from '@/components/Course'
import CoverSection from '@/components/Cover'
import Ebook from '@/components/Ebook'
import Peripherals from '@/components/Peripherals'
import Template from '@/components/Template'
import { useRouter } from 'next/navigation'
import React from 'react'

const Products = () => {

    const navigate = [
        { link: '#template' },
        { link: '#components' },
        { link: '#ebook' },
        { link: '#course' },
        { link: '#pc-peripherals' },
    ]

    const router = useRouter()

    return (
        <>
            <CoverSection>
                <div className='container-primary py-10'>
                    <div className='mb-10'>
                        <h1 className='text-4xl md:text-5xl text-white font-medium text-center md:text-left mb-8'>
                            Find Your Needs
                        </h1>
                        <h1 className='text-center md:text-left text-4xl md:text-5xl text-white font-medium'>with
                            <span className='text-sky-500 text-3xl md:text-4xl px-3 rounded-lg uppercase font-medium bg-white ml-2'>NYT</span> Products
                        </h1>
                    </div>
                </div>
            </CoverSection>

            <div className='container-primary py-10'>
                <div className="row">
                    <div className="col-md-12">

                        <div className='flex justify-between mb-8'>
                            {navigate.map((items) => (
                                <button
                                    key={items.link}
                                    className='text-sky-500 bg-sky-50 md:px-3 px-2 py-1 rounded md:text-sm text-xs'
                                    onClick={() => router.push(items.link)}
                                >{items.link}</button>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
            <Template className='mb-16' />
            <Components className='mb-16' />
            <Ebook className='mb-16' />
            <Course className='mb-16' />
            <Peripherals className='' />
        </>
    )
}

export default Products