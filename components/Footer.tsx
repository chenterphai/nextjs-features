'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdArrowRight } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

const Footer = ({ data, link }: any) => {

    const SOCIAL_MEDIA = [
        { icon: <FaFacebook />, link: '' },
        { icon: <FaInstagram />, link: '' },
        { icon: <FaYoutube />, link: '' },
        { icon: <FaTiktok />, link: '' },
        { icon: <FaTwitter />, link: '' },
    ]

    return (

        <>
            <div className='bg-gradient-to-r from-sky-600 to-sky-500 py-16'>
                <div className='container-primary'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 lg:gap-y-0'>

                        <div className='flex flex-col space-y-5'>

                            <h1 className='footer-title'>
                                About Us
                            </h1>

                            <div>
                                <p className='footer-subtitle'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam, corrupti numquam nulla
                                </p>
                            </div>

                            <div className='flex items-center gap-x-4'>
                                <div className='w-14 h-14 overflow-hidden rounded-lg'>
                                    <Image
                                        src={data?.at(0).image}
                                        alt='Image Logo'
                                        width={700}
                                        height={700}
                                        className='w-full scale-110'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-2xl tracking-widest font-semibold text-sky-100'>NYT</span>
                                    <span className='text-sm uppercase text-sky-200'>Technology</span>
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col space-y-4'>
                            <h1 className='footer-title'>
                                Contact Info
                            </h1>
                            <div>
                                <p className="footer-subtitle">
                                    Address: Near 53 Funky Ln, Krong Siem Reap
                                </p>
                                <p className="footer-subtitle">
                                    Phone: +855 964 903 404
                                </p>
                                <p className="footer-subtitle">
                                    info@nyttechnology.com
                                </p>
                            </div>
                            <div className='flex items-center gap-x-2 text-gray-100'>
                                {SOCIAL_MEDIA.map((items) => (
                                    <Link
                                        href={items.link}
                                        key={items.link}
                                        className='transition-all ease-in-out duration-200 hover:scale-110'
                                    >
                                        {items.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <h1 className='footer-title'>
                                Useful Links
                            </h1>
                            <div className='flex flex-col text-sm font-light space-y-1'>
                                {link.map((items: any) => (
                                    <Link
                                        href={items.href}
                                        key={items.label}
                                        className={twMerge('transition-all duration-200 ease-in-out flex items-center text-gray-100 gap-x-2 hover:text-sky-200 hover:ml-2', items.active && "text-sky-300 ml-2")}
                                    >
                                        <MdArrowRight className='text-lg' />
                                        {items.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <h1 className='footer-title'>
                                Newsletter
                            </h1>
                            <p className='footer-subtitle'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam, corrupti numquam nulla
                            </p>
                            <div className='flex items-center'>
                                <input
                                    type="text"
                                    placeholder='Email'
                                    className='placeholder:text-sm text-sm px-3 py-2 border-t border-b border-l rounded-tl-lg rounded-bl-lg text-sky-600 outline-none focus:drop-shadow-md'
                                />
                                <button
                                    type='button'
                                    className='bg-sky-900 px-2.5 py-2.5 rounded-tr-lg rounded-br-lg'>
                                    <FaTelegramPlane
                                        className='text-white text-lg'
                                    />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-sky-500 py-4'>
                <div className='container px-20 mx-auto'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-gray-100 text-sm'>
                                © Copyright 2024 NYT Technology
                            </h1>
                        </div>
                        <div className='flex items-center justify-end'>
                            <div className='flex items-center gap-x-4 text-sm text-gray-100'>
                                <Link
                                    href={'/'}
                                    className='transition-all ease-in-out duration-200 hover:text-white hover:underline'
                                >
                                    Terms of Use
                                </Link>
                                <Link
                                    href={'/'}
                                    className='transition-all ease-in-out duration-200 hover:text-white hover:underline'
                                >
                                    • Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer