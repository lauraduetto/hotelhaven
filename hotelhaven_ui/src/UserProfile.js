import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import './style.css'

import axios from "axios";

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      zipcode: '',
      description: '',
      category: '1'
    };
  }

  //const { params } = this.props.match

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log("match", this.props.match);
    const url = "http://localhost:5000/user/" + id;
    console.log("ur", url);
    axios.get(url).then(res => {
      if (!res.data.empty) {
        console.log("setting the state")
        console.log(res)
        console.log('********');
        console.log(res.data.username);
        this.setState({username: res.data.username, zipcode: res.data.zipcode, description: res.data.description, category: res.data.category});
      }

    }).catch(error => {
      console.log("oh no an error " + error);
    });

  }

  render() {
    return (<div>
      <Container className="space-evenly">
        <div class="jumbotron">


          <Card>
            <Card.Header as="h1" className="headings">
              {this.state.username}
              <h3>{this.state.category}</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                {this.state.description}
              </Card.Text>

              <Card.Text>
              <p> Matched Hotel: Hotel Name </p>

             <p> Money needed: (Hotel price per night * nights requested) </p>
             <p> Money Donated: (list of donors and the sum of their donations) </p>
              </Card.Text>

              <Button variant="primary">Donate</Button>
            </Card.Body>
          </Card>

        </div>
      </Container>

    </div>)
  }

}

export default UserProfile;
