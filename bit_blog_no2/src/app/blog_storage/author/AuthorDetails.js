import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

class AuthorDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <button>All authors</button>
                <h2>Single Author</h2>
                <Footer />
            </React.Fragment>
        )
    }
}

export default AuthorDetails;