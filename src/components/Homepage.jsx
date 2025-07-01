import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <main className="homepage">
      <h3>Homepage of the Shopping cart website.</h3>

      <button>
        <Link to="/shop">Go to shop</Link>
      </button>
    </main>
  );
};

export default Homepage;
