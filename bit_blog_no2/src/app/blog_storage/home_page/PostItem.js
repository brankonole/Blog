import React, { Component } from 'react';
import { Link } from "react-router-dom";

const PostItem = (props) => {
    return (
        <div className="container">
            <h3><Link to='/singlePost'>Title 1</Link></h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus esse velit sit natus suscipit. Modi vero voluptatem impedit quas earum ullam. Molestiae illo maiores neque, nam quos quasi reiciendis inventore!</p>
        </div>
    )
}

export default PostItem;