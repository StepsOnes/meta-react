import React from 'react';
import logo from '../../assets/img/logo/logo.svg'

const Logo = (props) => {
    return (
        <a href="/">
            <img src={logo} alt="Logo"/>
        </a>
    );
}

export default Logo;