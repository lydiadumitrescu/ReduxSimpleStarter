import React, { Component } from 'react';


const VideoItem = (props) => {

        return (
            <li
                key={props.key}
                className="list-group-item">
                <iframe width="800" height="600" src={props.video}> </iframe>
                <span><br />{props.description} </span>
            </li>
        );

}

export default VideoItem;

