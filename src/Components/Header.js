import React from "react";

// Imported Components
import SearchInput from "./SearchInput";
import Nav from "./Nav";

const Header = () => (
  <div className="container">
    <SearchInput onSearch={this.performSearch} />
    <Nav />
  </div>
);

export default Header;
