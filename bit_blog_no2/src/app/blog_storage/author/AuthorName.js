import React, { Component } from 'react';

class AuthorName extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <img />
                <div>
                    <h4>Name Surname</h4>
                    <p>username: <strong>my_cool_username</strong></p>
                    <p>email: <strong>my_cool@email.com</strong></p>
                    <p>phone: <strong>1-159-1254-15445</strong></p>
                </div>
            </React.Fragment>
        )
    }
}

export default AuthorName;