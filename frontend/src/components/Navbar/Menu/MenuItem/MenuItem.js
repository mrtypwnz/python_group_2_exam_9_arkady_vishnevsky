
import React from 'react'
import {NavLink} from "react-router-dom";


const MenuItem = (props) => {
    return <li className="nav-item">
        <NavLink className="nav-link" to={props.to} exact>{props.children}</NavLink>
    </li>
};


export default MenuItem