import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/users";
import MyAccountPage from "./pages/myaccount";
import SignUpPage from "./pages/signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/myaccount" component={MyAccountPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
    // <React.Fragment>

    //   <Navbar />

    // </React.Fragment>
  );
}

export default App;
