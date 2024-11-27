'use client';
import React, {FC} from 'react';
import {urlBuilder} from "@/services/api.service";
import '@/app/components/poster-preview/PosterPreviewComponent.css'
import {usePathname} from "next/navigation";

type Props = {
    path: string,
    title: string
}

const PosterPreviewComponent: FC<Props> = ({path, title}) => {
    const params: string | null = usePathname();

    return (
        <div>
            {params !== '/' || <img src={urlBuilder.poster(path)} alt={title} className={'poster-preview'}/>}
            {params !== '/movie' || <img src={urlBuilder.poster(path)} alt={title} className={'poster'}/>}
            {params !== '/search' || <img src={urlBuilder.poster(path)} alt={title} className={'search-results-poster'}/>}
        </div>
    );
};

export default PosterPreviewComponent;