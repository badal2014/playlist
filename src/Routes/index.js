import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


import { HashRouter, Switch, Route } from 'react-router-dom';
import App from '../App'

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            {/* <Navbar /> */}
            <Switch >
              <Route exact path="/" component={App} />
     
            </Switch >
          </div>
        </HashRouter>
      );
    }
   }
   
 export default Main;
