import React, { Component } from "react";
class Item extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div style={divStyle}>
        {/* <span className={this.getBadgeClasses()} style={{ fontSize: 15 }}>
          {this.formatCount()}
        </span> */}
        <button className="btn btn-secondary btn-sm ">Delete </button>
      </div>
    );
  }
  // getBadgeClasses() {
  //   let classes = "badge m-5 badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }

  // formatCount() {
  //   const { count } = this.state;
  //   return count === 0
  //     ? "You are not currently tracking any items"
  //     : "Current tracking: " + count;
  // }
}

export default Item;

const divStyle = {
  paddingTop: "3%",
  paddingLeft: "20%",
  paddingRight: "20%",
};
