import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./App.css"

export default function App() {
  return (
    <div style={{ display: 'block', 
                  width: 1200, 
                  padding: 150 ,
                  fontFamily: 200,
                  backgroundColor:"gray"}}>
      <h4>FIRST FORMULAIR WITH REACT</h4>
      <Form>
      <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" width="50%" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <br></br>
        <Button  variant="primary" type="submit">
           Click here to submit form
        </Button> <br>
        </br>
    
        
      </Form>
    </div>
  );
}
// var y = function (y){
// addEventListener( "click" , Button )
//   var y = prompt ('hello world')

//   }
   