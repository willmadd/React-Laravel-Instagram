import React from 'react';
import {__} from '../../translations/translator'

const Error = () => {
    return (
        <div>
            <h1>Error</h1>
            <p>{__('Could not Fetch images from the server')}</p>
        </div>
    );
};

export default Error;