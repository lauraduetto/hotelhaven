import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.css'

import axios from "axios";
import qs from 'qs';
import {BrowserRouter as Router, Redirect, Route, Link, useParams} from "react-router-dom";

function handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

const hotels = [
  {
    "hotelid": "ho1",
    "name": "Hilton",
    "email": "hoteltest1@gmail.com",
    "password": "test1234",
    "zipCode": "94112",
    "numRoomsAvailable": "100",
    "pricePerRoom": "30",
    "website": "https://jsoneditoronline.org/"
  }, {
    "hotelid": "ho2",
    "name": "SF Hotel",
    "email": "hoteltest2@gmail.com",
    "password": "test1234",
    "zipCode": "94521",
    "numRoomsAvailable": "100",
    "pricePerRoom": "10",
    "website": "https://jsoneditoronline.org/"
  }
];

class SupportForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      zipCode: '',
      description: '',
      numNights: 2,
      numGuests: 1,
      phonenumber: '',
      firstname: '',
      lastname: '',
      reason: 'Essential Worker',
      // redirecting information
      formSubmitted: false,
      redirectPath: '/user'

    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit = (event) => {
    // 1. match with a hotel.
    var hotel = hotels.find(element => element.zipCode === this.state.zipCode);
    let hotelId = hotel ? hotel.hotelid : '';
    let {
      email,
      password,
      zipCode,
      description,
      numNights,
      phonenumber,
      firstname,
      lastname,
      reason
    } = this.state;
    let body = qs.stringify({
      email,
      password,
      zipCode,
      description,
      numNights,
      phonenumber,
      firstname,
      lastname,
      reason,
      hotelId
    })

    // 2. call http post send the user to save
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    };
    axios.post("http://localhost:4000/users", body, {headers}).then(res => {

      // after a sucessfull save display the result of matching
      if (hotel) {
        alert('good news, there is a hotel willing to help nearby!');
      } else {
        alert('We are sorry, no hotels found near your location : ( + We will notify you once there is one');
      }

      // 3. set state variables to allow for redirect
      const path = "/user/" + res.data.id;
      this.setState({formSubmitted: true, redirectPath: path});

    }).catch(error => {
      console.log("oh no an error " + error);
    });

    event.preventDefault();
  }

  form() {
    return (<div>
      <div className="panel">
        <Form onSubmit={this.handleSubmit} size="lg">

          <Form.Group controlId="formBasicName">
            <Row>
              <Col>
                <Form.Control size="lg" type="text" placeholder="First name" value={this.state.firstname} name="firstname" onChange={this.handleChange}/>
              </Col>
              <Col>
                <Form.Control size="lg" type="text" placeholder="Last name" value={this.state.lastname} name="lastname" onChange={this.handleChange}/>
              </Col>
            </Row>
            <Form.Text className="text-muted">
              We'll never share your name with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Row>
              <Col>
                <Form.Control size="lg" type="text" placeholder="Enter Email" value={this.state.email} name="email" onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Col>
              <Col>
                <Form.Control size="lg" type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Control size="lg" type="text" placeholder="Enter Zip Code" value={this.state.zipCode} name="zipCode" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Control size="lg" type="text" placeholder="Phone Number" value={this.state.phonenumber} name="phonenumber" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Row>
              <Col>
                <Form.Label>Number of Nights Needed</Form.Label>
                <Form.Control size="lg" as="select" type="number" value={this.state.numNights} name="numNights" onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Number of Guests</Form.Label>
                <Form.Control size="lg" as="select" type="number" value={this.state.numGuests} name="numGuests" onChange={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </Form.Control>
              </Col>

            </Row>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Category</Form.Label>

            <Form.Control size="lg" as="select" type="string" value={this.state.reason} name="reason" onChange={this.handleChange}>
              <option>Essential Worker</option>
              <option>Quarantine</option>
              <option>Safe Space</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasic">

            <Form.Label>About You: Why are you needing support at this time?</Form.Label>
            <Form.Control size="lg" as="textarea" placeholder="tell us about your situation" value={this.state.description} name="description" onChange={this.handleChange}/>

          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check size="lg" type="checkbox" label="I agree to terms and conditions"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </div>)
  };

  render() {
    const redirect = this.state.formSubmitted ? <Redirect to={this.state.redirectPath}/> : null;
    return (<div>
      {redirect}
      {this.state.formSubmitted}
      <div className="Layout">
        <h1>Get Support</h1>
        {this.form()}
      </div>
      <div class="lower-banner">
        <Image src="./2.png" fluid="fluid"/>
      </div>
    </div>)
  }
}

export default SupportForm;
