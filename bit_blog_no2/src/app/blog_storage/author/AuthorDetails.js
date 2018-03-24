import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import AuthorName from './AuthorName';
import AuthorAddress from './AuthorAddress';
import AuthorCompany from './AuthorCompany';

class AuthorDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                    <div className='container'>
                    <Link to='/authors'>All authors</Link>
                    <h2 className='center'>Single Author</h2>
                    <AuthorName/>
                    <AuthorAddress/>
                    <AuthorCompany/>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default AuthorDetails;