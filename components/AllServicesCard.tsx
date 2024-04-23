'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
interface AllServicesCardProps {
    data: any;
}

const AllServicesCard = ({ data }: AllServicesCardProps) => {

    const router = useRouter()

    return (
        <div
            onClick={() => router.push(`/services/${data.id}`)}
            className='relative bg-white hover:bg-primary transition-all duration-200 ease-in-out group p-3 shadow-md border border-primary/60 rounded-xl hover:shadow-xl cursor-pointer hover:scale-105 active:scale-95'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='transition-all duration-200 ease-in-out text-lg text-primary text-center mt-6 group-hover:text-white'>
                    {data.title}
                </h1>
                <p className='text-gray-400 transition-all duration-200 ease-in-out text-center text-sm py-3 group-hover:text-gray-50 font-light'>
                    {data.subtitle}
                </p>
            </div>
            <div className='absolute transition-all duration-200 ease-in-out -top-7 bg-white left-1/2 -translate-x-1/2 w-14 h-14 border border-primary/60 group-hover:scale-105 rounded-full'>
                <Image
                    className='scale-95 w-full'
                    src={data.icon}
                    alt='Icons'
                    width={512}
                    height={512}
                />
            </div>
        </div>
    )
}

export default AllServicesCard