import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from './task5.module.css'

class App extends Component {

  constructor(props){
    super(props); 
    this.state = {
      user: null,
      username: null,
      usercity: null,
      userage: null,
      clicked: false,
      userName: null,
      userDictionary: {
        "yp_171": {
          "Name": "Panchal Yash Babubhai",
          "Age": 25,
          "City": "Vidhyanagar"
        }, 
        "rp_122": {
          "Name": "Panchal Rohan Mahendraprasad",
          "Age": 25,
          "City": "Indore"
        }
      }
    }
  }  

  clickChange = (param, uname) => {
    this.setState({
      clicked: true, 
      user: uname,
      username: param.Name,
      userage: param.Age,
      usercity: param.City
    });    
  }

  render() {
    // console.log(this.state.userDictionary.yp_171)
    // console.log(this.state.userDictionary.yp_171.Age)
    var {userDictionary, clicked, user} = this.state;
    var {username, userage, usercity} = this.state;
    return (
      <div className="App bg-dark" style={{height: "100vh"}}>
      <Container className="mx-auto py-3">
        <Row className="py-2">
          <span className="col my-auto text-start">
            <span className="text-white h2">
              yp_171
            </span>
          </span>
          <Col>
            <Button variant="info" onClick={() => this.clickChange(userDictionary.yp_171, "yp_171")}>Click Here To See More</Button>
          </Col>
        </Row>
        <Row className="py-2">
          <span className="col my-auto text-start">
            <span className="text-white h2">
              rp_122
            </span>
          </span>
          <Col>
            <Button variant="info" onClick={() => this.clickChange(userDictionary.rp_122, "rp_122")}>Click Here To See More</Button>
          </Col>
        </Row>
      </Container>
      {
        clicked === true ?
          <>
            <hr className={styles.customhr}></hr>
            <Container className="mx-auto py-3">
              <Card className="bg-dark border-0 text-start text-white">
                  <Card.Body className="px-0">
                    <p className="h2 pb-3">{user}</p>
                    <p className="h4 py-2">Name: {username}</p>
                    <p className="h4 py-2">Age: {userage}</p>
                    <p className="h4 py-2">City:{usercity}</p>
                  </Card.Body>
              </Card>
            </Container>
          </>
          :
          null
      }
    </div>
    );
  }
}

export default App;