import React from 'react';
import {NavLink} from 'react-router-dom'


const Card = props => {
    return <div className={"card mt-3 text-center text-sm-left " + (props.className ? props.className : "")}>
        {props.photos ? <img className="card-img-top" src={props.photos[0].photo} alt='product'/> : null}
        {props.header || props.text || props.link ? <div className="card-body">
            {props.header ? <h5 className="card-title ">{props.header}</h5> : null}
            {props.text ? <p className="card-text">{props.text}</p> : null}
            {props.description ?
                <p className="card-text font-weight-light d-block text-truncate">{props.description}</p> : null}
            {props.link ? <NavLink to={props.link.url} className="btn btn-primary">
                {props.link.text}
            </NavLink> : null}
        </div> : null}
    </div>
};


export default Card;