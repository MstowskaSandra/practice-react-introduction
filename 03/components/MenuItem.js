import React from "react";

const MenuItem = (props) => 
    <li>
        <a href={props.url}>{props.text}</a>
    </li>
;

export default MenuItem;
