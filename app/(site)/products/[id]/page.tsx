'use client'
import { supabaseClient } from '@/utils/supabase/client'
import React from 'react'
import { BiHome } from 'react-icons/bi'
import Link from 'next/link'
import ProductCards from '@/components/ProductCards'
import Image from 'next/image'
export default function Products({
    params: { id }
}: any) {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('products').select('*').eq('product_category', id);
            if (error) {
                throw error;
            }
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div className=''>
            <div className='container-primary relative overflow-hidden rounded-md bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600 p-5 md:p-10 mb-10'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-xl md:text-2xl text-white uppercase font-medium'>
                        {data?.at(0).Category}
                    </h1>
                    <p className='text-sm md:text-base text-white'>
                        Find <span className='capitalize font-medium text-sky-700'>{data?.at(0).Category}</span> for your website with NYT
                    </p>
                </div>
                <div
                    className='absolute bottom-0 left-0'
                >
                    <Image
                        src={'/undraw_factory_dy-0-a.svg'}
                        alt='Illustration'
                        width={100}
                        height={100}
                        className=''
                    />
                </div>
            </div>

            <div className='container-primary mb-8'>
                <h1 className='flex items-center justify-start gap-x-4 text-base md:text-lg capitalize text-gray-500'>
                    <Link href={'/products'} className='p-2 rounded-md hover:bg-sky-100 hover:text-sky-500 transition-all'>
                        <BiHome size={24} />
                    </Link>
                    <span className='text-gray-300'>/</span>
                    {data?.at(0).Category}
                </h1>
            </div>

            <div className='container-primary mb-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {data && data?.map((items) => (
                        <ProductCards
                            data={items}
                            normal={true}
                            btnLabel='Details'
                            key={items.id}
                            btnLink='product-details'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
