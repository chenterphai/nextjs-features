'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ServiceCardsProps {
    items: any
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ items }) => {
    const router = useRouter()
    return (
        <>
            <div
                onClick={() => router.push(items.link)}
                key={items.title}
                className='shadow-sm border-2 group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-gray-50 overflow-hidden rounded-xl flex flex-col bg-sky-50 cursor-pointer active:scale-95'
            >
                <div className='overflow-hidden'>
                    <Image
                        src={items.image?.at(0).img}
                        alt='Image'
                        width={1000}
                        height={1000}
                        className='transition-all ease-in-out duration-200 group-hover:scale-105'
                    />
                </div>
                <div className='p-3'>
                    <h1>{items.title}</h1>
                </div>
            </div>
        </>
    )
}

export default ServiceCards