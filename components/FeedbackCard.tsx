import React from 'react'
import Image from 'next/image'
const FeedbackCard = ({ data }: any) => {
    return (
        <>
            <div className='p-3 rounded-lg shadow-md group hover:bg-sky-500 transition-all hover:scale-105'>

                <div className='flex justify-start items-center gap-x-3 p-2'>
                    <div className='rounded-full w-14 h-14'>
                        <Image
                            src={data.customerImage}
                            alt='Profile'
                            width={512}
                            height={512}
                            className='w-full'
                        />
                    </div>
                    <div>
                        <h1 className='text-base text-gray-600 font-medium group-hover:text-white'>
                            {data.customerName}
                        </h1>
                        <p className='text-sm text-gray-500 group-hover:text-gray-50'>
                            {data.customerEmail}
                        </p>
                    </div>
                </div>

                <div className='p-2 text-gray-700 text-sm group-hover:text-white'>
                    <p
                        className='flex items-center justify-start gap-x-2'
                    >Rate:

                        {[...Array(data.rate)].map((_, idx) => (
                            <span key={idx} className='text-orange-400 group-hover:text-orange-200'>
                                ★
                            </span>
                        ))}
                    </p>
                </div>

                <div className='p-2'>
                    <p className='text-sm text-gray-500 font-light group-hover:text-gray-50'>
                        {data.customerFeedback}
                    </p>
                </div>
            </div>
        </>
    )
}

export default FeedbackCard