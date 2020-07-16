import React, { Component } from "react";
import Product from "./product";
import Container from "react-bootstrap/Container";

//maps the list of products that is currently being tracked to Product Component
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
