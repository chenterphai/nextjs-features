'use client'
import { supabaseClient } from '@/utils/supabase/client'
import React from 'react'
import ProductCards from './ProductCards'

const BestSellingProducts = () => {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('products').select('*')
            setData(data)
        }
        fetchData()
    }, [])

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
                <div className='col-md-12'>
                    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {data && data?.map((items) => (
                            <ProductCards data={items} key={items.id} normal={false} btnLabel='Details' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellingProducts