'use client'
import CoverSection from '@/components/Cover'
import Template from '@/components/Template'
import { supabaseClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { TbTemplate } from "react-icons/tb";
import { RxComponent1 } from "react-icons/rx";
import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { LuBookMinus } from "react-icons/lu";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const Products = () => {

    const navigate = [
        { link: 'template', icon: <TbTemplate /> },
        { link: 'components', icon: <RxComponent1 /> },
        { link: 'ebooks', icon: <IoBookOutline /> },
        { link: 'courses', icon: <LuBookMinus /> },
        { link: 'pc-peripherals', icon: <HiOutlineComputerDesktop /> },
    ]

    const router = useRouter()

    // Test

    const [data, setData] = React.useState<any[] | null>(null)
    const supabase = supabaseClient();
    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('product')
                .select("*, products(*)")
            if (error) {
                throw error;
            }
            setData(data)
        }
        fetchData()
    }, [])

    // End text

    return (
        <>
            <CoverSection>
                <div className='container-primary py-10'>
                    <div className='mb-10'>
                        <h1 className='text-4xl md:text-5xl text-white font-medium text-center md:text-left mb-8'>
                            Find Your Needs
                        </h1>
                        <h1 className='text-center md:text-left text-4xl md:text-5xl text-white font-medium'>with
                            <span className='text-sky-500 text-3xl md:text-4xl px-3 rounded-lg uppercase font-medium bg-white ml-2'>NYT</span> Products
                        </h1>
                    </div>
                </div>
            </CoverSection>

            <div className='container-primary py-10'>
                <div className="row">
                    <div className="col-md-12">

                        <div className='flex justify-between flex-wrap space-y-2 mb-8'>
                            {navigate.map((items) => (
                                <button
                                    key={items.link}
                                    className='text-sky-500 bg-sky-50 md:px-3 px-2 py-1 rounded md:text-sm text-xs flex items-center gap-x-1'
                                    onClick={() => router.push(`#${items.link}`)}
                                >{items.icon} {items.link}</button>
                            ))}
                        </div>


                    </div>
                </div>
            </div>

            {data && data?.map((data) => (
                <Template className='mb-16' items={data} key={data.id} />
            ))}
        </>
    )
}

export default Products