import React from 'react'
import Image from 'next/image'

interface ServiceCardsProps {
    items: any
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ items }) => {
    return (
        <>
            <div
                key={items.title}
                className='shadow-sm border-2 border-gray-50 overflow-hidden rounded-md flex flex-col bg-sky-50'
            >
                <div className=''>
                    <Image
                        src={items.image?.at(0).img}
                        alt='Image'
                        width={1000}
                        height={1000}
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