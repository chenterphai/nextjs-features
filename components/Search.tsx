import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge';
interface SEARCH_PROPS {
    className?: string;
}

const Search: React.FC<SEARCH_PROPS> = ({
    className
}) => {
    return (
        <div className={twMerge('w-full', className)}>

            <div className='flex justify-center items-center gap-x-2 w-[90%] relative group'>
                <input
                    type="text"
                    placeholder='Search Services'
                    className='border focus:border-sky-100 transition-all ease-in-out duration-150 text-gray-400 font-light outline-none rounded-lg placeholder:text-xs placeholder:font-light px-3 py-1 w-full focus:shadow-md focus:shadow-sky-100/60'
                />
                <FiSearch
                    size={18}
                    className='text-gray-400 transition-all absolute right-4 cursor-pointer hover:scale-110 hover:text-sky-400'
                />
            </div>

        </div>
    )
}

export default Search