import React from 'react';
import {__} from '../../translations/translator'

const Image = ({image, setModal, imageLoad, index}) => {
    let {url, title, likes} = image;
    return (
        <div className="gallery-image-wrapper">
            <div className="image-overlay" onClick={()=>{setModal(index)}}>
            <h3 className="like-icon">{`${likes} ${__('Likes')}`}</h3>
            </div>
            <img className="gallery-image" key={url} src={url} alt={title} onLoad={imageLoad} />
    
        </div>
    );
};

export default Image;

