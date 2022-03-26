import React, { useState, useEffect, Component } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Switch>
          <Route
            exact
            path="https://federicoestebanarnau.github.io/fedearnau"
            component={Home}
          />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Project" component={Projects} />
          <Route path="/Resume" component={Resume} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
