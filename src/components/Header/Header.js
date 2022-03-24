import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="#home">Home</a>
                <a href="#home">Shop</a>
                <a href="#home">About</a>
            </nav>
        </div>
    );
};

export default Header;