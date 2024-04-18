import React from 'react'

interface ButtonProps {
    className?: string;
    label: string;
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
const Button: React.FC<ButtonProps> = ({ className, label }) => {
    return (
        <div>
            <button className={className}>
                {label}
            </button>
        </div>
    )
}

export default Button