import React, {FC} from 'react';
import MovieInfoComponent from "@/app/components/movie-info/MovieInfoComponent";

type Props = {
    searchParams:Promise<{ [key: string]: string | string[] | undefined }>
}

const MovieInfoPage: FC<Props> = async ({searchParams}) => {
    const {id} = await searchParams;

    return (
        <div>
            <MovieInfoComponent id={id}/>
        </div>
    );
};

export default MovieInfoPage;