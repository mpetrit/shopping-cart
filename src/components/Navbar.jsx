import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ listOfItems }) => {
  console.log(listOfItems);
  return (
    <nav>
      <button>
        <h1>
          <Link to="/">Shopping Cart</Link>
        </h1>
      </button>

      <div className="nav-links">
        <button>
          <h2>
            <Link to="shop">Shop</Link>
          </h2>
        </button>
        <button>
          <h2>
            <Link to="cart">Cart</Link>
            <span>{listOfItems.length} </span>
          </h2>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
