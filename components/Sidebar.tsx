'use client'
import Link from 'next/link';
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface SidebarProps {
    className?: boolean;
    data?: any;
}

const Sidebar: React.FC<SidebarProps> = ({
    className,
    data
}) => {


    return (
        <div className={twMerge(`absolute w-[0px] h-screen top-0 right-0 transition-all duration-300 ease-in-out`, className && 'w-[300px] md:w-0')}>
            <div className='w-full h-full rounded-md bg-neutral-50 relative'>

                <div className='flex items-center justify-start p-4 pt-5 gap-x-2 border-b'>
                    <h1 className='text-neutral-500'>
                        Menu
                    </h1>
                </div>

                <div className='flex flex-col space-y-2 items-start mt-5'>
                    {data?.map((items: any) => (
                        <button
                            className=''
                        >
                            <Link href={items.href} className={twMerge(`group flex items-center gap-x-2 text-neutral-500 px-4 py-2 rounded-2xl hover:bg-neutral-100 hover:text-gray-600 hover:ml-2 transition-all duration-200 ease-in-out`,
                                items.active && "bg-neutral-100 ml-2 text-sky-600"
                            )}>
                                {items.icon}
                                {items.label}
                            </Link>
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Sidebar