import React from 'react';
import '@/app/components/search/SearchComponent.css'

const SearchComponent = () => {
    return (
        <div className={'search-container'}>
            <form className={'search-form'} action="/search">
                <input
                    type="text"
                    name="query"
                    placeholder="Search for a movie..."
                    required
                />
                <button className={'search-button'} type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default SearchComponent;