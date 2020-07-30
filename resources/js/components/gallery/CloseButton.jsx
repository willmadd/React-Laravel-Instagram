import React from 'react';

const CloseButton = ({setModal}) => {
    return (
        <div className="close-button-wrapper" onClick={()=>setModal(null)}>
            <a href="#" className="close" ></a>
        </div>
    );
};

export default CloseButton;