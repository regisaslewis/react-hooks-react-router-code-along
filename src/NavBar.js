import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  minWidth: "auto",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  borderRadius: "6px",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <h1>Welcome to the meat mill!</h1>
      <h3>Home of the screaming hamburger</h3>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
        Home
      </NavLink>
      <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
        About
      </NavLink>
      <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
        Login
      </NavLink>
      <NavLink to="/signup" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
        Signup
      </NavLink>
      <NavLink to="/messages" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
        Messages
      </NavLink>
    </div>
  )
}

export default NavBar;