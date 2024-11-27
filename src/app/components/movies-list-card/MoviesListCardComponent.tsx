import React, {FC} from 'react';
import {IGenre, IMovie} from "@/types";
import PosterPreviewComponent from "@/app/components/poster-preview/PosterPreviewComponent";
import StarsRatingComponent from "@/app/components/stars-rating/StarsRatingComponent";
import Link from "next/link";
import '@/app/components/movies-list-card/MoviesListCardComponent.css'

type Props = {
    movie: IMovie,
    genre: IGenre
}

const MoviesListCardComponent: FC<Props> = ({movie, genre}) => {
    const href = {
        pathname: `/movie`,
        query: {id: `${movie.id}`, title: `${movie.title.toLowerCase().replace(/[.,\/#!$%^&*;:{}=\-_`~()'"\s]+/g, "-").replace(/-+/g, "-")}`}
    };

    const year = new Date(movie.release_date).getFullYear();


    return (
        <div className={'card'}>
            {!movie.poster_path || <Link href={href}>
                <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            </Link>}
            <div className={'card-inner-container'}>
                <Link href={href}>
                    <h2 className={'movie-title'}>{movie.title}</h2>
                </Link>
                <span className={'card-span'}>{!year || year} {genre && year ? '|' : ''} {!genre || genre.name}</span>
                <StarsRatingComponent initialScore={movie.vote_average}/>
            </div>
        </div>
    );
};

export default MoviesListCardComponent;