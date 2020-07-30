import React, { Component } from "react";
import ReactDOM from "react-dom";
import { __ } from "../translations/translator";
import Header from "./Header";
import TabBar from "./tabs/TabBar";
import Gallery from "./gallery/Gallery";

export default class AqlGram extends Component {
    state = {
        locale: "en_GB",
        tab: "posts"
    };

    changeTab = tab => {
        this.setState({
            tab
        });
    };

    setLocale = locale => {
        this.setState({
            locale
        });
    };

    render() {
        let { tab, locale } = this.state;
        let { changeTab } = this;
        return (
            <div className="body">
                <Header locale={locale}/>
                <TabBar changeTab={changeTab} tab={tab} />
                <Gallery tab={tab} />
            </div>
        );
    }
}

if (document.getElementById("aqlgram")) {
    ReactDOM.render(<AqlGram />, document.getElementById("aqlgram"));
}
