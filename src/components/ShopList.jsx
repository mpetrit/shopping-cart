import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import "../styles/ShopList.css";
const ShopList = () => {
  const { listOfItems, setListOfItems } = useOutletContext();
  const [dataCovered, setDataCovered] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setDataCovered(data);
        console.log(data);
      });
  }, []);
  console.log("here", setListOfItems, listOfItems);
  return (
    <div>
      <div className="item-container">
        {dataCovered.map((item) => {
          console.log(item.id);
          return (
            <ItemCard
              setListOfItems={setListOfItems}
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopList;
