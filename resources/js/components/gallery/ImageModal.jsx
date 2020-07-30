import React from 'react';
import CloseButton from './CloseButton';
import LikeArea from './LikeArea';

const ImageModal = ({image, setModal, changeLikes, index}) => {
    let {title, url, likes} = image
    return (
        <div className="overlay">
            <div className="overlay-c">
            <div className="image-wrapper">
                <LikeArea likes={likes} changeLikes={changeLikes} index={index}/>
                <img src={url} alt={title}/>
                <CloseButton setModal={setModal}/>
            </div>
            </div>
        </div>
    );
};

export default ImageModal;