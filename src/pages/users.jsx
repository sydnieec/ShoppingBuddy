import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/navbar.jsx";

const UsersPage = () => {
  return (
    <div>
      <Navbar />

      <h1 style={divStyle} className="text-center">
        Welcome back!{" "}
      </h1>
      <Form style={divStyle}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign up!
        </Button>
      </Form>
    </div>
  );
};
export default UsersPage;

const divStyle = {
  paddingTop: "5%",
  paddingLeft: "20%",
  paddingRight: "20%",
};
