import React, {FC} from 'react';
import {urlBuilder} from "@/services/api.service";

type Props = {
    path: string,
    title: string
}

const PosterPreviewComponent: FC<Props> = ({path, title}) => {


    return (
        <div>
            <img src={urlBuilder.poster(path)} alt={title}/>
        </div>
    );
};

export default PosterPreviewComponent;