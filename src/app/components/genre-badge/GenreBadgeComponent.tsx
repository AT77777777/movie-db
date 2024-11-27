import React, {FC} from 'react';
import Link from "next/link";
import {IGenre} from "@/types";
import '@/app/components/genre-badge/GenreBadgeComponent.css'

type Props = {
    genre: IGenre
}

const GenreBadgeComponent: FC<Props> = ({genre}) => {
    return (
        <div>
            <Link
                className={'genre-badge'}
                href={
                    {
                        pathname: '/',
                        query: {with_genres: `${genre.id}`}
                    }
                }
            >{genre.name}</Link>
        </div>
    );
};

export default GenreBadgeComponent;