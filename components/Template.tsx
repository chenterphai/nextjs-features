'use client'
import { supabaseClient } from '@/utils/supabase/client'
import React from 'react'
import ProductCards from './ProductCards'
import { twMerge } from 'tailwind-merge'
import Button from './Button'

interface TemplateProps {
    className?: string;
    items: any
}

const Template: React.FC<TemplateProps> = ({
    className,
    items
}) => {
    return (
        <>
            <div className={twMerge('container-primary', className)} id={`${items.category}`}>
                <div className='row'>
                    <div className='col-md-12 mb-5'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <span className='text-sm font-semibold text-sky-800 uppercase'>
                                    Products
                                </span>
                                <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary capitalize'>
                                    {items.category}
                                </h1>
                            </div>
                            <Button link={`/products/${items.id}`} >See All</Button>
                        </div>
                    </div>
                    <div className='mb-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                            {items.products.slice(0, 4).map((items: any) => (
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

export default Template