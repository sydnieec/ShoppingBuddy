import React, { Component } from "react";
import axios from "axios";

//component is currently not in use
//this file was used to test API requests from the server and log responses to the console.
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

  //using axios to send a get request to local server and log the API response
  componentDidMount() {
    axios
      .get("http://localhost:3000/testing")
      .then((response) => {
        console.log(response.data[0].title);
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }
  //maps the respone data to a displayed list
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
