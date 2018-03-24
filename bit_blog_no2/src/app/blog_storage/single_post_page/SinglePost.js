import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import AuthorDetails from '../author/AuthorDetails';

class SinglePost extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <React.Fragment>
            <Header/>
            <div className='container'>
                <div>
                    <Link to='/home'>Back</Link>
                    <h3>{this.props.match.params.id}</h3>
                </div>
                <h5><Link to='/author'>Author Name</Link></h5>
                <p>Ne nadaj se :P</p>
                <div>
                    <strong>3 more posts from same author</strong>
                    <ul>
                        <li><a href='#'>Title 10 - velit isdfhgo soigh soigh</a></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
        )
    }
}

export default SinglePost;
