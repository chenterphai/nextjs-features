import React from 'react'
import Image from 'next/image';
interface Props {
    data?: any;
    onClick?(): void
}
export const ProductImageContainer = ({
    data,
    onClick
}: Props) => {
    return (
        <>
            <div className='md:p-3 p-1 border rounded-lg'>
                {data ? <Image
                    src={data.img}
                    alt='Image'
                    width={1200}
                    height={1200}
                    className='md:rounded-xl rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:scale-105'
                    onClick={onClick}
                    onMouseOver={onClick}
                /> : <Image
                    src={'/notimage.jpeg'}
                    alt='Image'
                    width={1200}
                    height={1200}
                    className='rounded-xl'
                />}

            </div>
        </>
    )
}
