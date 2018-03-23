import React, { Component } from 'react';
// import Header from './partials/Header';
import Home from './blog_storage/home_page/Home';
import { Switch, Route } from "react-router-dom"
import Authors from './blog_storage/authors/Authors';
import About from './blog_storage/about/About';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/authors' component={Authors} />
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
