import React, { Component } from 'react';
import Home from './blog_storage/home_page/Home';
import { Switch, Route } from "react-router-dom";
import Authors from './blog_storage/authors/Authors';
import About from './blog_storage/about/About';
import SinglePost from './blog_storage/single_post_page/SinglePost';
import AuthorDetails from './blog_storage/author/AuthorDetails';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/authors' component={Authors} />
        <Route path='/about' component={About} />
        <Route path='/singlePost/:id' component={SinglePost}/>
        <Route path='/author/:id' component={AuthorDetails}/>
        <Route path='/' component={Home} />
      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
