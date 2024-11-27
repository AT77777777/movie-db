import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import {IGenre, IMovie} from "@/types";
import MoviesListCardComponent from "@/app/components/movies-list-card/MoviesListCardComponent";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";
import '@/app/components/movies-list/MoviesListComponent.css';

type Props = {
    selectedPage: string | string[] | undefined,
    with_genres: string | string[] | undefined
}

const MoviesListComponent: FC<Props> = async ({selectedPage, with_genres}) => {
    const {results: movies, page, total_pages} = await movieService.getAllMovies(Number(selectedPage), with_genres);
    const {genres} = await movieService.getGenres();

    return (
        <div className={'movie-list'}>
            <PaginationComponent currentPage={page} totalPages={total_pages} genre={with_genres}/>
            <div className={'movie-list-container'}>
                {
                    movies.map((movie: IMovie) => (
                        <div key={movie.id}>
                            <MoviesListCardComponent
                                movie={movie}
                                genre={
                                    genres.filter((genre: IGenre) => movie.genre_ids.includes(genre.id))[0]
                                }
                            />
                        </div>
                    ))
                }
            </div>
            <PaginationComponent currentPage={page} totalPages={total_pages} genre={with_genres}/>
        </div>
    );
};

export default MoviesListComponent;