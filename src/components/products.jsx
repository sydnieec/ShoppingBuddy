import React, { Component } from "react";
import Product from "./product";
import Container from "react-bootstrap/Container";

class Products extends Component {
  render() {
    return (
      <Container fluid style={divStyle}>
        <div className="row">
          {this.props.productslist.map((product) => (
            <Product
              key={product.id}
              onDelete={this.props.onDelete}
              product={product}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default Products;

const divStyle = {
  paddingTop: "3%",
};
