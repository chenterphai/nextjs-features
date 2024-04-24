'use client'
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
            const { data: mainData, error: mainError } = await supabase.from('services').select('*')
            if (mainError) {
                throw mainError;
            }
            const { data: relatedData, error: relatedError } = await supabase.from('app_design').select('*')
            if (relatedError) {
                throw relatedError;
            }

            // Combine Data
            const allData = mainData.map((mainItem) => {
                const relatedItem = relatedData.find((relatedItem) => relatedItem.id === mainItem.id);
                return { ...mainItem, relatedItem };
            })
            setData(allData)
        }
        fetchData()
    }, [])
    console.log(data)


    const router = useRouter()
    return (
        <div>
            <Servicebar />
            <div className='container-primary py-10'>
                <div className="row">
                    <div className="col-md-12">
                        <div className='flex items-center justify-start gap-x-5 text-gray-500'>
                            <button
                                onClick={() => router.push('/services')}
                            >
                                <BiHome size={25} className='text-sky-500' />
                            </button>
                            <span className='text-gray-300'>/</span> {data && data.at(0).title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
