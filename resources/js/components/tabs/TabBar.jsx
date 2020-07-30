import React from 'react';
import Tabs from './Tabs';

const TabBar = ({changeTab, tab}) => {
    return (
        <div className="tab-bar">
            <Tabs slug={"posts"} changeTab={changeTab} tab={tab}/>
            <Tabs slug={"igtv"} changeTab={changeTab} tab={tab}/>
            <Tabs slug={"tagged"} changeTab={changeTab} tab={tab}/>
        </div>
    );
};

export default TabBar;