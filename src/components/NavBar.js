import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink exact to="/">
            Oscar
          </NavLink>
          <NavLink to="/post"> Blog Post </NavLink>
          <NavLink to="/project">Projects </NavLink>
          <NavLink to="/about">About Me!</NavLink>
        </nav>
      </div>
    </header>
  );
}