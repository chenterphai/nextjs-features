'use client'
import { supabaseClient } from '@/utils/supabase/client'
import React from 'react'
import ProductCards from './ProductCards'
import { twMerge } from 'tailwind-merge'
import Button from './Button'

interface PeripheralsProps {
    className?: string
}

const Peripherals: React.FC<PeripheralsProps> = ({
    className
}) => {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('products').select('*').order('Rate', { ascending: false }).eq('Category', 'pc-peripherals').limit(4)
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <>
            <div className={twMerge('container-primary', className)} id='pc-peripherals'>
                <div className='row'>
                    <div className='col-md-12 mb-5'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <span className='text-sm font-semibold text-sky-800 uppercase'>
                                    Products
                                </span>
                                <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary'>
                                    Peripherals
                                </h1>
                            </div>
                            <Button link={'products/1'} className='' >See All</Button>
                        </div>
                    </div>
                    <div className='mb-12'>
                        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                            {data && data?.map((items) => (
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
            </div>
        </>
    )
}

export default Peripherals