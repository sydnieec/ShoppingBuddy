import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Grid, Row, Col } from "react-bootstrap";

const SignUpPage = () => {
  return (
    <div>
      {/* Navbar code  */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/">
          <a className="navbar-brand" href="#">
            Shopping Buddy
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/myaccount">
                <a className="nav-link" href="#">
                  My Account <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <Link to="/users">
              <button type="button" class="btn btn-primary">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button type="button" class="btn btn-light">
                Sign Up
              </button>
            </Link>
          </ul>
        </div>
      </nav>

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
