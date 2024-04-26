'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image';
import React from 'react'

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

    return (
        <div className='container-primary py-10'>

            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-6'>
                    <div className='mb-5'>
                        <h1 className='text-gray-500 text-2xl'>{data?.at(0).Name}</h1>
                        <p className='text-xs text-gray-400'>{data?.at(0).Description}</p>
                    </div>

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

                </div>
            </div>

        </div>
    )
}
