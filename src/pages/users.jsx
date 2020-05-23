import React from "react";
import { Link } from "react-router-dom"

const UsersPage = () => {
     return (

        <div>
              {/* Navbar code  */}
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/">
                 <a className="navbar-brand" href="#">Shopping Buddy</a>
            </Link>     

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">My Account <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <Link to="/users"> 
                    <button type="button" class="btn btn-primary">Login</button>
                    </Link>

                    <Link to="/users"> 
                    <button type="button" class="btn btn-light">Sign Up</button>
                    </Link>
                </ul>
            </div>
            </nav>


            <h3>Welcome, make an account </h3>
       
        </div>
     );
     
}
export default UsersPage; 