import {IGenre, IGenresResponse, IMovie, ITMDBBaseResponse} from "@/types";

const base: string = 'https://api.themoviedb.org/3';

const poster: string = 'https://image.tmdb.org/t/p/w500';

const urlBuilder = {
    movie: '/movie',
    allMovies: (page: number, with_genres: string | string[] | undefined) => {
        const basePath = base + '/discover' + urlBuilder.movie;
        const query =
            (page ? `page=${page}` : '') +
            (page && with_genres ? '&' : '') +
            (with_genres ? `with_genres=${with_genres}` : '');

        return query ? `${basePath}?${query}` : basePath;
    },
    genres: () => base + '/genre/' + urlBuilder.movie + '/list',
    poster: (path: string) => poster + path,
    movieDetails: (id: number) => base + urlBuilder.movie + '/' + id,
    search: (page: number, query: string | string[] | undefined) =>  {
        const basePath = base + '/search' + urlBuilder.movie;
        const searchQuery =
            (page ? `page=${page}` : '') +
            (page && query ? '&' : '') +
            (query ? `query=${query}` : '');

        return searchQuery ? `${basePath}?${searchQuery}` : basePath;
    }
};

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWY1ZjdhZjdlMGI0NThiNzg3ZWYzNjZmMDg0ZDNlMSIsIm5iZiI6MTczMTk0NDMwMy4yMjY1OTY2LCJzdWIiOiI2M2VmOWY1MmVhODRjNzAwOGU1MjVlYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qJz7__UgUYq0N_m7j3qbUeBnquQQedRjdDYaQlYqcEo'
    }
}

const movieService = {
    getAllMovies: async (page: number, with_genres: string | string[] | undefined): Promise<ITMDBBaseResponse & {
        results: IMovie[]
    }> => {
        const movies = await fetch(
            urlBuilder.allMovies(page, with_genres),
            options
        ).then(value => value.json());

        return movies;
    },
    getMovieDetails: async (id: number): Promise<IMovie> => {
        const movie = await fetch(
            urlBuilder.movieDetails(id),
            options
        ).then(value => value.json());

        return movie;
    },
    getGenres: async (): Promise<IGenresResponse & { genres: IGenre[]}> => {
        const genres = await fetch(
            urlBuilder.genres(),
            options
        ).then(value => value.json());

        return genres;
    },
    search: async (page: number, query: string | string[] | undefined): Promise<ITMDBBaseResponse & { results: IMovie[] }> => {
        const search = await fetch(
            urlBuilder.search(page, query),
            options
        ).then(value => value.json());

        return search;
    }
}

export {
    movieService,
    urlBuilder
}