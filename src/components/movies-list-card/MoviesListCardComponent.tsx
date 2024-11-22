import React, {FC} from 'react';
import {IMovie} from "@/types";
import PosterPreviewComponent from "@/components/poster-preview/PosterPreviewComponent";
import StarsRatingComponent from "@/components/stars-rating/StarsRatingComponent";


type Props = {
    movie: IMovie
}



const MoviesListCardComponent: FC<Props> = ({movie}) => {

    return (
        <div>
            <PosterPreviewComponent path={movie.poster_path} title={movie.title}/>
            {movie.title} {movie.release_date}
            <StarsRatingComponent initialScore={movie.vote_average} />
        </div>
    );
};

export default MoviesListCardComponent;