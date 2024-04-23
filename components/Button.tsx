import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    link: any;
}

// const Button = ({ className, label }: ButtonProps) => {
//     return (
//         <div>
//             <button className={className}>
//                 {label}
//             </button>
//         </div>
//     )
// }
const Button: React.FC<ButtonProps> = ({ className, children, link }) => {
    return (
        <Link
            href={link}
            className={twMerge("text-primary md:text-sm text-xs flex items-center justify-start gap-x-1 py-2 px-4 rounded-full hover:bg-sky-50 transition-all", className)}
        >{children}
            <FaArrowRight size={10} />
        </Link>
    )
}

export default Button