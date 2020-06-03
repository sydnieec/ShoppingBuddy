import React, { Component } from "react";
import Products from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/products.jsx";
import AddItem from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/addItem.jsx";
import PostList from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/PostList.jsx";
import axios from "axios";

class Main extends Component {
  state = {
    productslist: [],
  };

  handleDelete = (productId) => {
    // console.log("event handler called", counterId);
    const productslist = this.state.productslist.filter(
      (c) => c.id !== productId
    );
    this.setState({ productslist });
  };

  handleAdd = (myurl, productId, productprice) => {
    // console.log("event handler called", counterId);
    const productslist = this.state.productslist;
    console.log("this handle delete" + productId);
    //hm
    this.state.productslist.push({
      id: myurl,
      name: productId,
      value: productprice,
    });
    this.setState({ productslist });
  };

  handleRefresh = () => {
    axios
      .get("http://localhost:3000/testing")
      .then((response) => {
        var title = JSON.stringify(response.data[0].title);
        var body = JSON.stringify(response.data[0].body);

        console.log("this worked" + response.data.length);

        // this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
        console.log("error did not work");
        // this.setState({ errorMsg: "Error retrieving data" });
      });
    // this.setState({ productslist });
  };
  componentDidMount() {
    const productslist = this.state.productslist;

    axios
      .get("http://localhost:3000/testing")
      .then((response) => {
        console.log(response.data.length);
        for (let i = 0; i < response.data.length; i++) {
          this.state.productslist.push({
            id: response.data[i].id,
            name: response.data[i].title,
            value: response.data[i].body,
          });
        }
        this.setState({ productslist });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }
  render() {
    // this.handleRefresh();
    return (
      <React.Fragment>
        <AddItem
          productslist={this.state.productslist}
          onAdd={this.handleAdd}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "25vh",
          }}
        >
          <Products
            productslist={this.state.productslist}
            onDelete={this.handleDelete}
          />
          {/* <PostList /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
