'use client'
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

    return (
        <div className='shadow sticky top-0'>
            <div className='mx-auto container px-20 py-4'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl md:text-2xl font-black'><span className='text-blue-600'>NYT</span> Tech<span className='text-blue-600'>.</span></h1>
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