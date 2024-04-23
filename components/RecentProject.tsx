'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import RecentProjectCard from './RecentProjectCard'

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
                        <div>
                            <span className='font-semibold text-sky-800 text-sm md:text-base'>
                                Portfolio
                            </span>
                            <h1 className='home-title'>
                                Recent Project
                            </h1>
                        </div>
                        <Link
                            href={'/services'}
                            className="text-primary md:text-sm text-xs flex items-center justify-start gap-x-1 py-2 px-4 rounded-full hover:bg-sky-50 transition-all"
                        >See All
                            <FaArrowRight size={10} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10'>
                        {data && data?.map((items) => (
                            <RecentProjectCard data={items} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecentProject