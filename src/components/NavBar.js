import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="teal">
          <div>
          <Link to="/" className="brand-logo" style={{ marginLeft: 555 }}>
            Book Finder
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;