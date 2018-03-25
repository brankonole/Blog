import React, { Component } from 'react';
import { Link } from "react-router-dom";

const AuthorItem = (props) => {
    return (
        <div className="container">
        <Link to={`/author/${props.authorData.id}`}>{props.authorData.name} ({props.numOfPosts} - posts)</Link>
        </div>
    )
}

export default AuthorItem;