import MoviesListComponent from "@/app/components/movies-list/MoviesListComponent";
import React, {FC} from "react";


type Props = {
    searchParams:Promise<{ [key: string]: string | string[] | undefined }>
}

const Home: FC<Props> = async ({searchParams}) => {
    const {page, with_genres} = await searchParams;
  return (
    <div>
        <MoviesListComponent selectedPage={page} with_genres={with_genres}/>
    </div>
  );
}

export default Home;