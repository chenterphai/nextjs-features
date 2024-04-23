'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ServiceCards from './ServiceCards'
import { FaArrowRight } from 'react-icons/fa'
import Button from './Button'

interface POPULAR_SERVICES_PROPS {
    data: any
}

const PopularServices: React.FC<POPULAR_SERVICES_PROPS> = ({
    data
}) => {
    return (
        <>
            <div className="container-primary py-10">

                <div className="row">
                    <div className="col-md-12 mb-8">
                        <div className="flex justify-between items-center">
                            <div className=''>
                                <span className='font-semibold text-sky-800 text-sm md:text-base'>
                                    Services
                                </span>
                                <h1 className="home-title">
                                    Popular Services
                                </h1>
                            </div>

                            <Button link={'/services'} >See All</Button>

                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <div className='grid grid-cols-2 md:grid-cols-3 xl:gap-y-0 gap-y-8 lg:grid-cols-4 xl:grid-cols-5 gap-x-8'>
                            {/* Card */}
                            {data && data?.map((items: any) => (
                                <ServiceCards items={items} key={items.id} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PopularServices