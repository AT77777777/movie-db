'use client';
import React, {FC} from 'react';
import Link from "next/link";
import '@/app/components/nav-link/NavLinkComponent.css'
import {IGenre} from "@/types";
import {useSearchParams} from "next/navigation";

type NavLinkComponentProps = {
    genre: IGenre;
}
const NavLinkComponent: FC<NavLinkComponentProps> = ({genre}) => {
    const params: string | null = useSearchParams().get('with_genres');

    return (
        <div>
            <Link className={params === genre.id.toString() ? 'current-link': 'link'} href={
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