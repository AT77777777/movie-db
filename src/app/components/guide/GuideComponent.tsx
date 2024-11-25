import React from 'react';
import {movieService} from "@/services/api.service";
import '@/app/components/guide/GuideComponent.css'
import NavLinkComponent from "@/app/components/nav-link/NavLinkComponent";

const GuideComponent = async() => {
    const {genres} = await movieService.getGenres();

    return (
        <div className={'guide'}>
            <div className={'logo'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M24 10.6666H25.3333C26.7478 10.6666 28.1044 11.2285 29.1046 12.2287C30.1048 13.2289 30.6667 14.5855 30.6667 16C30.6667 17.4144 30.1048 18.771 29.1046 19.7712C28.1044 20.7714 26.7478 21.3333 25.3333 21.3333H24"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M2.66669 10.6666H24V22.6666C24 24.0811 23.4381 25.4377 22.4379 26.4379C21.4377 27.4381 20.0812 28 18.6667 28H8.00002C6.58553 28 5.22898 27.4381 4.22878 26.4379C3.22859 25.4377 2.66669 24.0811 2.66669 22.6666V10.6666Z"
                        fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 1.33337V5.33337" stroke="white" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M13.3333 1.33337V5.33337" stroke="#7900C2" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M18.6667 1.33337V5.33337" stroke="white" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
                <h2 className={'logo-h2'}>MovieDB</h2>
                <div>
                    {
                        genres.map((genre) => (
                            <NavLinkComponent key={genre.id} genre={genre}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default GuideComponent;