import React, { Component } from "react";
class Product extends Component {
  render() {
    // console.log("props", this.props);
    return (
      <div>
        <span className="badge badge-primary"> {this.props.product.name}</span>
        <span style={{ fontsize: 30 }} className={this.getBadgeClasses()}>
          {this.formatvalue()}
        </span>

        <button
          onClick={() => this.props.onDelete(this.props.product.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.value === 0 ? "dark" : "light";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.product;
    return value == 0 ? "zero" : this.props.product.value;
  }
}

export default Product;
