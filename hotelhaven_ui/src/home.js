import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import './style.css'

class Home extends React.Component {

  render() {
    return (<div>
      <Container className="space-evenly">
        <div class="jumbotron">

          <Row className="introbox">
            <div class="col-md-12">
              <div className="headings">
                <h1>
                  Hotel Haven</h1>
                <h3>
                  Our Tag Line Under Here</h3>
              </div>
              <div class="intro">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>

            </div>

          </Row>

          <Row className="justify-content-md-center">
            <Col sm="sm">
              <Link to="/user">
                <div class="btn btn-primary btn-large homebtn" href="#">Find a Haven</div>
              </Link>
            </Col>

          </Row>

          <Row className="justify-content-md-center">
            <Col sm="sm">
            <Link to="/donate">
              <div class="btn btn-primary btn-large homebtn" href="#">Donate</div>
            </Link>
            </Col>

          </Row>

        </div>
      </Container>

    </div>)
  }

}

export default Home;
