'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

const Videos = () => {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)

    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('homepage').select('image').eq('id', 2)
            setData(data)
        }
        fetchData()
    }, [])

    return (

        <div className='bg-sky-50'>
            <div className='container-primary py-14'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                            <div className='py-8 flex flex-col space-y-4 px-5'>
                                <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-3xl leading-relaxed font-medium capitalize text-sky-600'>
                                    Find your needs, Just one click
                                </h1>
                                <p className=' text-gray-600 mb-5'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, itaque repellendus? Corporis porro provident
                                </p>

                                <div className='flex'>
                                    <Link
                                        href={'/'}
                                        className='relative arrow-hover hover:pl-5 hover:pr-11 rounded-full transition-all duration-300 ease-in-out px-4 py-2 bg-primary text-white'
                                    >
                                        Get Started
                                        <FaRegArrowAltCircleRight
                                            className='absolute top-3 right-0 arrow opacity-0 transition-all duration-300 ease-in-out'
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className='overflow-hidden flex items-center py-8 px-5'>
                                <div className='relative'>
                                    <Image
                                        src={data?.at(0).image}
                                        alt='Image'
                                        width={1280}
                                        height={856}
                                        className='w-full rounded-xl z-50'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos