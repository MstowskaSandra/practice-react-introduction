import React from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav";

const root = createRoot(document.querySelector('#root'));

const App = () => {
    return (
        <div>
            <Nav />
        </div>
    )
};

root.render(<App />);