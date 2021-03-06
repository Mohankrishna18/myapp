import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";




function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/Reports" component={Reports} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
