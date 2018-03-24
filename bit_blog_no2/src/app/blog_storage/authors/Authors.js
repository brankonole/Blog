import React, { Component } from 'react';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import AuthorItem from './AuthorItem';
import {users} from '../../../services/UserService';

class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    loadAuthors() {
        users.fetchUsers()
            .then(res => {
                this.setState({
                    users: res
                })
                console.log(this.state.users);
            })
        }
        
    componentDidMount() {
        this.loadAuthors()
    }

    render() {
        return(
        <React.Fragment>
            <Header/>
            <h2 className='center'>Authors({this.state.users.length})</h2>
            {this.state.users.map(eachUser => {
                return <AuthorItem authorData={eachUser} key={eachUser.id}/>
            })}
            <Footer/>
         </React.Fragment>
        )
    }
}

export default Authors;
