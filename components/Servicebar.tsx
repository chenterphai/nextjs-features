'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Link from 'next/link'
import React from 'react'

const Servicebar = () => {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('services').select('id, title')
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div
            className='py-3 bg-sky-500 lg:flex items-center justify-center bg-gradient-to-l from-sky-600 via-sky-400 to-sky-500 hidden'
        >
            <div className='px-5 flex items-center justify-center gap-x-5'>
                {data && data?.map((items) => (
                    <Link
                        key={items.title}
                        href={`/services/${items.id}`}
                        className='text-gray-50 text-sm transition-all duration-200 ease-in-out hover:text-sky-800 hover:overline'
                    >
                        {items.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Servicebar