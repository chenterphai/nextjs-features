'use client'
import CoverSection from '@/components/Cover'
import React from 'react'
import { supabaseClient } from '@/utils/supabase/client'
import AllServicesCard from '@/components/AllServicesCard'

const Services = () => {

    const supabase = supabaseClient();
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('services').select('icon, id, title, subtitle')
            setData(data)
        }
        fetchData()
    }, [])
    console.log(data)

    return (
        <div>
            <CoverSection >
                <div className='container-primary'>
                    <div className='mb-10'>
                        <h1 className='text-4xl md:text-5xl text-white font-medium text-center md:text-left mb-8'>
                            Find Your Needs
                        </h1>
                        <h1 className='text-center md:text-left text-4xl md:text-5xl text-white font-medium'>with
                            <span className='text-sky-500 text-3xl md:text-4xl px-3 rounded-lg uppercase font-medium bg-white ml-2'>NYT</span> Services
                        </h1>
                    </div>
                </div>
            </CoverSection>

            <div className='container-primary py-10'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-medium text-primary'>
                                Our Services
                            </h1>
                            <p className='text-sm md:text-base text-center font-light text-gray-500'>
                                All Serives in each category, <br />
                                Click to details
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-12 mt-16">
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14'>
                            {data && data?.map((items) => (
                                <AllServicesCard data={items} key={items.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services