import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import PosterPreviewComponent from "@/app/components/poster-preview/PosterPreviewComponent";
import {IGenre, IMovie} from "@/types";
import GenreBadgeComponent from "@/app/components/genre-badge/GenreBadgeComponent";

type Props = {
    id: string | string[] | undefined
}

const MovieInfoComponent: FC<Props> = async ({id}) => {
    const movie: IMovie = await movieService.getMovieDetails(Number(id));


    return (
        <div>
            Movie Info
            {movie.title}
            {!movie.poster_path || <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>}
            {
               !movie.genres || movie.genres.map((genre: IGenre) => (
                    <GenreBadgeComponent key={genre.id} genre={genre}/>
                ))
            }
        </div>
    );
};

export default MovieInfoComponent;