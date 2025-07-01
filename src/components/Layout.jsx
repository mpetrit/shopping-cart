import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const [listOfItems, setListOfItems] = useState([]);

  return (
    <div>
      <Navbar listOfItems={listOfItems} />
      <Outlet context={{ listOfItems, setListOfItems }} />
    </div>
  );
};

export default Layout;
