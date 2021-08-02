import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Work, Contact, Success } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/work" exact component={() => <Work />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/success" exact component={() => <Success />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
