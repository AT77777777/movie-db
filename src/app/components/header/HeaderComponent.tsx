import React from 'react';
import SearchComponent from "@/app/components/search/SearchComponent";
import '@/app/components/header/HeaderComponent.css'

const HeaderComponent = () => {
    return (
        <div className={'header'}>
            <SearchComponent/>
        </div>
    );
};

export default HeaderComponent;