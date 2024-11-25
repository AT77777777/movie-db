import React, {FC} from 'react';
import Link from "next/link";
import PosterPreviewComponent from "@/app/components/poster-preview/PosterPreviewComponent";
import StarsRatingComponent from "@/app/components/stars-rating/StarsRatingComponent";
import GenreBadgeComponent from "@/app/components/genre-badge/GenreBadgeComponent";
import {IGenre, IMovie} from "@/types";

type Props = {
    movie: IMovie,
    genre: IGenre
}

const SearchResultsCardComponent: FC<Props> = ({movie, genre}) => {
    const href = {
        pathname: `/movie`,
        query: {id: `${movie.id}`, title: `${movie.title.toLowerCase().replace(/[.,\/#!$%^&*;:{}=\-_`~()'"\s]+/g, "-").replace(/-+/g, "-")}`}
    };

    return (
        <div>
            {!movie.poster_path || <Link href={href}>
                <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            </Link>}
            <Link href={href}>
                {movie.title}
            </Link>
            {movie.release_date}
            {!movie.vote_average || <StarsRatingComponent initialScore={movie.vote_average}/>}
            {!genre || <GenreBadgeComponent genre={genre}/>}
        </div>
    );
};

export default SearchResultsCardComponent;