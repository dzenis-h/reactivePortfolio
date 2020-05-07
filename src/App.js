import React, { Fragment } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Work from "./components/Work/WorkComponent";
import Contact from "./components/ContactComponent";

import Footer from "./components/layout/FooterComponent";
import Menu from "./components/layout/MenuComponent";

import "./style/App.css";
import "react-toastify/dist/ReactToastify.css";

import * as firebase from "firebase/app";
import "firebase/analytics";
import { firebaseConfig } from "./config/config";

const App = () => {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  firebase.analytics();
  return (
    <Fragment>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
