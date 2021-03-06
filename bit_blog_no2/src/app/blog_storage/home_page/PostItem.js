import React, { Component } from 'react';
import { Link } from "react-router-dom";

const PostItem = (props) => {
    return (
        <div className="container">
            <h3><Link to={`/singlePost/${props.postData.id}`} className='truncate' key={props.postData.id}>{props.postData.title}</Link></h3>
        <p>{props.postData.content}</p>
        </div>
    )
}

export default PostItem;