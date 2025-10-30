import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "../03/components/MenuItem";

const root = createRoot(document.querySelector('#root'));

const Menu = () => {
    return (
        <ul>
            <MenuItem text="kontakt" url="/contact" />
            <MenuItem text="home" url="/home" />
        </ul>
    )
};


const Nav = () => {
    return (
        <nav>
            <Menu />
        </nav>
    )
};

root.render(<Nav />);

