import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './style.css'

function handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

class DonateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      donationAount: '',
      zipCode: ''

    };
  }

  handleChange = (event) => {

    const name = event.target.name;
    console.log("name ", name);
    this.setState({[name]: event.target.value});
  }

  handleSubmit = (event) => {
    console.log("state", this.state)
    alert('submitting form...: ' + this.state);
    event.preventDefault();
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

            <Form.Control size="lg" as="select" type="string" value={this.state.reason} name="reason" onChange={this.handleChange}>
              <option>Essential Worker</option>
              <option>Quarantine</option>
              <option>Safe Space</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>how much can you donate?</Form.Label>

            <Form.Control size="lg" type="numeric" placeholder="donation amount" value={this.state.zipCode} name="zipCode" onChange={this.handleChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Help Someone
          </Button>
        </Form>
      </div>

    </div>)
  };

  render() {
    return (<div>
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
