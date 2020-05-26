import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

  handleSubmit(event) {
    alert("Item has been added! " + this.state.value);
    event.preventDefault();
    this.setState({
      value: "",
    });
  }

  render() {
    return (
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
