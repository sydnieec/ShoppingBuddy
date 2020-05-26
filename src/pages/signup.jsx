import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Grid, Row, Col } from "react-bootstrap";
import Navbar from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/navbar.jsx";

const SignUpPage = () => {
  return (
    <div>
      <Navbar />
      <h1 style={divStyle} className="text-center">
        Create an account!{" "}
      </h1>
      <Form style={divStyle}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="ex 123-456-0000" />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Allow Push Notifications" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default SignUpPage;
const divStyle = {
  paddingTop: "5%",
  paddingLeft: "20%",
  paddingRight: "20%",
};
