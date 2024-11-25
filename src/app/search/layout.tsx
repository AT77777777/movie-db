import React from 'react';

type Props = { children: React.ReactNode };

const SearchResultsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default SearchResultsLayout;