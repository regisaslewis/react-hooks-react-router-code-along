import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Messages from "./Messages";

function App () {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>    
  )
}

export default App;