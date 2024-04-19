'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecentProject = () => {

    const [data, setData] = React.useState<any[] | null>(null)
    const supabase = supabaseClient()

    React.useEffect(() => {
        const getData = async () => {
            const { data, error } = await supabase.from('project').select('*').limit(3)
            setData(data)
            console.log(data, error)
        }
        getData()
    }, [])


    return (
        <div className='container-primary py-10'>

            <div className='row'>
                <div className='col-md-12 mb-8'>
                    <div className='flex justify-between items-center'>
                        <h1 className='home-title'>
                            Recent Project
                        </h1>
                        <Link
                            href={'/services'}
                            className="text-primary md:text-sm text-xs"
                        >See All</Link>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10'>
                        <div className='flex flex-col space-y-2'>
                            <div className='overflow-hidden rounded-3xl'>
                                <Image
                                    src={data?.at(0).image?.at(0).img}
                                    alt='Image'
                                    width={1280}
                                    height={899}
                                    className='w-full'
                                />
                            </div>
                            <div className='p-2 flex flex-col space-y-2'>
                                <h1 className='text-lg font-medium truncate text-gray-500'>
                                    {data?.at(0).title}
                                </h1>
                                <p className='text-sm text-gray-400 text-ellipsis overflow-hidden wrap-text'>
                                    {data?.at(0).subtitle}
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='overflow-hidden rounded-3xl'>
                                <Image
                                    src={data?.at(0).image?.at(0).img}
                                    alt='Image'
                                    width={1280}
                                    height={899}
                                    className=''
                                />
                            </div>
                            <div className='p-2 flex flex-col space-y-2'>
                                <h1 className='text-lg font-medium truncate text-gray-500'>
                                    {data?.at(0).title}
                                </h1>
                                <p className='text-sm text-gray-400 text-ellipsis overflow-hidden wrap-text'>
                                    {data?.at(0).subtitle}
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='overflow-hidden rounded-3xl'>
                                <Image
                                    src={data?.at(0).image?.at(0).img}
                                    alt='Image'
                                    width={1280}
                                    height={899}
                                    className=''
                                />
                            </div>
                            <div className='p-2 flex flex-col space-y-2'>
                                <h1 className='text-lg font-medium truncate text-gray-500'>
                                    {data?.at(0).title}
                                </h1>
                                <p className='text-sm text-gray-400 text-ellipsis overflow-hidden wrap-text'>
                                    {data?.at(0).subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecentProject