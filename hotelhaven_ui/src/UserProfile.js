import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import './style.css'
import catMapper from './CategoryMapper';
import axios from "axios";
import queryString from 'query-string'

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      zipcode: '',
      description: '',
      category: '1',
      nights: 1,
      donationAount: 10,
      matched: false,
    };
  }

  //const { params } = this.props.match

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(this.props.location);
    const values = queryString.parse(this.props.location.search)
    //let matched = this.props.location
    var resultText = (values.matched === true) ?
    'good news, there is a hotel willing to help nearby!' :
    'We are sorry, no hotels found near your location. We will notify you once there is a match'


    const url = "http://localhost:5000/user/" + id;
    console.log("ur", url);
    axios.get(url).then(res => {
      if (!res.data.empty) {
        if(res.data.length > 0){
          var user = res.data[0]
          this.setState({
            username: user.username,
            zipcode: user.zipcode,
            description: user.description,
            category: catMapper(user.category),
            nights: user.nights,
            resultText: resultText,
            matched: values.matched});
        }
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
            <div className="resultText"> {this.state.resultText} </div>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                {this.state.description}
              </Card.Text>
              <Card.Text>
              <p> Matched Hotel: {(this.state.matched === true) ? 'Hilton' : 'None'} </p>

             <p> Money needed: ${this.state.nights * 20} </p>
             <p> Money Donated: ${this.state.donationAount} </p>
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </Container>

    </div>)
  }

}

export default UserProfile;
