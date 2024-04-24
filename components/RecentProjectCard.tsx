'use client';
import React from 'react'
import Image from 'next/image';
interface RecentProjectProps {
    data: any;
}
const RecentProjectCard = ({ data }: RecentProjectProps) => {
    return (
        <>
            <div className='flex flex-col space-y-2'>
                <div className='overflow-hidden rounded-3xl'>
                    <Image
                        src={data.image?.at(0).img}
                        alt='Image'
                        width={1280}
                        height={856}
                        className='w-full'
                    />
                </div>
                <div className='p-2 flex flex-col space-y-2'>
                    <h1 className='text-lg font-medium truncate text-gray-500'>
                        {data.title}
                    </h1>
                    <p className='text-sm text-gray-400 text-ellipsis overflow-hidden font-light wrap-text'>
                        {data.subtitle}
                    </p>
                </div>
            </div>
        </>
    )
}

export default RecentProjectCard