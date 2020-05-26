import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Navbar from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/navbar.jsx";
import Item from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/itemsComponent.jsx";
import AddItem from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/addItem.jsx";
const MyAccountPage = () => {
  return (
    <div>
      <Navbar />
      <h1 style={divStyle} className="text-center">
        {" "}
        My account{" "}
      </h1>

      <AddItem />
      <Item />
    </div>
  );
};
export default MyAccountPage;

const divStyle = {
  paddingTop: "3%",
  paddingLeft: "20%",
  paddingRight: "20%",
};
