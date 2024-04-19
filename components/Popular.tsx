'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ServiceCards from './ServiceCards'

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

                            <h1 className="home-title">
                                Popular Services
                            </h1>

                            <Link
                                href={'/services'}
                                className="text-primary md:text-sm text-xs"
                            >See All</Link>

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