'use client';
import React, {FC} from 'react';
import Link from "next/link";
import "@/app/components/pagination/PaginationComponent.css"
import {useSearchParams} from "next/navigation";

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

        const startPage = Math.max(1, currentPage - siblingCount);
        const endPage = Math.min(totalPages, currentPage + siblingCount);

        if (totalPages <= totalVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (startPage > 1) pages.unshift(-1);

            if (endPage < totalPages) pages.push(-2);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    const params: string | null = useSearchParams().get('page');

    return (
        <div className={'pagination'}>
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
                    className={'pagination-link'}
                    >
                    &#10094;
                </Link>
            )}

            {pageNumbers.map((page) =>
                page === -1 ? (
                    <span key="start-ellipsis" className={'pagination-span'}>...</span>
                ) : page === -2 ? (
                    <span key="end-ellipsis" className={'pagination-span'}>...</span>
                ) : (
                        <Link
                            key={page}
                            href={
                                    {
                                        pathname: `${basePath}`,
                                        query: {page: `${page}`,
                                            ...(genre && { with_genres: genre }),
                                            ...(search && { query: search })
                                    }
                                }
                            }
                            className={ page.toString() === params || page === 1 ? 'active': 'pagination-link' }
                        >
                            {page}
                        </Link>
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
                    className={'pagination-link'}
                    >
                    &#10095;
                </Link>
            )}

            <span className={'pagination-span'}>
                Page {currentPage} of {totalPages}
            </span>
        </div>
    );
};

export default PaginationComponent;