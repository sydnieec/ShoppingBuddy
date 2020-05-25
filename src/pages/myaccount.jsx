import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const MyAccountPage = () => {
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
        My account
      </h1>
      <Form style={divStyle}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Start tracking!</Form.Label>
          <Form.Control type="email" placeholder="Enter product url!" />
          <Form.Text className="text-muted">
            We will send you a push notification, when this product goes on
            sale!
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
      {/* <Table style={divStyle} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table> */}
    </div>
  );
};
export default MyAccountPage;

const divStyle = {
  paddingTop: "3%",
  paddingLeft: "20%",
  paddingRight: "20%",
};
