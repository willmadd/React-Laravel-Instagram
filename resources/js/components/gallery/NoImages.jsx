import React from 'react';
import {__} from '../../translations/translator'

const NoImages = () => {
    return (
<h3 className="no-image-text">{__('Sorry, there are no images that meet your requirements')}</h3>
    );
};

export default NoImages;