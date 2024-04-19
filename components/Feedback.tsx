'use client'
import { supabaseClient } from '@/utils/supabase/client'
import React from 'react'

const Feedback = () => {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)

    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('feddback').select('*').eq('id', 1)
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div className='container-primary py-16'>
            <div className='row'>
                <div className="col-md-12 mb-8">
                    <div className='flex flex-col items-center'>
                        <span className='uppercase text-xs font-semibold md:text-sm text-sky-900'>
                            Comment
                        </span>
                        <h1 className='text-2xl md:text-3xl font-medium text-sky-600'>
                            Feedback
                        </h1>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='p-3 rounded-lg'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback