import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import PosterPreviewComponent from "@/app/components/poster-preview/PosterPreviewComponent";
import {IGenre, IMovie} from "@/types";
import GenreBadgeComponent from "@/app/components/genre-badge/GenreBadgeComponent";
import '@/app/components/movie-info/MovieInfoComponent.css'
import StarsRatingComponent from "@/app/components/stars-rating/StarsRatingComponent";

type Props = {
    id: string | string[] | undefined
}

const MovieInfoComponent: FC<Props> = async ({id}) => {
    const movie: IMovie = await movieService.getMovieDetails(Number(id));

    return (
        <div className={'movie-info'}>
            {!movie.poster_path || <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>}
            <div className={'movie-info-inner-container'}>
                <h2 className={'movie-info-title'}>{movie.title}</h2>
                <div className={'labels'}>
                    {!movie.release_date || <span>{new Date(movie.release_date).getFullYear()}</span>}
                    {/*<span>{movie.production_companies[0].name}</span>*/}
                </div>
                <div className={'genre-badge-container'}>
                    {
                        !movie.genres || movie.genres.map((genre: IGenre) => (
                            <GenreBadgeComponent key={genre.id} genre={genre}/>
                        ))
                    }
                </div>
                <div className="movie-info-star-rating-container">
                    <StarsRatingComponent initialScore={movie.vote_average}/>
                </div>
                <p className={'overview'}>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
};

export default MovieInfoComponent;