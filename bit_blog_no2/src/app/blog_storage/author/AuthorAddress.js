import React, { Component } from 'react';

class AuthorAddress extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <div>
                    <h4>Address</h4>
                    <p>street: <strong>bla bla st</strong></p>
                    <p>city: <strong>LozNica</strong></p>
                    <p>zipcode: <strong>1684984</strong></p>
                    <iframe></iframe>
                </div>
            </React.Fragment>
        )
    }
}

export default AuthorAddress;