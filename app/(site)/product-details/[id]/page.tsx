'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image';
import React, { useState } from 'react'
import { IoCubeOutline } from 'react-icons/io5';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductImageContainer } from '@/components/ProductImage';

export default function ProductDetails({
    params: { id }
}: any) {
    const supabase = supabaseClient();
    const [data, setData] = React.useState<any[] | null>(null)
    const [_data, _setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        fetchData()
    })
    const fetchData = async () => {
        const { data, error } = await supabase.from('products').select('*').eq('id', id)
        if (error) throw error
        setData(data)

        const { data: _data, error: _error } = await supabase.from('products').select('*').eq('product_category', data.at(0).product_category).limit(4);
        if (_error) throw _error
        _setData(_data)
    }

    const [image, setImage] = useState(0)

    const handlerChangeImage = (e: any) => {
        setImage(e)
    }

    return (
        <div className='container-primary py-10'>

            <div className='grid md:grid-cols-12 grid-cols-1 gap-8 relative'>

                <div className='col-span-6 p-5 md:p-0'>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-gray-500 md:text-3xl font-medium text-lg'>{data?.at(0).Name}</p>
                        <p className='text-xs md:text-base font-light text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none'>{data?.at(0).Description}</p>
                        <div className=''>
                            <p className='text-gray-500 text-xs md:text-base'>
                                <span className='mr-2'>{data?.at(0).Rate}.0</span>
                                {[...Array(data?.at(0).Rate)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`${data?.at(0).Rate <= 0 ? 'text-gray-200 mr-1' : 'text-orange-400 mr-1'} text-xs md:text-base`}

                                    >
                                        ★
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className='relative overflow-hidden rounded-xl mt-3'>
                        <div
                            className='flex items-start pt-4'
                        >
                            <Image
                                src={data?.at(0).Image?.at(image).img}
                                alt='Image'
                                width={1200}
                                height={1200}
                                className='rounded-xl'
                            />
                        </div>

                        <div className='grid grid-cols-4 gap-3 mt-3'>
                            <ProductImageContainer data={data?.at(0).Image?.at(0)} onClick={() => handlerChangeImage(0)} />
                            <ProductImageContainer data={data?.at(0).Image?.at(1)} onClick={() => handlerChangeImage(1)} />
                            <ProductImageContainer data={data?.at(0).Image?.at(2)} onClick={() => handlerChangeImage(2)} />
                            <ProductImageContainer data={data?.at(0).Image?.at(3)} onClick={() => handlerChangeImage(3)} />
                        </div>
                    </div>
                </div>


                <div className='col-span-6 flex flex-col space-y-3 p-5'>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-gray-600 text-xl font-medium'>About product</p>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis dolorum, laudantium nostrum illo nisi ullam, exercitationem deserunt quam aliquam sunt iusto porro explicabo tenetur amet, fuga quia quisquam quae.</p>
                    </div>
                    <div className='flex w-full'>
                        <button
                            className='border p-3 w-full rounded font-medium text-lg transition-all duration-100 ease-in-out bg-sky-500 text-white hover:bg-sky-400 active:scale-95'
                        >
                            Contact
                        </button>
                    </div>
                    <div className='rounded-sm'>
                        <p
                            className='text-gray-600 text-xl py-5'
                        >Similar Product</p>
                        <div className='grid md:grid-cols-1 xl:grid-cols-2 gap-4'>
                            {_data && _data?.map((items, idx) => (
                                <div
                                    key={idx}
                                    className='p-6 bg-gray-50 rounded-md flex flex-col space-y-2'
                                >
                                    <Image
                                        src={items.Image?.at(0).img}
                                        alt='Image'
                                        width={1200}
                                        height={1200}
                                        className='rounded-lg'
                                    />
                                    <p className='text-gray-500 font-medium text-lg'>{items.Name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
