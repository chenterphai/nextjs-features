'use client'
import Image from 'next/image'
import React from 'react'

interface ProductCardsProps {
    data: any;
    normal: boolean;
    btnLabel: string;
}

const ProductCards: React.FC<ProductCardsProps> = ({ data, normal, btnLabel }) => {
    return (
        <div key={data.id}
            className='rounded-xl overflow-hidden border-2 border-transparent shadow-md transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:border-sky-100'
        >
            <div className='overflow-hidden relative'>
                <Image
                    src={data.Image.at(0).img}
                    alt={data.Name}
                    width={1200}
                    height={1200}
                    className=''
                />
                <div className={normal ? 'hidden' : 'absolute text-sm top-5 -right-10 bg-primary text-white px-10 py-2 rotate-45'}>
                    Best Selling
                </div>
            </div>
            <div className='px-4'>
                <h1 className='text-lg text-gray-500 py-3 truncate'>{data.Name}</h1>
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
                <div className='flex justify-between items-center my-2'>
                    <p
                        className='py-3 text-gray-700 text-lg font-medium'
                    >$ {data.Price}</p>
                    <button
                        className='text-white bg-primary px-3 py-1 rounded transition-all duration-150 ease-in-out hover:bg-sky-400 active:scale-95'
                    >{btnLabel}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCards