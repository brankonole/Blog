import React, { Component } from 'react';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import AuthorItem from './AuthorItem';
import { users } from '../../../services/UserService';
import { posts } from '../../../services/PostService';

class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersPosts: {}
        }
    }

    loadAuthors() {
        users.fetchUsers()
            .then(res => {
                this.setState({
                    users: res
                })
            })
    }

    loadUsersPosts() {
        posts.fetchPosts()
            .then(res => {
                const usersPosts = {};

                res.forEach(e => {
                    usersPosts[e.userId] ? usersPosts[e.userId].push(e) : usersPosts[e.userId] = [e];
                });

                this.setState({
                    usersPosts: usersPosts
                })
                console.log(this.state.usersPosts);
            })
    }

    componentDidMount() {
        this.loadAuthors()
        this.loadUsersPosts()
    }

    render() {
        console.log(this.state.users);

        return (
            <React.Fragment>
                <Header />
                <main>
                    <h2 className='center'>Authors({this.state.users.length})</h2>
                    {this.state.users.map(eachUser => {
                        const userPosts = this.state.usersPosts[eachUser.id];
                        const numOfPosts = userPosts ? userPosts.length : -1;

                        return <AuthorItem authorData={eachUser} numOfPosts={numOfPosts} key={eachUser.id} />
                    })}
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Authors;
