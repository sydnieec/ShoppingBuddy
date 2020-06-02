import React, { Component } from "react";
import Products from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/products.jsx";
import AddItem from "/Users/sydniechau/Downloads/shoppingbuddy/src/components/addItem.jsx";

class Main extends Component {
  state = {
    productslist: [
      {
        id:
          "https://www.amazon.ca/gp/product/B075GVZTDZ?pf_rd_r=CBGPYKVXJ6Z36GMQM4VP&pf_rd_p=05326fd5-c43e-4948-99b1-a65b129fdd73",
        name: "chicken",
        value: 5,
      },
      {
        id:
          "https://www.amazon.ca/JETech-Clavier-Bluetooth-universel-portable/dp/B0173QD5L4/ref=pd_sbs_147_5/138-6187995-9719521?_encoding=UTF8&pd_rd_i=B0173QD5L4&pd_rd_r=130c137d-288e-4bf6-8cda-304eaedc8f31&pd_rd_w=J9KR8&pd_rd_wg=jX4qd&pf_rd_p=0ec96c83-1800-4e36-8486-44f5573a2612&pf_rd_r=MSN3F0TKG1MB3ER1ZGT0&psc=1&refRID=MSN3F0TKG1MB3ER1ZGT0",
        name: "hello",
        value: 6,
      },
      {
        id:
          "https://www.amazon.ca/Arteck-Adjustable-Brightness-Smartphone-Rechargeable/dp/B00X5P8BJO/ref=pd_sbs_147_2/138-6187995-9719521?_encoding=UTF8&pd_rd_i=B00X5P8BJO&pd_rd_r=affd163b-d749-4730-8417-6e44d8b42de9&pd_rd_w=fxchU&pd_rd_wg=dhfga&pf_rd_p=0ec96c83-1800-4e36-8486-44f5573a2612&pf_rd_r=Z0G9C6GZZB0RAHP41B28&psc=1&refRID=Z0G9C6GZZB0RAHP41B28",
        name: "there",
        value: 8,
      },
    ],
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

  render() {
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
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
