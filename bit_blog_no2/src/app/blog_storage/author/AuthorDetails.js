import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import { users } from '../../../services/UserService';
// import AuthorName from './AuthorName';
// import AuthorAddress from './AuthorAddress';
// import AuthorCompany from './AuthorCompany';

class AuthorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: []
        }
    }

    loadUsers() {
        users.fetchUsers()
            .then(response => {
                return response;
            })
            .then(res => {
                let authorId = this.props.match.params.id;
                let authorArr = [];

                res.forEach(e => {
                    if (e.id == authorId) {
                        authorArr.push(e)
                    }    
                });
                this.setState({
                    author: authorArr
                })
            })
    }

    componentDidMount() {
        this.loadUsers();
    }
    
    render() {
        console.log(this.state.author);
        return (
            <React.Fragment>
                <Header />
                    <div className='container'>
                    <Link to='/authors' className='waves-effect waves-light btn left all-authors-btn'>All authors</Link>
                    <h2 className='center'>Single Author</h2>
                    <img />
                    <div>
                        <h4>Name Surname</h4>
                        <p>username: <strong>my_cool_username</strong></p>
                        <p>email: <strong>my_cool@email.com</strong></p>
                        <p>phone: <strong>1-159-1254-15445</strong></p>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <p>street: <strong>bla bla st</strong></p>
                        <p>city: <strong>LozNica</strong></p>
                        <p>zipcode: <strong>1684984</strong></p>
                        <iframe></iframe>
                    </div>
                    <img />
                    <div>
                        <h4>Company</h4>
                        <p>name: <strong>BeckerekCompany</strong></p>
                        <p>slogan: <strong>1-159-1254-15445</strong></p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default AuthorDetails;