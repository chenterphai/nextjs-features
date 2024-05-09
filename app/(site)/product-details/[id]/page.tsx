'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image';
import React from 'react'
import { IoCubeOutline } from 'react-icons/io5';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetails({
    params: { id }
}: any) {
    const supabase = supabaseClient();
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        fetchData()
    })
    const fetchData = async () => {
        const { data, error } = await supabase.from('products').select('*').eq('id', id)
        if (error) throw error
        setData(data)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className='container-primary py-10'>

            <div className='grid grid-cols-12 gap-8 relative'>
                <div className='col-span-6 sticky top-0'>
                    <div className='relative overflow-hidden rounded-xl'>

                        <Slider {...settings}>

                            <Image
                                src={data?.at(0).Image?.at(0).img}
                                alt='Image'
                                width={1200}
                                height={1200}
                                className=''
                            />

                        </Slider>

                        <div className='absolute bottom-0 right-0 bg-primary text-white px-8 py-2'>
                            <span
                                className='text-sm md:text-base'
                            >
                                $ {data?.at(0).Price}
                            </span>
                        </div>

                    </div>

                </div>

                <div className='col-span-6'>
                    <div className='mb-5'>
                        <h1 className='text-gray-500 md:text-2xl text-lg'>{data?.at(0).Name}</h1>
                        <p className='text-xs md:text-base font-light text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none'>{data?.at(0).Description}</p>
                    </div>
                    <div className='md:mb-5 mb-1'>
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
                    {data?.at(0).Category === 'pc-peripherals' ? (
                        <div className='grid grid-cols-12'>
                            <div className='col-span-4 text-gray-500 font-semibold'>
                                <span className='flex items-center justify-start gap-x-1 text-xs md:text-base'>
                                    <IoCubeOutline /> Brand
                                </span>
                            </div>
                            <div className='col-span-8 text-gray-500 text-xs md:text-base'>
                                {data.at(0).specs.at(0).brand}
                            </div>

                            <div className='col-span-4 text-gray-500 font-semibold'>
                                <span className='flex items-center text-xs justify-start gap-x-1 md:text-base'>
                                    <IoCubeOutline /> Model
                                </span>
                            </div>
                            <div className='col-span-8 text-gray-500 text-xs md:text-base'>
                                {data.at(0).specs.at().model}
                            </div>

                            <div className='col-span-4 text-gray-500 font-semibold text-xs md:text-base'>
                                <span className='flex items-center justify-start gap-x-1'>
                                    <IoCubeOutline /> Color
                                </span>
                            </div>
                            <div className='col-span-8 text-gray-500 text-xs md:text-base'>
                                {data.at(0).specs.at(0).color}
                            </div>
                            <div>

                            </div>
                        </div>
                    ) : (<></>)}
                </div>

            </div>

        </div>
    )
}
