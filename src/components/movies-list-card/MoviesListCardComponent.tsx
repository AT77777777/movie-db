import React, {FC} from 'react';
import {IMovie} from "@/types";

type Props = {
    movie: IMovie
}

const MoviesListCardComponent: FC<Props> = ({movie}) => {
    console.log(movie)

    return (
        <div>
            {movie.title} {movie.release_date}
        </div>
    );
};

export default MoviesListCardComponent;