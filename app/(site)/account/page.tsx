'use client'
import { supabaseClient } from '@/utils/supabase/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

const Account = () => {

    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)
    React.useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const { data, error } = await supabase.from('homepage').select('image').eq('id', 1)
        if (error) {
            throw error;
        }
        setData(data)
    }

    const [option, setOption] = React.useState(false)

    const signUp = () => {
        setOption(!option)
    }

    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    return (
        <div className='container-primary flex justify-center items-center p-10'>
            <div className='p-5 rounded-md backdrop-blur-sm bg-white/50'>
                <div className='flex flex-col items-center gap-y-4'>
                    <div className='w-14 h-14 overflow-hidden'>
                        <Image
                            src={data?.at(0).image}
                            alt='Image Logo'
                            width={500}
                            height={500}
                            className='w-full'
                        />
                    </div>
                    <h1 className='text-xl font-semibold text-gray-500 mb-4'>Sign In to NYT</h1>
                    {option ? (
                        <div className='relative border w-80 rounded-sm'>
                            <input
                                placeholder='Username'
                                className='text-sm text-gray-400 p-3 w-full outline-none border border-transparent focus:border focus:border-sky-400'
                                required
                                type="text" />
                            <FaUser
                                className='absolute top-[14px] text-gray-400 right-3'
                            />
                        </div>
                    ) : (<></>)}
                    <div className='relative border w-80 rounded-sm'>
                        <input
                            placeholder='Email'
                            className='text-sm text-gray-400 p-3 w-full outline-none border border-transparent focus:border focus:border-sky-400'
                            required
                            type="text" />
                        <FaEnvelope
                            className='absolute top-[14px] text-gray-400 right-3'
                        />
                    </div>
                    <div className='relative border w-80 rounded-sm'>
                        <input
                            placeholder='Password'
                            className='text-sm text-gray-400 p-3 w-full outline-none border border-transparent focus:border focus:border-sky-400'
                            required
                            type="password" />
                        <FaLock
                            className='absolute top-[14px] text-gray-400 right-3'
                        />
                    </div>

                    <button className='bg-primary w-80 rounded p-3 text-white text-sm font-medium mb-10'>
                        {option ? 'Sign Up' : 'Sign In'}
                    </button>

                    <p className='text-gray-400 text-sm'>
                        {option ? 'Already have account?' : 'Dont have account?'}
                    </p>
                    <button
                        onClick={signUp}
                        className='text-sky-400'>
                        {option ? 'Sign In' : 'Sign Up'}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Account