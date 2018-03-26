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
                console.log(response);
                return response;

            })
            .then(res => {
                let authorId = this.props.match.params.id;
                let authorArr = [];

                res.forEach(e => {
                    if (e.id == authorId) {
                        authorArr.push(e)
                    }
                    console.log(authorArr);

                });
                this.setState({
                    author: authorArr
                })
            })
    }

    componentDidMount() {
        this.loadUsers();
        console.log(this.state.author);

    }

    render() {
        console.log(this.state.author[0]);
        return (
            <React.Fragment>
                <Header />
                <main>
                    <div className='container'>
                        <Link to='/authors' className='waves-effect waves-light btn left all-authors-btn'>All authors</Link>
                        <h2 className='center'>Single Author</h2>
                        <img />
                        <div>
                            <h4>{this.state.author.length === 0 ? '' : this.state.author[0].name}</h4>
                            <div className='block-wrapper'>
                                <img src="http://placehold.it/150/92c952%22" />
                                <div>
                                    <p>username: <strong>{this.state.author.length === 0 ? '' : this.state.author[0].username}</strong></p>
                                    <p>email: <strong>{this.state.author.length === 0 ? '' : this.state.author[0].email}</strong></p>
                                    <p>phone: <strong>{this.state.author.length === 0 ? '' : this.state.author[0].phone}</strong></p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h4>Address</h4>
                            <div className='block-wrapper justify'>
                                <div>
                                    <p>street: <strong>{this.state.author.length === 0 ? '' : this.state.author[0].street}</strong></p>
                                    <p>city: <strong>{this.state.author.length === 0 ? '' : this.state.author[0].city}</strong></p>
                                    <p>zipcode: <strong>{this.state.author.length === 0 ? '' : this.state.author[0].zipcode}</strong></p>
                                </div>
                                    {this.state.author.length === 0 ? '' : <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11322.276626337698!2d${this.state.author[0].lat}!3d${this.state.author[0].lng}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1522054336131`} width="600" height="450" frameBorder="0" allowFullScreen></iframe>}
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h4>Company</h4>
                            <p>name: <strong>{this.state.author.length === 0 ? '' : this.state.author[0].companyName}</strong></p>
                            <p>slogan: <strong>{this.state.author.length === 0 ? '' : this.state.author[0].companySlogan}</strong></p>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default AuthorDetails;