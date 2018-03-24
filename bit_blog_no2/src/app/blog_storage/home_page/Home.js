import React, { Component } from 'react';
import Header from '../../partials/Header';
import { Switch, Route } from "react-router-dom";
import PostItem from './PostItem';
import Footer from '../../partials/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div>
            <Header/>
            <h2 className='center'>Posts</h2>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <Footer/>
         </div>
        )
    }
}

export default Home;


