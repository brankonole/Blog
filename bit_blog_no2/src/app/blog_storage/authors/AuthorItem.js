import React, { Component } from 'react';
import { Link } from "react-router-dom";

const AuthorItem = (props) => {
    return (
        <div className="container">
        <Link to='/author'>Name Surname (num of post)</Link>
        </div>
    )
}

export default AuthorItem;