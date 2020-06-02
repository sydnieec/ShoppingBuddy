import React, { Component } from "react";
import axios from "axios";

const uiproductlist = [];
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      errorMsg: "",
    };
  }
  renderproducts(products, responsedata) {
    console.log("products " + products);
    console.log("response data " + responsedata);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/testing")
      .then((response) => {
        console.log(response);
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    const { products, errorMsg } = this.state;
    return (
      <div>
        List of products
        {products.length
          ? products.map((post) => (
              <div key={post.id}>
                {post.title} {post.body}
              </div>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
