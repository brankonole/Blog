import React, { Component } from 'react';

class AuthorCompany extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <img />
                <div>
                    <h4>Company</h4>
                    <p>name: <strong>BeckerekCompany</strong></p>
                    <p>slogan: <strong>1-159-1254-15445</strong></p>
                </div>
            </React.Fragment>
        )
    }
}

export default AuthorCompany;