import React from 'react';

type Props = { children: React.ReactNode };

const MoviesLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MoviesLayout;