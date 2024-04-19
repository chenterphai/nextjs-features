'use client'
import { supabaseClient } from '@/utils/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import { RiMenu3Line } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';
import Sidebar from './Sidebar';
import { FaTimes } from 'react-icons/fa';
import { BsCart2, BsInfoCircle } from "react-icons/bs";
import { MdOutlineContacts } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { BiHomeAlt2 } from 'react-icons/bi';
import Footer from './Footer';
import Search from './Search';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { LuLayoutTemplate } from 'react-icons/lu';
import { PiNotebookDuotone } from 'react-icons/pi';

interface NAVBAR_PROPS {
    children: React.ReactNode;
}

const Navbar: React.FC<NAVBAR_PROPS> = ({
    children
}) => {

    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            label: "Home",
            active: pathname === '/',
            href: '/',
            icon: <BiHomeAlt2 />
        },
        {
            label: "About",
            active: pathname === "/about",
            href: '/about',
            icon: <BsInfoCircle />
        },
        {
            label: "Products",
            active: pathname === "/products",
            href: "/products",
            icon: <BsCart2 />,
            driopdown: [
                {
                    label: "PC Peripherals",
                    active: pathname === "/pc-peripherals",
                    href: "/pc-peripherals",
                    icon: <HiOutlineComputerDesktop />
                },
                {
                    label: "Templates",
                    active: pathname === "/templates",
                    href: "/templates",
                    icon: <LuLayoutTemplate />
                },
                {
                    label: "eBooks",
                    active: pathname === "/ebooks",
                    href: "/ebooks",
                    icon: <PiNotebookDuotone />
                }
            ]
        },
        {
            label: "Services",
            active: pathname === "/services",
            href: "/services",
            icon: <GrServices />
        },
        {
            label: "Contacts",
            active: pathname === "/contacts",
            href: '/contacts',
            icon: <MdOutlineContacts />
        }
    ], [pathname])

    const supabase = supabaseClient();
    const [data, setData] = React.useState<any[] | null>(null)

    React.useEffect(() => {
        const getData = async () => {
            const { data, error } = await supabase.from('homepage').select('image').eq('id', 1)
            setData(data)
        }
        getData()
    }, [])

    const [toggle, setToggle] = React.useState(false)

    const getToggle = () => {
        setToggle(true)
    }

    const onClick = () => {
        setToggle(false)
    }

    return (

        <div className='sticky top-0 bg-white overflow-hidden'>

            <div className='mx-auto container-primary md:px-20 px-5 py-2 relative'>

                <div className='flex justify-between items-center'>

                    <div className='flex items-center justify-start w-full gap-x-4'>
                        <div
                            className='flex justify-start items-center'
                        >
                            <Link href={'/'}
                                className='flex justify-start items-center'
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
                                <h1 className='text-3xl font-bold max-lg:hidden'>
                                    <span className='text-sky-600'>N</span>
                                    <span className='text-sky-500'>Y</span>
                                    <span className='text-sky-400'>T</span>
                                </h1>
                            </Link>
                        </div>
                        <Search className='' />
                    </div>

                    <nav className='md:flex space-x-5 hidden relative'>
                        {routes.map((items) => (
                            <Link
                                href={items.href}
                                key={items.label}
                                className={twMerge(
                                    `text-gray-700 relative transition-all ease-in-out text-sm hover:text-sky-600  after:content-[''] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-[2px] after:bg-sky-600 after:rounded-full after:-bottom-1 after:transition-all after:ease-in-out after:duration-200 after:hover:absolute after:hover:w-full`,
                                    items.active && 'text-sky-600')}
                            >
                                {items.label}

                            </Link>

                        ))}
                    </nav>



                    <div className='hidden max-md:flex '>
                        <RiMenu3Line
                            className='text-xl cursor-pointer text-neutral-500 transition-all duration-300 ease-in-out font-bold hover:scale-110 hover:text-black'
                            onClick={getToggle}
                        />
                    </div>

                </div>

            </div>

            <Sidebar className={toggle} data={routes} />

            <span>
                <FaTimes
                    className={twMerge(`md:hidden absolute top-[24px] -right-10 text-neutral-400 transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 hover:text-black`, toggle && 'right-4')}
                    onClick={onClick}
                />
            </span>

            <main>
                {children}
            </main>
            <Footer data={data} link={routes} />
        </div>

    )
}

export default Navbar