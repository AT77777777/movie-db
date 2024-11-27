'use client';
import React, {FC, useState} from 'react';
import styles from '@/app/components/stars-rating/StarsRatingComponent.module.css';

interface StarRatingProps {
    initialScore?: number; // Початковий рейтинг (0-10)
}

const StarRatingComponent: FC<StarRatingProps> = ({ initialScore = 0 }) => {
    const [hoveredRating, setHoveredRating] = useState<number>(0);
    const displayedRating = hoveredRating || initialScore / 2;

    const handleMouseEnter = (index: number) => setHoveredRating(index + 1); // Наведення на зірку
    const handleMouseLeave = () => setHoveredRating(0);

    return (
        <div className={styles.starContainer}>
            {Array.from({ length: 5 }, (_, index) => {
                const fill = Math.min(1, Math.max(0, displayedRating - index));
                return (
                    <div
                        key={index}
                        className={styles.star}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={styles.starFill}
                            style={{ width: `${fill * 100}%` }}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
};

export default StarRatingComponent;
