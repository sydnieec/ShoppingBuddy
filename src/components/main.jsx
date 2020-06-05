import React, { Component } from "react";
import Products from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/products.jsx";
import AddItem from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/addItem.jsx";
import PostList from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/PostList.jsx";
import axios from "axios";

class Main extends Component {
  state = {
    productslist: [],
    urls: [],
  };

  handleDelete = (productId) => {
    // console.log("event handler called", counterId);
    const productslist = this.state.productslist.filter(
      (c) => c.id !== productId
    );
    this.setState({ productslist });
    const urls = this.state.urls.filter((e) => e !== productId);
    this.setState({ urls });
    console.log(this.state.urls);
  };

  handleAdd = (myurl, productId, productprice) => {
    // console.log("event handler called", counterId);
    const productslist = this.state.productslist;
    const urls = this.state.urls;

    //hm

    this.state.productslist.push({
      id: myurl,
      name: productId,
      value: productprice,
    });
    this.state.urls.push(myurl);
    this.setState({ productslist });
    this.setState({ urls });
  };

  handleRefresh() {
    const urls = this.state.urls;
    console.log("yo" + urls);
    axios({
      method: "post",
      url: "http://localhost:3000/updatelist",
      data: { urls },
      headers: {},
    })
      .then((response) => {
        //handle success

        console.log(response.data);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  }

  componentDidMount() {
    const productslist = this.state.productslist;

    axios
      .get("http://localhost:3000/testing")
      .then((response) => {
        console.log(response.data.length);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].title === "error") {
            alert(
              "We cannot could not retrieve product information for an item(s) in your cart! They have been removed"
            );
          } else {
            this.state.productslist.push({
              id: response.data[i].id,
              name: response.data[i].title,
              value: response.data[i].body,
            });
          }
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