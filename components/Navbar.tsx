'use client'
import { supabaseClient } from '@/utils/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge';
const Navbar = () => {

    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            label: "Home",
            active: pathname === '/',
            href: '/'
        },
        {
            label: "Components",
            active: pathname === "/components",
            href: '/components'
        },
        {
            label: "Features",
            active: pathname === "/features",
            href: "/features"
        }
    ], [pathname])

    const supabase = supabaseClient();
    const [data, setData] = React.useState<any[] | null>(null)

    React.useEffect(() => {
        const getData = async () => {
            const { data, error } = await supabase.from('homepage').select('image')
            setData(data)
        }
        getData()
    }, [])

    return (
        <div className='shadow sticky top-0'>
            <div className='mx-auto container px-20 py-2'>
                <div className='flex justify-between items-center'>
                    <div
                        className=''
                    >
                        <div className='overflow-hidden w-14 h-14 rounded-full'>
                            <Image
                                src={data?.at(0).image}
                                alt='Logo'
                                width={500}
                                height={500}
                                className='w-full h-full scale-110'
                            />
                        </div>

                    </div>
                    <nav className='flex space-x-5'>
                        {routes.map((items) => (
                            <Link
                                href={items.href}
                                key={items.label}
                                className={twMerge(`text-gray-700 text-sm hover:text-blue-600`, items.active && 'text-blue-600')}
                            >
                                {items.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar