import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React from 'react';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import './style.css'
//import logo from '../public/hotel-logo.png';
import logo from '../public/Gift_A_Room.png';

class Home extends React.Component {

  render() {
    return (<div>
      <Container className="space-evenly">
        <Jumbotron bsPrefix="jumbotron2">

        <div className="headings">
          <img src={logo} className="App-logo" alt="logo"/>
        </div>

          <Row className="introbox">
            <div class="col-md-12">
              <div className="headings">
                <h1>
                  Gift A Room</h1>
                <h4 class="tagName">
                  Sponsored rooms for people who need them</h4>
              </div>
            </div>

            <div class="intro">
              <p>
                Our mission is to provide a temporary home away from home for those in need due to COVID-19. Gift a room is the way for companies and people with big hearts to provide support.
              </p>
              <h3 className="headings"> How it works </h3>
              <p>
                  When a donation is made a gift certificate for a specified nearby hotel will be sent to the person in need of support.
              </p>
            </div>

          </Row>



          <p class="headings">
            I need a hotel room due to COVID-19.
          </p>
          <Row className="justify-content-md-center">

            <Col sm="sm">
              <Link to="/user/register">
                <div class="btn btn-primary btn-large homebtn" href="#">Find a Room</div>
              </Link>
            </Col>

          </Row>

          <p class="headings">
          Have a big heart?  Want to help people who need to find a temporary home?
          </p>
          <Row className="justify-content-md-center">
            <Col sm="sm">
              <Link to="/donate">
                <div class="btn btn-primary btn-large homebtn" href="#">Gift A Room</div>
              </Link>
            </Col>

          </Row>

          <p class="headings">
          My hotel is interested in helping.
          </p>
          <Row className="justify-content-md-center">
            <Col sm="sm">
              <Link to="/hotel">
                <div class="btn btn-primary btn-large homebtn" href="#">Hotel Participation</div>
              </Link>
            </Col>

          </Row>

        </Jumbotron>
      </Container>

    </div>)
  }

}

export default Home;
