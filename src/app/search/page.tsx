import React, {FC} from 'react';
import {movieService} from "@/services/api.service";
import SearchResultsCardComponent from "@/app/components/search-results-card/SearchResultsCardComponent";
import {IGenre, IMovie} from "@/types";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

type Props = {
    searchParams:Promise<{ [key: string]: string | string[] | undefined }>
}

const SearchResultsPage: FC<Props> = async ({searchParams}) => {
    const {query, page: selectedPage} = await searchParams;
    const {results, page, total_pages} = await movieService.search(Number(selectedPage), query);
    const {genres} = await movieService.getGenres();


    return (
        <div>
            <PaginationComponent currentPage={page} totalPages={total_pages} search={query}/>
            {
                results.map((movie: IMovie) => (
                    <div key={movie.id}>
                        <SearchResultsCardComponent
                            movie={movie}
                            genre={
                                genres.filter((genre: IGenre) => movie.genre_ids.includes(genre.id))[0]
                            }
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default SearchResultsPage;