import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Navbar from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/navbar.jsx";
const MyAccountPage = () => {
  return (
    <div>
      <Navbar />

      <h1 style={divStyle} className="text-center">
        My account
      </h1>
      <Form style={divStyle}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Start tracking!</Form.Label>
          <Form.Control type="url" placeholder="Enter product url!" />
          <Form.Text className="text-muted">
            We will send you a push notification, when this product goes on
            sale!
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};
export default MyAccountPage;

const divStyle = {
  paddingTop: "3%",
  paddingLeft: "20%",
  paddingRight: "20%",
};
