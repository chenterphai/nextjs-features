'use client'
import React from 'react'
import { supabaseClient } from '@/utils/supabase/client'
import { twMerge } from 'tailwind-merge';

interface COVER_PROPS {
    children: React.ReactNode;
    className?: string;
}

const CoverSection: React.FC<COVER_PROPS> = ({
    children,
    className
}) => {
    const supabase = supabaseClient()
    const [data, setData] = React.useState<any[] | null>(null)

    React.useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('homepage').select("image").eq('id', 4)
            setData(data)
        }
        fetchData()
    }, [])
    return (
        <div className={twMerge('w-full h-[366px] flex md:justify-between justify-center items-center', className)}
            style={{
                backgroundImage: `url(${data?.at(0).image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {children}
        </div>
    )
}

export default CoverSection