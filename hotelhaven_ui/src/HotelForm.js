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

  const CATEGORY = ["Essential Worker", "Quarantine", "Safe Space"]

class HotelForm extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      zipCode: '',
      state:'',
      categoriesAllowed: {},
      numRoomsAvailable: '',
      pricePerRoom: ''

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

          <Form.Group controlId="formBasicName">
            <Row>
              <Col>
                <Form.Control size="lg" type="text" placeholder="hotel Name" value={this.state.firstname} name="email" onChange={this.handleChange}/>
              </Col>
            </Row>
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

          <Form.Group controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control size="lg" type="text" placeholder="1234 Main St" value={this.state.address} name="address" onChange={this.handleChange} />
          </Form.Group>

          <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control size="lg" type="text" placeholder="City" value={this.state.zipCode} name="zipCode" onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control size="lg" as="select" value="Choose..." type="text" value={this.state.state} name="state" onChange={this.handleChange}>>
        <option></option>
        <option>CA</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control size="lg" type="text" placeholder="Enter Zip Code" value={this.state.zipCode} name="zipCode" onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>


  <Form>
  <Form.Label>Categories allowed</Form.Label>
  {CATEGORY.map((type) => (
    <div key={`default-checkbox`} className="mb-3">
      <Form.Check size="sm"
        type="checkbox"
        name={`${type}`}
        value = "true"
        id={`${type}`}
        label={`${type}`}/>
    </div>
  ))}
</Form>


          <Form.Group controlId="formBasic">
          <Row>
            <Col>
            <Form.Label>Number Of Rooms Avalable</Form.Label>
            <Form.Control size="lg" as="Number" placeholder="" value={this.state.numRoomsAvailable} name="numRoomsAvailable" onChange={this.handleChange}/>

            </Col>

            <Col>
            <Form.Label>Price Per Room</Form.Label>
            <Form.Control size="lg" as="Number" placeholder="" value={this.state.pricePerRoom} name="pricePerRoom" onChange={this.handleChange}/>

            </Col>
            </Row>



          </Form.Group>



          <Form.Group controlId="formBasicCheckbox">
            <Form.Check size="lg" type="checkbox" label="I agree to terms and conditions"/>
          </Form.Group>

          <Button variant="primary" type="Register Hotel">
            Submit
          </Button>
        </Form>
      </div>

    </div>)
  };

  render() {
    return (
    <div>
      <div className="Layout">
        <h1>Hotel Sign Up</h1>
        {this.form()}
      </div>
      <div class="lower-banner">
        <Image src="./2.png" fluid="fluid"/>
      </div>
    </div>)
  }
}

export default HotelForm;
