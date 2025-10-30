import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));

const myStylesCl = {
    color: 'white', 
    background: "linear-gradient(90deg, rgba(237, 50, 209, 1) 0% , rgba(162, 45, 235, 1) 50%, rgba(37, 194, 230, 1) 100%)",
    borderRadius: '15px',
    textAlign: 'center',
    padding: '1rem',
    fontSize: 'large',
    marginTop: '2rem',
};

const myStyleFn = {
    color: 'white',
    background: "radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)",
    borderRadius: '20px',
    textAlign: 'center',
    padding: '2rem',
    fontSize: 'large',
};


class HeaderCl extends React.Component {
    render() {
        return <header
            className= 'headerCl'
            style= {myStylesCl}
        >
            Moja (nie) pierwsza strona w React.js
        </header>
    }
}

const HeaderFn = () => 
    <header
    className="headerFn"
    style={myStyleFn}
    >
        Moja pierwsza strona w React.js
    </header>
;

const App = () => {
    return (
        <div>
            <HeaderFn />
            <HeaderCl />
        </div>
    );
};
 root.render(<App />);