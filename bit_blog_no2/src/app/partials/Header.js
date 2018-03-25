import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <nav className='teal lighten-2'>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">RND BLG</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Authors">Authors</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Header;


