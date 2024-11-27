import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import SearchResultsCardComponent from "@/app/components/search-results-card/SearchResultsCardComponent";
import {IGenre, IMovie} from "@/types";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";
import "@/app/search/page.css"

type Props = {
    searchParams:Promise<{ [key: string]: string | string[] | undefined }>
}

const SearchResultsPage: FC<Props> = async ({searchParams}) => {
    const {query, page: selectedPage} = await searchParams;
    const {results, page, total_pages} = await movieService.search(Number(selectedPage), query);
    const {genres} = await movieService.getGenres();

    return (
        <div className={'search-results'}>
            <PaginationComponent currentPage={page} totalPages={total_pages} search={query}/>
            <div className={'search-results-container'}>
                <h3 className={'search-results-title'}>{query}</h3>
                {
                    results.map((movie: IMovie) => (
                        <div key={movie.id}>
                            <SearchResultsCardComponent
                                movie={movie}
                                genre={
                                    genres.filter((genre: IGenre) => !movie.genre_ids || movie.genre_ids.includes(genre.id))[0]
                                }
                            />
                        </div>
                    ))
                }
            </div>
            <PaginationComponent currentPage={page} totalPages={total_pages} search={query}/>
        </div>
    );
};

export default SearchResultsPage;