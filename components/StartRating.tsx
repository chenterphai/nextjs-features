// components/StarRating.tsx

import React, { useState } from 'react';

type StarRatingProps = {
    totalStars: number;
    initialRating?: number;
    onChange?: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({ totalStars, initialRating = 0, onChange }) => {
    const [rating, setRating] = useState(initialRating);

    const handleClick = (selectedRating: number) => {
        setRating(selectedRating);
        if (onChange) {
            onChange(selectedRating);
        }
    };

    return (
        <div className={'text-[24px] p-3 my-3 bg-sky-100/30 cursor-pointer rounded-xl'}>
            {[...Array(totalStars)].map((_, index) => (
                <span
                    key={index}
                    className={index < rating ? "text-orange-400" : "text-gray-200"}
                    onClick={() => handleClick(index + 1)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
