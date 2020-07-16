import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Carousel from "react-bootstrap/Carousel";

//introductory page for Shopping Buddy
//Currently not in use for Shopping Buddy Demo
class MainPage extends Component {
  state = {};
  componentDidMount() {
    document.title = "Shopping Buddy";
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "#e6f7f8",
        }}
      >
        <Navbar />
        <h1 className="text-center display-4"> Welcome to Shopping Buddy! </h1>

        {/* shows the user how to use the website  */}
        <Carousel style={divStyle}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Start adding products to your cart</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Keep adding or deleting items you would like us to track.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Get notified whenever a sale occurs.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Jumbotron style={divStyle}>
          <h1>Start shopping away! </h1>
          <p>
            Start using Shopping Buddy now to keep track of all your wishlist
            items in one place!
          </p>

          {/* option to sign up with Shopping Buddy */}
          <p>
            <Link to="/myaccount">
              {" "}
              <Button variant="primary">Get Started</Button>
            </Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default MainPage;
const divStyle = {
  paddingTop: "3%",
  paddingLeft: "20%",
  paddingRight: "20%",
};
