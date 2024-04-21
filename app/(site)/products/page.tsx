'use client'
import CoverSection from '@/components/Cover'
import { useRouter } from 'next/navigation'
import React from 'react'

const Products = () => {
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
                            <button
                                className=''
                                onClick={() => router.push('#templates')}
                            >#templates</button>
                        </div>


                        <div className='mb-8' id='templates'>
                            <span className='text-sm font-medium text-sky-900 uppercase'>
                                Products
                            </span>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary'>
                                Templates
                            </h1>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products