import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Redirect, Route, Link, useParams} from "react-router-dom";
import './style.css'
import axios from "axios";

function handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

class DonateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reason: 'Any',
      donationAount: '',
      category: '0',
      zipCode: '',

      // redirect setState
      redirect:false,
      redirectPath: ''
    };
  }

  handleChange = (event) => {

    const name = event.target.name;
    console.log("name ", name);
    this.setState({[name]: event.target.value});
  }

  handleSubmit = (event) => {
    console.log("state", this.state)
    event.preventDefault();

    const category = this.state.category === '' ? 'all' : this.state.category;
    const zip = this.state.zipCode === '' ? 'any' : this.state.zipCode;
    const path = "/users?category=" + category + "&zipcode=" + zip;
    this.setState({formSubmitted: true, redirectPath: path});
  }

  form() {
    return (<div>
      <div className="panel">
        <Form onSubmit={this.handleSubmit} size="lg">

          <Form.Group controlId="formBasic">
            <Form.Label>Enter Location you would Like To support (Optional)</Form.Label>

            <Form.Control size="lg" type="text" placeholder="Enter Zip Code" value={this.state.zipCode} name="zipCode" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Category: Who Do You want to support</Form.Label>

            <Form.Control size="lg" as="select" type="string" value={this.state.category} name="category" onChange={this.handleChange}>
              <option value="1">Essential Worker</option>
              <option value="2">Quarantine</option>
              <option value="3">Safe Space</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Help Someone
          </Button>
        </Form>
      </div>

    </div>)
  };

  render() {
    const redirect = this.state.formSubmitted ? <Redirect to={this.state.redirectPath}/> : null;
    return (<div>
      {redirect}
      <div className="Layout">
        <h1>Donate</h1>
        {this.form()}
      </div>
      <div class="lower-banner">
        <Image src="./2.png" fluid="fluid"/>
      </div>
    </div>)
  }
}

export default DonateForm;
