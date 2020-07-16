import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

//component in charge of handling new items being added to the cart
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addurl = this.addurl.bind(this);
  }

  //detects whenver there is a change in input field
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //sends a API post request to local server retreive product name and price
  addurl(myurl) {
    axios({
      method: "post",
      url: "http://localhost:3000/additem",
      data: { myurl },
      headers: {},
    })
      .then((response) => {
        //handle success response
        var title = response.data[0].title;
        var body = response.data[0].body;
        var serverurls = response.data[1];
        //if the product price is not available it will send alert to user if else it will add data to cart
        if (title === "error") {
          alert(body);
        } else {
          this.props.onAdd(myurl, title, body, serverurls);
        }
      })
      .catch(function (err) {
        //handles error
        console.log(err);
      });
  }

  //call when on submit, updating current list of url and products information
  handleSubmit(event) {
    this.addurl(this.state.value);
    event.preventDefault();
    this.setState({
      value: "",
    });
  }

  render() {
    return (
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
            We will alert you when this when this product goes on sale! :)
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}
//for positioning
const divStyle = {
  paddingTop: "3%",
  paddingLeft: "20%",
  paddingRight: "20%",
};

export default AddItem;
