import React, {FC} from 'react';
import Link from "next/link";
import {IGenre} from "@/types";

type Props = {
    genre: IGenre
}

const GenreBadgeComponent: FC<Props> = ({genre}) => {
    return (
        <div>
            <Link
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