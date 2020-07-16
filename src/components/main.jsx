import React, { Component } from "react";
import Products from "./products";
import AddItem from "./addItem.jsx";
import axios from "axios";

class Main extends Component {
  //current list of product information and keeps track of which urls are being updated
  state = {
    productslist: [],
    urls: [],
  };

  //filters deleted id from product list and url list whenver item is deleted
  handleDelete = (productId) => {
    const productslist = this.state.productslist.filter(
      (c) => c.id !== productId
    );
    this.setState({ productslist });
    const urls = this.state.urls.filter((e) => e !== productId);
    this.setState({ urls });
    //sends a post request back to server of most recent urls
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

  //called from additem component to add product infomation and update url list
  handleAdd = (myurl, productId, productprice, serverurls) => {
    const productslist = this.state.productslist;
    const urls = serverurls;
    this.state.productslist.push({
      id: myurl,
      name: productId,
      value: productprice,
    });
    this.setState({ urls: serverurls });
    console.log(this.state.urls);
    this.setState({ productslist });
    console.log(this.state.urls);
  };

  //called to retreive most recent data stored on the server
  handleRefresh() {
    const urls = this.state.urls;
    axios({
      method: "post",
      url: "http://localhost:3000/updatelist",
      data: { urls },
      headers: {},
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  }

  //called in the beginning of lifecycle, to reteive the product information last stored on the server to display
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
        //updates list of variables
        var serverUrls = response.data[response.data.length - 1];
        this.setState({ urls: serverUrls });
        this.setState({ productslist });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }
  render() {
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
        </div>
      </React.Fragment>
    );
  }
}

export default Main;

//used for styling
const divStyle = {
  paddingTop: "3%",
  paddingLeft: "5%",
  paddingRight: "5%",
};
