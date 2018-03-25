import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import AuthorDetails from '../author/AuthorDetails';
import { posts } from '../../../services/PostService';
import { users } from '../../../services/UserService';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            singlePost: [],
            users: [],
            user: [],
            userId: -1,
            usersPosts: {},
            numOfPosts: -1,
            postsForEachAuthor: []
        }
    }

    loadPosts() {
        posts.fetchPosts()
            .then(res => {        
                this.setState({
                    posts: res
                })
                return res;
            })
            .then(res => {
                let a = [];
                let userId;

                res.forEach(e => {
                    if (e.id == this.props.match.params.id) {
                        a = e;
                        userId = e.userId;
                    }         
                })
                this.setState({
                    singlePost: a,
                    userId: userId
                })
                return res;
            })
            .then(res => {
                const usersPosts = {};

                res.forEach(e => {
                    usersPosts[e.userId] ? usersPosts[e.userId].push(e) : usersPosts[e.userId] = [e];
                });

                this.setState({
                    usersPosts: usersPosts
                })
                return this.state.usersPosts
            })
            .then(res => {
                // console.log(res[this.state.userId]);
                // console.log(this.props.match.params.id);
                let authorArr = res[this.state.userId];
                let postId = this.props.match.params.id;
                let postsForEachAuthor = [];
  
                authorArr.forEach(e => {
                    if (e.id !== parseInt(postId)) {
                        postsForEachAuthor.push(e.title)
                    }
                });
                this.setState({
                    numOfPosts: res[this.state.userId].length,
                    postsForEachAuthor: postsForEachAuthor
                })
            })
    }

    loadUsers() {
        users.fetchUsers()
            .then(response => {
                this.setState({
                    users: response
                })
                let b = [];
                response.forEach(e => {
                    if (e.id == this.state.userId) {
                        b = e;
                    }
                })
                this.setState({
                    user: b
                })
            })
    }

    componentDidMount() {
        this.loadPosts();
        this.loadUsers();
    }

    render() {
        // console.log(this.state.postsForEachAuthor);
        
        return(
        <React.Fragment>
            <Header/>
            <div className='container'>
                <div>
                    <Link to='/home' className='waves-effect waves-light btn back-btn'>Back</Link>
                    <h3>{this.state.singlePost.title}</h3>
                </div>
                <h5><Link to='/author'>{this.state.user.name}</Link></h5>
                <p>{this.state.singlePost.content}</p>
                <div>
                    <strong>{this.state.numOfPosts - 1} more posts from same author</strong>
                    <ul>
                        {this.state.postsForEachAuthor.map((e, i) => {
                            return <li><Link to={`/singlePost/`}>Title {i+2} - {e}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
        )
    }
}

export default SinglePost;
