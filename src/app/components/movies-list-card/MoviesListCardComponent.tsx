import React, {FC} from 'react';
import {IGenre, IMovie} from "@/types";
import PosterPreviewComponent from "@/app/components/poster-preview/PosterPreviewComponent";
import StarsRatingComponent from "@/app/components/stars-rating/StarsRatingComponent";
import Link from "next/link";
import GenreBadgeComponent from "@/app/components/genre-badge/GenreBadgeComponent";

type Props = {
    movie: IMovie,
    genre: IGenre
}

const MoviesListCardComponent: FC<Props> = ({movie, genre}) => {
    const href = {
        pathname: `/movie`,
        query: {id: `${movie.id}`, title: `${movie.title.toLowerCase().replace(/[.,\/#!$%^&*;:{}=\-_`~()'"\s]+/g, "-").replace(/-+/g, "-")}`}
    };

    return (
        <div>
            <Link href={href} >
                <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            </Link>
            <Link href={href}>
                {movie.title}
            </Link>
            {movie.release_date}
            <StarsRatingComponent initialScore={movie.vote_average} />
            <GenreBadgeComponent genre={genre}/>
        </div>
    );
};

export default MoviesListCardComponent;