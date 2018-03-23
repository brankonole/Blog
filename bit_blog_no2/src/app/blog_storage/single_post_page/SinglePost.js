import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import AuthorDetails from '../author/AuthorDetails';

class SinglePost extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <React.Fragment>
            <Header/>
            <div className='container'>
                <h3>SINGLE POST TITLE</h3>
                <h5><Link to='/author'>Author Name</Link></h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique labore id delectus, iure pariatur dicta, tempora nulla sed, amet cum doloribus. Odio modi eius quos sit culpa exercitationem cum suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet eos mollitia possimus voluptatem nostrum voluptates accusamus adipisci ipsum voluptas, totam veritatis provident ducimus cupiditate? Nesciunt accusantium nobis odio repellat? 
                </p>
                <div>
                    <strong>3 more posts from same author</strong>
                    <ul>
                        <li><a href='#'>Title 10 - velit isdfhgo soigh soigh</a></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
        )
    }
}

export default SinglePost;
