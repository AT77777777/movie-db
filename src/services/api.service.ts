import {IMovie, ITMDBResponse} from "@/types";

const base: string = 'https://api.themoviedb.org/3';

const urlBuilder = {
    movieBaseUrl: '/discover/movie',
    allMovies: () => base + urlBuilder.movieBaseUrl
};

const movieService = {
    getAllMovies: async (): Promise<ITMDBResponse & { results: IMovie[] }> => {
        const movies = await fetch(
            urlBuilder.allMovies(),
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWY1ZjdhZjdlMGI0NThiNzg3ZWYzNjZmMDg0ZDNlMSIsIm5iZiI6MTczMTk0NDMwMy4yMjY1OTY2LCJzdWIiOiI2M2VmOWY1MmVhODRjNzAwOGU1MjVlYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qJz7__UgUYq0N_m7j3qbUeBnquQQedRjdDYaQlYqcEo'
                }
            }
        ).then(value => value.json());

        return movies;


    }
}

export {
    movieService
}