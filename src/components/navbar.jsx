import React, { Component } from "react";
import { Link } from "react-router-dom";

//navigation component that is displayed on the top of every page in Shopping Buddy containing signup/login/my account links
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar8"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-text">&nbsp;</span>
        <div className="navbar-collapse collapse" id="navbar8">
          <ul className="navbar-nav abs-center-x">
            <li className="nav-item">
              <Link to="/">
                <a
                  className="navbar-brand"
                  style={{ fontWeight: "bold" }}
                  href="#"
                >
                  Shopping Buddy
                </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/myaccount">
                <a className="nav-link" href="#">
                  My Account <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      //OLD NAVBAR CODE CONTAINING THE OPTION TO CREATE AN ACCOUNT FOR SHOPPING BUDDY AND LOGIN
      //NO LONGER NEEDED BUT USED FOR REFERENCE
      // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      //   <Link to="/" >
      //     <a className="navbar-brand" style={{ fontWeight: "bold" }} href="#">
      //       Shopping Buddy
      //     </a>
      //   </Link>

      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNavDropdown"
      //     aria-controls="navbarNavDropdown"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNavDropdown">
      //     <ul className="navbar-nav">
      //       <li className="nav-item ">
      // <Link to="/myaccount">
      //   <a className="nav-link" href="#">
      //     My Account <span className="sr-only">(current)</span>
      //   </a>
      // </Link>
      //       </li>
      //     </ul>

      //     {/* <ul className="navbar-nav ml-auto">
      //       <Link to="/users">
      //         <button type="button" class="btn btn-primary">
      //           Login
      //         </button>
      //       </Link>

      //       <Link to="/signup">
      //         <button type="button" class="btn btn-light">
      //           Sign Up
      //         </button>
      //       </Link>
      //     </ul> */}
      //   </div>
      // </nav>
    );
  }
}

export default Navbar;
