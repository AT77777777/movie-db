'use client';
import React, {FC, ReactNode} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import '@/app/components/nav-link/NavLinkComponent.css'
import {IGenre} from "@/types";

type NavLinkComponentProps = {
    genre: IGenre;
}
const NavLinkComponent: FC<NavLinkComponentProps> = ({genre}) => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div>
            <Link href={
                {
                    pathname: '/',
                    query: {with_genres: `${genre.id}`}
                }
            }>
                {genre.name}
            </Link>
        </div>
    );
};

export default NavLinkComponent;