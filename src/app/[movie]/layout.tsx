import React from 'react';

type Props = { children: React.ReactNode };

const MovieInfoLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MovieInfoLayout;