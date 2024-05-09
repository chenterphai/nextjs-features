'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image';
import React from 'react'
import { IoCubeOutline } from 'react-icons/io5';

export default function ServiceDetails({
    params: { id }
}: any) {
    const supabase = supabaseClient();
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        fetchData()
    })
    const fetchData = async () => {
        const { data, error } = await supabase.from('service').select('*').eq('id', id)
        if (error) throw error
        setData(data)
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

        </div>
    )
}
