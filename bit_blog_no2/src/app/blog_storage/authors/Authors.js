import React, { Component } from 'react';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import AuthorItem from './AuthorItem';

class Authors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <React.Fragment>
            <Header/>
            <h2 className='center'>Title</h2>
            <AuthorItem/>
            <Footer/>
         </React.Fragment>
        )
    }
}

export default Authors;
