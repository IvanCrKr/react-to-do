import React from 'react';
import './_Header.style.scss';
import reactLogo from '../../assets/reactLogo.png';

const Header = () => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <a className='navbar-brand navbar-content' href='./'>
                <img src={reactLogo} className='navbar-logo px-3' alt='React Logo'/>
                <span className='navbar-title'> React To Do App </span>
            </a>
        </nav>
    );
};

export default Header;