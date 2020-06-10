import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Navbar from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/navbar.jsx";
import Item from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/itemsComponent.jsx";
import AddItem from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/addItem.jsx";
import PostList from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/PostList.jsx";
import Products from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/products.jsx";
import Product from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/product.jsx";
import Main from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/main.jsx";
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

      {/* <AddItem /> */}
      {/* <Item /> */}
      {/* <PostList /> */}
      {/* <Products /> */}
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
