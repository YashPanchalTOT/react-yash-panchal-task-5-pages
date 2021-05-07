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
      userList: ["yp_171", "rp_122"],
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
    console.log(param)
    this.setState({
      clicked: true, 
      user: uname,
      username: param.Name,
      userage: param.Age,
      usercity: param.City
    });    
  }

  render() {
    const array_list = this.state.userList;
    var {userDictionary, clicked, user} = this.state;
    var {username, userage, usercity} = this.state;
    return (
      <div className="App bg-dark" style={{height: "100vh"}}>
        <ul>
          {
            array_list.map((item) => {
              console.log(item);
              return(
                <Container className="mx-auto py-3">
                  <Row className="py-2">
                    <span className="col my-auto text-start">
                      <span className="text-white h2">
                        {item}
                      </span>
                    </span>
                    <Col>
                      <Button variant="info" onClick={() => this.clickChange(userDictionary[item], item)}>Click Here To See More</Button>
                    </Col>
                  </Row>
                </Container>
              )
            })  
          }
      </ul>
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