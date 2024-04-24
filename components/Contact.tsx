'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaPhone, FaTelegramPlane } from 'react-icons/fa'

const ContactSection = () => {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('homepage').select('image').eq('id', 5)
            setData(data)
        }
        fetchData()
    }, [])

    const SOCIAL_MEDIA = [
        { icon: <FaFacebookF className='text-white' />, link: '', label: 'Facebook' },
        { icon: <FaTelegramPlane className='text-white' />, link: '', label: 'Telegram' },
        { icon: <FaPhone className='text-white' />, link: '', label: '+855 964 903 404' },
    ]

    return (
        <div className='container-primary py-10 mt-8'>
            <div className="row">
                <div className="col-md-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className='p-3'>

                            <h1 className='text-xl md:text-2xl font-medium lg:text-3xl text-primary'>
                                Contact Us
                            </h1>

                            <div className='flex flex-col gap-y-3 mt-3 p-5'>
                                {SOCIAL_MEDIA.map((items) => (
                                    <div className='flex items-center justify-start gap-x-2' key={items.label}>
                                        <span className='bg-primary p-3 rounded'>{items.icon}</span>
                                        <Link
                                            href={items.link}
                                            className='text-lg text-sky-400 bg-sky-50 px-4 py-1.5 rounded'
                                        >{items.label}</Link>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className='p-3'>
                            <Image
                                src={data?.at(0).image}
                                alt='Image'
                                width={600}
                                height={500}
                                className=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection