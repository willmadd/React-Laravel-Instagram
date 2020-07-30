import React from 'react';
import {__} from '../../translations/translator'


const LikeArea = ({likes, changeLikes, index}) => {
    return (
        <div className="like-area">
            <h3>{`${likes} ${__('likes')}`}</h3>
            <img src="/images/icons/up.svg" alt="increase likes" onClick={()=>{changeLikes('up', index)}}/>
            <img src="/images/icons/down.svg" alt="decrease likes" onClick={()=>{changeLikes('dn', index)}}/>
        </div>
    );
};

export default LikeArea;