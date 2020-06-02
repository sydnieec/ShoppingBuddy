import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    return (
      <div>
        {this.props.productslist.map((product) => (
          <Product
            key={product.id}
            onDelete={this.props.onDelete}
            product={product}
          />
        ))}
      </div>
    );
  }
}

export default Products;
