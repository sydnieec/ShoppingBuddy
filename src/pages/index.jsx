import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      {/* Navbar code  */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/">
          <a className="navbar-brand" href="#">
            Shopping Buddy
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/myaccount">
                <a className="nav-link" href="#">
                  My Account <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <Link to="/users">
              <button type="button" class="btn btn-primary">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button type="button" class="btn btn-light">
                Sign Up
              </button>
            </Link>
          </ul>
        </div>
      </nav>

      <h1 className="text-center"> How to use! </h1>
      <small> main page</small>
      <Link to="/users"> Sign Up/ Log in! </Link>
    </div>
  );
};
export default MainPage;
