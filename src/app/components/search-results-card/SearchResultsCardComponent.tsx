import React, {FC} from 'react';
import Link from "next/link";
import PosterPreviewComponent from "@/app/components/poster-preview/PosterPreviewComponent";
import {IGenre, IMovie} from "@/types";
import '@/app/components/search-results-card/SearchResultsCardComponent.css'

type Props = {
    movie: IMovie,
    genre: IGenre
}

const SearchResultsCardComponent: FC<Props> = ({movie, genre}) => {
    const href = {
        pathname: `/movie`,
        query: {id: `${movie.id}`, title: `${movie.title.toLowerCase().replace(/[.,\/#!$%^&*;:{}=\-_`~()'"\s]+/g, "-").replace(/-+/g, "-")}`}
    };

    const year = new Date(movie.release_date).getFullYear();

    return (
        <div className={'search-results-card'}>
            {!movie.poster_path || <Link href={href}>
                <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            </Link>}
            <div className={'search-results-card-inner-container'}>
                <Link href={href}>
                    <h2 className={'movie-title'}>{movie.title}</h2>
                </Link>
                <span className={'card-span'}>{!year || year} {genre && year ? '|' : ''} {!genre || genre.name}</span>
            </div>
        </div>
    );
};

export default SearchResultsCardComponent;