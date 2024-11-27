import React from 'react';
import '@/app/components/user-info/UserInfoComponent.css';

const UserInfoComponent = () => {
    return (
        <div className={'user-info'}>
            <svg height="38px" width="38px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 viewBox="-12.13 -12.13 84.93 84.93"
                 fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-12.13" y="-12.13" width="84.93" height="84.93" rx="42.465" fill="#9b91fa" strokeWidth="0"></rect></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <g> <g> <ellipse cx="30.336" cy="12.097" rx="11.997"
                                                              ry="12.097"></ellipse>
                    <path
                        d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z"></path> </g> </g> </g>
            </svg>
            <span className={'user-info-name'}>
                User
            </span>
        </div>
    );
};

export default UserInfoComponent;