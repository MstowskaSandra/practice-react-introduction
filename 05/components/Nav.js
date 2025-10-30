import Menu from './Menu';
import React from 'react';

const Nav = () => {
    const menuItems = [
        { text: 'kontakt', url: 'contact' },
        { text: 'home', url: '/home' }
    ];

    return (
        <nav>
            <Menu items={menuItems}/>
        </nav>
    )
};

export default Nav;