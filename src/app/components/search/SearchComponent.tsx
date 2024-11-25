
import React from 'react';
import '@/app/components/search/SearchComponent.css'

const SearchComponent = () => {
    return (
        <div>
            <form action="/search">
                <input
                    type="text"
                    name="query"
                    placeholder="Search for a movie..."
                    required
                />
                <button type="submit"/>
            </form>
        </div>
    );
};

export default SearchComponent;