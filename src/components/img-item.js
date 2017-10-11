import React, { Component } from 'react';


const ImgItem = (props) => {

        return (
            <li
                key={props.img}
                className="list-group-item">
                <img src={props.img} />
                <span><br />{props.description} </span>
            </li>
        );

}

export default ImgItem;