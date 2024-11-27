import React from 'react';
import '@/app/components/header/HeaderComponent.css'
import UserInfoComponent from "@/app/components/user-info/UserInfoComponent";

const HeaderComponent = () => {
    return (
        <div className={'header'}>
            <UserInfoComponent/>

        </div>
    );
};

export default HeaderComponent;