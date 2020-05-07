import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import catMapper from './CategoryMapper';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import './style.css'

import axios from "axios";

class UserList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      show: false,
      donation: 10,
      selectedUser: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    const url = "http://localhost:5000/users/";
    const search = this.props.location.search;
    const fullUrl = search ? url + search : url;
    axios.get(fullUrl).then(res => {
      if (!res.data.empty) {
        console.log(res.data);
        this.setState({users: res.data})
      }

    }).catch(error => {
      console.log("oh no an error " + error);
    });

  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  donateOnClick = (user) => {
    this.setState({users: this.state.users, 'show': true, 'selectedUser':user})
  }

  donateOnAccept = () => {
    // donation is saved in the state. change the user selected.
    console.log(this.state.selectedUser);
    //var slectedUser = {...this.state.selectedUser, donation}
    //vars updatedusers =
    this.setState({
      ...this.state,
      'show': false,
      'selectedUser': null
    })
  }

  donateOnCancle = () => {
    this.setState({
      ...this.state,
      'show': false
    })
  }

  modal() {
    return <Modal show={this.state.show} onHide={this.donateOnClose}>
      <Modal.Header closeButton="closeButton">
        <Modal.Title>Gift A Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group controlId="formBasic">
          <Form.Label>how much can you donate?</Form.Label>
          <Form.Control size="lg" type="numeric" placeholder="donation amount" value={this.state.donation} name="donation" onChange={this.handleChange}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.donateOnCancle}>
          Cancle
        </Button>
        <Button variant="primary" onClick={this.donateOnAccept}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  }

  users() {
    var userCards = this.state.users.map((item, i) => {
      console.log("item", item);
      return (<Col>
        <Card style={{
            width: '20rem'
          }}>
          <Card.Header as="h3">
            {item.username}
            <Card.Subtitle as="h4" className="mb-1 text-muted">{catMapper(item.category)}</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                Location: {item.zipcode}
              </p>
              <p>
                Donation Goal: ${item.nights * 20}
              </p>
              <p>
                Donation Made: $10
              </p>
              <p className="headings">
                <b>About Me</b>
              </p>
              {item.description}
            </Card.Text>
            <Button variant="primary" onClick={() => this.donateOnClick(item)}>Donate</Button>
          </Card.Body>
        </Card>
      </Col>)
    });

    return userCards;

  }

  render() {
    return (<div>
      {this.modal()}
      <Container className="space-evenly">
        <div class="jumbotron2">
          <Row>
            <CardColumns>
              {this.users()}
            </CardColumns>
          </Row>

        </div>
      </Container>

    </div>)
  }
}

export default UserList;
