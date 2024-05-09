'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

interface ProductCardsProps {
    data: any;
    normal: boolean;
    btnLabel: string;
    btnLink?: string
}

const ProductCards: React.FC<ProductCardsProps> = ({ data, normal, btnLabel, btnLink }) => {
    const router = useRouter()
    return (
        <div key={data.id}
            className='rounded-xl flex flex-1 flex-col overflow-hidden border-2 border-transparent shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:border-sky-100'
        >
            <div className='overflow-hidden relative h-full w-full flex'>
                <Image
                    src={data.Image.at(0).img}
                    alt={data.Name}
                    width={1200}
                    height={1200}
                    // col2 = 284px col1 = 449px
                    className='object-cover'
                />
                <div className={normal ? 'hidden' : 'absolute text-sm top-5 -right-10 bg-primary text-white px-10 py-2 rotate-45'}>
                    Best Selling
                </div>
            </div>
            <div className='px-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-base text-gray-500 py-3 truncate'>{data.Name}</h1>
                    <p
                        className='py-3 text-sky-900 text-base font-semibold w-40 text-right'
                    >$ {data.Price}</p>
                </div>

                <p
                    className='text-sm text-gray-400 mb-2 line-clamp-2'
                >
                    {data.Description}
                </p>

                <div className='flex justify-between items-center my-2 mb-4'>
                    <div>
                        {[...Array(data.Rate)].map((_, index) => (
                            <span
                                key={index}
                                className={"text-orange-400 mr-1"}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <button
                        onClick={() => router.push(`/${btnLink}/${data.id}`)}
                        className='text-white bg-primary px-3 py-1 rounded transition-all duration-150 ease-in-out hover:bg-sky-400 active:scale-95'
                    >{btnLabel}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCards