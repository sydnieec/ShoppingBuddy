import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Navbar from "../components/navbar.jsx";

//main page of Shopping Buddy where adding products and viewing current products is
import Main from "../components/main.jsx";
const MyAccountPage = () => {
  return (
    <div>
      <Navbar />
      <h1
        style={divStyle}
        style={{ fontWeight: "bold" }}
        className="text-center mt-2"
      >
        My account
      </h1>
      <Main />
    </div>
  );
};
export default MyAccountPage;

const divStyle = {
  paddingTop: "20%",
  paddingLeft: "20%",
  paddingRight: "20%",
};
