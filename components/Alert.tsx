'use client'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

interface ALertProps {
    action: boolean;
}

const Alert: React.FC<ALertProps> = ({ action }) => {

    const [open, setOpen] = React.useState(false)
    React.useEffect(() => {
        setOpen(action);
        setInterval(() => {
            setOpen(false)
        }, 3000)
    })

    return (
        <>
            <div className={open ? 'p-4 fixed top-1 right-0 bg-green-50 rounded-md transition-all z-50' : 'hidden'}>
                <div className='flex flex-col gap-y-3 relative'>
                    <div className='flex items-center justify-start gap-x-2'>
                        <span className='bg-green-400 p-1 rounded-full'>
                            <FaCheck className='text-green-50' size={12} />
                        </span>
                        <p className='text-green-900 text-xs md:text-sm'>
                            Feedback completed
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <span className='w-7 h-4'>
                        </span>
                        <p className='text-xs text-green-700'>
                            You have sent use your feedback successfully. Thank you.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alert