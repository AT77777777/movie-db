'use client';
import React, {FC} from 'react';
import Link from "next/link";
import styles from "@/app/components/pagination/PaginationComponent.module.css"

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    genre?: string | string[] | undefined;
    search?: string | string[] | undefined;
    basePath?: string;
    siblingCount?: number;
}

const PaginationComponent: FC<PaginationProps> = ({
        currentPage,
        totalPages,
        genre,
        search,
        basePath = '',
        siblingCount = 2,
    }) => {
    const getPageNumbers = () => {
        const totalVisiblePages = siblingCount * 2 + 1; // Загальна кількість видимих сторінок (поточна + сусіди)
        const pages = [];

        // Обчислюємо діапазон сторінок
        const startPage = Math.max(1, currentPage - siblingCount);
        const endPage = Math.min(totalPages, currentPage + siblingCount);

        // Якщо загальна кількість сторінок менша за видимі сторінки, показуємо всі
        if (totalPages <= totalVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Додаємо сторінки в межах видимого діапазону
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            // Якщо є пропуски на початку, додаємо "..."
            if (startPage > 1) pages.unshift(-1);

            // Якщо є пропуски в кінці, додаємо "..."
            if (endPage < totalPages) pages.push(-2);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div>
            {currentPage > 1 && (
                <Link
                    href={
                            {
                                pathname: `${basePath}`,
                                query: {page: `${currentPage - 1}`,
                                    ...(genre && { with_genres: genre }),
                                    ...(search && { query: search })
                                }
                            }
                    }
                    className="pagination-link">
                    &laquo; Prev
                </Link>
            )}

            {pageNumbers.map((page) =>
                page === -1 ? (
                    <span key="start-ellipsis">...</span>
                ) : page === -2 ? (
                    <span key="end-ellipsis">...</span>
                ) : (
                    <span key={page}>
                        <Link
                            href={
                                    {
                                        pathname: `${basePath}`,
                                        query: {page: `${page}`,
                                            ...(genre && { with_genres: genre }),
                                            ...(search && { query: search })
                                    }
                                }
                            }
                            className={`pagination-link ${page === currentPage ? "active" : ""}`}
                        >
                            {page}
                        </Link>
                    </span>
                )
            )}

            {currentPage < totalPages && (
                <Link
                    href={
                        {
                            pathname: `${basePath}`,
                            query: {page: `${currentPage + 1}`,
                                ...(genre && { with_genres: genre }),
                                ...(search && { query: search })
                                }
                        }
                    }
                    className="pagination-link">
                        Next &raquo;
                </Link>
            )}

            <p>
                Page {currentPage} of {totalPages}
            </p>
        </div>
    );
};

export default PaginationComponent;