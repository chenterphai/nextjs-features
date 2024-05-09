'use client'
import ProductCards from '@/components/ProductCards'
import Servicebar from '@/components/Servicebar'
import { supabaseClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiHome } from 'react-icons/bi'

export default function PageServices({
    params: { id }
}: any) {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('service').select('*').eq('services_id', id)
            if (error) {
                throw error;
            }
            setData(data)
        }
        fetchData()
    }, [])

    const router = useRouter()
    return (
        <div>
            <Servicebar />
            <div className='container-primary py-10'>
                <div className="row">
                    <div className="col-md-12 mb-8">
                        <div className='flex items-center justify-start gap-x-5 text-gray-500'>
                            <button
                                className='rounded-md hover:bg-sky-50 p-2 transition-all duration-150 ease-in-out active:scale-95'
                                onClick={() => router.push('/services')}
                            >
                                <BiHome size={25} className='text-sky-500' />
                            </button>
                            <span className='text-gray-300'>/</span> {data?.at(0).Title}
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-12">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                            {data && data?.map((items) => (
                                <ProductCards
                                    btnLabel='Contact'
                                    data={items}
                                    normal={true}
                                    key={items.id}
                                    btnLink='service-details'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
