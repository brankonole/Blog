import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import AuthorDetails from '../author/AuthorDetails';
import { posts } from '../../../services/PostService';
import { users } from '../../../services/UserService';
import { authorService } from '../../../services/AuthorService';
import { singlePostService } from '../../../services/SinglePostService';

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
            postsForEachAuthor: [],
            postData: [],
            singleAuthor: []
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
                let a = {};
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

                // const usersPosts = {};

                // res.forEach(e => {
                //     usersPosts[e.userId] ? usersPosts[e.userId].push(e) : usersPosts[e.userId] = [e];
                // });

                // this.setState({
                //     usersPosts: usersPosts
                // })
                // return this.state.usersPosts
                // console.log(this.props.match.params.id);
                // let authorArr = res[this.state.userId];
                // let postId = this.props.match.params.id;
                // let postsForEachAuthor = [];

                // authorArr.forEach(e => {
                //     if (e.id !== parseInt(postId)) {
                //         postsForEachAuthor.push(e.title);
                //         postsForEachAuthor.push(e.id);
                //     }
                // });
                this.setState({
                    // numOfPosts: res[this.state.userId].length,
                    // postsForEachAuthor: postsForEachAuthor
                    postData: res
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

                this.loadSingleAuthorsPosts(b.id);
            })
    }

    loadSingleAuthorsPosts(id) {
        authorService.fetchAuthorsPosts(id)
            .then(response => {
                this.setState({
                    singleAuthor: response
                })
                // console.log("response", response);
            })
    }

    componentDidMount() {
        this.loadPosts(this.props.match.params.id);
        this.loadUsers();
        
    }

    componentWillReceiveProps(nextProps) {
        //this.loadPosts(nextProps.match.params.id);

        console.log(nextProps.match.params.id);
        //setujemo state da imaaaamo novi link
        this.setState({
            
        })
    }

    renderMain() {
        if (this.state.postData) {
            return (
                <main>
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
                                {this.state.singleAuthor.map((e, i) => {
                                    if (parseInt(e.id) !== parseInt(this.props.match.params.id)) {
                                        return <li key={i}><Link to={`/singlePost/${e.id}`}>Title {(i)+1} - {e.title}</Link></li>
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </main>
            )
        } else {
            return (
                <div>LOADING...</div>
            )
        }
    }

    render() {
        console.log(this.state.singleAuthor);
        return (
            <React.Fragment>
                <Header />
                {this.renderMain()}
                <Footer />
            </React.Fragment>
        )
    }
}

export default SinglePost;
