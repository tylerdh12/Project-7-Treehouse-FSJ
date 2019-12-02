import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  let searchText = e => {
    props.onSearch(e.target.innerText);
  };

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to={"/search/forrest"} onClick={searchText}>
            Forrest
          </NavLink>
        </li>
        <li>
          <NavLink to={"/search/waterfall"} onClick={searchText}>
            Waterfall
          </NavLink>
        </li>
        <li>
          <NavLink to={"/search/sunset"} onClick={searchText}>
            Sunset
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
