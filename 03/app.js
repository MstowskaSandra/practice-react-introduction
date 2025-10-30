import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./components/MenuItem";

const root = createRoot(document.querySelector('#root'));

const App = () => {
    return (
        <ul>
            <MenuItem text="kontakt" url="/contact" />
            <MenuItem text="home" url="/home" />
        </ul>
    )
};

root.render(<App />);

