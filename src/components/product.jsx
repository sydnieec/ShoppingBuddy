import React, { Component } from "react";
import Card from "react-bootstrap/Card";
class Product extends Component {
  render() {
    // console.log("props", this.props);
    return (
      <div className="m-4">
        <Card style={{ width: "24.5rem" }}>
          <Card.Body>
            <Card.Title> {this.formatvalue()}</Card.Title>
            <Card.Subtitle className={this.getBadgeClasses()}>
              {this.props.product.value}
            </Card.Subtitle>
            <Card.Text></Card.Text>
            <Card.Link href={this.props.product.id}>Go to product</Card.Link>
            <Card.Link>
              {" "}
              <button
                style={{ fontSize: 12 }}
                onClick={() => this.props.onDelete(this.props.product.id)}
                className="btn btn-danger btn-sm m-2"
              >
                Delete
              </button>
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    if (this.props.product.value.startsWith("SALE") === true) {
      classes += "success";
    } else if (
      this.props.product.value.startsWith("Price increased") === true
    ) {
      classes += "warning";
    } else {
      classes += "light";
    }
    return classes;
  }

  formatvalue() {
    if (this.props.product.name.length > 100) {
      var trimmedString = this.props.product.name.substring(0, 100);
      trimmedString += "...";
      return trimmedString;
    } else {
      return this.props.product.name;
    }
  }
}

export default Product;
