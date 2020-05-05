import React, {Component} from 'react';
import logo from './hotel-logo.png';
import './App.css';
import SupportForm from './SupportForm.js'
import DonateForm from './DonateForm.js'
import HotelForm from './HotelForm.js'
import Home from './home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

class App extends Component {

  // Global app routes configured over here

  //        <HotelForm/>
  //<DonateForm/>
  //  <SupportForm/>

  render() {
    return (<Router>
     <div>


      <div className="App-header">

      <div class="row">
    <div class="col-md-12">
      <ul class="nav">
        <li class="nav-item">
        <Link to="/">
          <Button variant="primary" size="lg"> Home </Button>
        </Link>
        </li>

        <li class="nav-item">
        <Link to="/user">
          <Button variant="primary" size="lg"> Support </Button>
        </Link>
        </li>

        <li class="nav-item">
        <Link to="/donate">
          <Button variant="primary" size="lg"> Donate </Button>
        </Link>
        </li>

        <li class="nav-item">
        <Link to="/hotel">
          <Button variant="primary" size="lg"> Register Hotel </Button>
        </Link>
        </li>

      </ul>
    </div>
  </div>

        <div className="headings">
          <img src={logo} className="App-logo" alt="logo"/>
          <Link to="/">
            <h2>Hotel Haven</h2>
          </Link>
        </div>

        // menu buttons.


      </div>





        <div>
          <Switch>
            <Route exact="exact" path="/">
              <Home/>
            </Route>
            <Route path="/user">
              <SupportForm/>
            </Route>
            <Route path="/hotel">
              <HotelForm/>
            </Route>
            <Route path="/donate">
              <DonateForm/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>);
  }
}

export default App;
