import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
// const puppeteer = require("puppeteer");
// import { scrapeProduct } from "/Users/sydniechau/Downloads/shoppingbuddy/src/scrapers.js";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  addurl(myurl) {
    // var bodyFormData = new FormData();
    // bodyFormData.set("url", myurl);
    console.log("yo" + myurl);
    axios({
      method: "post",
      url: "http://localhost:3000/additem",
      data: { myurl },
      headers: {},
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response.data);
      });
  }

  handleSubmit(event) {
    // alert("Item has been added! " + this.state.value);
    this.addurl(this.state.value);
    // axios
    //   .get("http://127.0.0.1:3000/")
    //   .then(function (response) {
    //     console.log(response);
    //     alert(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     alert(console);
    //   });
    // this.getProductInfo();

    event.preventDefault();
    this.setState({
      value: "",
    });
  }

  render() {
    return (
      //tracks how many items you currently have

      // form to add item
      <Form style={divStyle} onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Start tracking!</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter product url!"
            onChange={this.handleChange}
            value={this.state.value}
            id="additemform"
          />
          <Form.Text className="text-muted">
            We will send you a push notification, when this product goes on
            sale!
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}
const divStyle = {
  paddingTop: "3%",
  paddingLeft: "20%",
  paddingRight: "20%",
};

export default AddItem;
