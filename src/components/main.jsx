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
    axios({
      method: "post",
      url: "http://localhost:3000/updatelist",
      data: { urls, productId },
      headers: {},
    })
      .then((response) => {
        //handle success
        console.log(response);
        console.log(response.data);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  };

  handleAdd = (myurl, productId, productprice, serverurls) => {
    // console.log("event handler called", counterId);
    const productslist = this.state.productslist;
    const urls = serverurls;

    //hm
    this.state.productslist.push({
      id: myurl,
      name: productId,
      value: productprice,
    });
    // this.state.urls.push(myurl);
    this.setState({ urls: serverurls });
    console.log(this.state.urls);
    this.setState({ productslist });
    console.log(this.state.urls);
  };

  handleRefresh() {
    const urls = this.state.urls;
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
    document.title = "My Account";

    axios
      .get("http://localhost:3000/testing")
      .then((response) => {
        console.log(this.state.urls);
        for (let i = 0; i < response.data.length - 1; i++) {
          if (response.data[i].title === "error") {
            alert(
              "We cannot could not retrieve product information for an item in your cart! They have been removed."
            );
          } else {
            this.state.productslist.push({
              id: response.data[i].id,
              name: response.data[i].title,
              value: response.data[i].body,
            });
          }
        }
        var serverUrls = response.data[response.data.length - 1];
        this.setState({ urls: serverUrls });
        this.setState({ productslist });
        console.log(this.state.urls);
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
        <div
          style={{
            backgroundColor: "#e6f7f8",
          }}
        >
          <AddItem
            productslist={this.state.productslist}
            onAdd={this.handleAdd}
          />
        </div>

        <div
          style={{
            divStyle,
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
const divStyle = {
  paddingTop: "3%",
  paddingLeft: "5%",
  paddingRight: "5%",
};
