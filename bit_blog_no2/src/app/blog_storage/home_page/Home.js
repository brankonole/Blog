import React, { Component } from 'react';
import Header from '../../partials/Header';
import PostItem from './PostItem';
import Footer from '../../partials/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <React.Fragment>
            <Header/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <Footer/>
         </React.Fragment>
        )
    }
}

export default Home;


