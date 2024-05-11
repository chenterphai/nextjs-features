'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import ProductCards from '@/components/ProductCards';

export default function ServiceDetails({
    params: { id }
}: any) {
    const supabase = supabaseClient();
    const [data, setData] = React.useState<any[] | null>(null)
    const [_data, _setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        fetchData()
    })
    const fetchData = async () => {
        const { data, error } = await supabase.from('service').select('*').eq('id', id)
        if (error) throw error
        setData(data)

        const { data: _data } = await supabase.from('service').select('*').eq('services_id', data.at(0).services_id).limit(4)
        if (_data)
            _setData(_data)
    }
    return (
        <div className='container-primary py-10'>

            <div className='grid grid-cols-12 gap-8 relative'>
                <div className='col-span-6 sticky top-0'>
                    <div className=''>
                        <Image
                            src={data?.at(0).Image.at(0).img}
                            alt='Image'
                            width={1200}
                            height={1200}
                            className='rounded-md'
                        />
                    </div>

                </div>

                <div className='col-span-6'>
                    <div className='mb-5'>
                        <h1 className='text-gray-500 text-2xl'>{data?.at(0).Name}</h1>
                        <p className='text-xs text-gray-400 line-clamp-3 md:line-clamp-none'>{data?.at(0).Description}</p>
                    </div>
                    <div className='mb-5'>
                        <p className='text-gray-500'>
                            <span className='mr-2'>{data?.at(0).Rate}.0</span>
                            {[...Array(data?.at(0).Rate)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`${data?.at(0).Rate <= 0 ? 'text-gray-200 mr-1' : 'text-orange-400 mr-1'}`}

                                >
                                    ★
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

            </div>

            {/* More like these */}
            <div className='mt-10'>
                <div className='py-4'>
                    <h1 className='text-gray-500 text-lg md:text-xl font-medium'>More similar</h1>
                </div>
                {/* Slider */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>

                    {_data && _data?.map((items) => (
                        <ProductCards
                            btnLabel='Details'
                            data={items}
                            normal={true}
                            key={items.id}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
