import React from 'react';
import {__} from '../translations/translator'

const Header = ({setLocale}) => {
    return (
        <header>
            <h1>{__("Welcome to React-Laravel-Instagram")}</h1>
            <h3
                onClick={() => {
                    setLocale("en_GB");
                }}
            >
                English
            </h3>
        </header>
    );
};

export default Header;