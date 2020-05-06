import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import './style.css'

import axios from "axios";

class UserList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const url = "http://localhost:4000/users/";
    console.log("ur", url);
    axios.get(url).then(res => {
      if (!res.data.empty) {
        this.setState({users: res.data})
      }

    }).catch(error => {
      console.log("oh no an error " + error);
    });

  }

  users() {
    var userCards = this.state.users.map((item, i) => {
      console.log("item", item);
      return (
        <Col>
        <Card style={{
            width: '18rem'
          }}>
          <Card.Body>
            <Card.Title>{item.firstname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.reason}</Card.Subtitle>
            <Card.Text>
              <p>
                Location: {item.zipCode}
              </p>
              <p>
                donation Gaol: $50
              </p>
              <p>
                donation made: $10
              </p>
              <p>About Me</p>
              {item.description}
            </Card.Text>
            <Button variant="primary">Donate</Button>
          </Card.Body>
        </Card>
      </Col>
    )
    });

    return userCards;

  }

  render() {
    return (<div>
      <Container className="space-evenly">
        <div class="jumbotron">
          <Row>
            {this.users()}

          </Row>

        </div>
      </Container>

    </div>)
  }

}

export default UserList;
