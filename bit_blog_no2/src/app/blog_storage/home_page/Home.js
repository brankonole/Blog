import React, { Component } from 'react';
import Header from '../../partials/Header';
import PostItem from './PostItem';
import Footer from '../../partials/Footer';
import {posts} from '../../../services/PostService';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    
    loadData() {
        posts.fetchPosts()
          .then(res => {
            this.setState({
                posts: res
            })
            console.log(this.state.posts);
            
          })
      }
    
      componentDidMount() {
        this.loadData()
      }
    render() {
        return(
        <div>
            <Header/>
            <h2 className='center'>Posts</h2>
            {this.state.posts.map((post) => {
                return <PostItem postData={post} key={post.id}/>
            })}
          <Footer/>
         </div>
        )
    }
}

export default Home;