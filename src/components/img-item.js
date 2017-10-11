import React, { Component } from 'react';


const ImgItem = (props) => {

        return (
            <li
                key={props.key}
                className="list-group-item">
                <img src={props.img} width="800" height="600"/>
                <span><br />{props.description} </span>
            </li>
        );

}

export default ImgItem;