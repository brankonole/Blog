import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../../partials/Footer';

class SinglePost extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <React.Fragment>
            <Header/>
            <h3>SINGLE POST TITLE</h3>
            {/* <h5><Link to= '/'>Author Name</Link></h5> */}
            <Footer/>
        </React.Fragment>
        )
    }
}

export default SinglePost;
