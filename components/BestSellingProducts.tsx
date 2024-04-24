'use client'
import { supabaseClient } from '@/utils/supabase/client'
import React from 'react'
import ProductCards from './ProductCards'
import { FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const BestSellingProducts = () => {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('Rate', { ascending: false }).limit(4)
            setData(data)
        }
        fetchData()
    }, [])
    console.log(data)

    const router = useRouter()

    return (
        <div className='container-primary py-10'>
            <div className='row'>
                <div className="col-md-12 mb-8">
                    <div className='flex flex-col items-center'>
                        <span className='uppercase text-xs font-semibold md:text-sm text-sky-900'>
                            products
                        </span>
                        <h1 className='text-2xl md:text-3xl font-medium text-sky-600'>
                            Best Selling
                        </h1>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 mb-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {data && data?.map((items) => (
                            <ProductCards data={items} key={items.id} normal={false} btnLabel='Details' />
                        ))}
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='flex justify-center items-center'>
                        <button
                            className='relative text-white bg-primary px-6 py-2 group rounded hover:pr-11 transition-all duration-200 ease-in-out active:scale-95'
                            onClick={() => router.push('/products')}
                        >
                            <p>
                                See All
                            </p>
                            <FaArrowRight size={14}
                                className='absolute right-6 top-3 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 group-hover:right-5'
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellingProducts