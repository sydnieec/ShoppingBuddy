import React from "react";
import { Link } from "react-router-dom";
import Navbar from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/navbar.jsx";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center"> How to use! </h1>
      <small> main page</small>
      <Link to="/users"> Sign Up/ Log in! </Link>
    </div>
  );
};
export default MainPage;
