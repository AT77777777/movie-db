import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import {IMovie} from "@/types";
import MoviesListCardComponent from "@/components/movies-list-card/MoviesListCardComponent";


const MoviesListComponent: FC = async () => {
    const {results: movies} = await movieService.getAllMovies();

    return (
        <div>
            {
                movies.map((movie: IMovie) => (
                    <div key={movie.id}>
                        <MoviesListCardComponent movie={movie}/>
                    </div>
                ))
            }
        </div>
    );
};

export default MoviesListComponent;