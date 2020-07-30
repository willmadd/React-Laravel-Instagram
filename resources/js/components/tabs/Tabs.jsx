import React from 'react';
import {__} from '../../translations/translator';

const Tabs = ({slug, tab, changeTab}) => {
    return (
        <div className={`tab ${tab===slug?'active':'inactive'}`} onClick={()=>{changeTab(slug)}}>
            {__(slug)}
        </div>
    );
};

export default Tabs;