import CoverSection from '@/components/Cover'
import React from 'react'

const Products = () => {
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
        </>
    )
}

export default Products